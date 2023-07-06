<template>
  <div class="consulting py-5 work-space-header mobile-center bg-header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 text-white">
          <h1 class="fs-1">أماكن العمل</h1>
          <p>
            حافظ على إنتاجيتك مع أماكن العمل الحديثة والآمنة والمجهزة بأحدث
            الأجهزة في شبكة رياديات التي توجد في مختلف الأماكن!
          </p>
             <button
            @click="openAddWorkSpace"

            class="btn  bg border text-white px-4 py-2"
          >
            <plusRectRoundIcon  class="mx-1"/>
            {{ $t("add_workspace") }}
          </button> 
        </div>
        <div class="col-lg-6">
          <div class="m-auto text-start ">
            <img
              class="w-60 main-img"
              src="@/assets/img/work-spaces/workspace-home.png"
              alt="WorkSpaceMainHeader"
            />
          </div>
        </div>
      </div>
            <d-swiper
        v-if="!loading"
        :slides-per-view="4"
        :space-between="20"
        is-auto
        :items="items"
      >
        <template v-slot:default="{ item }">
          <router-link
            class="router-link h-100"
            :to="getRouteLocale('workspaces-details', { id: item.id })"
          >
            <WorkSpaceCard
              :title="item.title"
              :image="item.image_path"
              :company="item.city_name"
              :description="item.description"
              :price="item.price"
            />
          </router-link>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";

export default {
  name: "WorkSpaceHeader",
  components: {
    plusRectRoundIcon,
  },
  data:()=>{
    return {
      loading: true,
      items: [],
    };
  },
    mounted() {
    this.getRecentWorkSpaces();
  },
  methods:{
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
  }
};
</script>

<style scoped>
.work-space-header p {
  font-size: 1.4em;
}
@media (max-width: 991px) {

  .main-img {
    display: none;
  }
}


</style>