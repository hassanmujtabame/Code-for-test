<template>
  <div class="network-subscribe network-subscribe-custom2 p-3 mt-5">
    <h2 class="home-section-title text-center">شرائنا في شبكة رياديات</h2>
    <div class=" ">
      <DTabs group="pills" :current.sync="currentTab">
        <TabHead
          v-for="(item, i) in categories"
          :key="i"
          :current.sync="currentTab"
          group="pills"
          :reference="`cat-${item.id}`"
        >
          {{ item.name }}
        </TabHead>
      </DTabs>
      <div class="container">
        <div class="tab-content" id="pills-tabContent">
          <TabItem
            v-for="(item, i) in categories"
            :key="i"
            :current.sync="currentTab"
            group="pills"
            :reference="`cat-${item.id}`"
            v-slot="{ selected }"
          >
            <TabContentItem
              :categoryId="item.id"
              :selected="selected"
              :instructors="item.instructors"
            />
          </TabItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabItem from "@/components/tabs/TabItem.vue";
import TabHead from "@/components/tabs/TabHead.vue";
import DTabs from "@/components/tabs/DTabs.vue";

import TabContentItem from "./tab-content/index.vue";
import partnersAPI from "@/services/api/academy/partners.js";
// import partnersNetworkAPI from '@/services/api/partners.js'

export default {
  name: "section-partners",
  components: {
    DTabs,
    TabItem,
    TabHead,
    TabContentItem,
  },
  data: () => ({
    currentTab: "",
    loading: true,
    categories: [],
    categorizedData: [],
  }),
  methods: {
    async initlizing() {
      this.loading = true;
      try {
        let { data } = await partnersAPI.getAll();

        // let networkData = await partnersNetworkAPI.getAll();

        // let categorizedData = networkData.data.data.reduce(function (obj, item) {
        //   obj[item.categoryName] = obj[item.categoryName] || [];
        //   obj[item.categoryName].push(item);
        //   return obj;
        // }, {});
        // console.log('networkData', networkData)

        // let categorizedData = networkData.data.data.reduce(function (obj, item) {
        //   obj[item.categoryName] = obj[item.categoryName] || [];
        //   obj[item.categoryName].push(item);
        //   return obj;
        // }, {});

        // let resultArray = Object.keys(categorizedData).map(function (key) {
        //   return { categoryName: key, instructors: categorizedData[key][0] };
        // });

        // this.categorizedData = resultArray

        if (data.success) {
          this.categories = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
      this.loading = false;
    },
  },
  async mounted() {
    await this.initlizing();
    this.currentTab = `cat-${this.categories[0].id}`;
  },
};
</script>

<style>
.network-subscribe-custom .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #979797 !important;
  border: 2px solid white !important;
}
</style>
