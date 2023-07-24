<template>
<d-filter-list 
:call-list="loadList"
classColCard="col-12 col-md-4"
searchPlaceholder="أبحث  في قائمة القاءت"
hideSide
>
<template v-slot:total="{}">
  <h1>لقاءاتك التعليمية</h1>
  </template>
<template v-slot="{item}">
  <div class="box mt-3 mx-2">
    <meetingCard
    :item="item"
    :img="item.image"
    :title="item.title"
    :type="item.type"
    :date="item.date"
    />
  </div>
</template>

</d-filter-list>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
import academyAPI from '@/services/api/academy/index.js'
export default {
  name:'filter-list',
  components:{
    meetingCard
  },
  data:(vm)=>{
    return {
      itemTest:
    {id:1,title:'خطة العمل ودراسة الجدوى المالية',userName:'مجلس',date:'23 يوليو',image:`${vm.publicPath}assets/img/learning.png`},
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
                return await academyAPI.student.getMyMeetings(params)

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