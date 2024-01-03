<template>
    <div style="margin-top: 83px">
      <Header />
      <Features/>
      <RecentWorkspaces />
      <sectionFilter />
    </div>
  </template>
  
  <script>
  import Header from "@/components/pages/workspaces/home/header/index.vue";
  import Features from "@/components/pages/workspaces/home/features/index.vue";
  import RecentWorkspaces from "@/components/pages/workspaces/home/recent-workspaces/index.vue";
  import sectionFilter from "@/components/pages/workspaces/home/filter-list/index.vue";
  export default {
    name: "Workspaces-main",
    components: {
      Header,
      RecentWorkspaces,
      Features,
      sectionFilter,
    },
  };
  </script>
  
  <style>
  </style>