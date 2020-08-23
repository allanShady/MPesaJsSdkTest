<template>
  <div class="home">
    <HelloWorld msg="M-Pesa API test" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/TransferMoney.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
