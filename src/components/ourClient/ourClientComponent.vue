<template>
  <div style="text-align: center;">
    <v-main>
      <v-container>
        <v-col style="padding-top: 64px;">
          <p class="componentSubtitle">Our Clients</p>
          <p class="componentTitle">Brands We Work With</p>
        </v-col>
        <our-client-list />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import ourClientList from './ourClientList.vue';
export default {
  components: { ourClientList },};
</script>

<style>
</style>