<template>
  <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container">

      <div class="box shadow p-3">

        <div class="row">
          <div class="col-md-6">
            <div>
              <p style="background-color:#FFBC00; width: fit-content;" class=" px-3 rounded-1  text-white">
                {{ itemPage.categoryName }}
              </p>
              <h2>
                {{ itemPage.title }}
              </h2>
              <p class="t-c">
                <span v-if="itemPage.date">{{ dateTextMonth(itemPage.date) }}</span>
                <span v-if="itemPage.date">
                  |
                </span>
                {{ itemPage.time ? timeFormatAMPM(itemPage.time) : '' }}
              </p>
              <p class="t-c">
                {{ itemPage.content }}
              </p>
              <div>

                <button v-if="!isJoined" @click="openConfirmJoinMeeting" class="btn bg-main p-2 px-4 text-white">أنضم الى
                  اللقاء</button>
                <button v-else @click="openConfirmCancelMeeting" class="btn bg-danger p-2 px-4 text-white">إلغاء
                  الانضمام</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div>

              <iframe v-if="itemPage.video" height="384" class="rounded-3 w-100 " :src="itemPage.video"
                :title="itemPage.title" frameborder="0" sandbox="allow-same-origin allow-scripts"
                allow="payment 'none';camera 'none';microphone 'none';accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
              <img :src="itemPage.image" v-else class="border rounded-3 w-100 " height="384" :alt="itemPage.title" />
            </div>
          </div>
        </div>

      </div>


    </div>
    <!-- others meetings-->
    <SectionOtherMeetings />
    <confirmJoinMeetingDialog @success="successJoined" @cancel="successCanceled" />
    <successJoinMeetingDialog @cancel="successCanceled" />
    <confirmCancelJoinMeetingDialog @success="successCanceled" />
  </div>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
import confirmJoinMeetingDialog from '../learning-meetings/dialogs/confirm-join-meeting.vue';
import confirmCancelJoinMeetingDialog from '../learning-meetings/dialogs/confirm-cancel-join-meeting.vue';
import successJoinMeetingDialog from '../learning-meetings/dialogs/success-join-meeting.vue';
import SectionOtherMeetings from './parts/other-meetings/index.vue'
export default {
  name: 'meeting-page',
  components: {
    SectionOtherMeetings,
    confirmCancelJoinMeetingDialog,
    confirmJoinMeetingDialog,
    successJoinMeetingDialog
  },
  data: (vm) => {
    return {
      isJoined: false,
      isOwner: false,
      loading: true,
      hasError: false,
      colors: ['#F2631C', '#FFBC00', '#2C98B3'],
      defaultVideo: 'https://www.youtube.com/embed/dGG9pWXS3ZQ',
      itemPage: {

        //video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'
      },
      items: [],
      itemTest: {
        id: 1
        , title: 'خطة العمل ودراسة الجدوى المالية'
        , categoryName: 'مجلس',
        date: '23 يوليو'
        , time: '2:23 ص'
        , image: `${vm.publicPath}assets/img/learning.png`
      },

    }
  },
  methods: {
    successJoined() {
      this.isJoined = true;
      this.itemPage.available_meetings_month -= 1
    },
    successCanceled() {
      this.isJoined = false;
      this.itemPage.available_meetings_month += 1

    },
    // openConfirmJoinMeeting(){
    //   this.fireOpenDialog('confirm-join-meeting',this.itemPage)
    // },
    openConfirmJoinMeeting() {
      if (this.userIsSubNetwork && this.userSubNetwork.type == 'free' && this.itemPage.available_meetings_month > 0) {
        this.fireOpenDialog('confirm-join-meeting', this.itemPage)
      }

      else if (this.userIsSubNetwork && this.userSubNetwork.type == 'free' && this.itemPage.available_meetings_month < 1) {
        let dataEvt = {
          title: 'لا يمنك الانضمام',
          description: 'لقد استنفذت عدد اللقاءات الممنوحة لهذا الشهر',
          btns: [
            { title: this.$t('Ok') }
          ]
        }
        this.showConfirmMsg(dataEvt)
      }
      else if (!this.userIsSubNetwork) {
        let dataEvt = {
          title: 'للأسف لايمكنك  الانضمام الى اللقاء',
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الانضمام للقاء  - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من اللقاءات و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            { title: 'رقي حسابك', action: () => this.$router.push({ name: 'network-subscribe' }) }
          ]
        }
        this.showConfirmMsg(dataEvt);
        return;
      }
    },

    openConfirmCancelMeeting() {
      this.fireOpenDialog('confirm-cancel-join-meeting', this.itemPage)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await meetingsAPI.getItem(this.$route.params.id)
        if (data.success) {
          this.itemPage = data.data;
          this.isJoined = this.itemPage.is_participant
          this.isOwner = this.itemPage.user_info.id == this.user.id
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.log('error', error)
        console.log('error response', error.response)
        this.hasError = true;
      }

      this.loading = false;
    },
  },
  mounted() {
    this.initializing()
  }
}
</script>

<style></style>