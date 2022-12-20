<template>
  <d-filter-list :fakeItems="items">

<template v-slot="{item}">
    <showService 
        :title="item.title"
        :description="item.description"
        :department="item.department"
        :category="item.category"
        :price="item.price"
        :during="item.during"
        :place="item.place"
        :offers="item.offers"
        :datePublish="item.datePublish"
     />
</template>

</d-filter-list>
</template>

<script>
import showService from '@/components/cards/show-service.vue'
export default {
 name:'section-filter',
  components:{
    showService
  },
  data:()=>({
    items:[
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500}
    ]
  })
}
</script>

<style>

</style>