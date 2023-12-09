<template>
  <div class="container" style="margin-top: 120px">
    <div class="progress-bar">
      <ul>
        <li v-for="step in totalSteps" :key="step" :class="{ active: step <= currentStep }"></li>
      </ul>
      <div class="lines">
        <span v-for="step in totalSteps - 1" :key="step"></span>
      </div>
    </div>

    <component :is="currentStepComponent" @next-step="nextStep" />

    <div>
      <button v-if="currentStep !== 1" @click="prevStep">Previous</button>
      <button v-if="currentStep !== totalSteps" @click="nextStep">Next</button>
    </div>
  </div>
</template>

<script>
import Step1 from './parts/step-one.vue';
import Step2 from './parts/step-two.vue';
import Step3 from './parts/step-three.vue';
// import other step components

export default {
  components: {
    Step1,
    Step2,
    Step3,
    // other steps
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 3,
      completedSteps: 0,
      formData: {},
    };
  },
  computed: {
    currentStepComponent() {
      return `Step${this.currentStep}`;
    },
  },
  methods: {
    nextStep(data) {
      Object.assign(this.formData, data);
      this.completedSteps = this.currentStep - 1;

      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      } else {
        console.log('Form submitted with data:', this.formData);
      }
    },
    prevStep() {
      this.currentStep--;
    },
  },
};
</script>

<style scoped>
/* Add to your style section */
.container {
  text-align: center;
}

.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
}

.progress-bar ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.progress-bar li {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: white;
  margin: 0 10px;
  position: relative;
}

.progress-bar li.active {
  background-color: #007bff;
  border-color: #007bff;
}

.progress-bar li::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%; /* Place the lines after the steps */
  width: 40px; /* Adjust the width of lines */
  height: 4px; /* Adjust the height or thickness of lines */
  background-color: #ccc;
  transform: translateY(-50%);
}

.progress-bar li:last-child::before {
  display: none;
}

.progress-bar li.active ~ li::before {
  background-color: #007bff;
}

.progress-bar .lines {
  display: flex;
}

.progress-bar .lines span {
  flex: 1;
}

/* Additional styles for buttons */
button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Darker shade */
}
</style>
