<template>
  <div class="container" style="margin-top: 120px">
    <section class="section">
      <div class="container">
          <div class="columns">
              <div class="column is-8 is-offset-2">
                  <horizontal-stepper :steps="demoSteps" @completed-step="completeStep"
                                      @active-step="isStepActive" @stepper-finished="alert"
                  >
                  </horizontal-stepper>
              </div>
          </div>
      </div>
  </section>
  </div>
  
  
</template>

<script>
import Step1 from './parts/step-one.vue';
import Step2 from './parts/step-two.vue';
import Step3 from './parts/step-three.vue';
import HorizontalStepper from 'vue-stepper';

// import other step components

export default {
  components: {
    Step1,
    Step2,
    Step3,
    HorizontalStepper
  },
  data(){
        return {
            demoSteps: [
                {
                    icon: 'mail',
                    name: 'first',
                    title: 'Sample title 1',
                    subtitle: 'Subtitle sample',
                    component: Step1,
                    completed: false

                },
                {
                    icon: 'report_problem',
                    name: 'second',
                    title: 'Sample title 2',
                    subtitle: 'Subtitle sample',
                    component: Step2,
                    completed: false
                }
            ]
        }
    },
    methods: {
        // Executed when @completed-step event is triggered
        completeStep(payload) {
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    step.completed = true;
                }
            })
        },
        // Executed when @active-step event is triggered
        isStepActive(payload) {
            this.demoSteps.forEach((step) => {
                if (step.name === payload.name) {
                    if(step.completed === true) {
                        step.completed = false;
                    }
                }
            })
        },
        // Executed when @stepper-finished event is triggered
        alert(payload) {
            alert('end')
        }
    }
}
</script>

