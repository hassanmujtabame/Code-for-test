<template>
  <div style="margin-top: 96px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else class="container">
      <div v-if="isOwner && userAcademyRole == 'instructor'" class="text-start">
        <div class="d-flex gap-2 justify-content-end my-3">
          <div>
            <button
              @click="openEditDialog"
              style="height: 40px"
              class="btn-main px-3 w-100 border-0 rounded-2"
              role="button"
            >
              <d-rect-edit-icon />
              تعديل
            </button>
          </div>
          <div>
            <button
              v-b-modal="'my-modal'"
              style="height: 40px; background-color: #ffbc00"
              class="btn-main px-3 w-100 border-0 rounded-2"
              role="button"
            >
              <d-send-icon />
              شارك
            </button>
          </div>
          <div>
            <button
              @click="openDeleteDialog"
              style="height: 40px; background-color: #ff1616"
              class="btn-main px-3 w-100 border-0 rounded-2"
              role="button"
            >
              <d-trash-outline-icon :size="32" color="white" />
              حذف
            </button>
          </div>
        </div>
      </div>
      <div :id="`meeting-${meetingId}`" class="p-3">
        <div class="row">
          <div class="col-12 px-3">
            <div>
              <iframe
                id="vimeoPlayer"
                v-if="itemPage.video"
                height="620px"
                class="rounded-3 w-100"
                :src="itemPage.video + '?title=0&&byline=0&&portrait=0'"
                :title="itemPage.title"
                allowfullscreen
              ></iframe>
              <img
                :src="itemPage.image"
                v-else
                style="cursor: pointer"
                class="border rounded-3 w-100"
                height="620px"
                :alt="itemPage.title"
              />
            </div>
          </div>
          <div class="d-flex col-12 px-3 my-4 gap-2">
            <div
              :class="itemPage.type == 'on-site' ? 'col-md-8 col-12' : 'col-12'"
            >
              <p
                style="color: #2cb7b3; font-size: 20px; font-weight: bold"
                class=""
                v-if="itemPage.type === 'live'"
              >
                لقاء اونلاين
              </p>
              <p
                style="color: #2cb7b3; font-size: 20px; font-weight: bold"
                class=""
                v-if="itemPage.type === 'recorded'"
              >
                لقاء مسجل
              </p>
              <p
                style="color: #2cb7b3; font-size: 20px; font-weight: bold"
                class=""
                v-if="itemPage.type === 'on-site'"
              >
                لقاء حضورى
              </p>
              <!-- <p
                style="background-color: #ffbc00; width: fit-content"
                class="px-3 rounded-1 text-white"
              >
                {{ itemPage.categoryName }}
              </p> -->
              <div>
                <p
                  style="color: #414042; font-size: 24px; font-weight: semibold"
                >
                  {{ itemPage.title }}
                </p>
                <p class="t-c">
                  <span v-if="itemPage.date">{{
                    dateTextMonth(itemPage.date)
                  }}</span>
                  <span v-if="itemPage.date"> | </span>
                  {{ itemPage.time ? timeFormatAMPM(itemPage.time) : "" }}
                </p>
                <p
                  v-if="itemPage.map_address"
                  style="color: #415c5e; font-size: 14px"
                  class="py-2 px-2"
                >
                  {{ itemPage.map_address }}
                </p>
                <p style="color: #415c5e; font-size: 14px" class="py-2 px-2">
                  {{ itemPage.content }}
                </p>
              </div>
              <div class="d-flex my-2">
                <button
                  @click="openConfirmJoinMeeting"
                  style="background-color: #1fb9b3; width: 100%"
                  class="btn text-light"
                >
                  انضم الى اللقاء
                </button>
              </div>
            </div>
            <div
              v-if="itemPage.type == 'on-site'"
              :class="itemPage.type == 'on-site' ? 'col-md-4 col-12' : ''"
            >
              <GmapMap
                :center="{ lat: 24.774265, lng: 46.738586 }"
                :zoom="10"
                style="width: 100%; height: 400px"
              >
              </GmapMap>
            </div>
          </div>

          <!-- <div
            style="background-color: #fafafa"
            class="col-md-12 d-flex flex-column my-2 rounded-3"
          >
            <p
              class="px-2 py-4"
              style="color: #cf1f3e; font-size: 20px; font-weight: semibold"
            >
              محاور الدورة
            </p>
            <ul class="d-flex align-items-center gap-2">
              <li style="list-style: none">١. مقدمة</li>
              <li style="list-style: none">٢. الخطة</li>
              <li style="list-style: none">٣. مقدمة مالية</li>
              <li style="list-style: none">٤. علم الماليات</li>
              <li style="list-style: none">٥. طريقة العمل</li>
              <li style="list-style: none">٦. ما العمل؟</li>
            </ul>
          </div> -->
        </div>
      </div>
      <!-- The modal -->
      <b-modal id="my-modal" :hide-header="true" :hide-footer="true">
        <h5 style="color: #ebae05" class="py-3">
          شارك اللقاء على مواقع التواصل الاجتماعي
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
    <!-- others meetings-->
    <div class="containerl px-4">
      <SectionOtherMeetings />
    </div>
    <confirmJoinMeetingDialog
      @success="successJoined"
      @cancel="successCanceled"
    />
    <successJoinMeetingDialog @cancel="successCanceled" />
    <confirmCancelJoinMeetingDialog @success="successCanceled" />
    <UpdateItemDialog />
  </div>
</template>

