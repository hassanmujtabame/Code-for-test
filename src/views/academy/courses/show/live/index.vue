<template>
  <div style="margin-top: 85px" class="consult">
    <div class="container mt-5">
      <div class="course-show-page">
        <SectionHeaderOwner
          :itemPage="course"
          v-if="isOwner && userAcademyRole == 'instructor'"
          @delete="deleteExam"
        />
        <SectionHeader :itemPage="course" v-else />
        <SectionBody :itemPage="course" :isOwner="isOwner" />
      </div>
    </div>
    <AddExamDialog v-if="isOwner" @add="addExam" />
    <updateCourseDialog group="update-course" :isOwner="isOwner" />
  </div>
</template>

<script>
import SectionHeader from "../common/section-header/index.vue";
import SectionHeaderOwner from "./sections/section-header-owner/index.vue";
import SectionBody from "./sections/section-body/index.vue";
import AddExamDialog from "../recorded/dialogs/add-exam/index";
import updateCourseDialog from "@/views/academy/instructor/your-courses/dialogs/add-course/live-course";

//import academyAPI from '@/services/api/academy'
//import coursesAPI from '@/services/api/academy/courses'
export default {
  name: "course-show-live",
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
    AddExamDialog,
    updateCourseDialog,
  },
  data: (vm) => {
    return {
      course: { ...vm.itemPage },
      loading: false,
      hasError: false,
    };
  },
  methods: {
    deleteExam(dataEvnt) {
      let index = this.course.exams.findIndex((l) => l.id === dataEvnt.id);
      if (index > -1) {
        this.course.exams.splice(index, 1);
      }
    },
    addExam(dataEvt) {
      this.course.exams.push(dataEvt);
      /*try {
      let {data} = academyAPI.examsAPI.getItem(id)
      if(data.success){
        this.course.exams.push(data.data)
      }
    } catch (error) {
      //
    }*/
    },
  },
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
