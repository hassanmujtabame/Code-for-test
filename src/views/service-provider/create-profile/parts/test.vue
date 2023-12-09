<template>
    <div>
      <component :is="currentStepComponent" :formData="formData" @next="nextStep" @prev="prevStep" />
      <div v-if="currentStep !== 0">
        <button @click="prevStep">Previous</button>
      </div>
      <div v-if="currentStep !== steps.length - 1">
        <button @click="nextStep">Next</button>
      </div>
      <div v-else>
        <button @click="submitForm">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  import StepOne from './components/StepOne.vue';
  import StepTwo from './components/StepTwo.vue';
  // Import other step components as needed
  
  export default {
    components: {
      StepOne,
      StepTwo,
      // Register other step components
    },
    data() {
      return {
        currentStep: 0,
        formData: {
          field1: '',
          field2: ''
          // Add more fields for each step
        },
        steps: ['StepOne', 'StepTwo'] // Add other step component names
      };
    },
    computed: {
      currentStepComponent() {
        return this.steps[this.currentStep];
      }
    },
    methods: {
      nextStep() {
        // Perform validation if needed before moving to the next step
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++;
        }
      },
      prevStep() {
        if (this.currentStep > 0) {
          this.currentStep--;
        }
      },
      submitForm() {
        // Submit form data or perform final validation
        console.log('Form submitted with data:', this.formData);
        // You can send the data to the server or perform other actions
      }
    }
  };
  </script>
  