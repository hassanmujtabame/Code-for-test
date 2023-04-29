<template>
<div id="course-rates">
    <h1  class="course-guest-section__title">{{ $t('rates') }}</h1>
    <div class="mt-3">
      <rateCard v-for="(r,i) in rates"  :key="i"
      :name="r.user_info.name"
      :image="r.user_info.image"
      :rate="r.rate"
      :comment="r.comment"
      :datetime="r.created_at"
      class="mt-2"
      />
    </div>
    </div>
</template>

<script>
let itemTest={
    comment:'دكتور مميز لقد أستفدت منه الكثير',
            rate:3,
            created_at:'2023-03-15T12:08:10',
            user_info:{
                id:148,
                image:'/assets/img/avatar-11.jpg',
                name:'ليلى احمد'
            }
        }
import rateCard from './rate-item.vue'
export default {
 name:'section-rates',
 props:{
    itemPage:{}
 },
 components:{
  rateCard
 },
 data:(vm)=>{
  let ratesTest=[itemTest,
    itemTest,
    itemTest,]
  return {
  rates:process.env.NODE_ENV=='development' && vm.itemPage.rates.length==0?ratesTest:vm.itemPage.rates
 }
}
}
</script>

<style>

</style>