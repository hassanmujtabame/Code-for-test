<template>
  <div style="margin-top: 96px;">


<div class="container">
    <div class="box shadow p-3">

        <div class="row">
            <div class="col-md-6">
                <div >
                  <p style="background-color:#FFBC00; width: fit-content;" class=" px-3 rounded-1  text-white">
                    {{itemPage.categoryName}}
                  </p>
                  <h2>
                    {{itemPage.title}}
                  </h2>
                  <p class="t-c">
                    {{dateTextMonth(itemPage.date)}}
                    <span>
                        |
                    </span>
                   {{itemPage.time?timeFormatAMPM(itemPage.time):'N/A'}}
                  </p>
                  <p class="t-c">
                   {{itemPage.content}}
                  </p>
                  <div>
                    <button  @click="openConfirmMeeting" class="btn bg-main p-2 px-4 text-white">أنضم الى اللقاء</button>
                  </div>
                </div>
            </div>
            <div class="col-md-6">
                <div>
                   
                    <iframe 
                  height="384"
                    class="rounded-3 w-100 "
                    :src="itemPage.video??'https://www.youtube.com/embed/dGG9pWXS3ZQ'" 
                    title="مقطع تعريفي عن شركة رياديات" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe> 
                </div>
            </div>
        </div>
      
    </div>


</div>
<div>
    <div class="sec-five mt-5 p-3">

        <div class="">
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1> لقاءات تعليمية أخرى    </h1>
            <div>
              <button class="more">{{ $t('more') }}</button>
            </div>
          </div>
          <d-swiper is-auto :items="[1,2,3,4,5,6,7,8,9,10]">
             <template v-slot="{item}">
              <router-link class="router-link" :to="getRouteLocale('network-learning-meeting-show',{id:item.id})">
                <meetingCard 
                    :img="itemTest.image"
                     :title="itemTest.title"
                     :owner="itemTest.owner"
                     :date="itemTest.date"
                     :time="itemTest.time"
                    />
                    </router-link>
            </template>
        </d-swiper>
        </div>
      </div>
</div>
<confirmJoinMeetingDialog />
<successJoinMeetingDialog />
</div>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
import confirmJoinMeetingDialog from '../learning-meetings/dialogs/confirm-join-meeting.vue';
import successJoinMeetingDialog from '../learning-meetings/dialogs/success-join-meeting.vue';
    import meetingCard from '@/components/cards/meeting.vue'
export default {
 name:'meeting-page',
 components:{
    meetingCard,
    confirmJoinMeetingDialog,
    successJoinMeetingDialog
 },
 data:()=>({
  isOwner:false,
      loading:true,
      hasError:false,
      colors:['#F2631C','#FFBC00','#2C98B3'],
      itemPage:{
        title:'خطة العمل ودراسة الجدوى المالية'
        ,categoryName:'مجلس'
        ,date:'23 يوليو'
        ,time:'2:23 ص'
        ,content:'يبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعمال يبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعمال'
        ,image:'/assets/img/learning.png'
        ,video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'
    },
    itemTest:{id:1
      ,title:'خطة العمل ودراسة الجدوى المالية'
      ,categoryName:'مجلس',
      date:'23 يوليو'
      ,time:'2:23 ص'
      ,image:'/assets/img/learning.png'
    },

 }),
 methods:{
  openConfirmMeeting(){
    this.fireOpenDialog('confirm-join-meeting',this.itemPage)
  },
  async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await meetingsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.isOwner = this.itemPage.user_info.id==this.user.id
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style>

</style>