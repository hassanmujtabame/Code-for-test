<template>
  <div class="consulting">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-6">
              <h1 class="fs-1 text-white">   قصص نجاح </h1>
              <p class="text-white">لاشك اننا نرغب بقرأه قصص نجاح الاخرين حتى نرسم طريقاً لنا مليئ بالامل والطموح</p>
            <button v-if="user && !user.has_story" class="btn border text-white px-3"  @click="openAddStory">
                اعرض قصتك الان 
            </button>
            </div>
            <div class="col-md-6">
              <div style="overflow: inherit" class="m-auto text-start ">
                <img class="img-fluid" :src="`${publicPath}assets/img/Frame@2x.png`" alt="" />
              </div>
            </div>
          </div>
          <div class="star-cons">
            <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
          </div>
          <div class="star-cons stars">
            <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
          </div>
        </div>
      </div>
</template>

<script>
export default {
 name:'section-top',
 methods:{
  openAddStory(){
    this.fireOpenDialog('add-story')
  }
 }
}
</script>

<style>

</style>