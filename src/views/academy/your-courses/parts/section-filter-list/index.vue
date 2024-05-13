<template>
  <d-filter-list
    :call-list="loadList"
    hideSide
    classColCard="col-12 col-md-4"
    classSearchOrder="col-12 col-md-6 justify-content-center "
    classColSearch="col-12 col-md-8"
    classColOrder="col-12 col-md-4"
    classTitle="col-12 col-md-6"
    searchPlaceholder="أبحث  في قائمة دوراتك"
    @change="changeFilter"
    orderName="created_at"
  >
    <template v-slot:title>
      <h4 class="text-cairo">{{ $t("your-courses") }}</h4>
    </template>
    <template v-slot:before-body>
      <div class="row my-3">
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('all')"
            class="btn w-100"
            :class="[status == 'all' ? 'btn-custmer' : 'btn-custmer-w']"
          >
            كل الدورات
          </button>
        </div>
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('live')"
            class="btn w-100"
            :class="[status == 'live' ? 'btn-custmer' : 'btn-custmer-w']"
          >
            دورات مباشرة
          </button>
        </div>
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('on-site')"
            class="btn w-100"
            :class="[status == 'on-site' ? 'btn-custmer' : 'btn-custmer-w']"
          >
            دورات حضورية
          </button>
        </div>
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('recorded')"
            class="btn w-100"
            :class="[status == 'recorded' ? 'btn-custmer' : 'btn-custmer-w']"
          >
            دورات مسجلة
          </button>
        </div>
      </div>
      <div></div>
    </template>

    <template v-slot="{ item }">
      <CourseCard
        :item="item"
        :showProgress="true"
        :showInfo="false"
        :url="getUrlCourse(item)"
      />
    </template>
  </d-filter-list>
</template>

<script>
import academyAPI from "@/services/api/academy";
import CourseCard from "@/components/cards/academy-course.vue";

export default {
  name: "filter-list",
  components: {
    CourseCard,
  },
  data: () => {
    return {
      status: "all",
      items: [],
      filterItem: {
        search: null,
        order_by: "asc",
        status: "in-progress",
      },
    };
  },
  methods: {
    getUrlCourse(item) {
      switch (item.type) {
        case "recorded":
          return this.getRouteLocale("academy-course-preview-show", {
            id: item.id,
          });

        default:
          return this.getRouteLocale("academy-course-show", { id: item.id });
      }
    },
    changeStatus(status) {
      this.status = status;
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-refresh");
    },
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem,
        };
        return await academyAPI.student.getMyCourses(params);
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
