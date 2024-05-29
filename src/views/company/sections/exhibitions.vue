<template>
  <div class="row">
    <div v-for="(card, i) in cards" :key="i" class="col-md-3 p-2">
      <Card :item="card"></Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/list-cards/network/ExhibitionCard.vue";
export default {
  name: "exhibitions-tab",
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: require("@/assets/img/company/Rectangle9.png"),
          title: "المعرض الأول",
          date: "30 يونيو 2021",
          status: "open",
          location: "جدة",
          price: 100,
        },
        {
          id: 2,
          image: require("@/assets/img/company/Rectangle9.png"),
          title: "المعرض الثاني",
          date: "30 يونيو 2021",
          status: "closed",
          location: "جدة",
          price: 0,
        },
        {
          id: 3,
          image: require("@/assets/img/company/Rectangle9.png"),
          title: "المعرض الثالث",
          date: "30 يونيو 2021",
          status: "closed",
          location: "جدة",
          price: 240,
        },
        {
          id: 4,
          image: require("@/assets/img/company/Rectangle9.png"),
          title: "المعرض الرابع",
          date: "30 يونيو 2021",
          status: "open",
          location: "جدة",
          price: 75,
        },
      ],
    };
  },
};
</script>

<style></style>
