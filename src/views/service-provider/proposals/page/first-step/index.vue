<template>
    <div>
        <div>
            <div class="row justify-content-between  my-2">
              <div class="col-12 d-flex gap-2 justify-content-end ">
                <template v-if="isOwner">
                  <div>
                    <button @click="openEditDialog" style="height: 40px;"
                      class="btn-main px-3 w-100 border-0 rounded-2">
                      <i class="fa-regular fa-pen-to-square"></i>
                      {{ $t('modification') }}
                    </button>
                  </div>
                  <div>
                    <button @click="openDeleteDialog" style="height: 40px;"
                      class="btn-main btn-danger px-3 w-100 border-0 rounded-2" role="button">
                      <i class="fa-solid fa-trash-can"></i>
                      {{ $t('delete') }}
                    </button>
                  </div>
                </template>
                <div v-else>
                  <button @click="openSendAbuse" class="border-0 px-3 py-1 rounded-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.86621 30.3327C6.31954 30.3327 5.86621 29.8793 5.86621 29.3327V2.66602C5.86621 2.11935 6.31954 1.66602 6.86621 1.66602C7.41288 1.66602 7.86621 2.11935 7.86621 2.66602V29.3327C7.86621 29.8793 7.41288 30.3327 6.86621 30.3327Z"
                        fill="#CDD7D8" />
                      <path
                        d="M21.7995 22.334H6.86621C6.31954 22.334 5.86621 21.8807 5.86621 21.334C5.86621 20.7873 6.31954 20.334 6.86621 20.334H21.7995C23.2529 20.334 23.9329 19.9473 24.0662 19.614C24.1995 19.2807 23.9995 18.534 22.9595 17.5073L21.3595 15.9073C20.7062 15.334 20.3062 14.4673 20.2662 13.5073C20.2262 12.494 20.6262 11.494 21.3595 10.7607L22.9595 9.16065C23.9462 8.17398 24.2529 7.37398 24.1062 7.02732C23.9595 6.68065 23.1995 6.33398 21.7995 6.33398H6.86621C6.30621 6.33398 5.86621 5.88065 5.86621 5.33398C5.86621 4.78732 6.31954 4.33398 6.86621 4.33398H21.7995C24.7195 4.33398 25.6529 5.54732 25.9595 6.26732C26.2529 6.98732 26.4529 8.50732 24.3729 10.5873L22.7729 12.1873C22.4395 12.5207 22.2529 12.9873 22.2662 13.454C22.2795 13.854 22.4395 14.214 22.7195 14.4673L24.3729 16.1073C26.4129 18.1473 26.2129 19.6673 25.9195 20.4007C25.6129 21.1073 24.6662 22.334 21.7995 22.334Z"
                        fill="#CDD7D8" />
                    </svg>
                    {{ $t('submit-report') }}
                  </button>
                </div>
              </div>
              <div class="col-12 showProposal mt-5">
                <showProposal :title="itemPage.title" :description="itemPage.description"
                  :department="itemPage.category_name" :category="itemPage.field_name" :price="itemPage.price"
                  :execution-time="itemPage.execution_period" :during="itemPage.rest_days" :place="itemPage.city"
                  :offers="itemPage.count_offer" :datePublish="itemPage.created_at" :image="itemPage.image"
                  :state="itemPage.state" :id="itemPage.id" :shareLink="shareLink" />
              </div>
              <div class="row redy-services mt-3">
                <!-- <div class="col-md-6">
                      <div class="box border p-3 rounded-2 h-100 d-flex flex-column">
                        <h2 class="border-bottom p-2 flex-shrink-0">وصف المشروع</h2>
                        <p class="p-3 flex-grow-1" v-html="itemPage.description"></p>
                        <div class="d-flex gap-3 flex-wrap flex-shrink-0">
                          <a style="text-decoration: revert;" class="t-c" href>Image 1</a>
                          <a style="text-decoration: revert;" class="t-c" href>Image 2</a>
                          <a style="text-decoration: revert;" class="t-c" href>Image 3</a>
                          <a style="text-decoration: revert;" class="t-c" href>Image 4</a>
                          <a style="text-decoration: revert;" class="t-c" href>Image 5</a>
                        </div>
                      </div>
                    </div>  -->


                <div class="col-md-6">
                  <div class="box border p-3 rounded-2" :class="{ 'mt-5l': !isOwner }">
                    <h2 class="border-bottom p-2"> تفاصيل عن المشروع</h2>

                    <div class="row">
                      <!--sect 1-->
                      <div class="col-6 p-2">
                        <emptyWalletIcon class="t-c" color="#979797" :size="24" />
                        <span>سعر الخدمة :</span>
                        <span class="m-c">{{ itemPage.price }} {{ $t('riyals') }}</span>
                      </div>
                      <!--sect 2-->
                      <div class="col-6 p-2">
                        <thunderIcon class="t-c" color="#979797" :size="24" />
                        <span>عدد العروض :</span>
                        <span class="m-c">{{ itemPage.count_offer ?? 'N/A' }}</span>
                      </div>
                      <div class="col-6 p-2">
                        <timerIcon class="t-c" color="#979797" :size="24" />
                        <span>مدة تنفيذ الخدمة :</span>
                        <span class="m-c">{{ itemPage.execution_period ?? 'N/A' }} أيام</span>
                      </div>

                      <div class="col-6 p-2">
                        <truckIcon class="t-c" color="#979797" :size="24" />
                        <span>توصيل :</span>
                        <span class="m-c">{{ itemPage.delivery ?? "N/A" }}</span>
                      </div>

                      <div class="col-6 p-2">
                        <localisationIcon class="t-c" color="#979797" :size="24" />
                        <span>مكان :</span>
                        <span class="m-c">{{ itemPage.city }}</span>
                      </div>

                      <div class="col-6 p-2">
                        <timeIcon class="t-c" color="#979797" :size="24" />
                        <span>النشر :</span>
                        <span class="m-c">{{ itemPage.created_at ? timeAgoToHuman(itemPage.created_at) : 'N/A' }}</span>
                      </div>

                      <div class="col-12">
                        <heartIcon class="t-c" color="#979797" :size="24" />

                        <span>المهارات المطلوبة :</span>
                        <div class="d-flex justify-content-start flex-wrap gap-3 mt-2">
                          <p v-for="(skill, i) in itemPage.skills.split(',')" :key="i"
                            :style="{ 'background-color': colors[i % 4] }" class="rounded-2 px-3 text-white">{{ skill }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="!isOwner" class="col-md-6">
                  <!-- user info-->
                  <SectionUserInfo :itemPage="itemPage" />
                </div>

              </div>
            </div>
          </div>
    </div>
</template>

<script>

import showProposal from "@/components/cards/proposal.vue";

import SectionUserInfo from "./parts/section-user-info/index.vue";
import SectionContinueLearning from "@/views/service-provider/common-components/section-continue-learning/index.vue";
import SectionHear from "@/views/service-provider/common-components/section-hear/index.vue";
import abuseCommentDialog from "./dialogs/abuse-comment.vue";
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";
import timerIcon from "@/components/icon-svg/timer.vue";
import timeIcon from "@/components/icon-svg/time.vue";
import localisationIcon from "@/components/icon-svg/localisation.vue";
import heartIcon from "@/components/icon-svg/heart.vue";
import thunderIcon from "@/components/icon-svg/thunder.vue";
import truckIcon from "@/components/icon-svg/truck.vue";
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";

export default {
  name: "first-step",
  props: {
    itemPage: {},
    isOwner: {}
  },
  components: {
    SectionHear,
    abuseCommentDialog,
    SectionUserInfo,
    SectionContinueLearning,
    localisationIcon,
    timeIcon,
    heartIcon,
    truckIcon,
    timerIcon,
    thunderIcon,
    emptyWalletIcon,
    showProposal,
  },
  data: () => ({
    loading: true,
    hasError: false,
    shareLink: '',

    colors: ["#2C98B3", "#1FB9B3", "#F2631C", "#FFBC00"]
  }),
  methods: {
    openSendAbuse() {
      this.fireOpenDialog("abuse-comment", this.itemPage);
    },
    openEditDialog() {
      this.fireOpenDialog("add-proposal", this.itemPage);
    },
    openDeleteDialog() {
      let dataEvt = {
        title: "انت على وشك حذف طلبك",
        description: "",
        type: "warning",
        btns: [
          {
            title: this.$t("confirm_delete"),
            action: this.deleteItem,
            class: "btn btn-danger"
          }
        ]
      };
      this.showConfirmMsg(dataEvt);
      //this.fireOpenDialog('delete-item',this.itemPage)
    },
    async deleteItem() {
      this.loading = true;
      try {
        let { data } = await proposalsAPIs.deleteItem(this.itemPage);
        if (data.success) {
          this.router_push("service-provider-my-proposals");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        //
      }
      this.loading = false;
    }
  },
  mounted() {
    this.shareLink = window.location.href
  }
};
</script>

<style>
.vue-form-wizard .wizard-progress-bar {
  float: right !important;
  transform: translateX(-15px) !important;
}

.wizard-header {
  display: none !important;
}
.showProposal .proposal-card {

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

}
</style>