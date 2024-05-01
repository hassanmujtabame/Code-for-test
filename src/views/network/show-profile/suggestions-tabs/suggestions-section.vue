<template>
  <div>
    <div :key="$store.getters['network_member/activeTab']">
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
  </div>
</template>

<script>
import DTabPane from "@/components/tabs/DTabPane.vue";
import BlogSuggestionsTab from "./blogs-suggestions-tab/index.vue";
import exhibitionSuggestionsTab from "./exhibitions-suggestions-tab/index.vue";
import investmentsSuggestionsTab from "./investments-suggestions-tab/index.vue";
import providersSuggestionsTab from "./providers-suggestions-tab/index.vue";
import consultantsSuggestionsTab from "./consulters-suggestions-tab/index.vue";

export default {
  name: "suggestions-section-tabs",
  props: {
    selectetTab: "",
  },
  components: {
    DTabPane,
    BlogSuggestionsTab,
    exhibitionSuggestionsTab,
    investmentsSuggestionsTab,
    consultantsSuggestionsTab,
  },
  data: (vm) => {
    return {
      tabs: [
        {
          tag: "consulting",
          title: vm.$t("best-consultants"),
          content: consultantsSuggestionsTab,
          show: false,
        },
        {
          tag: "offers",
          title: vm.$t("best-providers"),
          content: providersSuggestionsTab,
          show: false,
        },
        {
          tag: "investments",
          title: vm.$t("more-invsetment-projects"),
          content: investmentsSuggestionsTab,
          show: false,
        },
        {
          tag: "exhibitions",
          title: vm.$t("suggestions-exhibitions-title"),
          content: exhibitionSuggestionsTab,
          show: false,
        },
        {
          tag: "blog",
          title: vm.$t("suggestions-blogs-title"),
          content: BlogSuggestionsTab,
          show: false,
        },
      ],
    };
  },
  watch: {
    selectetTab: function (val) {
      this.changeTab(val);
    },
  },
  methods: {
    changeTab(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].tag === tab) {
          this.tabs[i].show = true;
        } else {
          this.tabs[i].show = false;
        }
      }
    },
  },
  mounted() {
    this.changeTab(this.selectetTab);
  },
};
</script>

<style></style>
