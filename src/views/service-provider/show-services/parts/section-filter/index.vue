<template>
  <d-filter-list :fakeItems="items">

<template v-slot="{item}">
  <router-link :to="getRouteLocale('service-provider-page-service',{id:item.id})">
    <showRequest 
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
    </router-link>
</template>

</d-filter-list>
</template>

<script>
import showRequest from '@/components/cards/show-request.vue'
export default {
 name:'section-filter',
  components:{
    showRequest
  },
  data:()=>({
    items:[
        {id:1,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:2,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:3,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:4,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:5,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:6,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:7,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:8,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:9,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500},
        {id:10,title:'تصميم فستان لحلفة تخرج',description:'أحتاج مصممة ازياء على وجهه السرعة تصمم لي فستان بسيط لحفلة تخرجي',department:'قسم الازياء',category:'الخياطة',place:'جدة',during:'6 أيام',offers:'3',datePublish:'نشر منذ ساعة',price:1500}
    ]
  })
}
</script>

<style>

</style>