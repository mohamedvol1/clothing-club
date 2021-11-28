import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../Logo/Logo.png";
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JqvuBC9Y0Bin0h2WIKJGv4ugdmKDukiVjUeZrPhVN5qrbriGRw3MzsRoyLQZ5ApiduUzekbHSdn3DU7SdBHdUbA000SBfqj9q';

  const OnToken = token => {
    axios({
      url: '/payment',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successfully done')
      })
      .catch(error => {
        console.log('Payment Error', JSON.parse(error))
        alert('Sorry, there was an issue in your payment')
      })
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
      locale={null}
      stripeKey={publishableKey}
    >
    </StripeCheckout>
  )
}

export default StripeCheckoutButton;