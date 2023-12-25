<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="btn m-c dropdown-toggle" type="button" :aria-expanded="isDropdownOpen">
      <i class="fa-solid fa-square-plus"></i>
    </button>
    <ul class="dropdown-menu" :class="{ 'show': isDropdownOpen }">
      <li><a class="dropdown-item" href="#" @click="selectAction('lecture')">{{$t('add-lecture')}}</a></li>
      <li><a class="dropdown-item" href="#" @click="selectAction('exam')">{{$t('add-exam')}}</a></li>
      <li><a class="dropdown-item" href="#" @click="selectAction('project')">{{$t('add-project')}}</a></li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectAction(type) {
      // Implement your logic here based on the selected action type
      // For instance, emitting an event to the parent component
      console.log('sss')
      this.$emit('add', type);
      // Close the dropdown after an action is selected
      this.isDropdownOpen = false;
    }
  },
}
</script>

<style>

</style>