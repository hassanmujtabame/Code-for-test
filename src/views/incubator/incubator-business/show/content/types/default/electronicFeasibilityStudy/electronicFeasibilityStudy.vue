<template>
  <div class="container">
    <form-wizard ref="normalSteps" nextButtonText="التالى" backButtonText="السابق" finishButtonText="الانتهاء">
      <tab-content title="الدراسة التمهيدية ">
        <electronicFeasibilityStudy1 />
        <!-- <wizard-step /> -->
      </tab-content>
      <tab-content title="الدراسة السوق و التسويقية" :before-change="beforeTabSwitchMarketingStep">
        <form-wizard class="marketing-step" ref="marketingStep" hideButtons="true">
          <tab-content>
            <electronicFeasibilityStudy5 />
          </tab-content>
          <tab-content>
            <electronicFeasibilityStudy6 />
          </tab-content>
        </form-wizard>
      </tab-content>
      <tab-content title=" الدراسة الفنية " hideButtons="true" :before-change="beforeTabSwitchTechnicalStep">
        <form-wizard class="marketing-step" ref="technicalStep" hideButtons="true" >
          <tab-content>
            <electronicFeasibilityStudy7 />
          </tab-content>
          <tab-content>
            <electronicFeasibilityStudy8 />
          </tab-content>
          <tab-content>
            <electronicFeasibilityStudy9 />
          </tab-content>
          <tab-content>
            <electronicFeasibilityStudy11 />
          </tab-content>
        </form-wizard>
      </tab-content>
      <tab-content title=" الدراسة المالية ">
        <electronicFeasibilityStudy10 />
      </tab-content>
    </form-wizard>
  </div>
</template>
<script>

import electronicFeasibilityStudy1 from './electronicFeasibilityStudy1';
import electronicFeasibilityStudy2 from './electronicFeasibilityStudy2';
import electronicFeasibilityStudy3 from './electronicFeasibilityStudy3';
import electronicFeasibilityStudy4 from './electronicFeasibilityStudy4';
import electronicFeasibilityStudy5 from './electronicFeasibilityStudy5';
import electronicFeasibilityStudy6 from './electronicFeasibilityStudy6';
import electronicFeasibilityStudy7 from './electronicFeasibilityStudy7';
import electronicFeasibilityStudy8 from './electronicFeasibilityStudy8';
import electronicFeasibilityStudy9 from './electronicFeasibilityStudy9';
import electronicFeasibilityStudy10 from './electronicFeasibilityStudy10';
import electronicFeasibilityStudy11 from './electronicFeasibilityStudy11';

import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
export default {
  data: () => {
    return {
      tabNumber: 0,
      tabNumber2: 0,
    }
  },
  methods: {
    beforeTabSwitchMarketingStep: function () {
      // alert("This is called before switchind tabs")
      // console.log(this.$refs.marketingStep.changeTab(0,2));
      // console.log(this.$refs.marketingStep.navigateToTab());
      var el = this.$refs.marketingStep;

      if (this.tabNumber < el.tabs.length - 1) {
        let oldNumber = this.tabNumber;
        this.tabNumber = this.tabNumber + 1;
        el.changeTab(oldNumber, this.tabNumber);
        console.log('tabNumber:')
        console.log(this.tabNumber)
        console.log('oldNumber:')
        console.log(oldNumber)
        return false;
      } else {
        console.log('switched');
        this.tabNumber = 0;
        return true;
      }
    },
    beforeTabSwitchTechnicalStep: function () {
      // alert("This is called before switchind tabs")
      // console.log(this.$refs.marketingStep.changeTab(0,2));
      // console.log(this.$refs.marketingStep.navigateToTab());
      var el = this.$refs.technicalStep;

      if (this.tabNumber2 < el.tabs.length - 1) {
        let oldNumber2 = this.tabNumber2;
        this.tabNumber2 = this.tabNumber2 + 1;
        el.changeTab(oldNumber2, this.tabNumber2);
        console.log('tabNumber2:')
        console.log(this.tabNumber2)
        console.log('oldNumber2:')
        console.log(oldNumber2)
        return false;
      } else {
        this.tabNumber2 = 0;
        console.log('switched');
        return true;
      }
    }
  },
  
  components: {
    FormWizard,
    TabContent,
    electronicFeasibilityStudy1,
    electronicFeasibilityStudy5,
    electronicFeasibilityStudy4,
    electronicFeasibilityStudy3,
    electronicFeasibilityStudy2,
    electronicFeasibilityStudy6,
    electronicFeasibilityStudy7,
    electronicFeasibilityStudy8,
    electronicFeasibilityStudy9,
    electronicFeasibilityStudy10,
    electronicFeasibilityStudy11
  }

}
</script>
<style >
.vue-form-wizard .wizard-card-footer {
  display: flex;
  justify-content: start !important;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-right {
  float: unset !important;
  margin: 0 10px;
}

.vue-form-wizard .wizard-card-footer .wizard-footer-left {
  float: unset !important;
}

.wizard-btn {
  background: rgba(31, 185, 179, 1) !important;
  border-color: rgba(31, 185, 179, 1) !important;
}

.wizard-icon-container {
  background: rgba(31, 185, 179, 1) !important;
  border-color: rgba(31, 185, 179, 1) !important;

}

.vue-form-wizard.md .wizard-icon-circle {
  width: 30px;
  height: 30px;
  border-color: rgba(31, 185, 179, 1) !important;
}

.vue-form-wizard span {
  color: rgba(31, 185, 179, 1) !important;
  margin-top: 10px;
}

.wizard-header {
  display: none !important;
}

.vue-form-wizard .wizard-progress-bar {
  float: right !important;
  background-color: rgba(31, 185, 179, 1) !important;
}

.marketing-step .wizard-progress-bar {
  float: left !important;
}

/* .vue-form-wizard .wizard-navigation .wizard-progress-with-circle .wizard-progress-bar */
.vue-form-wizard.md .wizard-navigation .wizard-progress-with-circle {
  top: 20px !important;
}

.marketing-step .wizard-progress-with-circle {
  display: none !important;
}

.wizard-navigation .wizard-tab-content {
  padding-top: 0 !important;
}

.vue-form-wizard .marketing-step .wizard-navigation ul {
  display: none !important;
}
</style>