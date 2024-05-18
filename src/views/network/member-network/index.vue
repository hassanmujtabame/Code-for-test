<template>
  <div style="margin-top: 85px" class="consult">
    <SectionHeader />
    <SectionSearch
      :classifications="member_classifications"
      :regions="member_regions"
      :competences="member_competences"
      @search="setSearchData"
    />

    <SectionVip />
    <SectionContinueLearning />
    <SectionSpeical :featured_members="featured_members" />

    <SectionList :searchData="searchData" />
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionList from "./parts/section-list/index.vue";
import SectionSearch from "./parts/section-search/index.vue";
import SectionHear from "@/views/network/home/parts/section-hear/index.vue";
import SectionVip from "@/components/section-members-vip.vue";
import SectionSpeical from "@/components/speical-members.vue";
import SectionContinueLearning from "@/views/network/home/parts/section-continue-learning/index.vue";

import MembersAPI from "@/services/api-v2/network/members.js";

export default {
  name: "member-network",
  components: {
    SectionHeader,
    SectionSearch,
    SectionList,
    SectionSpeical,
    SectionHear,
    SectionContinueLearning,
    SectionVip,
  },
  data() {
    return {
      featured_members: [],
      member_classifications: [],
      member_regions: [],
      member_competences: [],
      searchData: {
        searchText: null,
        classification: null,
        regions: null,
        competences: null,
      },
    };
  },
  methods: {
    async loadData() {
      await MembersAPI.getMembersHomeData().then((res) => {
        this.featured_members = res.data.featured_members;
        this.member_classifications = res.data.member_classifications;
        this.member_regions = res.data.member_regions;
        this.member_competences = res.data.member_competences;
      });
    },
    laodCategories(c) {
      this.member_classifications = c.member_classifications;
      this.member_regions = c.member_regions;
      this.member_competences = c.member_competences;
    },
    setSearchData(data) {
      this.searchData = data;
    },
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
  mounted() {
    this.loadData();
  },
};
</script>

<style></style>
