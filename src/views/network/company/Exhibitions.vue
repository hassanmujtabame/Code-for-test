<template>
  <div class="container">
    <d-filter-list
      :call-list="loadList"
      hideSide
      hideOrder
      hideSearch
      classTitle="col-lg-4 mb-4"
      HeadEndClasses="col-lg-3 mb-4"
      classColCard="col-md-3"
    >
      <template v-slot:title>
        <h4 class="text-cairo">{{ $t("company-exhibitions") }}</h4>
      </template>
      <template v-slot:head-end>
        <button class="py-3 btn btn-customer d-flex align-items-center gap-2">
          <i class="fa-solid fa-plus"></i>{{ $t("add-blog") }}
        </button>
      </template>
      <template v-slot="{ item }">
        {{ item }}
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import exhibitionAPI from "@/services/api/exhibitions.js";
export default {
  name: "company-exhibitions",
  components: {},
  data: () => ({}),
  methods: {
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: 8,
        };
        return await exhibitionAPI.getMy(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
  mounted() {},
};
</script>

<style></style>
