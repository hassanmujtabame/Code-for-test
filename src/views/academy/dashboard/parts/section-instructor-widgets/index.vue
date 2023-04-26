<template>
  <div class="row justify-content-between mt-5 ">


              
                    <div class="col-md-6 ">
                    <div class="widget-card w-100 mt-3 p-3">
                        <div class="border p-3">
                        <widget-exams />
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6">
                        <div class="widget-card w-100 mt-3 p-3">
                            <div class="border p-3">
                            <widget-projects />
                            </div>
                        </div>
                </div>
   
             
                    <div class="col-md-6 ">
                        <div class="widget-card w-100  mt-3 p-3">
                        <div class="border p-3">
                            <widget-meetings />
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="widget-card w-100 mt-3 p-3">
                            <div class="border p-3">
                            <widget-blog />
                            </div>
                        </div>
                   </div>
          
      
    </div>
</template>

<script>
import WidgetBlog from './widget-blog.vue';
import WidgetMeetings from './widget-meetings.vue';
import WidgetProjects from './widget-projects.vue';
import WidgetExams from './widget-exams.vue';

export default {
 name:'widgets-index',
 components:{
    WidgetBlog,
    WidgetMeetings,
    WidgetProjects,
    WidgetExams,
 }
}
</script>

<style scoped>
.widget-card{
    height: 100%;
}
</style>