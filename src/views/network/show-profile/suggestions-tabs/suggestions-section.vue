<template>
  <div>
    <div class="mt-5">
      <div class="text-start">
        <h5
          style="text-align: start"
          v-for="(tab, i) in tabs.filter((f) => f.show)"
          :key="i"
        >
          {{ tab.title }}
        </h5>
      </div>
    </div>
    <div v-for="(tab, i) in tabs.filter((f) => f.show)" :key="i">
      <component :is="tab.content" />
    </div>
  </div>
</template>

<script>
import DTabPane from "@/components/tabs/DTabPane.vue";
import BlogSuggestionsTab from "./blogs-suggestions-tab/index.vue";
export default {
  name: "suggestions-section-tabs",
  components: {
    DTabPane,
    BlogSuggestionsTab,
  },
  data: () => {
    return {
      tabs: [],
    };
  },
  mounted() {
    this.tabs = [
      {
        tag: "blogs",
        title: this.$t("suggestions-blogs-title"),
        content: BlogSuggestionsTab,
        show: this.$store.getters["network_member/activeTab"] == "blogs",
      },
    ];
  },
};
</script>

<style></style>
