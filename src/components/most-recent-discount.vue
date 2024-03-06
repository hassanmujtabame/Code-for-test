<template>
  <div class="row my-5">
    <div class="d-flex justify-content-between px-3 align-items-center">
      <h3>احدث الخصومات هذا الاسبوع</h3>
      <div
        class="rounded-4 d-flex justify-content-center align-items-center"
        style="background-color: #ffefc3; width: content-fit"
      >
        <h5 class="px-4 py-1" style="color: #f2631c">
          الوقت المتبقي: ١٤:٤٤:٣١
        </h5>
      </div>
    </div>
    <div class="row my-5">
      <CardItem
        :key="i"
        v-for="(card, i) in cards"
        :title="card.title"
        :price="card.price"
        :img="card.img"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "../components/most-discount-item.vue";
export default {
  components: { CardItem },
  data() {
    return {
      cards: [
        {
          img: require("../assets/img/network/div.rounded-md (2).png"),
          price: "25",
          title: "جوهرة للعبايات",
        },
        {
          img: require("../assets/img/network/div.rounded-md (1).png"),
          price: "69",
          title: "أسواق المزرعة",
        },
        {
          img: require("../assets/img/network/div.rounded-md (2).png"),
          price: "49",
          title: "ستارز بلاي للأفلام و المسلسلات",
        },
        {
          img: require("../assets/img/network/div.rounded-md.png"),
          price: "59",
          title: "سلة",
        },
      ],
    };
  },
};
</script>

<style></style>
