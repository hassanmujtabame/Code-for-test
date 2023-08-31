<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between">
                <div class="col-md-6">

                    <h3>
                        قصص مميزة
                    </h3>
                </div>
                <div class="col-md-6 text-start ">
                    <button v-if="user && !user.has_story" class="btn bg-main text-white p-2 px-3" @click="openAddStory">
                        اعرض قصتك الان
                    </button>
                </div>
            </div>
            <div class="row ">
                <div v-for="(item,i) in stories" :key="i" class="col-12 col-md-6 col-lg-3 mt-2">
                   <router-link class="w-100" :to="getRouteLocale('network-success-story-show',{id:item.id})">
                    <d-story-card 
                        :image="item.user_info.image"
                        :title="item.title"
                        :name="item.user_info.name"
                        :description="item.user_info.job"
                   />
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StoriesApi from '@/services/api/stories.js'
export default {
 name:'best-stories',
 data:()=>{
    return {
    stories:[],
    loading:true,
    hasError:false,
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
                            {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;
  }
  },
    async initializing(){
        this.loading=true;
        this.hasError=false
        try {
            let { data } = await StoriesApi.getBestStories();//just use this for test list of stories
            if(data.success){
                    this.stories=data.data    
            }else{
                this.hasError=true
            }
        } catch (error) {
            console.mylog('error',error)
            console.mylog('error response',error.response)
            this.hasError=true
        }
        this.loading = false
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
    this.initializing()
    this.checkSubscriptionOptions()
}
}
</script>

<style>

</style>