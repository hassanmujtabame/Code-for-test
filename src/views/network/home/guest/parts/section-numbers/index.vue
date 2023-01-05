<template>
   <div class="container">
          <div class="mt-5">
            <div class="">
                <h2 class="text-center">الشبكة  في ارقام  </h2>
                <d-swiper  v-if="!loading" 
                :items="categories"
                classColCard="col-6 col-md-auto mt-3"
                :slides-per-view="7"
                >
                    <template v-slot="{item}" >
                        <cardNumber
                        :title="item.name"
                        :value="statics[item.id]"
                        />
                    </template>
                </d-swiper>
            </div>
        </div>
      </div>
</template>

<script>
import userAPI from '@/services/api/user';
import cardNumber from './card-number.vue';
export default {
name:'section-numbers-networks',
components:{
    cardNumber
},
data:()=>({
    loading:true,
    categories : [
        {name:'لقاءات تعليمية',id:"count_meetings"},
        {name:'نماذخ',id:"count_models"},
        {name:'مدونات',id:"count_blogs"},
        {name:'عروض',id:"count_offers"},
        {name:'قصص نجاح',id:"count_stories"},
        {name:'معارض',id:"count_exhibitions"},
        {name:'مشاريع لاسثمار',id:"count_invest_projects"},
        {name:'مستثمرون',id:"invested"},
        {name:'شركائنا',id:"count_partners"},
    ],
  statics:{
    count_meetings: 'N/A',
        count_models: 'N/A',
        count_blogs: 'N/A',
        count_offers: 'N/A',
        count_stories:'N/A',
        count_exhibitions:'N/A',
        count_invest_projects: 'N/A',
        invested: 'N/A',
        count_partners: 'N/A',
  }
}) ,
methods:{
  async initializing(){
    this.loading = true;
      try {
         let { data } = await  userAPI.statisticsNetwork()
         if(data.success){
            this.statics = data.data;
         }
      } catch (error) {
         console.log('error',error)
         console.log('error response',error.response)
         if(error.response){
            let response =error.response
            if(response.status==401){
               //
           }
         }
         
      }
      this.loading = false;
   }
 },
 mounted(){
  this.initializing()
 }
}
</script>

<style>

</style>