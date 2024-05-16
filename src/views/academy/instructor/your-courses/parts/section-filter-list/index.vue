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
export default {
  name: "filter-list",
  components: {
    plusCircleOutline,
    CourseCard,
  },
  data: () => {
    return {
      status: "all",
      loading: false,
      items: [{}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    changeStatus(status) {
      this.status = status;
      this.filterItem.status = status;
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      this.loading = true;
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: this.isMobile ? 2 : 12,
        };
        let dd = await instructorAPI.getCourses(params);
        console.log("dd", dd);
        return dd;
      } catch (error) {
        //
      }
      this.loading = false;
    },
    async addCourseFirst() {
      let { data } = await window.axios.get(
        `academy/instructor/meetings?page=1`
      );

      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      } else if (this.user.statusInstructor && data.data.length < 4) {
        window.errorMsg(
          `يجب عليك رفع ${4 - data.data.length} من اللقاءات لكى تنشئ دوره`
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
