<template>
  <b-container class="mt-5 mobile-center">
    <div class="box" style="background-color: #2EB9B3; border-radius: 10px">
      <div class="row">
        <h2 style="color: #fff; margin-bottom: 20px;">
          ابحث عن الخدمات المطلوبة </h2>
      </div>


      <div class="row">
        <div class="input-group input-group-sm input-group-md input-group-lg"
          :class="{ 'w-75': !isMobile, 'w-100': isMobile }">
          <input type="text" class="form-control p-3" :class="{ 'fs-6': isMobile }" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg" placeholder=" ما هي الخدمه التى تريد تنفيذها " required>
          <button class="btn-customer-w" style="cursor:pointer; margin-right:10px; background-color: #FFBE39 !important;"
            :class="{ 'fs-6': isMobile }" id="inputGroup-sizing-lg">ابحث</button>
        </div>
      </div>
      <div class="col-12 mt-4 d-flex flex-row">
        <span style="color: #FFBE39 !important;" >
          مثال: 
        </span>
        <span class="text-white">
          تصميم لوجو 
        </span>
        <span style="color: #FFBE39 !important;" >
          /او 
        </span>
        <span class="text-white">
          مصمم جرافيك 
        </span> 
      </div>

    </div>
  </b-container>
</template>

<style scoped>
ul {
  list-style: none;
}

.box {
  padding: 60px 100px;
}

.btn-custmer-w:hover {
  color: #ffffff !important;
  border-color: #ffffff !important;
}
</style>
  
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