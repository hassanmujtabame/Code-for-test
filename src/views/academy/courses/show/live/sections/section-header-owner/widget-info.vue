<template>
  <div
    class="widget-course-top h-100 box text-center p-2"
    :class="{ mobile: isMobile }"
  >
    <div class="widget-course-top__wrapper border p-2 rounded-2 h-100">
      <div class="widget-course-top__header">
        <h6 class="widget-course-top__title">
          {{ title }}
        </h6>
        <span v-if="link" class="widget-course-top__link">عرض الكل</span>
      </div>
      <p class="widget-course-top__content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    content: {},
    link: {},
  },
};
</script>

<style scoped>
.widget-course-top__header {
  display: flex;
}
.widget-course-top__title {
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height, or 106% */
  text-align: start;
  color: #000000;
}
.mobile .widget-course-top__title {
  font-size: 0.7rem;
  line-height: 0.75rem;
}
.widget-course-top__link {
  flex-shrink: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */
  text-align: end;
  color: #f2631c;
}
.mobile .widget-course-top__link {
  font-size: 0.5rem;
  line-height: 0.55rem;
}
.widget-course-top__content {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* identical to box height, or 167% */
  margin: 0;
  text-align: start;
  text-transform: capitalize;
  color: #1fb9b3;
}
.mobile .widget-course-top__content {
  font-size: 0.8rem;
  line-height: 1.2rem;
}
</style>
