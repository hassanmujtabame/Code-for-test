<template>
 <div style="margin-top: 85px" class="consult">
      <div class="consulting">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-6">
              <h1 class="fs-1 text-white">   لقاءات تعليمية  </h1>
              <p class="text-white">
                كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة     
                كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
            </p>
            </div>
            <div class="col-md-6">
              <div style="overflow: inherit" class="m-auto text-end">
                <img class="img-fluid" src="/assets/img/Frame-learning-metting.png" alt="" />
              </div>
            </div>
          </div>
          <div class="star-cons">
            <img src="/assets/img/starrrr.png" alt="" />
          </div>
          <div class="star-cons stars">
            <img src="/assets/img/starsss.png" alt="" />
          </div>
        </div>
      </div>
      <d-filter-list link="network/meetings" :fakeItems="items">
       <template v-slot:topEnd>
        <button class="btn bg-main text-white" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
            <img src="/assets/svg/add-circle-outline.svg" />
            أضف لقاء تعليمي
          </button>
       </template>
       <template v-slot:default="{item}">
        <router-link :to="getRouteLocale('academy-learning-meeting-show',{id:item.id})">
        <meetingCard 
                     :img="item.img"
                     :title="item.title"
                     :owner="item.owner"
                     :date="item.date"
                    />
                  </router-link>
       </template>
      </d-filter-list>
    </div>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
export default {
 name:'learning-meetings',
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