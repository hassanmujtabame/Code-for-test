<template>
  <div class="row">
    <div v-for="(card, i) in cards" :key="i" class="col-md-4 p-2">
      <card :item="card"></card>
    </div>
  </div>
</template>

<script>
import card from "@/views/company/cards/place-card.vue";

export default {
  name: "plces-tab",
  components: {
    card,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image: require("@/assets/img/company/83f.jpeg"),
          title: "مكان 1",
          description:
            "معرض مخصص للملابس الرجالية انتاج محلي و ماركات معرض مخصص للملابس الرجالية انتاج محلي و ماركات  ",
          location: "الرياض - شارع التخصصي",
          options: [
            "واي فاي",
            "مواقف سيارات",
            "شاشات عرض",
            "غرفة للصلاة",
            "مطعم",
            "مقهى",
          ],
        },
        {
          id: 2,
          image: require("@/assets/img/company/83f.jpeg"),
          title: "مكان 2",
          description:
            "معرض مخصص للملابس الرجالية انتاج محلي و ماركات معرض مخصص للملابس الرجالية انتاج محلي و ماركات  ",
          location: "الرياض - شارع التخصصي",
          options: ["مكان للأطفال", "شاشات عرض", "غرفة للصلاة", "مقهى"],
        },
        {
          id: 3,
          image: require("@/assets/img/company/83f.jpeg"),
          title: "مكان 3",
          description:
            "معرض مخصص للملابس الرجالية انتاج محلي و ماركات معرض مخصص للملابس الرجالية انتاج محلي و ماركات  ",
          location: "الرياض - شارع التخصصي",
          options: ["واي فاي", "مواقف سيارات", "غرفة للصلاة", "مكيف", "مطعم"],
        },
      ],
    };
  },
};
</script>

<style></style>
