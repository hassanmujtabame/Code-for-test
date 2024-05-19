<template>
  <d-filter-list
    :call-list="loadList"
    hideSide
    classColCard="col-12 col-md-4"
    classSearchOrder="col-12 col-md-5 justify-content-center "
    classColSearch="w-50"
    classColOrder="w-50"
    classTitle="col-12 col-md-4"
    searchPlaceholder="أبحث  في قائمة دوراتك"
    @change="changeFilter"
    orderName="created_at"
  >
    <template v-slot:title>
      <h4 class="text-cairo">{{ $t("your-courses") }}</h4>
    </template>
    <template v-slot:head-end>
      <button @click="addCourseFirst" class="btn btn-custmer py-3">
        <i class="fa-solid fa-plus"></i> أضف دورة تدريبية
      </button>
    </template>
    <template v-slot:before-body>
      <div class="row my-3">
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('all')"
            class="btn w-100"
            :class="type == 'all' ? 'btn-custmer' : 'btn-custmer-w'"
          >
            كل الدورات
          </button>
        </div>
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('live')"
            class="btn w-100"
            :class="type == 'live' ? 'btn-custmer' : 'btn-custmer-w'"
          >
            دورات مباشرة
          </button>
        </div>
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('on-site')"
            class="btn w-100"
            :class="type == 'on-site' ? 'btn-custmer' : 'btn-custmer-w'"
          >
            دورات حضورية
          </button>
        </div>
        <div class="col-12 col-md-3">
          <button
            @click="changeStatus('recorded')"
            class="btn w-100"
            :class="type == 'recorded' ? 'btn-custmer' : 'btn-custmer-w'"
          >
            دورات مسجلة
          </button>
        </div>
      </div>
      <div></div>
    </template>
    <template v-slot="{ item }">
      <router-link
        class="router-link"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <CourseCard :item="item" />
      </router-link>
    </template>
  </d-filter-list>
</template>

<script>
import plusCircleOutline from "@/components/icon-svg/plus-circle-outline.vue";
import CourseCard from "./card";
import instructorAPI from "@/services/api/academy/instructor";
import InstructorMeetingsApi from "@/services/api/academy/instructor/meetings";
export default {
  name: "filter-list",
  components: {
    plusCircleOutline,
    CourseCard,
  },
  data: () => {
    return {
      type: "all",
      loading: false,
      filterItem: {
        type: "all",
      },
      items: [{}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    changeStatus(type) {
      this.type = type;
      this.filterItem.type = type;
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      this.loading = true;
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: this.isMobile ? 2 : 12,
          ...this.filterItem,
        };
        return await instructorAPI.getCourses(params);
      } catch (error) {
        //
      }
      this.loading = false;
    },
    async addCourseFirst() {
      let { data } = await InstructorMeetingsApi.getAll();

      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      } else if (this.user.statusInstructor && data.data.length < 3) {
        window.errorMsg(
          `يجب عليك رفع ${3 - data.data.length} من اللقاءات لكى تنشئ دورة`
        );
      } else {
        this.fireOpenDialog("add-course-first");
      }
    },
  },
  // Add a watcher on the $route object
  watch: {
    $route(to, from) {
      // Check if you're navigating back to this component
      if (to.name === "filter-list" && from.name === "academy-course-show") {
        // Reload data when navigating back
        this.loadList();
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
