<template>
  <div class="main-background">
    <div class="main">
      <v-main>
        <v-container>
          <v-row no-gutters align="center">
            <v-col>
              <img
                src="@/assets/img/logo.svg"
                width="140px"
                height="70px"
                alt="logo"
              />
            </v-col>
            <v-col cols="4" class="px-0">
              <v-row justify="end" no-gutters>
                <v-item-group
                  active-class="headerActiveItem"
                  v-if="!$vuetify.breakpoint.xs"
                >
                  <v-container>
                    <v-row>
                      <v-item
                        v-for="item in headerItem"
                        :key="item.id"
                        v-slot="{ active, toggle }"
                      >
                        <p class="headerItem" @click="toggle" v-if="!active">
                          <router-link class="routerLink" :to="item.path">{{
                            item.title
                          }}</router-link>
                        </p>
                        <p class="headerItem" @click="toggle" v-else>
                          <router-link
                            class="routerLinkActive"
                            :to="item.path"
                            >{{ item.title }}</router-link
                          >
                        </p>
                      </v-item>
                    </v-row>
                  </v-container>
                </v-item-group>
              </v-row>
            </v-col>
          </v-row>
          <v-col cols="12" xl="6" lg="6" md="6" sm="6">
            <span v-if="$vuetify.breakpoint.xs" class="mainTitle"
              >bMax Software</span
            >
            <p v-else class="mainTitle">bMax Software</p>
            <p class="mainDescription">
              The customer is very important, the customer will be followed by
              the customer. Now the lake, as the need in but for the eleifend of
              the valley of life.
            </p>
          </v-col>
          <div class="cube">
            <v-row align="end" no-gutters>
              <div class="firstCube">
                <p class="textStyle">01</p>
                <p
                  style="
                    font-weight: 500;
                    font-size: 24px;
                    color: #000000;
                    line-height: 250%;
                  "
                >
                  /3
                </p>
              </div>
              <div class="secondCube"></div>
              <div class="thirdCube"></div>
            </v-row>
          </div>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    headerItem: [
      {
        id: 1,
        title: "Home page",
        path: "/",
      },
      {
        id: 2,
        title: "Program",
        path: "/program",
      },
      {
        id: 3,
        title: "About Us",
        path: "/about_us",
      },
      {
        id: 4,
        title: "Blog",
        path: "/blog",
      },
      {
        id: 5,
        title: "Contact",
        path: "/contact",
      },
    ],
    activeItem: 0,
  }),
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .mainTitle {
    font-weight: 700;
    font-size: 24px;
    line-height: 96px;
    color: #ffffff;
    margin-top: 10px;
  }
  .mainDescription {
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }
  .main-background {
    background-image: url("../../assets/img/mainBackground.png");
    height: 363px;
    background-size: cover;
  }
  .main {
    height: 363px;
    background: linear-gradient(
      90.6deg,
      #000000 1.24%,
      rgba(0, 0, 0, 0.71) 39.93%,
      rgba(0, 0, 0, 0.88) 86.25%,
      #171214 116.71%,
      #000000 116.71%
    );
  }
  .cube {
    margin-top: 120px;
    margin-left: 15px;
  }
  .firstCube {
    width: 88px;
    height: 88px;
    background: #e20044;
    display: flex;
    padding: 25px;
    position: absolute;
    z-index: 10;
  }
  .secondCube {
    width: 80px;
    height: 68px;
    background: rgba(226, 0, 68, 0.5);
    position: absolute;
    z-index: 5;
    margin-left: 20px;
  }
  .thirdCube {
    width: 20px;
    height: 48px;
    position: absolute;
    background: rgba(226, 0, 68, 0.2);
    margin-left: 100px;
  }
  .textStyle {
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: #31000f;
  }
}
@media only screen and (min-width: 610px) {
  .mainTitle {
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    color: #ffffff;
    margin-top: 100px !important;
  }
  .mainDescription {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #ffffff;
  }
  .main-background {
    background-image: url("../../assets/img/mainBackground.png");
    height: 663px;
    background-size: cover;
  }
  .main {
    height: 663px;
    background: linear-gradient(
      90.6deg,
      #000000 1.24%,
      rgba(0, 0, 0, 0.71) 39.93%,
      rgba(0, 0, 0, 0.88) 86.25%,
      #171214 116.71%,
      #000000 116.71%
    );
  }
  .cube {
    margin-top: 245px;
    margin-left: 20px;
  }
  .firstCube {
    width: 128px;
    height: 128px;
    background: #e20044;
    display: flex;
    padding: 25px;
    position: absolute;
    z-index: 10;
  }
  .secondCube {
    width: 120px;
    height: 108px;
    background: rgba(226, 0, 68, 0.5);
    position: absolute;
    z-index: 5;
    margin-left: 20px;
  }
  .thirdCube {
    width: 20px;
    height: 88px;
    position: absolute;
    background: rgba(226, 0, 68, 0.2);
    margin-left: 140px;
  }
  .textStyle {
    font-weight: 700;
    font-size: 48px;
    line-height: 160%;
    color: #31000f;
  }
}
.headerItem {
  color: white;
  margin-right: 10px;
  cursor: pointer;
}
.routerLink {
  text-decoration: none;
  color: white !important;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
}
.routerLinkActive {
  color: #e20044 !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
}
.whiteText {
  color: white;
}
</style>