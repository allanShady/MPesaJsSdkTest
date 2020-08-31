<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   </div>
</template>

<script>
import { Client } from '@paymentsds/mpesa';

export default {
  name: "TransferMoney",
  props: {
    msg: String
  },

  created() {
    console.log(process.env.VUE_APP_FROM_MOBILE_WALLET);

    const client = new Client({
      apiKey: process.env.VUE_APP_MPESA_API_KEY,
      publicKey: process.env.VUE_APP_MPESA_PUBLIC_KEY,
      serviceProviderCode: process.env.VUE_APP_MPESA_SERVICE_PROVIDER,
      debugging: true,                 
      verifySSL: false,
      userAgent: '<REPLACE>' 
    })

    client.receive({
      from: process.env.VUE_APP_FROM_MOBILE_WALLET,
      reference: '84ALX91',
      transaction: 'ALAN345X',
      amount: '2'
    })
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err)
    });

    console.log(Client);
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
