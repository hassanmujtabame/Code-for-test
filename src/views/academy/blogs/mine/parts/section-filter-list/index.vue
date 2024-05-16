<template>
  <div class="mt-2 container">
    <d-filter-list
      :call-list="loadList"
      hideSide
      classTitle="col-lg-4 mb-4"
      classSearchOrder="col-lg-5 justify-content-center mb-4"
      classColSearch="w-50 mb-3 "
      classColOrder="w-50 mb-3"
      HeadEndClasses="col-lg-3 mb-4"
      orderName="created_at"
      searchPlaceholder="أبحث  في قائمة المدونات"
      @change="changeFilter"
      classColCard="col-md-12"
    >
      <template v-slot:title>
        <h4 class="text-cairo">{{ $t("your-blogs") }}</h4>
      </template>
      <template v-slot:head-end>
        <button class="py-3 btn btn-customer d-flex align-items-center gap-2">
          <i class="fa-solid fa-plus"></i>{{ $t("add-blog") }}
        </button>
      </template>
      <template v-slot="{ item }">
        <router-link
          class="router-link"
          :to="getRouteLocale('academy-blog-show', { id: item.id })"
        >
          <BlogInfoCard :item="item" @delete="confirmDeleteItem" />
        </router-link>
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import instructorBlogsAPI from "@/services/api/academy/instructor/blogs.js";
import BlogInfoCard from "./blog-item.vue";
export default {
  name: "section-filter-list",
  components: {
    BlogInfoCard,
  },
  data: () => ({
    filterItem: {
      created_at: "asc",
      search: null,
    },
  }),
  methods: {
    addBlog() {
      this.fireOpenDialog("add-blog");
    },
    confirmDeleteItem(item) {
      let dataEvt = {
        title: "هل حقا تريد حذف هذه التدوينة؟",
        description: `${item.title}`,
        groupBtns: "d-flex flex-justify-evenly",
        btns: [
          { title: "تراجع", class: "btn btn-custmer btn-danger" },
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteItem(item),
            class: "btn btn-custmer",
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
    async deleteItem(item) {
      try {
        let { data } = await instructorBlogsAPI.deleteItem(item.id);
        if (data.success) {
          this.fireEvent("d-filter-list-refresh");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
      }
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,
        ...this.filterItem,
      };
      return await instructorBlogsAPI.getAll(params);
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
