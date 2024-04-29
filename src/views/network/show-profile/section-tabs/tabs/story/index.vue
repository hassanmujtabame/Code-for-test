<template>
  <div class="tab-body position-relative" style="min-height: 200px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else>
      <h5 class="m-c">
        {{ itemInfo.title }}
      </h5>
      <div>
        <p v-html="itemInfo.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
export default {
  name: "story-tab",
  data: () => ({
    loading: true,
    hasError: false,
    itemInfo: {},
  }),
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await userAPI.getStoryUser(this.$route.params.id);
        if (data.success) {
          this.itemInfo = data.data;
          this.loading = false;
        } else {
          this.hasError = true;
        }
      } catch (error) {
        this.hasError = true;
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
.tab-body {
  margin: 0px -25px;
  padding: 35px;
  border-radius: 36px;
  background-color: white;
  border: 1px;
  box-shadow: 0 0 0.35rem rgba(0, 0, 0, 0.075);
  font-family: change;
}
</style>