<script>
import meetingsAPI from "@/services/api/learning-meetings.js";
import confirmJoinMeetingDialog from "@/views/network/learning-meetings/dialogs/confirm-join-meeting.vue";
import confirmCancelJoinMeetingDialog from "@/views/network/learning-meetings/dialogs/confirm-cancel-join-meeting.vue";
import successJoinMeetingDialog from "@/views/network/learning-meetings/dialogs/success-join-meeting.vue";
import SectionOtherMeetings from "./parts/other-meetings/index.vue";
import UpdateItemDialog from "../dialogs/add-meeting/index";
import instructorMeetingsAPI from "@/services/api/academy/instructor/meetings.js";
export default {
  name: "meeting-page",
  components: {
    SectionOtherMeetings,
    confirmCancelJoinMeetingDialog,
    confirmJoinMeetingDialog,
    successJoinMeetingDialog,
    UpdateItemDialog,
  },
  computed: {
    meetingId() {
      return this.$route.params.id;
    },
  },
  watch: {
    meetingId() {
      this.initializing();
    },
  },
  data: (vm) => {
    return {
      videoId: null,
      videoStatus: null,
      isJoined: false,
      isOwner: false,
      join_meeting: false,
      loading: true,
      hasError: false,
      colors: ["#F2631C", "#FFBC00", "#2C98B3"],
      itemPage: {},
      items: [],
      shareLink: "",
      itemTest: {
        id: 1,
        title: "خطة العمل ودراسة الجدوى المالية",
        categoryName: "مجلس",
        date: "23 يوليو",
        time: "2:23 ص",
        image: `${vm.publicPath}assets/img/learning.png`,
      },
    };
  },
  methods: {
    successJoined() {
      this.isJoined = true;
      this.itemPage.available_meetings_month -= 1;
    },
    successCanceled() {
      this.isJoined = true;
      this.itemPage.available_meetings_month += 1;
    },
    openConfirmJoinMeeting() {
      if (
        (this.userIsSubAcademy || this.userIsSubNetwork) &&
        this.itemPage.available_meetings_month > 0
      ) {
        // if (this.userIsSubNetwork && this.userSubNetwork.type == 'free' && this.itemPage.available_meetings_month > 0)
        this.fireOpenDialog("confirm-join-meeting", this.itemPage);
      } else if (
        this.join_meeting &&
        this.itemPage.available_meetings_month < 1
      ) {
        let dataEvt = {
          title: "لا يمكنك الانضمام",
          description: "لقد استنفذت عدد اللقاءات الممنوحة لهذا الشهر",
          btns: [{ title: this.$t("Ok") }],
        };
        this.showConfirmMsg(dataEvt);
      } else if (!this.join_meeting) {
        let dataEvt = {
          title: "للأسف لايمكنك  الانضمام الى اللقاء",
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الانضمام للقاء  - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من اللقاءات و المزيد من المميزات في الأكاديمية`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            {
              title: "رقي حسابك",
              action: () => this.router_push("academy-subscribe"),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
    },

    openConfirmCancelMeeting() {
      this.fireOpenDialog("confirm-cancel-join-meeting", this.itemPage);
    },
    openEditDialog() {
      this.fireOpenDialog("add-meeting", this.itemPage);
    },
    openDeleteDialog() {
      let item = this.itemPage;
      let dataEvt = {
        title: "هل انت متأكد من حذف اللقاء؟",
        description: `${item.title}`,
        groupBtns: "d-flex justify-content-evenly",
        btns: [
          { title: "تراجع", class: "btn btn-custmer btn-danger" },
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteItem(item),
            class: "btn btn-custmer",
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
    },

    async deleteItem(item) {
      console.mylog("deleting....", item);
      try {
        let { data } = await instructorMeetingsAPI.deleteItem(item.id);
        if (data.success) {
          this.$router.push({ name: "academy-instructor-my-meetings" });
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
    },

    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await meetingsAPI.getItem(this.$route.params.id);
        if (data.success) {
          this.itemPage = data.data;
          console.log("itemPage tets", data.data);
          this.isJoined = this.itemPage.is_participant;
          this.isOwner = this.itemPage.user_info.id == this.user.id;
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
        this.hasError = true;
      }

      this.loading = false;
    },
    checkSubscriptionOptions() {
      if (this.user && this.user.subscription_options) {
        for (
          let index = 0;
          index < this.user.subscription_options.length;
          index++
        ) {
          const element = this.user.subscription_options[index];
          if (element.key == "show_meetings") {
            this.join_meeting = true;
          }
        }
      }
    },

    extractVideoId(url) {
      const vimeoUrl = url.trim(); // Remove leading/trailing spaces

      // Regex pattern to match Vimeo video URLs
      const vimeoRegex =
        /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|video\/|)(\d+)(?:|\/\?)/;

      // Match the Vimeo video ID using the regex pattern
      const match = vimeoUrl.match(vimeoRegex);

      if (match && match.length >= 2) {
        const videoId = match[2]; // Extracted Vimeo video ID
        console.log("Extracted Video ID:", videoId);
        this.videoId = videoId;
        return videoId;
        // You can use the extracted videoId in your logic here
      } else {
        console.log("Invalid Vimeo URL or no ID found.");
        // Handle invalid URL or no ID found
      }
    },
  },
  mounted() {
    this.checkSubscriptionOptions();
    this.initializing();
    this.shareLink = window.location.href;
  },
};
</script>

<style>
.modal-backdrop {
  --bs-backdrop-zindex: none !important;
}

#my-modal___BV_modal_header_,
#my-modal___BV_modal_footer_ {
  visibility: hidden !important;
}
</style>
