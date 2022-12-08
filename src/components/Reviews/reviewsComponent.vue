<template>
  <div class="reviewsBackground">
    <v-col style="text-align: center; padding-top: 32px">
      <p class="componentSubtitle">WHAT DID THEY SAY ?</p>
      <p class="componentTitle">TESTIMONIALS FROM OUR CLIENTS</p>
    </v-col>
    <reviews-list />
  </div>
</template>

<script>
import reviewsList from "./reviewsList.vue";
export default {
  components: { reviewsList },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .reviewsBackground {
    background-image: url("../../assets/img/reviewsBackground.png");
    height: max-content;
    background-repeat: repeat-y;
  }
}
@media only screen and (min-width: 610px) {
  .reviewsBackground {
    background-image: url("../../assets/img/reviewsBackground.png");
    height: 574px;
    background-size: cover;
  }
}
</style>