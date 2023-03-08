<template>
   <div class="border bg-card">

                        
<ul class="nav nav-pills mb-3 gap-3 border-bottom pb-3 py-3 px-2" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link  active" id="pills-courses-watched-tab" data-bs-toggle="pill" data-bs-target="#pills-courses-watched" type="button" role="tab" aria-controls="pills-courses-watched" aria-selected="true">الدورات التي شاهدتها</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link " id="pills-blog-tab" data-bs-toggle="pill" data-bs-target="#pills-blog" type="button" role="tab" aria-controls="pills-blog" aria-selected="false">المدونات</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link " id="pills-exhibitions-tab" data-bs-toggle="pill" data-bs-target="#pills-exhibitions" type="button" role="tab" aria-controls="pills-exhibitions" aria-selected="false">المعارض</button>
    </li>
    <li class="nav-item" role="presentation">
        <button class="nav-link " id="pills-project-tab" data-bs-toggle="pill" data-bs-target="#pills-project" type="button" role="tab" aria-controls="pills-project" aria-selected="false">المشاريع</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link " id="pills-story-tab" data-bs-toggle="pill" data-bs-target="#pills-story" type="button" role="tab" aria-controls="pills-story" aria-selected="false">قصة نجاح</button>
      </li>
 
</ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-courses-watched" role="tabpanel" aria-labelledby="pills-courses-watched-tab" tabindex="0">
        <!--courses watched-->
        <TabCourses />
    </div>
    <div class="tab-pane fade" id="pills-blog" role="tabpanel" aria-labelledby="pills-blog-tab" tabindex="0">
       <!--blogs-->
       <TabBlog />
    </div>
    <div class="tab-pane fade" id="pills-exhibitions" role="tabpanel" aria-labelledby="pills-exhibitions-tab" tabindex="0">
        <!-- exhibitions-->
        <TabExhibitions/>
    
    </div>
    <div class="tab-pane fade" id="pills-project" role="tabpanel" aria-labelledby="pills-project-tab" tabindex="0">

      <!-- project-->
        <TabProject />

    </div>

    <div class="tab-pane fade" id="pills-story" role="tabpanel" aria-labelledby="pills-story-tab" tabindex="0">
        <!-- story-->
        <TabStory/>
    </div>
  </div>
</div>
</template>

<script>
import TabCourses from '@/views/network/show-profile/section-tabs/tabs/courses-watched/index.vue'
import TabBlog from '@/views/network/show-profile/section-tabs/tabs/blog/index.vue'
import TabExhibitions from '@/views/network/show-profile/section-tabs/tabs/exhibitions/index.vue'
import TabStory from '@/views/network/show-profile/section-tabs/tabs/story/index.vue'
import TabProject from '@/views/network/show-profile/section-tabs/tabs/project/index.vue'
export default {
 name:'section-tabs',
 components:{ 
    TabCourses,
    TabBlog,
    TabExhibitions,
    TabProject,
    TabStory
 }
}
</script>

<style scoped>
.tab-pane{
  padding:10px
}
</style>