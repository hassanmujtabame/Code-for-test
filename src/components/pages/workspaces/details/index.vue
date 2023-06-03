<template>
  <div class="single-workspace">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c"> </span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-6 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <!--rate service-->
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-6 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3"
            v-if="!isOwner"
          />
          <div class="box border rounded-3 p-4">
            <div class="t-c">
              <h4 class="border-bottom">وصف الخدمة</h4>
              <p v-html="singleWorkspace.desc"></p>
            </div>
            <div>
              <h3 class="border-bottom p-2">تفاصيل الخدمة</h3>
              <div class="row">
                <div class="col-6 p-2">
                  <eyeOpenIcon :size="24" color="#979797" />
                  <span> المشاهدات: </span>
                  <span class="m-c">
                    {{ singleWorkspace.views ?? "N/A" }}
                  </span>
                </div>
                <div class="col-6 p-2">
                  <starIcon :size="24" color="#979797" />

                  <span> التقيمات: </span>
                  <span class="m-c">
                    {{ singleWorkspace.rate ?? "N/A" }}
                  </span>
                </div>
                <div class="col-6 p-2">
                  <lovelyIcon :size="24" color="#979797" />
                  <span> المشترين: </span>
                  <span class="m-c">
                    {{ singleWorkspace.n_buyers ?? "N/A" }}
                  </span>
                </div>
                <div class="col-6 p-2">
                  <emptyWalletIcon :size="24" color="#979797" />
                  <span> سعر الخدمة </span>
                  <span class="m-c">
                    {{ singleWorkspace.price }} {{ $t("riyals") }}
                  </span>
                </div>
                <div class="col-6 p-2">
                  <signPostIcon :size="24" color="#979797" />
                  <span> التصنيف: </span>
                  <span class="m-c"> </span>
                </div>
                <div class="col-6 p-2">
                  <timerIcon :size="24" color="#979797" />

                  <span> مدة التنفيذ : </span>
                  <span class="m-c">
                    {{ numberToDay(singleWorkspace.execution_period) }}
                  </span>
                </div>
                <div class="col-6 p-2">
                  <!--tree view icon-->
                  <treeViewIcon />
                  <span> المجال: </span>
                  <span class="m-c">
                    {{ singleWorkspace.category_name ?? "N/A" }}
                  </span>
                </div>
                <template v-if="singleWorkspace.state == 'offline'">
                  <div class="col-6 p-2">
                    <localisationIcon :size="24" color="#979797" />
                    <span> العنوان : </span>
                    <span class="m-c">
                      {{ singleWorkspace.city ?? "N/A" }}
                    </span>
                  </div>
                  <div class="col-md-auto p-2">
                    <truckIcon :size="24" color="#979797" />
                    <span> مكان التنفيذ أو التسليم : </span>
                    <span class="m-c"> </span>
                  </div>
                </template>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="border-bottom p-2">الكلمات المفتاحية</h3>
              <div
                class="d-flex flex-wrap justify-content-start text-white word-intial pt-3"
              >
                <template v-if="singleWorkspace.keywords">
                  <p
                    class="mx-1"
                    v-for="(keyw, i) in singleWorkspace.keywords.split(',')"
                    :key="i"
                  >
                    {{ keyw }}
                  </p>
                </template>
              </div>
            </div>
            <div class="text-center">
              <span> {{ $t("publish-date") }}: </span>
              <span class="m-c fw-bolder">
                {{ dateReverse(singleWorkspace.created_at) ?? "N/A" }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionContinueLearning />
    <SectionHear />
    <showRescheduleDialog mode="create" />
    <DialogDeleteService />
  </div>
</template>

<script>
import Gallery from "./gallery/index.vue";
import SectionRate from "./rate/index.vue";
import showRescheduleDialog from "../reservations/dialogs/reschedule/index";
import WorkspaceAPI from "@/services/api/workspace";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
import SectionShareService from "./section-share-service/index.vue";
import ActionCrud from "./actions/crud.vue";
import ActionForVisiter from "./actions/visiter.vue";
import DialogDeleteService from "@/layouts/service-provider/dialogs/del-service.vue";
import treeViewIcon from "@/components/icon-svg/tree-view.vue";
import truckIcon from "@/components/icon-svg/truck.vue";
import localisationIcon from "@/components/icon-svg/localisation.vue";
import timerIcon from "@/components/icon-svg/timer.vue";
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";
import eyeOpenIcon from "@/components/icon-svg/eye-open.vue";
import signPostIcon from "@/components/icon-svg/sign-post-icon.vue";
import lovelyIcon from "@/components/icon-svg/lovely-icon.vue";
import starIcon from "@/components/icon-svg/star-icon.vue";
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
    SectionContinueLearning,
    SectionHear,
    SectionRate,
    SectionShareService,
    treeViewIcon,
    truckIcon,
    localisationIcon,
    timerIcon,
    emptyWalletIcon,
    eyeOpenIcon,
    signPostIcon,
    lovelyIcon,
    starIcon,
  },
  computed: {},
  data() {
    return {
      metaInfo_: {},
      loading: true,
      singleWorkspace: {},
    };
  },

  computed: {
    isOwner() {
      return this.singleWorkspace.user_info.id == this.user.id;
    },
  },

  methods: {
    async getDetailsWorkspace() {
      this.loading = true;
      try {
        let { data } = await WorkspaceAPI.getDetailsWorkspace(
          this.$route.params.id
        );
        if (data.success) {
          this.singleWorkspace = data.data;
          this.metaInfo_ = { title: this.singleWorkspace.title };
          try {
            await readyServiceAPIs.setAsView(this.$route.params.id);
          } catch (error) {
            console.log("error", error);
            console.log("error response", error.response);
          }
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }

      this.loading = false;
    },
  },
  mounted() {
    this.getDetailsWorkspace();
  },
};
</script>

<style>
</style>