import { PayPalScriptProvider, PayPalButtons, } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  totalPrice: number;
  onSuccess: () => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ totalPrice, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ "clientId": "AX02KKB08FL1co6IH1Ci8HXnfqao5qO0a-LYxqhbVYWCnE98ZNdy096a4siRmRIK8Y3AA_m4OFFUHETZ" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: totalPrice.toString(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          if (actions.order) {
            return actions.order.capture().then((details) => {
              onSuccess();
            });
          } else {
            console.error("actions.order is undefined");
            return Promise.reject(new Error("actions.order is undefined"));
          }
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
