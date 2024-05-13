<template>
  <d-filter-list
    :fake-1items="items"
    :call-list="loadList"
    classColCard="col-12"
    searchPlaceholder=" أبحث  في قائمة المشاريع "
    hideSide
  >
    <template v-slot:total="{}">
      <h1 class="fw-bold">مشاريعك</h1>
    </template>
    <template v-slot:before-body>
      <ul class="nav nav-pills mb-3">
        <li
          v-for="(btn, i) in actions"
          :key="i"
          class="nav-item col-12 col-md-3"
        >
          <button
            class="nav-link border w-75 t-c m-auto"
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

<style></style>
