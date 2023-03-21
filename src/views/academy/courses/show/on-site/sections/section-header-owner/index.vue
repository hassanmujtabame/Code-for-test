<template>
 <div class="course-show-page__header">
    <div class="row">
                <div v-for="(widget,i) in widgets" :key="i" class="col-6 col-md-3">
                    <widgetInfo v-bind="widget" />
                </div>
            </div>
            <div class="text-end">
                <actionsPage :item-page="itemPage" />
            </div>
  </div>
</template>

<script>
import actionsPage from './actions-page.vue'
import widgetInfo from './widget-info.vue'
export default {
 name:'section-owner',
 props:{
    itemPage:{}
 },
 components:{
  widgetInfo,
  actionsPage
 },
 data:(vm)=>{
    return{
  widgets:[
  {title:'المشاهدات',content:`${vm.itemPage.views} شخص`,link:null},
    {title:'حجزو مقعد للدورة القادمة',content:`${vm.itemPage.booking_next_course} شخص`,link:null},
    {title:'عدد خريجين الدورة',content:'20/40',link:'/'},
    {title:'موعد المجموعه الثانية',content:vm.dateReverse(vm.itemPage.next_course_date),link:'/'},
  ]
 }
}
}
</script>

<style>

</style>