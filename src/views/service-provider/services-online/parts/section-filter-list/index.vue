<template>
  <d-filter-list :fakeItems="items">
    <template v-slot="{item}">
        <router-link :to="getRouteLocale('service-provider-show-service',{id:item.id})">
    <showService 
        :title="item.title"
        :description="item.description"
        :owner="item.owner"
        :image="item.image"
        :price="item.price"
        :place="item.place"
        :department="item.departement"

    />
</router-link>
    </template>
</d-filter-list>
</template>

<script>
import showService from '@/components/cards/show-service.vue';
export default {
 name:'section-filter-list',
 components:{
    showService
 },
 data:()=>({
    items:[
        {id:1,title:'أنشاء لوجو احترافي',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',place:'جدة',price:150,owner:'سارة',departement:'التصميم',image:'/assets/img/fi.png'},
        {id:2,title:'أنشاء لوجو احترافي',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',place:'جدة',price:150,owner:'سارة',departement:'التصميم',image:'/assets/img/fi.png'},
        {id:3,title:'أنشاء لوجو احترافي',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',place:'جدة',price:150,owner:'سارة',departement:'التصميم',image:'/assets/img/fi.png'},
        {id:4,title:'أنشاء لوجو احترافي',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',place:'جدة',price:150,owner:'سارة',departement:'التصميم',image:'/assets/img/fi.png'},
        {id:5,title:'أنشاء لوجو احترافي',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',place:'جدة',price:150,owner:'سارة',departement:'التصميم',image:'/assets/img/fi.png'},
        {id:6,title:'أنشاء لوجو احترافي',description:'عبارة عن تجهيز كوشة فرح وتجهيز القاعة بالكامل.',place:'جدة',price:150,owner:'سارة',departement:'التصميم',image:'/assets/img/fi.png'},
    ]
 })
}
</script>

<style>

</style>