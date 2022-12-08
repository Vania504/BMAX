<template>
  <v-col style="margin-top: 38px">
    <v-row justify="center">
      <service-card
        v-for="service in servicesList"
        :key="service.id"
        :service="service"
      />
    </v-row>
  </v-col>
</template>

<script>
import serviceCard from "./serviceCard.vue";
export default {
  components: { serviceCard },
  data: () => ({
    servicesList: [
      {
        id: 1,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 2,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 3,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 4,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 5,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 6,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 7,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 8,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
      {
        id: 9,
        title: "Creative Marketing & Advertsing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed suspendisse in pulvinar. Amet, amet, eleifend lacinia consectetur. In.",
      },
    ],
  }),
};
</script>

<style>
</style>