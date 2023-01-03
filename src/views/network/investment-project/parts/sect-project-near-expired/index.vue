<template>
  <div class=" mt-5 p-3">
        <div class="">
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1 class="text-bold">جولات تنتهي هذا الاسبوع</h1>
            <div>
     
                  <router-link :to="getRouteLocale('network-investment-project-request-add')" class="btn bg-main text-white p-2">
                    أعرض مشروعك لاستثمار
                  </router-link>
              
              </div>
          </div>
          <d-swiper
          v-if="!loading"
          :items="items"
          :slides-per-view="3"
          :space-bitween="10"
          >
          <template v-slot="{item}">
            <router-link :to="getRouteLocale('network-investment-project-show',{id:item.id})"> 
            <investmentProject style="width:95%"
            :image="item.image"
                   :title="item.title"
                   :publisher="item.user_info.name"
                   :date-publish="item.created_at"
                   :rest-day="item.rest_days"
                   :investor="item.count_invest"
                   :minimum-goal="item.minimum_investment"
                   :offered_property="item.offered_property"
                   :amount="item.amount_financing_required"
                   />
            </router-link>
          </template>
              
    
       
          </d-swiper>
          

        </div>

      </div>
</template>

<script>
import projectsAPI from '@/services/api/projects';
import investmentProject from '@/components/cards/investment-project.vue';
export default {
 name:'sect-recent-courses',
 components:{
    investmentProject
 },
 data:()=>({
  loading:true,
  itemsTest:[
        {id:1,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:2,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:3,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:4,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:20},
    ],
    items:[]
 }),
 methods:{
  async loadList(){
    this.loading = true;
    try {
      let {data} = await projectsAPI.getRecents()
      if(data.success){
        this.items = data.data.filter((x,i)=>i<5)
      }
    } catch (error) {
      console.log('error',error)
      console.log('error response',error.response)
    }
    this.loading = false;
  }
 },
 mounted(){
  this.loadList()
 }
}
</script>

<style>

</style>