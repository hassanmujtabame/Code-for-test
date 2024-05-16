<template>
  <div
    style="margin-top: 85px"
    class="consult max-width-100-hidden bg-body-page"
  >
    <div class="container d-flex flex-column mt-1">
      <!-- <button @click="addItem" class="btn m-c">
        <i style="font-size: 35px" class="fa fa-square-plus"></i>
      </button> -->
      <!-- filter list-->
      <SectionFilterList />
      <!-- <button @click="addItem" class="btn m-c">
        <i style="font-size: 35px" class="fa fa-square-plus"></i>
      </button> -->
    </div>
    <SendToAllParticipants />
    <AddMeetingDialog />
  </div>
</template>
<script>
import SectionFilterList from "./parts/section-filter-list/index.vue";
import SendToAllParticipants from "../dialogs/message-participants/index";
import AddMeetingDialog from "../dialogs/add-meeting/index.vue";
export default {
  name: "my-meetings",
  components: {
    SectionFilterList,
    SendToAllParticipants,
    AddMeetingDialog,
  },
  watch: {
    userAcademyRole(newRole) {
      if (newRole != "instructor") {
        this.router_push("academy-your-learning-meetings");
      }
    },
  },
  methods: {
    addItem() {
      this.loadCurrentUser();
      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      } else {
        this.fireOpenDialog("add-meeting", {
          id: null,
          title: null,
          video: null,
        });
      }
    },
  },
};
</script>

<style>
.star-cons-blog {
  position: absolute;
  right: 7.15%;
  left: 81.19%;
  top: 9.72%;
  bottom: 71.67%;
}
.star-cons-blog.stars {
  right: 30.56%;
  left: 60.06%;
  top: 14.17%;
  bottom: 80.28%;
}
.star-blog {
  right: 27.29%;
  left: 69.44%;
  top: 44.59%;
  bottom: 37.92%;
}
</style>
