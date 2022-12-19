<template>
  <div style="margin-top: 96px;">


<div class="container">
    <div class="box shadow p-3">

        <div class="row">
            <div class="col-md-6">
                <div >
                  <p style="background-color:#FFBC00; width: fit-content;" class=" px-3 rounded-1  text-white">
                    {{meeting.owner}}
                  </p>
                  <h2>
                    {{meeting.title}}
                  </h2>
                  <p class="t-c">
                    {{meeting.date}}
                    <span>
                        |
                    </span>
                   {{meeting.time}}
                  </p>
                  <p class="t-c">
                   {{meeting.description}}
                  </p>
                  <div>
                    <button class="btn bg-main p-2 px-4 text-white">أنضم الى اللقاء</button>
                  </div>
                </div>
            </div>
            <div class="col-md-6">
                <div>
                   
                    <iframe 
                  height="384"
                    class="rounded-3 w-100 "
                    :src="meeting.video" 
                    title="مقطع تعريفي عن شركة رياديات" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe> 
                </div>
            </div>
        </div>
      
    </div>


</div>
<div>
    <div class="sec-five mt-5 p-3">

        <div class="">
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1> لقاءات تعليمية أخرى    </h1>
            <div>
              <button class="more">المزيد</button>
            </div>
          </div>
          <d-swiper :items="items">
             <template v-slot="{item}">
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
</div>

</div>
</template>

<script>
    import meetingCard from '@/components/cards/meeting.vue'
export default {
 name:'meeting-page',
 components:{
    meetingCard
 },
 data:()=>({
    meeting:{
        title:'خطة العمل ودراسة الجدوى المالية'
        ,owner:'مجلس'
        ,date:'23 يوليو'
        ,time:' 2:23 ص'
        ,description:'يبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعمال يبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعماليبدأ من الخميس القادم، تعلمي كل ما تريدين معرفته عن دراسة الجدوى مع قامة من قامات رياديات الأعمال'
        ,img:'/assets/img/learning.png'
        ,video:'https://www.youtube.com/embed/dGG9pWXS3ZQ'
    },
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