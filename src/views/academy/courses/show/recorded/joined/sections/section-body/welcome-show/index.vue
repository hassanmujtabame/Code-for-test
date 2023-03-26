<template>
    <div class="academy-player-box">
   <img  :src="itemPage.image_path"   class="rounded-3 w-100 h-100"/> 
    </div>
</template>

<script>
export default {
  name:'welcome-show',
  props:['itemPage']
}
</script>

<style scoped>
.course-show-page-welcome>img{
  height:100%;
  width:100%;
}
</style>