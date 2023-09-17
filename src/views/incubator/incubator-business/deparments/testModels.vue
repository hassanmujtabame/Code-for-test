<template>
  <div class="container" style="margin-top:90px">
<form-wizard>
  <tab-content title="بيانات المشروع">
    <electronicFeasibilityStudy1/>
  </tab-content>
  <tab-content title="الدراسة التمهيدية ">
    <electronicFeasibilityStudy2/>

   </tab-content>
   <tab-content title="الدراسة التسويقية ">
    <electronicFeasibilityStudy3/>

   </tab-content>
     <tab-content title="الدراسة الفنية  ">
    <electronicFeasibilityStudy4/>
   </tab-content>
     <tab-content title="الدراسة المالية  ">
     Yuhuuu! This seems pretty damn simple
   </tab-content>
</form-wizard>
  </div>
</template>
<script>

import electronicFeasibilityStudy1 from './electronicFeasibilityStudy1';
import electronicFeasibilityStudy2 from './electronicFeasibilityStudy2';
import electronicFeasibilityStudy3 from './electronicFeasibilityStudy3';
import electronicFeasibilityStudy4 from './electronicFeasibilityStudy4';

import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
export default{

components: {
  FormWizard,
  TabContent,
  electronicFeasibilityStudy1,
  electronicFeasibilityStudy4,
  electronicFeasibilityStudy3,
  electronicFeasibilityStudy2,
}

}
</script>
<style >
.vue-form-wizard .wizard-card-footer {
    display: flex;
    justify-content: end;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-right {
    float: unset !important;
    margin: 0 10px;
}
.vue-form-wizard .wizard-card-footer .wizard-footer-left {
    float: unset !important;
   
}
.wizard-btn{
    background: rgba(31, 185, 179, 1) !important; 
     border-color: rgba(31, 185, 179, 1) !important; 
}
  .wizard-icon-container{
    background: rgba(31, 185, 179, 1) !important; 
     border-color: rgba(31, 185, 179, 1) !important; 

}
.vue-form-wizard.md .wizard-icon-circle {
  width:30px;
  height:30px;
  border-color: rgba(31, 185, 179, 1) !important; 
}
.vue-form-wizard  span{
  color: rgba(31, 185, 179, 1) !important; 
  margin-top: 10px;
}
.wizard-header{
  display: none !important;
}
.vue-form-wizard .wizard-progress-bar{
      float: right !important;
  background-color: rgba(31, 185, 179, 1) !important; 
}
/* .vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar */
.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{
      top: 20px !important;
}
</style>