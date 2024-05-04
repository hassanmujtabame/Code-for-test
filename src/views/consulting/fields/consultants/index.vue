<template>
  <div style="margin-top: 96px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else>
      <!-- <div>

  <SectionHeader :itemPage="itemPage" />
      </div> -->
      <div class="mt-3">
        <SectionFilterList :itemPage="itemPage" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./parts/section-top/index";
import SectionFilterList from "./parts/section-filter-list/index";
import consultingAPI from "@/services/api/consulting";
export default {
  name: "page-consulting-categories",
  components: {
    SectionHeader,
    SectionFilterList,
  },
  data: () => {
    return {
      loading: true,
      hasError: false,
      itemPage: {},
    };
  },
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await consultingAPI.fields.getItem(
          this.$route.params.id
        );
        if (data.success) {
          this.itemPage = data.data;
        } else {
          this.hasError = true;
          window.SwalError(data.message);
        }
      } catch (error) {
        this.hasError = true;
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

<style></style>
