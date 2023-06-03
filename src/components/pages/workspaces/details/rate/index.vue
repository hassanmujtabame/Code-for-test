<template>
  <div class="box">
    <div class="box bg-white rounded-4 mt-5 p-2 border">
      <div class="p-3">
        <div class="d-flex justify-content-between border-bottom">
          <h4 class="s-c fw-bolder">تقيم مكان العمل</h4>
        </div>
      </div>
      <div>
        <rateCard
          v-for="(rateItem, i) in rates"
          :key="i"
          :rate="rateItem"
          class="mt-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import rateCard from "./rate-card.vue";
export default {
  name: "section-rate-service",
  components: {
    rateCard,
  },
  props: {
    singleWorkspace: {
      type: [Object, Array],
      require: true,
    },
  },

  computed: {
    rates() {
      return this.singleWorkspace.rates;
    },
  },
};
</script>

<style>
</style>