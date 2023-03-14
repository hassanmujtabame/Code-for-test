<template>
 <div style="margin-top: 75px" class="bg-body-page" >
 <div class="container bg-white mt-5 rounded-2">
 <div class="row">
    <div class="col-4 border-left  p-0">
      <sectionUsers />
    </div>
    <div class="col-8 border-left border-right p-0">
      <sectionChat />
    </div>
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
.border-left{
  border-left: 1px solid #eaeaea;
}
.border-right{
  border-right: 1px solid #eaeaea;
}
.border-top{
  border-top: 1px solid #eaeaea;
}
.border-bottom{
  border-bottom: 1px solid #eaeaea;
}
</style>