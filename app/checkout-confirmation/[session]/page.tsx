import { CheckOutSuccess } from "@/components/checkout-success";
import { checkOutSession } from "@/actions/checkout-session";
import React from "react";

interface ConfirmationPageProps {
  params: {
    session: string;
  };
}

const ConfirmationPage = async ({ params }: ConfirmationPageProps) => {
  const session = await checkOutSession(params.session);

  if (!session) {
    return (
      <>
        <p>No session</p>
      </>
    );
  }

  return (
    <CheckOutSuccess
      order={session.payment_intent}
      products={session.line_items?.data}
    />
  );
};

export default ConfirmationPage;
