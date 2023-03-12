<template>
 <div style="margin-top: 85px" >
 <div class="row">
    <div class="col-3">
      <sectionUsers />
    </div>
    <div class="col-6">
      <sectionChat />
    </div>
    <div class="col-3">
      <sectionAbout />
    </div>
 </div>
 </div>
</template>

<script>
import sectionUsers from './parts/section-users/index.vue'
import sectionAbout from './parts/section-about/index.vue'
import sectionChat from './parts/section-chat/index.vue'
export default {
 name:'conversations-page',
 components:{
   sectionUsers,
   sectionAbout,
   sectionChat
 },
 data:()=>({})
}
</script>

<style>

</style>