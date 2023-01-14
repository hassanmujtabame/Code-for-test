<template>
    <div style="margin-top: 85px " class="consult">
        <div class="consulting ">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white"> خدماتك الجاهزة </h1>
                        <p class="text-white">
يمكنك أضافة خدماتك و ما يمكنك تقديمه الى العملاء كخدمات جاهزة يمكنهم طلب شرائها منك</p>
                    </div>
                    <div class="col-md-6 pt-4">
                        <div style="overflow: inherit;" class=" m-auto text-end">
                            <img src="/assets/img/Group1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="">
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="">
                </div>
            </div>
        </div>
        <div class="container">
           <SectionFilterList />
        </div>
   
        <SectionLearning />
       <SectionHear />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index'
import SectionHear from '../home/parts/section-hear/index.vue'
import SectionLearning from '../home/parts/section-continue-learning/index.vue'
export default {
 name:'ready-services',
 components:{
    SectionHear,
    SectionLearning,
    SectionFilterList
 },
 data:()=>({
    items:[
        {id:1,title:'تجهيز كوشة فرح',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',department:'الافراح',status:'actived',image:'/assets/img/Rectangle 1798.png'},
        {id:2,title:'تجهيز كوشة فرح',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',department:'الافراح',status:'actived',image:'/assets/img/Rectangle 1798.png'},
        {id:3,title:'تجهيز كوشة فرح',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',department:'الافراح',status:'actived',image:'/assets/img/Rectangle 1798.png'},
        {id:4,title:'تجهيز كوشة فرح',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',department:'الافراح',status:'actived',image:'/assets/img/Rectangle 1798.png'},
        {id:5,title:'تجهيز كوشة فرح',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',department:'الافراح',status:'actived',image:'/assets/img/Rectangle 1798.png'},
        {id:6,title:'تجهيز كوشة فرح',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',department:'الافراح',status:'stopped',image:'/assets/img/Rectangle 1798.png'},
    ]
 })
}
</script>

<style>

</style>