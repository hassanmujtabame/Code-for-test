<template>
      <div class="row">
            <div  class="d-flex justify-content-between align-items-center container">
          <div class="">

              <h1> مشاريع الاستثمار      </h1>
          </div>
            <div class="d-flex   align-items-center gap-2">
                <div  class="  mt-3 position-relative">
                    <select class="form-select form-select-lg mb-3  py-3" aria-label=".form-select-lg example">
                        <option selected> المضاف حديثا   </option>
                        <option value="1">الاعلى سعرا</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <p style="    top: -13px;
                      right: 24px;
                      background: white;
                  " class="position-absolute">
                        ترتيب حسب 
                      </p>
                </div> 
                <div>

                    <a href="" class="btn bg-main text-white p-2">
                        أعرض مشروعك لاستثمار
                      </a>
                </div>
            </div>
             </div>
             <div v-for="(item,i) in items" :key="i" class="col-md-6 mt-3">
                <router-link :to="getRouteLocale('network-investment-project-show',{id:item.id})">   
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
                </router-link>
                </div>
        </div>
</template>

<script>
import investmentProject from '@/components/cards/investment-project.vue';
export default {
 name:'sect-invest-project-1',
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