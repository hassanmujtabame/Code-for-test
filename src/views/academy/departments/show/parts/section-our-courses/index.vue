<template>
  <div class="container mt-3">
  <div class="row">
  <div class="col-12">
    <h1 class="home-section-title text-center"> دورتنا في مجال {{itemPage.title}}</h1>
  </div>
  <div class="col-12">
<d-filter-list 
    :call-list="loadList"
    :searchPlaceholder="$t('search-by-course-or-instructor')"
    hideSide
    hideTotal
    classColCard="col-12 col-md-4 mt-3"
    classSearchOrder="justify-content-between"
    classColOrder="col-md-3"
    orderName="price"
        :orderOpts="
             [
                {id:'asc',name:'الأقل سعرا'},
                {id:'desc',name:'الأغلى سعرا',}
            ]"
>
<template v-slot="{item}">
  
    <CourseCard :item="item"
    :url="getRouteLocale('academy-course-show',{id:item.id})"
    />
</template>

</d-filter-list>
</div>
</div>
</div>
</template>

<script>
import CourseCard  from '@/components/cards/academy-course.vue'
import CoursesAPI from '@/services/api/academy/courses.js'
export default {
  name:'our-courses',
  props:{
      itemPage:{}
  },
  components:{
    CourseCard
  },
  data:(vm)=>{
    let type = vm.$route.query.type
    if(!type || !['live','on-site','recorded'].includes(type))
    type=null;
    return {

        filterItem:{
            search:null,
            price:'asc',
            department_id:vm.itemPage.id
          
        },
      items:[]
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
                    ...this.filterItem,
                    paginate:6,
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