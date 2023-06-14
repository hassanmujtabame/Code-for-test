<template>
  <b-container class="mt-5 mobile-center">
    <h2 class="home-section-title text-center">المزايا المُقدّمة من رياديات إلى مقدمي الخدمات</h2>
    <b-row class="why-riadiat order">
      <b-col lg="3" md="6" v-for="item in features" :key="item.id" class="mt-3">
        <box-component :title="item.title" :description="item.description">
          <component :is="item.icon"></component>
        </box-component>
      </b-col>
    </b-row>
  </b-container>
</template>
  
  <script>
import BoxComponent from "./BoxComponent";
import MoneyCut from "./icons/MoneyCut";
import Bill from "./icons/Bill";
import ContactUs from "./icons/ContactUs";
import Announcement from "./icons/Announcement";
import { features } from "./data";

export default {
  name: "section-features",
  components: {
    BoxComponent,
    MoneyCut,
    Bill,
    ContactUs,
    Announcement
  },
  data() {
    return {
      features: features
    };
  }
};
</script>