<template>
  <div style="margin-top: 83px">
    <Header />
    <Features/>
    <sectionRecents />
    <sectionFilter />
  </div>
</template>

<script>
import Header from "@/components/pages/workspaces/header";
import Features from "@/components/pages/workspaces/features";
import sectionRecents from "./parts/recent-workspaces";
import sectionFilter from "./parts/section-filter-list";
export default {
  name: "orkspacesPage",
  components: {
    Header,
    Features,
    sectionRecents,
    sectionFilter,
  },
};
</script>

<style>
</style>