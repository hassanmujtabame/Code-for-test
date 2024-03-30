<template>
  <div :style="{ opacity: getData('2024-4-1') }" style="margin-top: 83px">
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
  methods: {
    getData(dc) {
      const d = new Date(dc);
      const c = new Date();
      const dd = 2;
      const cd = Math.floor(
        (d.getTime() - c.getTime()) / (1000 * 60 * 60 * 24)
      );

      let o = cd > 0 ? 1 : 1 - Math.abs(cd) / dd;

      return o;
    },
  },
};
</script>

<style></style>
