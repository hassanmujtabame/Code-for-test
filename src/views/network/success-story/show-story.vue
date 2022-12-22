<template>
        <div class="container">
            <d-overlays-simple v-if="loading" />
            <div v-else-if="hasError">
            <h1>هناك خطأ، يرجى إعادة تحميل الصفحة</h1>
            </div>
            <div class="row" v-else>
                <div class="col-md-8 ">
                    <div class="shadow p-3">
                        <h3 class="m-c">{{ story.title }}
                        </h3>
                        <p class="t-c">
                            تاريخ نشر: 12-4-2022
                        </p>
                        <p v-html="story.description">
                        </p>

                    </div>
                </div>
                <div class="col-md-4 ">

                    <div v-if="isOwner" class="box ">
                        <div class="box  rounded-3 p-2">
                            <div v-if="isOwner" class="text-center">
                                <button class="btn bg-main p-1 px-2 text-white" >
                                    <img src="/assets/svg/update.svg" />
                                    تعديل
                                </button>
                                <button class="btn bg-danger p-1 px-2 text-white mx-4" >
                                    <img src="/assets/svg/trash-outline.svg" />
                                    حذف
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import MembersNetwork from './members-network/index.vue'
import StoriesApi from '@/services/api/stories.js'
export default {
    props:{
        isOwner:{
            type:Boolean,
            require:true,
        },  
        storyId:{
            type:[Number,String]
        }
    },
 name:'show-story',
 components:{
    MembersNetwork
 },
 data:()=>{
    return {
      loading:true,
      story:{},
      hasError:false,
    }
 },
 methods:{
    async initializing(){
        this.loading=true;
        this.hasError=false
        try {
            let { data } = await StoriesApi.getItem(this.storyId);
            if(data.success){
                    this.story=data.data;      
            }else{
                this.hasError=true
            }
        } catch (error) {
            console.log('error',error)
            console.log('error response',error.response)
            this.hasError=true
        }
        this.loading = false
    }
 },
 mounted(){
    this.initializing()
 }
}
</script>

<style>

</style>