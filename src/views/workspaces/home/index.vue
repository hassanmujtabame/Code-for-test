<template>
  <div style="margin-top: 83px">
    <WorkSpaceHome />
    <Create />
    <addSuccessExhibitionModal />
  </div>
</template>

<script>
import WorkSpaceHome from "@/components/pages/workspaces/home";
import Create from "@/components/pages/workspaces/create";
import addSuccessExhibitionModal from "@/components/pages/workspaces/create/SuccessAddExhibition.vue";

export default {
  name: "WorkspacesPage",
  components: {
    WorkSpaceHome,
    Create,
    addSuccessExhibitionModal,
  },
};
</script>

<style>
</style>