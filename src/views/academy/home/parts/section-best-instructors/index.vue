<template>
  <div class="sec-five py-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="home-section-title"> أبرز مدربتنا في اكاديمية رياديات</h1>
                <div v-if="false">
                    <button class="more">
                      <a href="" class="text-dark">
                          {{ $t('more') }}
                      </a>
                    </button>
                  </div>
              </div>
              <d-swiper
              v-if="!loading"
                :slides-per-view="slidesperview"
                is-auto
                :space-between="7"
                :items="items" 
              class="academy-departments"

            >
       
            <template  v-slot:default="{item}" >
              
                <CardMember 
                :to="getRouteLocale('academy-show-profile',{id:item.id})"
                :name="item.name" 
                :description="item.job_title" 
                :img="item.image"/>
                  
           
              
                </template>
              </d-swiper>
 </div>
    </div>
  
</template>

<script>

import CardMember from '@/components/cards/card-member.vue'
import academyAPI from '@/services/api/academy';
export default {
    name:'section-best-instructors',
    components:{
        CardMember
    },
    data:()=>({
    loading:true,
  total:0,
    items:[],
        slidesperview:2

 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await academyAPI.instructor.getBest({paginate:8});
          if(data.success){
            this.items = data.data
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
.swiper-slide{
  /* width:257.5px !important */
  width:280px !important
}
.provider-card{
  width:100% !important
}
</style>