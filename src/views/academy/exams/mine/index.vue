<template>
  <div style="margin-top: 85px" class="consult">
    <StudentExam />
    <!-- <InstructorExam v-if="userAcademyRole == 'instructor'" /> -->
    <SendToAllParticipants />
  </div>
</template>

<script>
import InstructorExam from "./instructor/index";
import StudentExam from "./student/index";
import SendToAllParticipants from "../dialogs/message-participants/index";

export default {
  name: "my-exams-page",
  components: {
    InstructorExam,
    StudentExam,
    SendToAllParticipants,
  },
};
</script>

<style></style>
