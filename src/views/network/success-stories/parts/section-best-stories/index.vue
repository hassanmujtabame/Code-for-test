<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between">
                <div class="col-md-6">

                    <h3>
                        قصص مميزة
                    </h3>
                </div>
                <div class="col-md-6 text-end">
                    <button class="btn bg-main text-white p-2 px-3" @click="openAddStory">
                        اعرض قصتك الان
                    </button>
                </div>
            </div>
            <div class="row ">

                <div v-for="(item,i) in stories" :key="i" class="col-12 col-md-6 col-lg-3 mt-2">
                   <router-link class="w-100" :to="getRouteLocale('network-success-story-show',{id:item.id})">
                    <d-story-card 
                    :image="item.image"
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
 }
},
methods:{
  openAddStory(){
    this.fireOpenDialog('add-story')
  },
    async initializing(){
        this.loading=true;
        this.hasError=false
        try {
            let { data } = await StoriesApi.getAll();//just use this for test list of stories
            if(data.success){
                    this.stories=data.data.filter((x,i)=>i<4);      
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