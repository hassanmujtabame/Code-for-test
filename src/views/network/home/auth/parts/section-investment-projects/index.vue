<template>
  <div class="container mt-5" >
            <div class="row">
                <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1> مشاريع الاستثمار      </h1>
                <div>
                  <button class="more">اعرف  اكثر</button>
                </div>
              </div>
                <div v-for="(item,i) in items" :key="i" class="col-md-6 mt-3">
                   <investmentProject
                   :title="item.title"
                   :publisher="item.publisher"
                   :date-publish="item.datePublish"
                   :rest-day="item.restDay"
                   :investor="item.investor"
                   :minimum-goal="item.minimumGoal"
                   :ownership="item.ownership"
                   :amount="item.amount"
                   />
                </div>
               
            </div>

          </div>
</template>

<script>
import investmentProject from '@/components/cards/investment-project.vue';
export default {
 name:'investment-projects',
 components:{
    investmentProject
 },
 data:()=>({
    items:[
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',ownership:30,amount:'500,000',restDay:40,investor:500,minimumGoal:20},
    ]
 })
}
</script>

<style>

</style>