<template>
 <div class="container mt-5">
        <d-filter-list 
        :call-list="loadList"
classColCard="col-12 col-md-4"
searchPlaceholder="أبحث  في قائمة القاءت"
hideSide
        @change="changeFilter"

        >
        <template v-slot:total="{}">
  <h1>لقاءات تعليمية</h1>
  </template>
<template v-slot:before-body>

    <div class="row">
    <div class="col-12 col-md-6 mb-3" v-for="btn in meetingType" :key="btn.id" >
      <button class="btn w-100" :class="[btn.active?'btn-custmer':'btn-default']" @click="getMeetingLearn(btn.id)">{{btn.text}} </button>
    </div>

  </div>
</template>
              <template v-slot="{item}">
                
                  <router-link class="router-link" :to="getRouteLocale('academy-learning-meeting-show',{id:item.id})">
                    <meetingCard 
                      :item="item"
                     :img="item.image"
                     :title="item.title"
                     :type="item.type"
                     :date="item.date"
                    />
        
                  </router-link>
              </template>
         
        </d-filter-list>
      </div> 
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
      meetingType:[{text:'لقاءات قادمة',id:1,active:true},{text:'لقاءات ماضية',id:2,active:false}],
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
    getMeetingLearn(id){
      for (let index = 0; index < this.meetingType.length; index++) {
        const element = this.meetingType[index];
           if (element.id==id) {
        element.active=true
      }else{
        element.active=false
      }
      }
    },
    changeFilter(val){
      console.log('val',val);
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