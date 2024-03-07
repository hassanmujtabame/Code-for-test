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
          <div class="workspace-card box border w-100">
            <div class="workspace-card__wrapper">
              <div class="workspace-card__image">
                <img
                  class="w-100"
                  src="@/assets/img/new/main-page/header/Student.png"
                  height="165px"
                />
              </div>
              <div class="workspace-card__content">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="workspace-card__title">{{ item.title }}</h6>
                </div>
                <p
                  class="text-four-lines workspace-card__description"
                  v-html="item.description"
                ></p>
              </div>
              <!-- <div class="workspace-card__footer" style="height: 55px;">
                  <div class="workspace-card__footer-item flex-grow-1">
                    <d-localisation-icon :size="20" color="#979797" class="mx-1" />
                    <span v-if="company.map_address && company.map_address.address_name">{{ company.map_address.address_name
                    }}</span>
          
          
                  </div>
                  <div class="workspace-card__footer-item flex-shrink-0 align-items-center">
                    <d-empty-wallet-icon :size="20" color="#414042" class="mx-1" />
                    <span style="color:#414042 !important">{{ price ?? "N/A" }}</span>
                    <span style="color:#414042 !important"> {{ $t("R.S") }}</span>
                  </div>
          
                </div> -->
              <!-- <div class="workspace-card__footer" style="height: 55px;">
                  <div class="workspace-card__footer-item flex-grow-1">
                    <d-localisation-icon :size="20" color="#979797" class="mx-1" />
                    <span v-if="company.map_address && company.map_address.address_name">{{ company.map_address.address_name
                    }}</span>
          
          
                  </div>
                  <div class="workspace-card__footer-item flex-shrink-0 align-items-center">
                    <d-empty-wallet-icon :size="20" color="#414042" class="mx-1" />
                    <span style="color:#414042 !important">{{ price ?? "N/A" }}</span>
                    <span style="color:#414042 !important"> {{ $t("R.S") }}</span>
                  </div>
          
                </div> -->
              <!-- <div class="workspace-card__footer" style="height: 55px;">
                  <div class="workspace-card__footer-item flex-grow-1">
                    <d-localisation-icon :size="20" color="#979797" class="mx-1" />
                    <span v-if="company.map_address && company.map_address.address_name">{{ company.map_address.address_name
                    }}</span>
          
          
                  </div>
                  <div class="workspace-card__footer-item flex-shrink-0 align-items-center">
                    <d-empty-wallet-icon :size="20" color="#414042" class="mx-1" />
                    <span style="color:#414042 !important">{{ price ?? "N/A" }}</span>
                    <span style="color:#414042 !important"> {{ $t("R.S") }}</span>
                  </div>
          
                </div> -->
              <div
                class="d-flex align-items-center justify-content-between px-3 pb-3"
              >
                <router-link class="router-link" style="width: 100px">
                  <button
                    class="btn btn-main"
                    style="
                      width: 100px;
                      height: 30px;
                      font-size: 12px;
                      padding: 5px;
                    "
                  >
                    عرض التفاصيل
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
// import workspaceAPI from "@/services/api/workspace";
// import WorkSpaceCard from "@/components/pages/workspaces/home/recent-workspaces/WorkSpaceCard.vue";
export default {
  name: "top-workspaces",
  components: {
    // WorkSpaceCard,
  },

  data: () => {
    return {
      loading: true,
      items: [
        {
          id: 1,
          title: "لقاءات تعليميه",
          description: "سنمشيب تمسينشبت مسنيشتبمنشستبمنتسشيبمنت",
        },
      ],
    };
  },

  methods: {
    openAddWorkSpace() {
      this.fireOpenDialog("add-dialog");
    },

    async getRecentWorkSpaces() {
      console.log("please the design");
      // this.loading = true;
      // try {
      //   let { data } = await workspaceAPI.getRecentWorkSpaces();
      //   if (data.success) {
      //     this.items = data.data;
      //   }
      //   this.loading = false;
      // } catch (error) {
      //   this.loading = false;
      // }
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

.workspace-card {
  border-radius: 10px;
}

.workspace-card__footer {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  font-size: 1.3em;
}

.workspace-card__footer-item {
  display: flex;
  margin: 10px;
}

.workspace-card__footer-item span {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: start;
  color: #979797;
  /* height: 22px;
      overflow: hidden;
      text-overflow: ellipsis; */
}

.workspace-card__title {
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  text-transform: capitalize;
  text-align: start;
  margin: 10px 0;
  color: #414042;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.workspace-card__description {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* or 142% */
  text-align: start;
  color: #737373;
  height: 40px;
  word-break: break-all;
  margin-bottom: 0;
}

.workspace-card__content {
  padding: 5px 16px;
}

.workspace-card__category {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #1fb9b3;
}

.workspace-card__image {
  height: 173px;
  border-radius: 8px 8px 0 0;
  min-height: 173px;
}

.workspace-card__image > img {
  border-radius: 8px 8px 0 0;
  height: 100%;
  width: 100%;
  object-fit: fill;
}

.workspace-card__image .swiper-button-prev {
  right: 5px !important;
  left: auto !important;
  color: black !important;
  border-radius: 100% !important;
  background: white;
  border: black !important;
  width: 23px !important;
  height: 23px !important;
}

.workspace-card__image .swiper-button-next {
  left: 5px !important;
  right: auto !important;
  color: black !important;
  border-radius: 100% !important;
  background: white;
  border: black !important;
  height: 23px !important;
  width: 23px !important;
}
</style>
