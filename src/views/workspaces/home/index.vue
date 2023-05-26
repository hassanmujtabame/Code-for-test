<template>
  <div style="margin-top: 83px">
    <Header />
    <Features/>
    <RecentWorkspaces />
    <sectionFilter />
  </div>
</template>

<script>
import Header from "@/components/pages/workspaces/header";
import Features from "@/components/pages/workspaces/features";
import RecentWorkspaces from "@/components/pages/workspaces/recent-workspaces";
import sectionFilter from "./parts/section-filter-list";
export default {
  name: "orkspacesPage",
  components: {
    Header,
    Features,
    RecentWorkspaces,
    sectionFilter,
  },
};
</script>

<style>
</style>