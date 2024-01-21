<!--TestSample.vue-->
<template>
  <v-container>
    <v-text-field
      v-model="message"
      label="Введите сообщение"
      outlined
    ></v-text-field>
    <v-btn @click="sendData">Отправить и Открыть</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    sendData() {
      this.$store.dispatch('sendData', this.message);
      setTimeout(() => {
        window.open('/path/to/receiver', '_blank');
      }, 500);
    }
  }
};
</script>
