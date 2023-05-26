<template>
  <div class="mt-5 blog">
    <ul
      class="nav nav-pills mb-3 rounded-2 align-items-center"
      id="pills-tab"
      role="tablist"
    >
      <h5 class="m-c fw-bolder m-0">تصنيف أماكن العمل :</h5>
      <template v-for="(btn, i) in categories">
        <li v-if="true" :key="i" class="nav-item">
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
      classColCard="col-md-3  mt-3"
    >
      <template v-slot:total>
        <h3 class="t-c"></h3>
      </template>

      <template v-slot="{ item }">
        <router-link
          class="router-link"
          :to="getRouteLocale('workspace-show', { id: item.id })"
        >
          <workspaceCard
            :title="item.title"
            :image="item.image_path"
            :company="item.city_name"
            :description="item.description"
            :price="item.price"
          />
        </router-link>
      </template>
      <template v-slot:side>
        <sidebarBox :filterItem="filterSide" @change="changeFilter" />
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import workspaceAPI from "@/services/api/workspace";
import workspaceCard from "@/components/pages/workspaces/recent-workspaces/WorkSpaceCard.vue";
import sidebarBox from "./sidebar.vue";
export default {
  name: "section-filter",
  components: {
    workspaceCard,
    sidebarBox,
  },
  data: (vm) => {
    let itemTest = {
      id: 44,
      title: "الورود",
      price: 20,
      company: "ش الملك عبد الله، الورود",
      user_info: { name: "سارة" },
      image: `${vm.publicPath}assets/img/Rectangle -network.png`,
      description:
        "نبذة عن مساحة العمل نبذة عن مساحة العمل نبذة عن مساحة العمل نبذة عن مساحة العمل",
    };
    let itemsTest = [];
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    return {
      items: itemsTest,
      filterSide: {
        state: null,
        address: null,
        min_price: 0,
        max_price: 1000,
      },
      filterItem: {
        search: null,
        created_at: "asc",
        state: null,
        address: null,
        min_price: 0,
        max_price: 1000,
      },
      categories: [
        { id: null, name: "الكل" },
        { id: "academy", name: vm.$t("academy") },
        { id: "service-provider", name: vm.$t("service-providers") },
      ],
      category_id: null,
    };
  },
  computed: {
    categoryName() {
      let category = this.categories.find((cat) => cat.id == this.category_id);
      return category.name;
    },
  },
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
          category_id: this.category_id,
          ...this.filterItem,
        };
        return await workspaceAPI.getAll(params);
      } catch (error) {
        console.mylog("error", error);
        console.mylog("response", error.response);
      }
    },
  },
  mounted() {},
};
</script>

<style>
</style>
