<template>
    <div style="margin-top: 85px " class="consult">
        <SectionTop />
    
        <div class="container">
           <SectionFilterList />
        </div>
   
        <SectionLearning />
       <SectionHear />
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index'
import SectionHear from '@/views/service-provider/common-components/section-hear/index.vue'
import SectionTop from './parts/section-top/index.vue'
import SectionLearning from '@/views/service-provider/common-components/section-continue-learning/index.vue'
export default {
 name:'ready-services',
 components:{
    SectionHear,
    SectionTop,
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