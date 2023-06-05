<template>
  <div style="margin-top: 83px">
    <WorkSpaceHome />
    <Create />
    <SuccessAddWorkspace />
  </div>
</template>

<script>
import WorkSpaceHome from "@/components/pages/workspaces/home";
import Create from "@/components/pages/workspaces/create";
import SuccessAddWorkspace from "@/components/pages/workspaces/create/SuccessAddWorkspace.vue";

export default {
  name: "WorkspacesPage",
  components: {
    WorkSpaceHome,
    Create,
    SuccessAddWorkspace,
  },
};
</script>

<style>
</style>