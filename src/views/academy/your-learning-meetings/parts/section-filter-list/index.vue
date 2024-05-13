<template>
  <div class="container mt-5">
    <d-filter-list
      :call-list="loadList"
      hideSide
      classColCard="col-12 col-md-4"
      classSearchOrder="col-12 col-md-6 justify-content-center "
      classColSearch="col-12 col-md-8"
      classColOrder="col-12 col-md-4"
      classTitle="col-12 col-md-6"
      searchPlaceholder="أبحث  في قائمة اللقاءات"
      @change="changeFilter"
      orderName="created_at"
    >
      <template v-slot:title>
        <h4 class="text-cairo">{{ $t("your-learning-meetings") }}</h4>
      </template>
      <template v-slot:before-body>
        <div class="row mt-4">
          <div
            class="col-12 col-md-6 mb-3"
            v-for="btn in meetingType"
            :key="btn.id"
          >
            <button
              class="btn w-100 py-3"
              :class="[btn.active ? 'btn-custmer' : 'btn-custmer-w  ']"
              @click="getMeetingLearn(btn.id)"
            >
              {{ btn.text }}
            </button>
          </div>
        </div>
      </template>
      <template v-slot="{ item }">
        <router-link
          class="router-link"
          :to="getRouteLocale('academy-learning-meeting-show', { id: item.id })"
        >
          <meetingCard :item="item" />
        </router-link>
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import meetingCard from "../card.vue";
import academyAPI from "@/services/api/academy/index.js";
export default {
  name: "filter-list",
  components: {
    meetingCard,
  },
  data: (vm) => {
    return {
      meetingType: [
        { text: "لقاءات قادمة", id: 1, active: true },
        { text: "لقاءات ماضية", id: 2, active: false },
      ],
      itemTest: {
        id: 1,
        title: "خطة العمل ودراسة الجدوى المالية",
        userName: "مجلس",
        date: "23 يوليو",
        image: `${vm.publicPath}assets/img/learning.png`,
      },
      filterSide: {
        is_share: null,
        category_id: [],
      },
      filterItem: {
        search: null,
        price: "asc",
        is_share: null,
        category_id: [],
      },
      items: [],
    };
  },
  methods: {
    getMeetingLearn(id) {
      for (let index = 0; index < this.meetingType.length; index++) {
        const element = this.meetingType[index];
        if (element.id == id) {
          element.active = true;
        } else {
          element.active = false;
        }
      }
    },
    changeFilter(val) {
      console.log("val", val);
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem,
        };
        return await academyAPI.student.getMyMeetings(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 40px;
  font-weight: 800;
  color: #1fb9b3;
}
</style>
