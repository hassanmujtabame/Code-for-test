<template>
  <div class="mt-5 blog">
    <d-filter-list
      :call-list="loadList"
      @change="changeFilter"
      hideTop
      hideSide
      :searchPlaceholder="$t('search_by_service')"
      classColCard="col-md-3 px-4 mt-3"
    >
      <template v-slot="{ item }">
        <div
          @click="router_push('academy-my-schedules-details', { id: item.id })"
        >
          <scheduleCard
            :title="item.title"
            :time="item.start_time"
            :date="item.start_date"
            color="var(--color-secondary)"
            style="cursor: pointer"
          />
        </div>
      </template>
    </d-filter-list>
  </div>
</template>

<script>
import scheduleCard from "./category-schedule-card.vue";
import sidebarFilter from "./sidebar-filter.vue";
import academyAPI from "@/services/api/academy";
export default {
  name: "section-filter-list",
  components: {
    scheduleCard,
    sidebarFilter,
  },
  data: () => ({
    fitlterSide: {
      created_at: "asc",
      type: [], // course | meeting
      type_course: [], //live | on-site
    },
    filterItem: {
      //search:null,
      created_at: "asc",
      type: null, // course | meeting
      type_course: null, //live | on-site
    },
  }),
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    openAddService(evt) {
      evt.preventDefault();
      this.fireOpenDialog("add-ready-service-dialog");
    },
    closeAddService(evt) {
      evt.preventDefault();
      this.fireCloseDialog("add-ready-service-dialog");
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,
        paginate: 8,
        ...this.filterItem,
      };
      return await academyAPI.getMyAppointments(params);
    },
  },
  mounted() {
    //this.getCategories();
  },
};
</script>

<style></style>
