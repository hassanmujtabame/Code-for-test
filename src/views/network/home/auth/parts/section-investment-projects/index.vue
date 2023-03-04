<template>
  <div class="container mt-5" >
            <div class="row">
                <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="home-section-title"> {{ $t('investment-projects') }}      </h1>
                <div>
                  <router-link class="router-link" custom 
                :to="getRouteLocale('network-investment-project')"
                v-slot="{navigate}"
                >
              <button @click="navigate" class="more">{{ $t('know-more') }}</button>
                </router-link>
                </div>
              </div>
                <div v-for="(item,i) in items" :key="i" class="col-md-6 mt-3">
                <router-link class="router-link" :to="getRouteLocale('network-investment-project-show',{id:item.id})">   
                  <investmentProject
                   :title="item.title"
                   :description="item.description"
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

          </div>
</template>

<script>
import projectsAPI from '@/services/api/projects.js'
import investmentProject from '@/components/cards/investment-project.vue';
export default {
 name:'investment-projects',
 components:{
    investmentProject
 },
 data:()=>({
  loading:true,
  total:0,
    items:[
       /* {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:50},
        {title:'تكنولوجيا القلم الديجيتال',publisher:'خالد أسماعيل',datePublish:'22/12/2022',offered_property:30,amount:'500,000',restDay:40,investor:500,minimumGoal:20},
        */
      ]
 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await projectsAPI.getHomeNetwork();
          if(data.success){
            this.items = data.data
            this.total = data.meta.total
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  mounted(){
    this.initlizing()
  }
}
</script>

<style>

</style>