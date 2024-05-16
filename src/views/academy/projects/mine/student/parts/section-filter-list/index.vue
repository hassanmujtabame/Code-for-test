<template>
  <d-filter-list
    :fake-1items="items"
    classColCard="col-12"
    :call-list="loadList"
    hideSide
    classSearchOrder="col-12 col-md-6 justify-content-center "
    classColSearch="col-12 col-md-8"
    classColOrder="col-12 col-md-4"
    classTitle="col-12 col-md-6"
    searchPlaceholder="أبحث  في قائمة المشاريع"
    @change="changeFilter"
    orderName="created_at"
  >
    <template v-slot:title>
      <h4 class="text-cairo">{{ $t("your-projects") }}</h4>
    </template>
    <template v-slot:before-body>
      <ul class="nav nav-pills mb-3">
        <li
          v-for="(btn, i) in actions"
          :key="i"
          class="nav-item col-12 col-md-3 px-2"
        >
          <button
            class="nav-link border w-100 t-c m-auto py-2"
            :class="{ active: status == btn.status }"
            type="button"
            @click="changeStatus(btn.status)"
          >
            {{ btn.label }}
          </button>
        </li>
      </ul>
    </template>
    <template v-slot="{ item }">
      <CourseCard :item="item" />
    </template>
  </d-filter-list>
</template>

<script>
import CourseCard from "./card";
import academyAPI from "@/services/api/academy/index.js";
export default {
  name: "filter-list",
  components: {
    CourseCard,
  },
  data: () => {
    return {
      filterSide: {
        is_share: null,
        category_id: [],
      },
      filterItem: {
        search: null,
        price: "asc",
        status: null,
        is_share: null,
        category_id: [],
      },
      items: [{}, {}, {}, {}, {}, {}],
      status: null,
      actions: [
        { status: null, label: "كل المشاريع" },
        { status: "under_correction", label: "مشاريع قيد التصحيح" },
        { status: "replaying", label: "مشاريع يجب إعادتها" },
        { status: "finished", label: "مشاريع انتهيت منها" },
      ],
    };
  },
  methods: {
    changeStatus(status) {
      this.status = status;
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-refresh");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem,
        };
        return await academyAPI.student.getMyProjects(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 40px;
  font-weight: 800;
  color: #1fb9b3;
}
</style>
