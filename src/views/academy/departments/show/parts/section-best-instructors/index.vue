<template>
  <div class="sec-five py-3 mt-5">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="home-section-title"> أهم مدربتنا في مجال {{itemPage.title}}</h1>
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
                :slides-per-view="4"
                is-auto
                :space-between="10"
                :items="items"
            >
       
            <template  v-slot:default="{item}" >
              
                <CardMember 
                :name="item.name" 
                :description="item.job_title" 
                :img="item.image"
                :to="getRouteLocale('academy-show-profile',{id:item.id})"
                />
              
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
    props:{
        itemPage:{}
    },
    components:{
        CardMember
    },
    data:()=>({
    loading:true,
  total:0,
    items:[]
 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await academyAPI.instructor.getBest({paginate:8,deparment_id:this.itemPage.id});
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

</style>