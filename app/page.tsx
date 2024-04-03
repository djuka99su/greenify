import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="space-y-6 text-center">
        <h1 className=" text-6xl font-semibold text-white drop-shadow-md">
        🔐Auth
        </h1>
        <p className="text-white">A simple authentication </p>

        <div>
          <LoginButton mode="modal" asChild>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
