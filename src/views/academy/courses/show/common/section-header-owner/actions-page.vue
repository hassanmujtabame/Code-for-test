<template>
  <div class="d-flex gap-2 justify-content-end my-3">
    <div v-if="itemPage.exams.length > 0">
      <button
        @click="showConfirmDeleteExam(itemPage.exams[0])"
        class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2"
      >
        <i class="fa fa-file-circle-minus"></i>
        حذف الاختبار
      </button>
    </div>
    <div>
      <button
        @click="addExam"
        class="btn btn-action-page btn-primary px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <i v-if="itemPage.exams.length > 0" class="fa fa-file-pen"></i>
        <i v-else class="fa fa-file-circle-plus"></i>
        {{
          itemPage.exams.length > 0 ? $t("exam-modification") : $t("add-exam")
        }}
      </button>
    </div>
    <div>
      <button
        @click="updateCourse"
        class="btn-main btn-action-page px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <i class="fa fa-pen-to-square"></i>
        تعديل
      </button>
    </div>
    <div>
      <button
        v-b-modal="'my-modal'"
        class="btn-main btn-action-page btn-warning px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <i class="fa-solid fa-share-nodes"></i>
        شارك
      </button>
    </div>
    <div>
      <button
        @click="confirmDeleteItem"
        class="btn-main btn-action-page btn-delete px-3 w-100 border-0 rounded-2"
        role="button"
      >
        <i class="fa fa-trash-can"></i>
        حذف
      </button>
    </div>
    <!-- The modal -->
    <b-modal id="my-modal" :hide-header="true" :hide-footer="true">
      <h5 style="color: #ebae05" class="py-3">
        شارك الدورة على مواقع التواصل الاجتماعي
      </h5>
      <img
        style="display: flex; margin: auto"
        :src="`${publicPath}assets/img/Group 1171276011.png`"
      />
      <div
        class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition mt-4"
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
    </b-modal>
  </div>
</template>

<script>
import academyAPI from "@/services/api/academy";
export default {
  name: "actions-page",
  props: {
    itemPage: {},
  },
  data() {
    return {
      shareLink: "",
    };
  },
  watch: {
    itemPage: {
      deep: true,
      immediate: true,
      handler() {},
    },
  },
  methods: {
    updateCourse() {
      this.fireOpenDialog("add-course-first", this.itemPage);
      //this.fireOpenDialog('update-course',this.itemPage)
    },
    confirmDeleteItem() {
      let dataEvt = {
        title: "انت على وشك حذف الدورة",
        description: `${this.itemPage.title}`,
        type: "warning",
        btns: [
          {
            title: this.$t("confirm_delete"),
            action: this.deleteItem,
            class: "btn btn-danger",
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },
    async deleteItem() {
      try {
        let { data } = await academyAPI.coursesApi.deleteItem(this.itemPage.id);
        if (data.success) {
          this.router_push("academy-instructor-your-courses");
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.mylog("error.response", error.response);
        if (error.response) {
          //if(error.response.status==500)
          window.SwalError(error.response.data.message);
        }
      }
    },
    addExam() {
      let item = { id: null, title: null };
      if (this.itemPage.exams.length > 0) {
        item = this.itemPage.exams[0];
      }
      this.fireOpenDialog(`add-exam-course-dialog`, {
        page: this.itemPage,
        item: item,
      });
    },
    showConfirmDeleteExam(lect) {
      let dataEvent = {
        title: "هل حقا تريد حذف هذا الاختبار؟",
        description: lect.title,
        groupBtns: "d-flex justify-content-evenly",
        btns: [
          { title: "تراجع", class: "btn btn-custmer btn-danger" },
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteExam(lect),
            class: "btn btn-custmer",
          },
        ],
      };
      this.showConfirmMsg(dataEvent);
    },
    async deleteExam(lect) {
      console.mylog("deleting ...", lect);
      try {
        let { data } = await academyAPI.examsAPI.deleteExam(lect.id);
        if (data.success) {
          this.$emit("delete", lect);
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.setErrorsForm(this.$refs.form, response);
          }
        }
      }
    },
  },
  mounted() {
    this.shareLink = window.location.href;
  },
};
</script>

<style></style>
