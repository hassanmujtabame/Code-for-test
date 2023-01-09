<template>
  <div class="sec-five mt-5 p-3">

<div class="container">
  <div
    class="d-flex justify-content-between align-items-center"
  >
    <h1>{{ $t('learning-meetings') }}</h1>
    <div>
      <router-link custom :to="getRouteLocale('network-learning-meetings')" v-slot="{navigate}">
      <button @click="navigate" class="more">{{ $t('more') }}</button>
      </router-link>
    </div>
  </div>
  <d-swiper
  v-if="!loading"
  :slides-per-view="3"
  :space-between="5"
    :items="items"
              >
                <template  v-slot:default="{item}" >
                <meetingCard 
                     :img="item.image"
                     :title="item.title"
                     :owner="item.user_info.name"
                     :date="`${item.date} ${item.time}`"
                    />
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