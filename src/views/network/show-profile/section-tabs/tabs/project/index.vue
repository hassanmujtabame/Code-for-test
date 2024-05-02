<template>
  <EmptyCard
    mainText="لا يوجد أي مشروع"
    seconderyText="لم يضف هذا العضو أي مشروع حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else>
    <div class="container" style="min-height: 200px">
      <div class="show-profile-3-grid-container">
        <div v-for="(item, i) in inPageProjects" :key="i" class="grid-item">
          <CardItem :item="item" />
        </div>
      </div>
    </div>
    <PaginationBar
      :links="links"
      :currentPage="currentPage"
      :lastPage="lastPage"
      @navigate="navigate"
    />
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import CardItem from "./card";
import EmptyCard from "../components/empty-card.vue";
import PaginationBar from "@/components/pagination-card/index.vue";

export default {
  name: "d-tab-pane-projects",
  components: {
    CardItem,
    EmptyCard,
    PaginationBar,
  },
  data: () => ({
    loading: false,
    isEmptyObject: true,
    responseData: {},
  }),
  computed: {
    currentPage() {
      return this.responseData.meta.current_page;
    },
    lastPage() {
      return this.responseData.meta.last_page;
    },
    links() {
      return this.responseData.meta.links;
    },
    inPageProjects() {
      return this.responseData.data.slice(0, 8);
    },
  },
  methods: {
    async initializing(metaInfo) {
      let params = {
        page: metaInfo.current_page,
        paginate: 8,
      };
      this.loading = true;
      try {
        const response = await userAPI.getProjectsUser(
          this.$route.params.id,
          params
        );
        this.responseData = response.data;
        if (this.responseData.data.length > 0) {
          this.isEmptyObject = false;
        }
      } catch (error) {
        //
      }
      this.loading = false;
    },
    navigate(link) {
      if (link.label == "pagination.previous") {
        if (this.currentPage == 1) {
          return;
        }
        this.initializing({ current_page: this.currentPage - 1 });
      }
      if (link.label == "pagination.next") {
        if (this.currentPage == this.lastPage) {
          return;
        }
        this.initializing({ current_page: this.currentPage + 1 });
      } else {
        this.initializing({ current_page: link.label });
      }
    },
  },
  mounted() {
    this.initializing({ current_page: 1 });
  },
};
</script>

<style></style>
