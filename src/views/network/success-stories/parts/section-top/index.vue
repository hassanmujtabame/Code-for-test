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
  data:()=>{
    return {
    successStories:false
 }
  },
 methods:{
  openAddStory(){  
  if(this.successStories){ 
    this.fireOpenDialog('add-story')
  }else{
        let dataEvt ={
                        title:'للأسف لايمكنك نشر قصتك',
                        description:`انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من نشر قصة - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من  التسجيل معنا والحصول على المزيد من المميزات في الشبكة`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`,
                        btns:[
                            {title:'رقي حسابك',action:()=>this.$router.push({name: 'network-subscribe'})}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;
  }
  },
        checkSubscriptionOptions(){
                for (let index = 0; index < this.user.subscription_options.length; index++) {
                    const element = this.user.subscription_options[index];
                   if (element.key == "success_stories") {
                        this.successStories = true
                    } 
                }
    }
 },
 mounted(){
    this.checkSubscriptionOptions()
}
}
</script>

<style>

</style>