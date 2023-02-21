<template>
<div style="margin-top: 85px " class="consult">
    <div class="bg-body-page">
        <StudentProject v-if="userAcademyRole=='student'" />
  <InstructorProject v-if="userAcademyRole=='instructor'" />
        </div>
        </div>
</template>

<script>
import InstructorProject from './instructor/index';
import StudentProject from './student/index';
export default {
 name:'my-project-page',
 components:{
    InstructorProject,
    StudentProject
 }
}
</script>

<style>

</style>