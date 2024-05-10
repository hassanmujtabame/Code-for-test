<template>
  <div style="margin-top: 85px">
    <StudentProject v-if="userAcademyRole == 'student'" />
    <InstructorProject v-if="userAcademyRole == 'instructor'" />
  </div>
</template>

<script>
import InstructorProject from "./instructor/index";
import StudentProject from "./student/index";
export default {
  name: "my-project-page",
  components: {
    InstructorProject,
    StudentProject,
  },
};
</script>

<style></style>
