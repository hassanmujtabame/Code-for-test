<template>
    <div style="margin-top: 92px">
        <ShowStory isOwner :storyId="73" />
       <!-- members of network-->
       <MembersNetwork />
    </div>
</template>

<script>
import MembersNetwork from './members-network/index.vue'
import ShowStory from './show-story.vue'
import StoriesApi from '@/services/api/stories.js'
export default {
 name:'my-story',
 components:{
    MembersNetwork,
    ShowStory
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
 }
}
</script>

<style>

</style>