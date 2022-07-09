
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
  const priceForStripe = price * 100
  const publishableKey ='pk_test_51KpJDWKMNYd351cDr7u7UsoVyRgAiRihYuVegbFFddVDCCTTEsT9RBaagIEsOqUcJmZzUiX2GaCUXwthgXORmdGF000GY1fPqW'

  const onToken = (token) => {
    console.log(token)
    alert('Payment successful')
  }
  return (
    <>
      <StripeCheckout
      label='Pay Now'
      name='crown clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
       />
    </>
  )
}

export default StripeButton