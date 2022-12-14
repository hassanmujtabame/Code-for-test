<template>
  <div class="sec-five mt-5 p-3">

<div class="">
  <div
    class="d-flex justify-content-between align-items-center container"
  >
    <h1> لقاءات تعليمية      </h1>
    <div>
      <button class="more">المزيد</button>
    </div>
  </div>
  <d-swiper
  :slides-per-view="5"
  :space-between="10"
    :items="items"
              >
                <template  v-slot:default="{item}" >
                <meetingCard 
                     :img="item.img"
                     :title="item.title"
                     :owner="item.owner"
                     :date="item.date"
                    />
        </template>
    </d-swiper>
</div>
</div>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
export default {
 name:'learning-meeting',
 components:{
    meetingCard
 },
 data:()=>({
    items:[
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},
    {title:'خطة العمل ودراسة الجدوى المالية',owner:'مجلس',date:'23 يوليو',img:'/assets/img/learning.png'},

    ]
 })
}
</script>

<style>

</style>