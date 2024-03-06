<template>
  <div class="container">
    <RiaCardVue />
    <MostRecentDiscount />
    <CardList />
  </div>
</template>

<script>
import RiaCardVue from "./ria-card.vue";
import CardList from "../../components/card-list.vue";
import MostRecentDiscount from "../../components/most-recent-discount.vue";

export default {
  components: { RiaCardVue, CardList, MostRecentDiscount },
};
</script>

<style></style>
