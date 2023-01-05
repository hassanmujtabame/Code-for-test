<template>
    <div class="row">
          <div  class="d-flex justify-content-between align-items-center container">
          <d-filter-list
          classColCard="col-md-6 mt-3"
          :call-list="initializing"
          hideSide
          >
          <template v-slot:total>
              <h1 class="text-bold">  {{ $t('Moral_investment_projects') }}</h1>
          </template>
              <template v-slot:order>
                  <select class="form-select form-select-lg mb-3  py-3" aria-label=".form-select-lg example">
                      <option selected> المضاف حديثا   </option>
                      <option value="1">الاعلى سعرا</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <p style="top: -13px;background: white;" class="position-absolute">
                      ترتيب حسب 
                    </p>
              </template> 
              <template v-slot:head-end>

                  <router-link :to="getRouteLocale('network-investment-project-request-add')" class="btn bg-main text-white p-2">
                      أعرض مشروعك لاستثمار
                  </router-link>
              </template>
       <template v-slot:default="{item}">
        
              <router-link class="router-link" :to="getRouteLocale('network-investment-project-show',{id:item.id})">   
              <DMoralProjectLarge
                 :title="item.title"
                 :description="item.description"
                 :publisher="item.user_info.name"
                 :date-publish="item.created_at"
                 :rest-day="item.rest_days"
                 :offers="item.count_invest"
                 :minimum-goal="item.minimum_investment"
                 :offered_property="item.offered_property"
                 :amount="item.amount_financing_required"
                 :place="item.place"
                 />
              </router-link>
          </template>
          </d-filter-list>
      </div>
      </div>
</template>

<script>
import projectsAPI from '@/services/api/projects.js'
import DMoralProjectLarge from '@/components/cards/projects/moral/large.vue';
//import investmentProject from '@/components/cards/offer-investment-project.vue';
export default {
name:'sect-invest-project-moral',
components:{
  DMoralProjectLarge
},
data:()=>({
  projects:[
      {id:1,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:50},
      {id:2,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:50},
      {id:3,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:50},
      {id:4,title:'تكنولوجيا القلم الديجيتال',user_info:{name:'خالد أسماعيل'},created_at:'22/12/2022',offered_property:30,amount_financing_required:'500,000',rest_days:40,count_invest:500,minimum_investment:20},
  ],

}),
methods:{
  async initializing(metaInfo){
   
              let params = {
              page: metaInfo.current_page
          }
              return await projectsAPI.getAllPage('moral',4,params)

  }
}
}
</script>

<style>

</style>