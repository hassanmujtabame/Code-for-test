<template>
  <div class="mt-5 blog">
    <ul
      class="nav nav-pills mb-3 rounded-2 align-items-center"
      id="pills-tab"
      role="tablist"
    >
      <h5 class="m-c fw-bolder m-0">تصنيف أماكن العمل :</h5>
      <template v-for="(btn, i) in categories">
        <li :key="i" class="nav-item">
          <button
            @click="changeCategories(btn.id)"
            class="nav-link"
            :class="{ active: category_id === btn.id }"
            type="button"
          >
            {{ btn.name }}
          </button>
        </li>
        <li v-if="categories.length > i + 1" :key="'d' + i">|</li>
      </template>
    </ul>
    <d-filter-list
    :call-list="loadList"
    @change="changeFilter"
    classColCard="col-lg-4 mt-3"
    hideTitle
    hideTotal
    hideTop
    newFilter
    classSearchOrder="col-lg-8"
    classColOrder="col-12 col-lg-4"
    classColSearch="col-12 col-lg-8"
    classSideBar="col-12"
  >

      <template v-slot="{ item }">
        <workspaceCard :title="item.title" :image="item.image_path" :company="item" :description="item.description"
          :price="item.price" :area="item.area" :rate="item.rate" :medias="item.medias"
          :to="getRouteLocale('workspaces-details', { id: item.id })" />
      </template>
      <template v-slot:side>
        <sidebarBox :filterItem="filterSide" @change="changeFilter" />
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import workspaceAPI from "@/services/api/workspace";
import workspaceCard from "@/components/pages/workspaces/home/recent-workspaces/WorkSpaceCard.vue";
import sidebarBox from "./sidebar.vue";
export default {
  name: "section-filter",
  components: {
    workspaceCard,
    sidebarBox,
  },
  data() {
    return {
      filterSide: {
        type: null,
        city_id: [],

      },
      filterItem: {
        search: null,
        created_at: "asc",
        state: null,
        address: null,

      },
      //       min_price: 0,
      // max_price: 1000,
      categories: [
        { id: null, name: "الكل" },
        { id: "academy", name: this.$t("academy") },
        { id: "consulting", name: this.$t("consulting") },
        { id: "Incubators", name: this.$t("Incubators") },
        { id: "WomensActivities", name: this.$t("WomensActivities") },
      ],
      category_id: null,
    };
  },
  computed: {},
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    changeCategories(cat) {
      this.category_id = cat;
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          category: this.category_id,
          ...this.filterItem,
        };
        return await workspaceAPI.getAll(params);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() { },
};
</script>

<style></style>
