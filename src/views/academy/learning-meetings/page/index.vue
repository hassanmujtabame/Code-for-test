<template>
 <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container">
      <div v-if="isOwner" class="text-end">
                <div class=" d-flex gap-2 justify-content-end my-3">
            <div>
        <button @click="openEditDialog" style="height: 40px;" class="btn-main px-3 w-100 border-0 rounded-2"  role="button">
                        <d-rect-edit-icon />
                            تعديل
                    </button>
                    </div>
                    <div>
                        <button style="height: 40px; background-color:#FFBC00 ;" class="btn-main px-3 w-100 border-0 rounded-2" role="button">
                            <d-send-icon />
                                شارك
                        </button>
                    </div>
                    <div>
                    <button @click="openDeleteDialog" style="height: 40px; background-color:#FF1616 ;" class="btn-main px-3 w-100 border-0 rounded-2"   role="button">
                        <d-trash-outline-icon :size="32" color="white"/>
                        حذف
                    </button>  
                    </div>
          </div>
</div>
    <div :id="`meeting-${meetingId}`" class="box shadow p-3">
 
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
                    <button v-if="!isJoined"  @click="openConfirmJoinMeeting" class="btn bg-main p-2 px-4 text-white">أنضم الى اللقاء</button>
                    <button v-else @click="openConfirmCancelMeeting" class="btn bg-danger p-2 px-4 text-white">أنضم الى اللقاء</button>
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
<!-- others meetings-->
<div class="container">
<SectionOtherMeetings  />
</div>
<confirmJoinMeetingDialog @success="successJoined" />
<successJoinMeetingDialog @cancel="successCanceled" />
<confirmCancelJoinMeetingDialog @success="successCanceled" />
<UpdateItemDialog />
</div>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
import confirmJoinMeetingDialog from './dialogs/confirm-join-meeting.vue';
import confirmCancelJoinMeetingDialog from './dialogs/confirm-cancel-join-meeting.vue';
import successJoinMeetingDialog from './dialogs/success-join-meeting.vue';
 import SectionOtherMeetings from './parts/other-meetings/index.vue'   
import UpdateItemDialog from '../dialogs/add-meeting/index'
import instructorMeetingsAPI from '@/services/api/academy/instructor/meetings.js'
 export default {
 name:'meeting-page',
 components:{
  SectionOtherMeetings,
  confirmCancelJoinMeetingDialog,
    confirmJoinMeetingDialog,
    successJoinMeetingDialog,
    UpdateItemDialog
 },
 computed:{
  meetingId(){
    return this.$route.params.id
  }
 },
 watch:{
  meetingId(){
      this.initializing()
  }
 },
 data:()=>({
  isJoined:false,
  isOwner:false,
      loading:true,
      hasError:false,
      colors:['#F2631C','#FFBC00','#2C98B3'],
      itemPage:{
       
        video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'
    },
    items:[],
    itemTest:{id:1
      ,title:'خطة العمل ودراسة الجدوى المالية'
      ,categoryName:'مجلس',
      date:'23 يوليو'
      ,time:'2:23 ص'
      ,image:'/assets/img/learning.png'
    },

 }),
 methods:{
  successJoined(){
    this.isJoined = true;
    this.itemPage.available_meetings_month -=1 
  },
  successCanceled(){
    this.isJoined = true;
    this.itemPage.available_meetings_month +=1 
  },
  openConfirmJoinMeeting(){
    this.fireOpenDialog('confirm-join-meeting',this.itemPage)
  },
  openConfirmCancelMeeting(){
    this.fireOpenDialog('confirm-cancel-join-meeting',this.itemPage)
  },
  openEditDialog(){
    this.fireOpenDialog('add-meeting',this.itemPage)

  },
  openDeleteDialog(){
    let item = this.itemPage;
    let dataEvt = {
                title:'هل انت متأكد من حذف اللقاء؟',
                description:`${item.title}`,
                groupBtns:'d-flex justify-content-evenly',
                btns:[
                    {title:'تراجع',class:'btn btn-custmer btn-danger'},
                    {title:this.$t('confirm_delete'),action:()=>this.deleteItem(item),class:'btn btn-custmer'},
                ]

            }
            this.showConfirmMsg(dataEvt)
  },
       async deleteItem(item){
            console.mylog('deleting....',item)
            try {
                let { data } = await instructorMeetingsAPI.deleteItem(item.id)
                if(data.success){
                  this.route_push('academy-my-meetings')
                }else{
                    window.SwalError(data.message)
                }
            } catch (error) {
               
               window.DHelper.catchException.call(this,error)
                
        
            }
        },
  async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await meetingsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                    this.isJoined= this.itemPage.is_participant
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
        },
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style>

</style>