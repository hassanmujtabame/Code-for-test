<template>
  <div style="margin-top: 85px" class="consult">
    <div class="container mt-5">
      <SectionFilterList />
    </div>

    <AddCourseFirstDialog />
    <AddCourseLiveDialog />
    <AddCourseRecordedDialog />
    <AddCourseOnSiteDialog />
  </div>
</template>

<script>
import SectionFilterList from "./parts/section-filter-list/index.vue";
import AddCourseFirstDialog from "./dialogs/add-course/first-dialog.vue";
import AddCourseLiveDialog from "./dialogs/add-course/live-course.vue";
import AddCourseRecordedDialog from "./dialogs/add-course/recorded-course.vue";
import AddCourseOnSiteDialog from "./dialogs/add-course/on-site-course.vue";
export default {
  name: "your-courses-page",
  components: {
    SectionFilterList,
    AddCourseFirstDialog,
    AddCourseLiveDialog,
    AddCourseRecordedDialog,
    AddCourseOnSiteDialog,
  },
  watch: {
    userAcademyRole(newRole) {
      if (newRole != "instructor") {
        this.router_push("academy-your-courses");
      }
    },
  },
};
</script>

<style></style>
