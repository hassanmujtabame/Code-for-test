<template>
  <div class="box">
    <div class="box bg-white rounded-4 mt-5 p-2 border">
      <div class="p-3">
        <div class="d-flex justify-content-between border-bottom">
          <h4 class="s-c fw-bolder">تقيم الخدمة</h4>
        </div>
      </div>
      <div>
        <rateCard v-for="(rateItem, i) in ratesTest" :key="i" :item="rateItem" class="mt-2" :showBorder="(ratesTest.length - 1) > i" />
      </div>
    </div>
  </div>
</template>

<script>
let itemTest = {
  note: "دكتور مميز لقد أستفدت منه الكثير",
  rate: 3,
  user_info: {
    id: 148,
    image: "/assets/img/avatar-11.jpg",
    name: "ليلى احمد"
  }
};
// let ratesTest = [itemTest, itemTest, itemTest];
import rateCard from "./rate-card.vue";
export default {
  name: "section-rate-service",
  components: {
    rateCard
  },
  props: {
    item: {
      type: [Object, Array],
      require: true
    }
  },
  data: vm => ({
    ratesTest: [
      {
        note: "دكتور مميز لقد أستفدت منه الكثير",
        rate: 3,
        user_info: {
          id: 148,
          image: "/assets/img/avatar-11.jpg",
          name: "ليلى احمد"
        }
      },
      {
        note: "دكتور مميز لقد أستفدت منه الكثير",
        rate: 3,
        user_info: {
          id: 148,
          image: "/assets/img/avatar-11.jpg",
          name: "ليلى احمد"
        }
      },
      {
        note: "دكتور مميز لقد أستفدت منه الكثير",
        rate: 3,
        user_info: {
          id: 148,
          image: "/assets/img/avatar-11.jpg",
          name: "ليلى احمد"
        }
      }]

    // rates: vm.item.rates ?? ratesTest
  })
};
</script>

<style></style>