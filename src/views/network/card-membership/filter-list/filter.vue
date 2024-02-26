<template>
  <div class="mt-5">
    <ul
      class="nav nav-pills mb-3 rounded-2 align-items-center gap-2"
      id="pills-tab"
      role="tablist"
    >
      <li v-for="(btn, i) in categories" :key="i" class="nav-item">
        <button
          @click="changeCategories(btn.id)"
          style="color: black; background-color: white"
          class="btn shadow"
          :class="{ active: category_id === btn.id }"
          type="button"
        >
          {{ btn.name }}
          <!-- <div>
            <img class="" :src="btn.image_path" alt="" />
          </div> -->
        </button>
      </li>
    </ul>
    <!-- <d-filter-list
      :call-list="loadList"
      @change="changeFilter"
      hideSide
      hideTop
      classColCard="col-md-3  mt-3"
    >
      <template v-slot:total>
        <h3 class="t-c">نماذج {{ categoryName }}</h3>
      </template>

      <template v-slot="{}">
        <img
          class="rounded-circle"
          :src="`${publicPath}assets/img/Ellipse 25.png`"
          alt=""
          width="180px"
          height="180px"
        />
      </template>
    </d-filter-list> -->
  </div>
</template>

<script>
import ModelsAPI from "@/services/api/models.js";
import ModelCard from "@/components/cards/model.vue";
export default {
  name: "section-filter",
  components: {
    ModelCard,
  },
  data: (vm) => ({
    itemTest: { image: `${vm.publicPath}assets/img/Ellipse 25.png` },
    filterItem: {
      search: null,
      created_at: "asc",
    },
    categories: [{ id: null, name: "الكل" }],
    category_id: null,
  }),
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
        return await ModelsAPI.getAll(params);
      } catch (error) {
        console.mylog("error", error);
        console.mylog("response", error.response);
      }
    },
    async getCategories() {
      try {
        let { data } = await ModelsAPI.getCategories();
        if (data.success) {
          let categories = data.data;
          categories.unshift({ id: null, name: "الكل" });
          this.categories = categories;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style scoped>
.nav.nav-pills {
  padding: 5px 0;
}
.nav-item {
  flex: 1 0 !important;
}
.nav-item button {
  all: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  --color-nav-grey: 69 68 68;
  color: var(--color-nav-grey);
  border: 1px solid var(--color-nav-grey);
  background-color: rgba(var(--color-nav-grey) / 0.2);
  border-radius: 4px;
}

.nav-item button.active {
  color: white !important ;
  border: 1px solid var(--color-primary);
  background-color: #1fb9b3 !important;
}
</style>
