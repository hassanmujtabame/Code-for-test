<template>
  <div class="container mt-5">
    <filter-list
      :pluralName="$t('the_meetings')"
      :singleName="$t('meeting')"
      :call-list="loadList"
      :searchPlaceholder="$t('search_by_name')"
      classColCard="d-flex flex-wrap gap-2 flex-row justify-content-between"
      @change="changeFilter"
    >
      <template v-slot="{ item }">
        <router-link
          style="display: block; width: fit-content"
          class="router-link"
          :to="getRouteLocale('academy-learning-meeting-show', { id: item.id })"
        >
          <MeetingCard
            :item="item"
            :img="item.image"
            :title="item.title"
            :type="item.type"
            :date="item.date"
          />
        </router-link>
      </template>
      <template v-slot:side>
        <sidebarBox :filterItem="filterSide" @change="changeFilter" />
      </template>
    </filter-list>
  </div>
</template>

<script>
import FilterList from "./fiter-list.vue";
import learningMeetingsAPI from "@/services/api/learning-meetings";
import sidebarBox from "./sidebar.vue";
import MeetingCard from "@/components/cards/meeting.vue";
export default {
  name: "section-list",
  components: {
    FilterList,
    MeetingCard,
    sidebarBox,
  },
  data: () => ({
    filterSide: {
      type: null,
      category_id: [],
    },
    filterItem: {
      search: null,
      created_at: "asc",
      type: null,
      category_id: [],
    },
  }),
  methods: {
    changeFilter(val) {
      console.log(val);
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      console.log("metaInfo", metaInfo);

      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem,
          paginate: this.isMobile ? 3 : undefined,
        };
        return await learningMeetingsAPI.getAll(params);
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
  },
};
</script>

<style></style>
