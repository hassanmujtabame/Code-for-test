<template>
 <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else  class="container">
      <span style="display:none">{{ storyId }}</span>
        <ShowStory :isOwner="isOwner" :story="story" />
       <!-- members of network-->
       <MembersNetwork />
    </div>
    <updateItemDialog @updated="updateStory" />
    </div>
</template>

<script>
import MembersNetwork from './members-network/index.vue'
import ShowStory from './show-story.vue'
import StoriesApi from '@/services/api/stories.js'
import updateItemDialog from '../success-stories/parts/dialogs/update-item.vue'
export default {
 name:'my-story',
 components:{
    MembersNetwork,
    ShowStory,
    updateItemDialog
 },
 data:()=>{
    return {
      loading:true,
      isOwner:false,
      story:{},
      hasError:false,
    }
 },
 computed:{
  storyId(){
    return this.$route.params.id
  }
 },
 watch:{
  storyId:{
   handler(){
    this.initializing()
   }
  }
 },
 methods:{
  updateStory(newStory){
   this.story = {...this.story,...newStory}
   /*Object.keys(newStory).forEach(key=>{
    this.story[key] = newStory[key]
   })*/
  },
    async initializing(){
        this.loading=true;
        this.hasError=false
        try {
            let { data } = await StoriesApi.getItem(this.$route.params.id);
            if(data.success){
                    this.story=data.data; 
                    this.isOwner =  this.story.user_info.id == this.user.id     
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