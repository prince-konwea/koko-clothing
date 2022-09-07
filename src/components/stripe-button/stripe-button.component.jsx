import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({ price }) => {
    const  priceForStripe = price * 100;
    const publishableKey = "pk_test_51LfOBLJbLsvaWrtvizjMygM1abcxAGmemIRmHiOvEJVuBIdyYAnpi5pupbkUuxxyWPe337SKQiXQZrqGxpLfOcZl00eYMYMnIE";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful")
  }

    return (
        <StripeCheckout 
        label="Pay Now"
        name="Koko Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgShare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;