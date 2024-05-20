<template>
  <div style="margin-top: 80px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <bodyPage v-else :itemPage="itemPage" />
  </div>
</template>

<script>
import bodyPage from "./body-page";
import consultingAPI from "@/services/api/consulting";
export default {
  name: "consultant-page",
  components: {
    bodyPage,
  },
  data: () => ({
    itemPage: {},
    hasError: false,
    loading: true,
  }),
  watch: {
    $route: {
      deep: true,
      handler() {
        this.initializing();
      },
    },
  },
  methods: {
    async initializing() {
      this.loading = true;
      this.hasError = false;

      try {
        let { data } = await consultingAPI.consultants.getItem(
          this.$route.params.id
        );
        if (data.success) {
          this.itemPage = data.data;
        } else {
          window.SwalError(data.message);
          this.hasError = true;
        }
      } catch (error) {
        //
        this.hasError = true;
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
.consultant-name {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  text-transform: capitalize;
  color: #1fb9b3;
}
.consultant-text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  text-transform: capitalize;

  color: #979797;
}
.consultant-title {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-transform: capitalize;

  color: #414042;
}
</style>
