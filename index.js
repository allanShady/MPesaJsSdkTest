require('dotenv').config();
const { Client } = require('@paymentsds/mpesa')

const client = new Client({
    apiKey: process.env.MPESA_API_KEY,
    publicKey: process.env.MPESA_PUBLIC_KEY,
    serviceProviderCode: process.env.MPESA_SERVICE_PROVIDER,
    verifySSL: false,
    debugging: true,  
  })

  client.receive({
    from: process.env.FROM_MOBILE_WALLET,
    reference: `2lo${Math.floor(Math.random()*100)}`,
    transaction: '2CVXP',
    amount: 10
  })
  .then(result => {
      console.log(result);
  }).catch((error) => {
      console.log(error)
  });