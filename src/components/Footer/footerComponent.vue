<template>
  <v-footer class="backgroundFooter">
    <v-main style="padding: 0px">
      <v-container style="padding: 0px">
        <v-row no-gutters align="end" justify="center" v-if="!$vuetify.breakpoint.xs">
          <div
            style="
              width: 90px;
              height: 90px;
              background-color: #e20044;
              text-align: center;
              align: center;
              padding-top: 25px;
            "
          >
            <span
              style="
                z-index: 20;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                color: #ffffff;
              "
              >Logo</span
            >
          </div>
          <p
            style="
              font-weight: 600;
              font-size: 20px;
              line-height: 160%;
              color: #ffffff;
              margin-left: 136px;
              margin-right: 68px;
            "
          >
            Ready to Discuss Your Project ?
          </p>
          <img
            src="../../assets/img/whatsapp.png"
            style="height: 52px; margin-bottom: 5px"
          />
        </v-row>
        <footer-items-list />
      </v-container>
    </v-main>
  </v-footer>
</template>

<script>
import footerItemsList from './footerItemsList.vue';
export default {
  components: { footerItemsList },};
</script>

<style>
.backgroundFooter {
  background-image: url("../../assets/img/footerBackground.png");
  height: 446px;
  align-items: start;
  padding: 0px;
  background-size: cover;
}
</style>