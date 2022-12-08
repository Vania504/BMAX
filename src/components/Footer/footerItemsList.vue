<template>
  <v-row justify="center" style="margin-top: 62px">
    <v-col class="ml-5">
      <v-row no-gutters justify="center">
        <v-col
          cols="12"
          xl="2"
          lg="2"
          md="2"
          sm="6"
          v-for="item in itemsList"
          :key="item.id"
          style="margin-left: 36px;"
        >
          <p
            style="
              font-weight: 600;
              font-size: 16px;
              line-height: 160%;
              color: #ffffff;
            "
          >
            {{ item.title }}
          </p>
          <p
            style="
              font-weight: 400;
              font-size: 12px;
              line-height: 210%;
              color: #dedede;
              cursor: pointer;
            "
            v-for="subitems in item.subitems"
            :key="subitems.id"
          >
            {{ subitems.title }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    itemsList: [
      {
        id: 1,
        title: "About Us",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
      {
        id: 2,
        title: "Contact us",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
      {
        id: 3,
        title: "FAQ",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
      {
        id: 4,
        title: "Program",
        subitems: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            id: 2,
            title: "Pulvinar ultricies integer blandit faucibus mattis erat.",
          },
          {
            id: 3,
            title: "Pulvinar pharetra nullam in.",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
</style>