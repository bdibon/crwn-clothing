import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51JP5sQJHQZeG5yqz0oLPj6Rtn5cRTstNSv1kw9cEoFPdkqlO3EYh2LogQqO3WntrCPVKWSsxo4cRpAFBySyJILHq00wxx1TfLB";

  const onToken = async token => {
    try {
      await axios({
        url: "payment",
        method: "post",
        data: { amount: priceInCents, token },
      });
      alert("Payment Successful");
    } catch (error) {
      console.error("Payment error: ", JSON.parse(error));
      alert(
        "There was an issue with your payment. Please check your payment method."
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
