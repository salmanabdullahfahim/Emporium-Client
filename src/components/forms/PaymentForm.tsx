import React from "react";
import { Button } from "../ui/button";
import { CardElement } from "@stripe/react-stripe-js";

interface PaymentFormProps {
  handleOrderSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  stripe: any; // Replace with the correct Stripe type if available
  isLoading: boolean;
  error: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  handleOrderSubmit,
  stripe,
  isLoading,
  error,
}) => {
  return (
    <form onSubmit={handleOrderSubmit} className="space-y-4">
      <div className="rounded-md border p-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#32325d",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#dc2626",
              },
            },
          }}
        />
      </div>

      {error && <div className="text-sm text-red-500">{error}</div>}

      <Button
        type="submit"
        className="w-full  bg-gradient-to-r from-blue-400 to-blue-600 py-3 rounded-md shadow-md text-white"
        disabled={!stripe || isLoading}
      >
        {isLoading ? "Processing..." : "Place order"}
      </Button>
    </form>
  );
};

export default PaymentForm;
