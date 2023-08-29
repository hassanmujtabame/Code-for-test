
<template>
  <div style="margin-top: 85px " class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <template v-else>
 <PageOnSite :itemPage="itemPage" :isOwner="isOwner" v-if="itemPage.type=='on-site'" />
 <!-- <PageOnSite :itemPage="itemPage" :isOwner="isOwner" v-if="itemPage.type==''" /> -->
 <PageLive :itemPage="itemPage" :isOwner="isOwner" v-if="itemPage.type=='live'"/>
 <PageRecorded :itemPage="itemPage" :isOwner="isOwner" v-if="itemPage.type=='recorded'"/>
<addCourseDialog />

</template>
 </div>
 </template>
 
 <script>
 import PageOnSite from './on-site/index.vue'
 //import PageRecordedGuest from './recorded/guest/index.vue'
 import PageRecorded from './recorded/joined/index.vue'
 import PageLive from './live/index.vue'
 import coursesAPI from '@/services/api/academy/courses'
 import addCourseDialog from '@/views/academy/instructor/your-courses/dialogs/add-course/first-dialog'
 export default {
  name:'course-show',
  components:{
   PageOnSite,
   //PageRecordedGuest,
   addCourseDialog,
   PageRecorded,
   PageLive
  },
  data:()=>{
     return {
         isOwner:true,
         loading:false,
         hasError:false,
         itemPage:{}
     }
  },
   watch:{
  '$route':{
    deep:true,
    handler(){
    this.initializing()
    }
  }
},
  methods:{
     async initializing() {
       this.loading = true;
       this.hasError = false;
             try {
                 let { data } = await coursesAPI.getItem(this.$route.params.id)
                 if (data.success) {
                   console.log('datalll',data);
                    this.itemPage = data.data;
                    this.isOwner = this.itemPage.user_info.id==this.user.id
                    if((!this.isOwner && !this.itemPage.user_is_join_course)){
                      this.router_push('academy-course-show',{id:this.itemPage.id})
                    }
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
 
 <style scoped>
 .course-show-page{
     width: 100%;
     background: white;
     padding: 5px;
     border-radius: 10px 20px;
 }
 </style>