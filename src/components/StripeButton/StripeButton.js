import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../Logo/Logo.png";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JqvuBC9Y0Bin0h2WIKJGv4ugdmKDukiVjUeZrPhVN5qrbriGRw3MzsRoyLQZ5ApiduUzekbHSdn3DU7SdBHdUbA000SBfqj9q';

  const OnToken = token => {
    console.log(token)
    alert('Successfully Payment')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CLOTHING-CLUB'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={OnToken}
      stripeKey={publishableKey}
    >
    </StripeCheckout>
  )
}

export default StripeCheckoutButton;