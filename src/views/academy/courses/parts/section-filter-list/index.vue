<template>
<d-filter-list :fake-items="items"
:searchPlaceholder="$t('search-by-course-or-instructor')"
pluralName="قائمة  الدورات"
singleName="دورة"
>
<template v-slot="{}">
  <router-link class="router-link" :to="getRouteLocale('academy-course-show',{id:1})">
    <CourseCard />
  </router-link>
</template>
<template v-slot:side>
  <sidebarBox :filterItem="filterSide" @change="changeFilter"/>
</template>
</d-filter-list>
</template>

<script>
import CourseCard from './card'
import sidebarBox from './sidebar.vue';
import CoursesAPI from '@/services/api/academy/courses.js'
export default {
  name:'filter-list',
  components:{
 
    sidebarBox,
    CourseCard
  },
  data:()=>{
    return {
      filterSide:{
      is_share:null,
      category_id:[],
    },
        filterItem:{
            search:null,
            price:'asc',
            is_share:null,
            category_id:[],
        },
      items:[
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  },
  methods:{
    changeFilter(val){
            this.filterItem = {...this.filterItem,...val}
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

<style>

</style>