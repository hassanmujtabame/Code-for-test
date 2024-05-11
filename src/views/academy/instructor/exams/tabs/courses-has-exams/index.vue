<template>
  <div
    class="tab-pane fade active"
    id="pills-courses-has-exams"
    role="tabpanel"
    aria-labelledby="pills-courses-has-exams-tab"
    tabindex="0"
  >
    <d-filter-list
      hideSide
      hideTop
      classColCard="col-12 "
      :call-list="loadList"
    >
      <template v-slot="{ item }">
        <CardItem :item="item" />
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import CoursesAPI from "@/services/api/academy/courses.js";
import CardItem from "./card-item.vue";
export default {
  name: "courses-has-exams",
  components: {
    CardItem,
  },
  data: () => {
    return {};
  },
  methods: {
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
        };
        return await CoursesAPI.getCoursesHasExams(params);
      } catch (error) {
        //
      }
    },
  },
};
</script>

<style></style>
