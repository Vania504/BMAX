<template>
  <div style="background-color: #111111">
    <v-main>
      <v-container>
        <v-row no-gutters :style="$vuetify.breakpoint.xs ? 'margin-top: 20px;' : 'margin-top: 83px'" class="ml-5">
          <v-col cols="2" class="pt-3">
            <div class="cubeFirst"></div>
            <div class="cubeSecond"></div>
          </v-col>
          <v-col :class="$vuetify.breakpoint.xs ? 'pl-10 pt-3' : ''" cols="10" xl="6" lg="6" md="6" sm="6">
            <span class="Title"> What can we do for you </span>
            <br />
            <span class="Subtitle"> Services we provide for you </span>
          </v-col>
        </v-row>
        <services-list />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import servicesList from "./servicesList.vue";
export default {
  components: { servicesList },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .Title {
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
  }
  .Subtitle {
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
  }
}
@media only screen and (min-width: 610px) {
  .Title {
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
  }
  .Subtitle {
    font-weight: 600;
    font-size: 38px;
    color: #ffffff;
  }
}
.cubeFirst {
  width: 50px;
  height: 50px;
  background: #8b002a;
  position: absolute;
  z-index: 10;
  margin-top: 10px;
}
.cubeSecond {
  width: 50px;
  height: 50px;
  background: #e20044;
  position: absolute;
  margin-left: 20px;
}
</style>