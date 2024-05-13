<template>
  <div style="margin-top: 85px" class="consult">
    <div class="container mt-5">
      <div class="course-show-page">
        <SectionHeaderOwner
          :itemPage="itemPage"
          v-if="isOwner && userAcademyRole == 'instructor'"
        />
        <SectionHeader :itemPage="itemPage" v-else />
        <SectionBody :itemPage="itemPage" :isOwner="isOwner" />
        <updateCourseDialog group="update-course" :isOwner="isOwner" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "./sections/section-header/index.vue";
import SectionHeaderOwner from "./sections/section-header-owner/index.vue";
import SectionBody from "./sections/section-body/index.vue";
import updateCourseDialog from "@/views/academy/instructor/your-courses/dialogs/add-course/on-site-course";

//import coursesAPI from '@/services/api/academy/courses'
export default {
  name: "course-show-on-site",
  props: {
    itemPage: {},
    isOwner: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SectionHeader,
    SectionBody,
    SectionHeaderOwner,
    updateCourseDialog,
  },
  data: () => {
    return {
      loading: false,
      hasError: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.course-show-page {
  width: 100%;
  background: white;
  padding: 5px;
  border-radius: 10px 20px;
}
</style>
