<template>
  <div style="margin-top: 96px;">
<div class="container">
    <div class="row  profile-services ">
        <div class="col-12 col-md-4 mt-3">
          <!--sidebar-->
          <Sidebar />
        </div>
        <div class="col-12 col-md-8 mt-3">
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                    <!-- معومات العرض-->
                    <SectionExhibition />
                    <!--معومات شخصية  -->
                    <SectionPersonal/>
                    <!--معلومات الدراسة -->
                    <SectionEducation />
                    <!--معلومات مهنية -->
                    <SectionProfessional />
                    <!--معلومات الاقامة -->
                    <SectionResidence />
                    <!-- معلومات التواصل -->
                    <SectionCommunication />
                    <!-- اعدادات الاشعارات -->
                    <SectionSettingsNotif />
                    <!--قائمة الحظر -->
                    <SectionListBlocks />
                    <!--معرض الاعمال -->
                    <SectionShowerProject />
                 
          </div>
        </div>
      </div>

</div>
</div>
</template>

<script>
import Sidebar from './parts/sidebar/index.vue'
import SectionExhibition from './parts/sections/information-exhibition/index.vue'
import SectionPersonal from './parts/sections/information-personal/index.vue'
import SectionEducation from './parts/sections/information-education/index.vue'
import SectionProfessional from './parts/sections/information-professional/index.vue'
import SectionCommunication from './parts/sections/information-communication/index.vue'
import SectionResidence from './parts/sections/information-residence/index.vue'
import SectionSettingsNotif from './parts/sections/settings-notif/index.vue'
import SectionListBlocks from './parts/sections/list-blocks/index.vue'
import SectionShowerProject from './parts/sections/shower-project/index.vue'
export default {
 name:'show-profile',
 components:{
    Sidebar,
    SectionExhibition,
    SectionPersonal,
    SectionEducation,
    SectionCommunication,
    SectionProfessional,
    SectionResidence,
    SectionSettingsNotif,
    SectionListBlocks,
    SectionShowerProject
 }
}
</script>

<style>

</style>