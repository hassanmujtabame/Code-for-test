<template>
    <div class="container" style="margin-top: 120px">
        <div v-if="!done">

            <h1 class="fs-2">
                انشاء ملف اعمالك
            </h1>
            <form-wizard color="#2eb9b3" step-size="xs" @on-complete="onComplete" ref="normalSteps" nextButtonText="التالى"
                backButtonText="السابق" finishButtonText="الانتهاء">
                <tab-content :before-change="beforeChange_1" title=" التعريف">
                    <Step1 />
                </tab-content>
                <tab-content :before-change="beforeChange" title="الخبرات">
                    <Step2 />
                </tab-content>
                <tab-content title="التعليم">
                    <Step3 />
                </tab-content>
                <tab-content :before-change="beforeChange" title="معرض الاعمال">
                    <Step4 />
                </tab-content>
                <tab-content title="الشهادات">
                    <Step5 />
                </tab-content>
            </form-wizard>
        </div>
        <StepComplete v-if="done"/>
    </div>
</template>

<script>
import Step1 from './parts/step-one.vue';
import Step2 from './parts/step-two.vue';
import Step3 from './parts/step-three.vue';
import Step4 from './parts/step-four.vue';
import Step5 from './parts/step-five.vue';
import StepComplete from './parts/step-complete.vue';


import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

// import other step components

export default {
    components: {
        Step1,
        Step2,
        Step3,
        Step4,
        Step5,
        StepComplete,
        FormWizard,
        TabContent,
    },
    data() {
        return {
            done: false

        }
    },
    methods: {
        onComplete() {
            this.done = true

        }
    }
}
</script>

<style>
.vue-form-wizard .wizard-progress-bar {
    float: right !important;
    transform: translateX(-15px) !important;
}

.wizard-header {
    display: none !important;
}

i.wizard-icon {
    display: none !important;
}

.wizard-icon-container {
    border-radius: 50% !important;
    border: 5px solid white !important;
}
</style>

