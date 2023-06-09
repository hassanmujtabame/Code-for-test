<template>
  <div class="single-workspace mobile-center">
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
          <SectionRate :singleWorkspace="singleWorkspace" v-if="singleWorkspace.rates.length"/>
        </div>

        <div class="col-md-6 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3"
            v-if="!isOwner"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
      </div>
    </div>

    <showRescheduleDialog mode="create" />
    <DialogDeleteService />
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
  },
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
          }
        }
      } catch (error) {
        console.log("error", error);
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