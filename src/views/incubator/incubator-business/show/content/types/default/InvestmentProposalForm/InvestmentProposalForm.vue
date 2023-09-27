<template>
  <div class="container marketing-step2">
<form-wizard>
  <tab-content>
    <InvestmentProposalForm1/>
  </tab-content>
  <tab-content >
    <InvestmentProposalForm2/>

   </tab-content>
  
</form-wizard>
  </div>
</template>
<script>

import InvestmentProposalForm1 from './InvestmentProposalForm1';
import InvestmentProposalForm2 from './InvestmentProposalForm2';


import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
export default{

components: {
  FormWizard,
  TabContent,
  InvestmentProposalForm1,
  InvestmentProposalForm2

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
.marketing-step2  .wizard-progress-bar{
      float: left !important;
}
/* .vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar */
.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle{
      top: 20px !important;
}

.marketing-step2 .wizard-progress-with-circle{
display: none !important;
}
.wizard-navigation .wizard-tab-content{
  padding-top: 0 !important;
}
.vue-form-wizard .marketing-step2 .wizard-navigation ul{
  display: none !important;
}
.marketing-step2  .vue-form-wizard .wizard-nav-pills{
  display: none !important;
}
</style>