<template>
<d-filter-list 
:fake-items="items"
classColCard="col-12 col-md-4"
hideSide
>
<template v-slot:total="{}">
  <h1>لقاءاتك التعليمية</h1>
  </template>
<template v-slot="{}">
  <div class="box mt-3 mx-2">
    <meetingCard
    :img="itemTest.image"
                     :title="itemTest.title"
                     :owner="itemTest.userName"
                     :date="itemTest.date"
    />
  </div>
</template>

</d-filter-list>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
import CoursesAPI from '@/services/api/academy/courses.js'
export default {
  name:'filter-list',
  components:{
    meetingCard
  },
  data:()=>{
    return {
      itemTest:
    {id:1,title:'خطة العمل ودراسة الجدوى المالية',userName:'مجلس',date:'23 يوليو',image:'/assets/img/learning.png'},
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