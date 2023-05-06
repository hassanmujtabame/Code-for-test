<template>
   <div class="border bg-card">

                        
<ul class="nav nav-pills mb-3 gap-3 border-bottom pb-3 py-3 px-2" id="pills-tab" role="tablist">
   <DTabBtn v-for="(tab,i) in tabs.filter(f=>f.show)" :key="i" :tag="tab.tag" :active="tab.tag===tabActive">
    {{tab.title}}
   </DTabBtn>
 
 
</ul>
  <div class="tab-content" id="pills-tabContent">
    <d-tab-pane v-for="(tab,i) in tabs.filter(f=>f.show)" :key="i" :tag="tab.tag" :active="tab.tag===tabActive">
      <component :is="tab.content" />
    </d-tab-pane>
  </div>
</div>
</template>

<script>
import TabYourCourses from './tabs/your-courses/index.vue'
import TabWatchedCourses from './tabs/courses-watched/index.vue'
import TabOffers from './tabs/offers/index.vue'
import TabBlog from './tabs/blog/index.vue'
import TabExhibitions from './tabs/exhibitions/index.vue'
import TabStory from './tabs/story/index.vue'
import TabProject from './tabs/project/index.vue'
import DTabBtn from '@/components/tabs/DTabBtn.vue'
import DTabPane from '@/components/tabs/DTabPane.vue'
export default {
 name:'section-tabs',
 props:{
  userPage:{}
 },
 components:{ 
  TabYourCourses,
  TabWatchedCourses,
    TabOffers,
    TabBlog,
    DTabBtn,
    DTabPane,
    TabExhibitions,
    TabProject,
    TabStory
 },
 data:(vm)=>{
  let tabActive='courses-watched';
  if(vm.userPage.is_partner) tabActive='offers';
  if(vm.userPage.is_instructor) tabActive='your-course';
  return{
    tabActive:tabActive,
    tabs:[
      {tag:'your-course',title:vm.$t('your-courses'),content:TabYourCourses,show:!!vm.userPage.is_instructor},
      {tag:'offers',title:vm.$t('offers'),content:TabOffers,show:!!vm.userPage.is_partner},
      {tag:'courses-watched',title:vm.$t('courses-you-have-watched'),content:TabWatchedCourses,show:true},
      {tag:'blog',title:vm.$t('the-blogs'),content:TabBlog,show:true},
      {tag:'exhibitions',title:vm.$t('the-exhibitions'),content:TabExhibitions,show:true},
      {tag:'projects',title:vm.$t('the-projects'),content:TabProject,show:true},
      {tag:'story',title:vm.$t('success-story'),content:TabStory,show:true},

    ]
  }
 }
}
</script>

<style scoped>
.tab-pane{
  padding:10px
}
</style>