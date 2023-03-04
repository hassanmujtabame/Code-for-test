<template>
  <div class="mt-5 p-3">

<div class="container">
  <div
    class="d-flex justify-content-between align-items-center"
  >
    <h1 class="home-section-title">{{ $t('learning-meetings') }}</h1>
    <div>
      <router-link  class="more" :to="getRouteLocale('network-learning-meetings')" >
        {{ $t('more') }}
      </router-link>
    </div>
  </div>
  <d-swiper
  v-if="!loading"
  :slides-per-view="3"
  is-auto
  :space-between="5"
    :items="items"
              >
                <template  v-slot:default="{item}" >
                  <router-link class="router-link" :to="getRouteLocale('network-learning-meeting-show',{id:item.id})">

                <meetingCard 
                      :item="item"
                     :img="item.image"
                     :title="item.title"
                     :type="item.type"
                     :date="item.date"
                     :time="item.time"
                    />
                    </router-link>
        </template>
    </d-swiper>
</div>
</div>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
import meetingCard from '@/components/cards/meeting.vue'
export default {
 name:'section-eductional-meeting',
 components:{
    meetingCard
 },
 data:()=>({
  loading:true,
  total:0,
    items:[
    /*{title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
*/
    ]
 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await meetingsAPI.getHomeNetwork();
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