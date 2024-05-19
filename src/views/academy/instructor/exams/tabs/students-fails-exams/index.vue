<template>
  <div
    class="tab-pane fade"
    id="pills-students-fails-exams"
    role="tabpanel"
    aria-labelledby="pills-students-fails-exams-tab"
    tabindex="0"
  >
    <d-filter-list
      hideSide
      hideTop
      classColCard="col-12 "
      :call-list="loadList"
    >
      <template v-slot:before-body>
        <div class="text-start mb-3">
          <button
            style="background-color: #f2631c"
            class="btn text-white"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            رسالة للجميع
          </button>
        </div>
      </template>
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
  name: "students-fails-exams",
  components: {
    CardItem,
  },
  data: () => {
    return {
      loading: false,
    };
  },
  methods: {
    async loadList(metaInfo) {
      this.loading = true;
      try {
        let params = {
          page: metaInfo.current_page,
        };
        return await CoursesAPI.getStudentsNotPassExam(params);
      } catch (error) {
        //
      }
      this.loading = false;
    },
  },
};
</script>
<style></style>
