<template>
  <div class="container" style="margin-top: 105px">
    <d-filter-list
      :call-list="loadList"
      hideSide
      hideOrder
      hideSearch
      classTitle="col-lg-4 mb-4"
      HeadEndClasses="col-lg-3 mb-4"
      classColCard=" col-md-4 col-lg-3"
    >
      <template v-slot:title>
        <h4 class="text-cairo">{{ $t("company-exhibitions") }}</h4>
      </template>
      <template v-slot:head-end>
        <button
          class="py-3 btn btn-danger w-100 d-flex justify-content-center align-items-center gap-2"
        >
          <i class="fa-solid fa-plus"></i>{{ $t("add-exhibitions") }}
        </button>
      </template>
      <template v-slot="{ item }">
        <Card :item="item" />
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import exhibitionAPI from "@/services/api/exhibitions.js";
import Card from "@/components/list-cards/network/ExhibitionCard.vue";

export default {
  name: "company-exhibitions",
  components: { Card },
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

<style scoped>
.page-title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-align: right;
  text-transform: capitalize;

  color: #414042;
}
h4 {
  font-size: 40px;
  font-weight: 800;
  color: #1fb9b3;
}
</style>
