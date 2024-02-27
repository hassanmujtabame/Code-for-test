<template>
  <div class="consulting bg-light py-5 work-space-header mobile-center">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 text-dark">
          <h1 class="fs-1 text-dark">أماكن رياديات</h1>
          <p>
            تمتع بأفضل أماكن العطلات والسكن والعمل والفعاليات والحفلات الحديثة
            والآمنة والمجهزة بأحدث الأجهزة للعمل والترفية والسكن في شبكة رياديات
            التي توجد في مختلف الأماكن!
          </p>
          <div class="d-flex">
            <button
              style="background-color: #f2631c"
              @click="openAddWorkSpace"
              class="btn btn-lg mx-1 bg border text-white px-4 py-2"
            >
              <plusRectRoundIcon class="mx-1" />
              {{ $t("add_workspace") }}
            </button>
            <button
              style="color: #1fb9b3"
              @click="openAddWorkSpace"
              class="btn btn-lg bg-light bg mx-1 px-4 py-2"
            >
              <play-icon class="mx-1" />
              عرض توجيهى
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="m-auto text-start">
            <img
              class="w-100 rounded main-img"
              src="@/assets/img/work-spaces/Video.png"
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
          <WorkSpaceCard
            :title="item.title"
            :image="item.image_path"
            :company="item"
            :description="item.description"
            :price="item.price"
            :area="item.area"
            :rate="item.rate"
            :medias="item.medias"
            :to="getRouteLocale('workspaces-details', { id: item.id })"
          />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";
import playIcon from "@/components/icon-svg/play.vue";

export default {
  name: "WorkSpaceHeader",
  components: {
    plusRectRoundIcon,
    playIcon,
  },
  data: () => {
    return {
      loading: true,
      items: [],
    };
  },
  mounted() {
    this.getRecentWorkSpaces();
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
