<template>
  <div class="container" style="min-height: 200px">
    <div class="grid-container">
      <div v-for="(item, i) in courses" :key="i" class="grid-item">
        <CardItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import CardItem from "./card.vue";
export default {
  name: "d-tab-pane-your-blogs",
  components: {
    CardItem,
  },
  data: () => ({
    loading: false,
    courses: [],
  }),
  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const a = await userAPI.getCoursesUser(this.$route.params.id, metaInfo);
        console.log("a : ", a);
        this.courses = a.data.data.slice(0, 8);
      } catch (error) {
        //
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style scoped>
.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 14px;
}
@media screen and (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 670px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 376px) {
  .grid-container {
    padding-inline: 10px;
    grid-template-columns: 1fr;
  }
}
</style>
