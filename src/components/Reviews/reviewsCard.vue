<template>
  <v-card
    height="352px"
    width="274px"
    style="
      background: rgba(0, 0, 0, 0.29);
      backdrop-filter: blur(1.5px);
      margin-top: 32px;
      margin-left: 20px;
      margin-right: 20px;
    "
  >
    <v-col class="text-align: center;">
      <v-row no-gutters justify="center" style="margin-top: 32px">
        <img :src="require(`@/assets/img/${review.img}`)" class="userAvatar" />
      </v-row>
      <p
        style="
          font-weight: 600;
          font-size: 24px;
          line-height: 140%;
          color: #ffffff;
          text-align: center;
          margin-top: 12px;
        "
      >
        {{ review.name }}
      </p>
      <p
      class="px-5"
        style="
          font-weight: 400;
          font-size: 12px;
          line-height: 140%;
          text-align: center;
          color: #ffffff;
        "
      >
        {{ review.coment }}
      </p>
      <div class="text-center">
        <v-rating small v-model="review.rating" color="#FFC700" background-color="#FFC700"/>
      </div>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    review: {
      require: true,
    },
  },
};
</script>

<style>
.userAvatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>