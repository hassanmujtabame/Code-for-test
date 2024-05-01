<template>
  <div>
    <div class="mt-5">
      <div class="text-start mb-4">
        <h3
          style="text-align: start"
          v-for="(tab, i) in tabs.filter((f) => f.show)"
          :key="i"
        >
          {{ tab.title }}
        </h3>
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
import exhibitionSuggestionsTab from "./exhibitions-suggestions-tab/index.vue";
import investmentsSuggestionsTab from "./investments-suggestions-tab/index.vue";
import providersSuggestionsTab from "./providers-suggestions-tab/index.vue";

export default {
  name: "suggestions-section-tabs",
  components: {
    DTabPane,
    BlogSuggestionsTab,
    exhibitionSuggestionsTab,
    investmentsSuggestionsTab,
  },
  data: () => {
    return {
      tabs: [],
    };
  },
  mounted() {
    this.tabs = [
      {
        tag: "offers",
        title: this.$t("best-providers"),
        content: providersSuggestionsTab,
        show: this.$store.getters["network_member/activeTab"] == "offers",
      },
      {
        tag: "investments",
        title: this.$t("more-invsetment-projects"),
        content: investmentsSuggestionsTab,
        show: this.$store.getters["network_member/activeTab"] == "investments",
      },
      {
        tag: "exhibitions",
        title: this.$t("suggestions-exhibitions-title"),
        content: exhibitionSuggestionsTab,
        show: this.$store.getters["network_member/activeTab"] == "exhibitions",
      },
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
