<template>
  <div style="" class="col-md-3 col-12 p-3">
    <div
      style="background-color: #fff"
      class="d-flex flex-column gap-1 rounded-3 shadow"
    >
      <!-- Use props inside the component -->
      <img class="img-fluid px-4 py-3 rounded-3" :src="img" :alt="title" />
      <h6 style="font-size: 14px" class="px-4">{{ title }}</h6>
      <p style="color: #888" class="px-4">{{ price }} ر.س</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "title", "price"],
};
</script>

<style></style>
