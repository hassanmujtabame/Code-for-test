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
        <meetingCard 
                     :img="item.img"
                     :title="item.title"
                     :owner="item.owner"
                     :date="item.date"
                    />
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