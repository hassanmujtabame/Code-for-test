<template>
  <div class="mt-4">
    <div id="course-teaching">
      <h1 style="color: #cf1f3e" class="">{{ $t("what-will-you-learn") }}</h1>
      <!-- <ul v-if="isModeDev" class="course-teaching__list">
      <li>هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم </li>
    <li>هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون</li>
    <li>هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم في نقاط هنا هيكون ماذا ستتعلم </li>
  </ul> -->
      <ul
        style="min-height: 300px; max-height: 400px"
        class="course-teaching__list overflow-y-auto"
      >
        <template v-if="itemPage.learn">
          <li v-for="(it, i) in itemPage.learn" :key="i">{{ it }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-teaching",
  props: {
    itemPage: {},
  },
  data: () => {
    return {
      isModeDev: process.env.NODE_ENV == "development",
    };
  },
};
</script>

<style>
.course-teaching__list > li {
  list-style-image: url("@/assets/svg/small-riadiat-log.svg");
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  text-align: justify;

  /* Medium gray */

  color: #737373;
  padding: 10px;
}
</style>
