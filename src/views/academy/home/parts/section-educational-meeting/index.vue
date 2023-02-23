<template>
  <div class="sec-five mt-5 p-3">

<div class="container">
  <div
    class="d-flex justify-content-between align-items-center container"
  >
    <h1> لقاءات تعليمية      </h1>
    <div>
      <router-link custom :to="getRouteLocale('academy-learning-meetings')" v-slot="{navigate}">
      <button @click="navigate" role="link" class="more">{{ $t('more') }}</button>
      </router-link>
    </div>
  </div>
  <d-swiper
  :slides-per-view="3"
  :space-between="5"
  is-auto
    :items="items"
              >
                <template  v-slot:default="{item}" >
              <router-link :to="getRouteLocale('academy-learning-meeting-show',{id:item.id})">
                <meetingCard 
                :item="item"
                     :img="item.img"
                     :title="item.title"
                     :type="item.type"
                     :date="item.date"
                    />
              </router-link>
        </template>
    </d-swiper>
</div>
</div>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
export default {
 name:'section-eductional-meeting',
 components:{
    meetingCard
 },
 data:()=>({
    items:[
    {id:1,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:2,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:3,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:4,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:5,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:6,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:7,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:8,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:9,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {id:10,title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},

    ]
 })
}
</script>

<style>

</style>