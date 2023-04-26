<template>
   <div style="margin-top:85px">
<div class="container dashbord">
    <!--section header-->
    <SectionHeader />
   <!--section balance-->
   <SectionBalance/>
   <!--#section balance-->
    <div class="row mt-5">
        <div class="col-md-5 network">
            <d-card-one/>
        </div>
        <div class="col-md-5 network">
            <d-card-two />
        </div>

    </div>
    <div class="row justify-content-between ">
       
                <div class="col-12 row mt-5 gap-4">
                    <div class="col-md-5 border p-3">
                        <widget-courses />

                    </div>
                    <div class="col-md-5 border  p-3">
                       
                        <widget-learning-meetings />

                </div>
                </div>
        
        
                <div class="col-12 row  mt-3 gap-4">
                    <div class="col-md-5 border p-3">
                        <WidgetAttachments />                           
                    </div>
                    <div class="col-md-5 border p-3">
                        <widget-consultations />
                   </div>
                </div>
               
        
    </div>
</div>
</div>
</template>

<script>
import SectionHeader from './parts/section-header/index.vue'
import SectionBalance from './parts/section-balance/index.vue'
import WidgetConsultations from './parts/widget-consultations.vue';
import WidgetLearningMeetings from './parts/widget-learning-meetings.vue';
import WidgetCourses from './parts/widget-courses.vue';
import WidgetAttachments from './parts/widget-attachments.vue';
import dCardOne from './parts/card-one.vue';
import dCardTwo from './parts/card-two.vue';
export default {
name:'network-dashboard',
components:{
    SectionHeader,
    SectionBalance,
    WidgetConsultations,
    WidgetLearningMeetings,
    WidgetCourses,
    WidgetAttachments,
    dCardOne,
    dCardTwo
}
}
</script>

<style>

</style>