<template>
  <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <!-- {{isOwner}} -->
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <!--rate service-->
          <SectionRate :singleWorkspace="singleWorkspace" />
          <!-- v-if="singleWorkspace.rates.length" -->
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
                <!-- twitter-user="LindaOjo_" -->
              </ShareNetwork>
            </button>
            <!-- <button>
                      <ShareNetwork
                          network="Instagram"
                          :url="shareLink"
                          title="Share in instagram"
                          description="This is another awesome article for awesome readers"
                          >
                          <img class="h-100" :src="`${publicPath}assets/img/Instagram.png`" alt="" />
                      </ShareNetwork>
                  </button> -->
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div>
</template>

<script>
import Gallery from "./gallery/index.vue";
import SectionRate from "./rate/index.vue";
import showRescheduleDialog from "../reservations/dialogs/reschedule/index";
import WorkspaceAPI from "@/services/api/workspace";
import SectionShareService from "./section-share-service/index.vue";
import ActionCrud from "./actions/crud.vue";
import ActionForVisiter from "./actions/visiter.vue";
import DialogDeleteService from "@/layouts/service-provider/dialogs/del-service.vue";
import Info from "./info/index.vue";
import continueCourseCard from "../../../../components/cards/continueCourseCard.vue";
import whatPeopleSaid from "../../../../components/cards/whatPeopleSaid.vue";
import readyServiceAPIs from "@/services/api/service-provider/provider/ready-service";

export default {
  name: "page-service-ready",
  metaInfo() {
    return { ...this.metaInfo_ };
  },
  metaInfo2: {
    title: "ريادات- Riadiat",
    titleTemplate: "%s | ريادات- Riadiat",
  },
  components: {
    Gallery,
    showRescheduleDialog,
    DialogDeleteService,
    ActionCrud,
    ActionForVisiter,
    SectionRate,
    SectionShareService,
    Info,
    continueCourseCard,
    whatPeopleSaid,
  },
  data() {
    return {
      metaInfo_: {},
      loading: true,
      singleWorkspace: {},
      shareLink: "",
    };
  },

  computed: {
    // isOwner() {
    //   return this.singleWorkspace.user_info.id == this.user.id;
    // },
    // isOwner() {
    //   return this.singleWorkspace.user_info.id == this.user.id;
    // },
  },

  methods: {
    async getDetailsWorkspace() {
      this.loading = true;
      try {
        let { data } = await WorkspaceAPI.getDetailsWorkspace(
          this.$route.params.id
        );
        this.loading = false;

        if (data.success) {
          this.loading = false;

          this.singleWorkspace = data.data;
          this.metaInfo_ = { title: this.singleWorkspace.title };

          try {
            await readyServiceAPIs.setAsView(this.$route.params.id);
          } catch (error) {
            console.log("error", error);
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  mounted() {
    this.getDetailsWorkspace();
    this.shareLink = window.location.href;
    // this.shareLink = `${window.location.origin}${window.location.pathname}`;
  },
};
</script>
<style></style>
