// /resources/js/App.vue

<template>
  <v-app>
    <v-alert type="warning" :value="true">
      <v-btn depressed color="error">Error</v-btn>
    </v-alert>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>