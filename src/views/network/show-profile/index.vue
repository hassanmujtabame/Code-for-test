<template>
 <div style="margin-top: 75px;" class="bg-body-page">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else  class="container mt-5">

           <div class="row">
               <div class="col-md-4  mt-3">
                   <userInfoCard  :member="userPage"/>
               </div>
               <div class="col-md-8 mt-3 ">
                   <div v-if="false" class="row border px-2  bg-card">
                       <div  class="px-2 col-12 col-md-6">
                           <h5>
                               متاح لتقديم الخدمات 
                           </h5>
                           <p>
                               يمكنك تصفح خدمات هذا العضو او غيره من اعضاء مقدمي الخدمة عند  الدخول الى منصة مقدمي خدمة رياديات
                           </p>
                           <div>
                               <button class="btn bg-main p-2 text-white rounded-2">
                                   الدخول للمنصة
                               </button>
                           </div>
                       </div>
                       <div class="col-12 col-md-6">
                           <img class="w-100" :src="`${publicPath}assets/img/Group 1171275405.png`" alt="">
                       </div>

                   </div>
            <!-- tabs -->
                   <sectionTabs :userPage="userPage"/>
   
               </div>
           </div>
       </div>




   </div>
</template>

<script>
  import userAPI from '@/services/api/user.js'
import userInfoCard from '@/components/cards/user-info.vue';
import sectionTabs from './section-tabs/index.vue'
export default {
name:'show-profile',
components:{
   userInfoCard,
   sectionTabs
},
   data:()=>{
    return {
        loading:true,
        hasError:false,
        userPage:{}
    }
   },
   methods:{
    async initializing(){
        this.loading =  true;
        this.hasError =  false;
        try {

           let { data } = await   userAPI.profile(this.$route.params.id) 
           if(data.success){
            this.userPage =  data.data
           }else{
            this.hasError =  true;
           }
        } catch (error) {
            console.log('error',error)
            this.hasError =  true;
        }
        this.loading =  false;
    },
   },
   mounted(){
    this.initializing()
   }
}
</script>

<style>

</style>