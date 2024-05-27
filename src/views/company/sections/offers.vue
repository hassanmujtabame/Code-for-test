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
  name: "tabs-for-nav",
  components: {
    card,
  },
  data() {
    return {
      cards: [
        {
          img: require("@/assets/img/company/pic.png"),
          title: "فلاورد",
          time: 5,
          date: "2024/2/22",
          des: "خصم 100 ريال عند استخدام البطاقة",
          type: "offer",
        },
        {
          img: require("@/assets/img/company/pic.png"),
          title: "فلاورد",
          time: 5,
          date: "2024/2/22",
          des: "خصم حتى 500 ريال عند استخدام البطاقة",
          type: "offer",
        },
        {
          img: require("@/assets/img/company/pic.png"),
          title: "فلاورد",
          time: 5,
          date: "2024/2/22",
          des: "خصم حتى 300 ريال عند استخدام البطاقة",
          type: "offer",
        },
      ],
    };
  },
};
</script>

<style></style>
