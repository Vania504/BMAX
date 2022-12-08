<template>
  <v-col>
    <v-row justify="center">
      <reviews-card
        v-for="review in reviewsList"
        :key="review.id"
        :review="review"
        class="mb-10"
      />
    </v-row>
  </v-col>
</template>

<script>
import reviewsCard from "./reviewsCard.vue";
export default {
  components: { reviewsCard },
  data: () => ({
    reviewsList: [
      {
        id: 1,
        name: "Esther Howard",
        img: "reviewsImg1.png",
        coment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.",
        rating: 5,
      },
      {
        id: 2,
        name: "Esther Howard",
        img: "reviewsImg2.png",
        coment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.",
        rating: 5,
      },
      {
        id: 3,
        name: "Esther Howard",
        img: "reviewsImg3.png",
        coment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.",
        rating: 5,
      },
      {
        id: 4,
        name: "Esther Howard",
        img: "reviewsImg4.png",
        coment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fringilla at gravida justo, felis risus ullamcorper augue tempus. Nam hac.",
        rating: 5,
      },
    ],
  }),
};
</script>

<style>
</style>