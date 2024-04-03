"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"

import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null,
) => {
    if(!token) return { error: "Missing token!"};

    const validatedFields = NewPasswordSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Invalid fields!"}

    const { password }= validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);

    if(!existingToken) return { error: "Invalid token!"};

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired) return { error : "Token has expired!"}

    const existingUser = await getUserByEmail(existingToken.email);

    if(!existingUser  || !existingUser.password) return { error: "User does not exist!"}

    const comparedPassword = await bcrypt.compare(password, existingUser.password)
    if(comparedPassword) return {error: "New password can not be the same as the old one!"}

    const hashedPassword = await bcrypt.hash(password, 10);


    await db.user.update({
        where: { id: existingUser.id},
        data: { password: hashedPassword}
    })

    await db.passwordResetToken.delete({
        where: {id: existingToken.id}
    })

    return { success: "Password updated!" }
}
