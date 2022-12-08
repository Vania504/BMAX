<template>
  <v-app>
    <router-view />
    <footer-component />
  </v-app>
</template>

<script>
import footerComponent from './components/Footer/footerComponent.vue';
export default {
  components: { footerComponent },
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: black;
}
</style>
