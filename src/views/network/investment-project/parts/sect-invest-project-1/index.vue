<template>
      <div class="row">
            <div  class="d-flex justify-content-between align-items-center container">
          <div class="">

              <h1 class="text-bold">  {{ $t('Material_investment_projects') }}</h1>
          </div>
            <div class="d-flex   align-items-center gap-2">
                <div  class="  mt-3 position-relative">
                    <select class="form-select form-select-lg mb-3  py-3" aria-label=".form-select-lg example">
                        <option selected> المضاف حديثا   </option>
                        <option value="1">الاعلى سعرا</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <p style="top: -13px;background: white;" class="position-absolute">
                        ترتيب حسب 
                      </p>
                </div> 
                <div>

                    <router-link :to="getRouteLocale('network-investment-project-request-add')" class="btn bg-main text-white p-2">
                        أعرض مشروعك لاستثمار
                    </router-link>
                </div>
            </div>
             </div>
             <div v-for="(item,i) in items" :key="i" class="col-md-6 mt-3">
                <router-link :to="getRouteLocale('network-investment-project-show',{id:item.id})">   
                <investmentProject
                   :title="item.title"
                   :publisher="item.user_info.name"
                   :date-publish="item.created_at"
                   :rest-day="item.rest_days"
                   :investor="item.count_invest"
                   :minimum-goal="item.minimum_investment"
                   :offered_property="item.offered_property"
                   :amount="item.amount_financing_required"
                   :place="item.place"
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
        {id:1,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:50},
        {id:2,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:50},
        {id:3,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:50},
        {id:4,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:20},
    ]
 })
}
</script>

<style>

</style>