<template>
  <div class="row">
    <div v-for="(card, i) in cards" :key="i" class="col-md-3 p-2">
      <Card :item="card"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../cards/service-card.vue";
export default {
  name: "tabs-for-nav",
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          image: require("@/assets/img/company/programming-service.png"),
          title: "الخدمة الاولى",
          price: "100",
          categoryName: "البرمجة",
          rate: 4,
        },
        {
          image: require("@/assets/img/company/programming-service.png"),
          title: "الخدمة الثانية",
          price: "200",
          categoryName: "البرمجة",
          rate: 3,
        },
        {
          image: require("@/assets/img/company/programming-service.png"),
          title: "الخدمة الثالثة",
          price: "300",
          categoryName: "البرمجة",
          rate: 2,
        },
        {
          image: require("@/assets/img/company/programming-service.png"),
          title: "الخدمة الرابعة",
          price: "400",
          categoryName: "البرمجة",
          rate: 1,
        },
      ],
    };
  },
};
</script>

<style></style>
