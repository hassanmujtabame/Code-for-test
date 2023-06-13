<template>
    <div class="box">
      <slot></slot>
      <h6 class="m-c mt-2">{{ title }}</h6>
      <p class="text-right p-c mobile-center">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "BoxComponent",
    props: {
      title: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .box {
    min-height: 100%;
  }
  </style>
  