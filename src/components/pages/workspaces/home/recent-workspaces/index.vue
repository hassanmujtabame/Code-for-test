<template>
  <div class="recent-work-spaces p-3 my-5">
    <div class="container">
      <div class="row my-5 header">
        <div class="col-lg-6">
          <h2>أحدث مساحات العمل</h2>
        </div>
        <!-- <div class="col-lg-6 add-work-space">
          <button
            @click="openAddWorkSpace"
            class="btn bg-main bg border text-white"
          >
            <plusRectRoundIcon />
            {{ $t("add_workspace") }}
          </button>
        </div> -->
      </div>
      <d-swiper
        v-if="!loading"
        :slides-per-view="3.5"
        :space-between="20"
        is-auto
        :items="items"
      >
        <template v-slot:default="{ item }">
   
            <WorkSpaceCard
              :title="item.title"
              :medias="item.medias"
              :image="item.image_path"
              :company="item.city_name"
              :description="item.description"
              :price="item.price"
              :area="item.area"
              :rate="item.rate"
              :to="getRouteLocale('workspaces-details', { id: item.id })"

            />
        </template>
      </d-swiper>
    </div>
  </div>
</template>
 
 <script>
import workspaceAPI from "@/services/api/workspace"; 
import WorkSpaceCard from "@/components/pages/workspaces/home/recent-workspaces/WorkSpaceCard.vue";
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";
export default {
  name: "top-workspaces",
  components: {
    plusRectRoundIcon,
    WorkSpaceCard,
  },
  
  data:()=>{
    return {
      loading: true,
      items: [],
    };
  },

  methods: {
    openAddWorkSpace() {
      this.fireOpenDialog("add-dialog");
    },

    async getRecentWorkSpaces() {
      this.loading = true;
      try {
        let { data } = await workspaceAPI.getRecentWorkSpaces();
        if (data.success) {
          this.items = data.data;
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getRecentWorkSpaces();
  },
};
</script>
 
 <style scoped>
.recent-work-spaces {
  background-color: #f6f8f9;
}
.recent-work-spaces .add-work-space {
  text-align: end;
}
@media (max-width: 991px) {
  .recent-work-spaces .add-work-space,
  .recent-work-spaces .header {
    text-align: center !important;
  }
}
</style>