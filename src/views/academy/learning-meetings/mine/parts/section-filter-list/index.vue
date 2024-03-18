<template>
  <div class="mt-5">
    <div class="blog">
      <d-filter-list
        :call-list="loadList"
        hideSide
        orderName="created_at"
        searchPlaceholder="أبحث  في قائمة اللقاءات"
        @change="changeFilter"
        classColCard="col-md-12"
      >
        <template v-slot:total>
          <h3 class="page-title">
            قائمة لقاءاتك
            <button @click="addItem" class="btn m-c">
              <i style="font-size: 35px" class="fa fa-square-plus"></i>
            </button>
          </h3>
        </template>

        <template v-slot="{ item }">
          <BlogInfoCard :item="item" @delete="confirmDeleteItem" />
        </template>
      </d-filter-list>
    </div>
  </div>
</template>

<script>
import instructorMeetingsAPI from "@/services/api/academy/instructor/meetings.js";
import BlogInfoCard from "./meeting-item.vue";
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
  computed: {
    categoryName() {
      let category = this.categories.find((cat) => cat.id == this.category_id);
      return category.name;
    },
  },
  methods: {
    addItem() {
      this.loadCurrentUser();
      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      } else {
        this.fireOpenDialog("add-meeting", {
          id: null,
          title: null,
          video: null,
        });
      }
    },
    changeCategories(cat) {
      this.category_id = cat;
      this.fireEvent("d-filter-list-refresh");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    confirmDeleteItem(item) {
      let dataEvt = {
        title: "هل انت متأكد من حذف اللقاء؟",
        description: `${item.title}`,
        groupBtns: "d-flex justify-content-evenly",
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
      console.mylog("deleting....", item);
      try {
        let { data } = await instructorMeetingsAPI.deleteItem(item.id);
        if (data.success) {
          this.fireEvent("d-filter-list-refresh");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.mylog("error", error);
      }
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,
        ...this.filterItem,
      };
      let meetings = await instructorMeetingsAPI.getAll(params);

      return meetings;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.blog {
  border: 1px solid #c6c6c68c;
  border-radius: 9px;
}

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
</style>
