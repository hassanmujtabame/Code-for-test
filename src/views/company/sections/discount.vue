<template>
  <div class="row">
    <card
      class="col-md-4"
      v-for="(card, i) in cards"
      :key="i"
      :item="card"
    ></card>
  </div>
</template>

<script>
import card from "../cards/offer-card.vue";
export default {
  name: "discount-tab",
  components: {
    card,
  },
  data() {
    return {
      cards: [
        {
          img: require("@/assets/img/company/pic.png"),
          title: "discount",
          time: 5,
          date: "2024/2/22",
          des: "احصل على خصم 10% عند استخدامك كود الخصم",
          type: "dicount",
        },
        {
          img: require("@/assets/img/company/pic.png"),
          title: "discount",
          time: 5,
          date: "2024/2/22",
          des: "احصل على خصم 10% عند استخدامك كود الخصم",
          type: "dicount",
        },
        {
          img: require("@/assets/img/company/pic.png"),
          title: "discount",
          time: 5,
          date: "2024/2/22",
          des: "احصل على خصم 10% عند استخدامك كود الخصم",
          type: "dicount",
        },
      ],
    };
  },
};
</script>

<style></style>
