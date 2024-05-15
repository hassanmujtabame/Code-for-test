<template>
  <div class="container d-none">
    <div class="mt-5">
      <h2 class="text-center title-text">استكشف مجالات <span>رياديات</span></h2>
      <div class="row traning mt-5">
        <d-swiper
          class="col-9"
          :slides-per-view="2"
          :space-between="20"
          is-auto
          :items="items"
        >
          <template v-slot:default="{ item }">
            <departmentCard :item="item" />
          </template>
        </d-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import departmentCard from "./department-card.vue";
export default {
  name: "section-training-fields",
  components: {
    departmentCard,
  },
  methodes: {
    loadDepartmints() {
      academyAPI.getDepartments();
    },
    // Fetch data from API
  },
  computed: {
    items() {
      return null;
    },
  },
};
</script>

<style scoped>
.container {
  background: #fafafa;
}
.title-text {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 72px;
  color: #414042;
}
.title-text span {
  color: #2cb7b3;
}
</style>
