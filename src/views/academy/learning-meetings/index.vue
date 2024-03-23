<template>
  <div style="margin-top: 85px" class="consult">
    <SectionHeader />
    <div class="container mt-5 text-start">
      <button @click="addItem" v-if="userAcademyRole != 'student'" class="btn btn-custmer">
        <i class="fa fa-circle-plus"></i> إضافة لقاء تعليمي
      </button>
    </div>
    <div class="container mt-5">
      <SectionFilterList />
    </div>
    <AddMeetingDialog />
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionFilterList from "./parts/section-filter-list/index.vue";
import AddMeetingDialog from "./dialogs/add-meeting/index.vue";

export default {
  name: "learing-meetings-list",
  components: {
    SectionHeader,
    SectionFilterList,
    AddMeetingDialog,
  },
  methods: {
    addItem() {
      // if (!this.user.statusInstructor) {
      //   window.errorMsg("لم يفعل حسابك بعد !");
      // } else {
      this.fireOpenDialog("add-meeting", {
        id: null,
        title: null,
        video: null,
      });
      // }
    },
  },
};
</script>

<style></style>
