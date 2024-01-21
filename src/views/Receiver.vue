<!--Receiver.vue-->
<template>
  <v-container>
    <h1>Полученное сообщение:</h1>
    <p>{{ receivedMessage }}</p>
  </v-container>
</template>

<script>
export default {
  computed: {
    receivedMessage() {
      return this.$store.state.data;
    }
  },
  mounted() {
    if (!this.receivedMessage) {
      console.log('Ожидание данных...');
      setTimeout(() => {
        console.log("Полученные данные:", this.receivedMessage);
      }, 500);
    } else {
      console.log("Полученные данные:", this.receivedMessage);
    }
  }
};
</script>


