<template>
  <v-row justify="center" style="margin-bottom: 141px;">
    <v-col cols="12" class="px-0">
      <v-row justify="center">
        <img
          v-for="(brand,index) in brands"
          class="mx-10"
          height="25px"
          :key="brand.id"
          :src="require(`@/assets/img/brandLogo/${brand.logo}`)"
          style="object-fit: cover; text-align: center; margin-top: 70px;"
          :style="index >= 5 && index <= 10 || index >= 15 && index <= 20 ? 'transform: rotate(180deg);' : ''"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    brands: [
      {
        id: 1,
        logo: "jayaland.png",
      },
      {
        id: 2,
        logo: "jawaPos.png",
      },
      {
        id: 3,
        logo: "griyaHati.png",
      },
      {
        id: 4,
        logo: "jawaPos.png",
      },
      {
        id: 5,
        logo: "jayaland.png",
      },
      {
        id: 16,
        logo: "cipurta.png",
      },
      {
        id: 17,
        logo: "jawaPos.png",
      },
      {
        id: 18,
        logo: "griyaHati.png",
      },
      {
        id: 19,
        logo: "jawaPos.png",
      },
      {
        id: 20,
        logo: "jayaland.png",
      },
      {
        id: 6,
        logo: "cipurta.png",
      },
      {
        id: 7,
        logo: "jawaPos.png",
      },
      {
        id: 8,
        logo: "griyaHati.png",
      },
      {
        id: 9,
        logo: "jawaPos.png",
      },
      {
        id: 10,
        logo: "jayaland.png",
      },
      {
        id: 11,
        logo: "jayaland.png",
      },
      {
        id: 12,
        logo: "jawaPos.png",
      },
      {
        id: 13,
        logo: "griyaHati.png",
      },
    ],
  }),
};
</script>

<style>
</style>