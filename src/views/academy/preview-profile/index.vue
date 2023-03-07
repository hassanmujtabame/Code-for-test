<template>
  <div style="margin-top: 75px;" class="bg-body-page">
       <div class="container mt-5">

           <div class="row">
               <div class="col-md-4  mt-3">
                   <d-user-preview-profile :member="user" />
               </div>
               <div class="col-md-8 mt-3 ">
                   <div v-if="false" class="row border px-2">
                       <div  class="p-2 col-12 col-md-6">
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
                           <img class="w-100" src="/assets/img/Group 1171275405.png" alt="">
                       </div>

                   </div>
                   <sectionTabs />

   
               </div>
           </div>
       </div>

      


   </div>
</template>

<script>
import userInfoCard from '@/components/cards/user-info.vue';
import sectionTabs from './section-tabs/index.vue'
export default {
name:'show-profile',
components:{
   userInfoCard,
   sectionTabs
}
}
</script>

<style>

</style>