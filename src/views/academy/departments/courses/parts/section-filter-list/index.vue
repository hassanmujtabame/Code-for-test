<template>
  <d-filter-list :call-list="loadList" :searchPlaceholder="$t('search-by-course-or-instructor')" pluralName="الدورات"
    singleName="دورة" hideTitle classSearchOrder="col-lg-8" classColOrder="col-12 col-lg-4"
    classColSearch="col-12 col-lg-8" @change="changeFilter">
    <template v-slot="{ item }">

      <CourseCard :item="item" :url="getRouteLocale('academy-course-show', { id: item.id })" />

    </template>
    <template v-slot:side>
      <sidebarBox :filterItem="filterSide" @change="changeFilter" />
    </template>
  </d-filter-list>
</template>

<script>
import CourseCard from '@/components/cards/academy-course.vue'
import sidebarBox from './sidebar.vue';
import CoursesAPI from '@/services/api/academy/courses.js'
export default {
  name: 'filter-list',
  props: {
    departmentId: {}
  },
  components: {

    sidebarBox,
    CourseCard
  },
  data: (vm) => {
    let type = vm.$route.query.type
    if (!type || !['live', 'on-site', 'recorded'].includes(type))
      type = null;
    return {
      filterSide: {
        type_training: null,
        type: type,
        //department_id:[vm.departmentId],
        min_price: 0,
        max_price: 1000
      },
      filterItem: {
        search: null,
        created_at: 'asc',
        type_training: null,
        type: type,
        department_id: [vm.departmentId],
        min_price: 0,
        max_price: 1000
      },
      items: []
    }
  },
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val }
      this.fireEvent('d-filter-list-refresh')
    },
    async loadList(metaInfo) {
      try {
        let params = {
          page: metaInfo.current_page,
          ...this.filterItem
        }
        return await CoursesAPI.getAll(params)

      } catch (error) {
        console.log('error', error)
        console.log('response', error.response)
      }
    }
  }
}
</script>

<style></style>