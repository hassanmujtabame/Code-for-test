<template>
  <div
    class="bg-white h-100 d-flex flex-column align-items-center text-center rounded-3 p-3 main"
  >
    <div class="box">
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h4 class="m-c mt-2">
        {{ title }}
      </h4>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {},
    title: {},
  },
};
</script>

<style></style>
