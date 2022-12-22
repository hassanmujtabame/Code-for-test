<template>
  <div class=" mt-5 p-3">
        <div class="">
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1> أحدث دورتنا      </h1>
            <div>
     
                  <a href="" class="btn bg-main text-white p-2">
                    أعرض مشروعك لاستثمار
                  </a>
              
              </div>
          </div>
          <d-swiper
          :items="items"
          :slides-per-view="3"
          :space-bitween="10"
          >
          <template v-slot="{item}">
            <router-link :to="getRouteLocale('network-investment-project-show',{id:item.id})"> 
            <investmentProject style="width:95%"
                   :title="item.title"
                   :publisher="item.publisher"
                   :date-publish="item.datePublish"
                   :rest-day="item.restDay"
                   :investor="item.investor"
                   :minimum-goal="item.minimumGoal"
                   :ownership="item.ownership"
                   :amount="item.amount"
                   />
            </router-link>
          </template>
              
    
       
          </d-swiper>
          

        </div>

      </div>
</template>

<script>
import investmentProject from '@/components/cards/investment-project.vue';
export default {
 name:'sect-recent-courses',
 components:{
    investmentProject
 },
 data:()=>({
  items:[
        {id:1,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:2,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:3,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {id:4,title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:20},
    ]
 })
}
</script>

<style>

</style>