<template>
  <div class="box schedule-card border rounded-2">
    <div class="h-100 d-flex flex-column align-items-center">
      <div class="flex-shrink-0">
        <noteCircleIcon :color="color" />
      </div>
      <div class="flex-grow-1 my-3" style="height: 40px">
        <h3 class="schedule-card__title">
          {{ title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import noteCircleIcon from "@/components/icon-svg/note-circle.vue";
export default {
  components: {
    noteCircleIcon,
  },
  props: {
    itemId: {},
    color: {},
    title: {},
  },
};
</script>

<style scoped>
.schedule-card {
  padding: 40px 9px 15px;
  height: 100%;
}
.schedule-card__title {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */
  text-align: center;
  text-transform: capitalize;
  padding: 0 10px;
  color: #737373;
}
</style>
