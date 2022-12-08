<template>
  <v-card
    width="332px"
    height="232px"
    color="#000000"
    style="margin-bottom: 16px; margin-left: 16px; padding: 25px"
  >
    <v-icon color="#E20044" x-large>mdi-lightbulb-on-outline mdi-38px</v-icon
    ><br /><br />
    <p class="cardTitle">
      {{ service.title }}
    </p>
    <p class="cardText">
      {{ service.description }}
    </p>
  </v-card>
</template>

<script>
export default {
  props: {
    service: {
      require: true,
    },
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .cardTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
  }
  .cardText {
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    color: #ffffff;
  }
}
@media only screen and (min-width: 610px) {
  .cardTitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
  }
  .cardText {
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
    color: #ffffff;
  }
}
</style>