<template>
   <div class=" p-3">

<div class="container">
    <div class="">
        <div class="row justify-content-between mt-5">
            <div class="col-md-6">
                <h2>
                    أهم المعارض
                </h2>

            </div>
            <div class="col-md-6 text-end">
                <button @click="openAddDialog" class="btn bg-main bg border text-white" >
                 <plusRectRoundIcon/>
                    {{ $t('add_exhibition') }}
                </button>
            </div>

        </div>

    </div>
    <d-swiper v-if="!loading"  style="overflow-x: hidden"
            :slides-per-view="4"
            :space-between="20"
            is-auto
              :items="items" >
              <template  v-slot:default="{item}" >
                <router-link class="router-link h-100" :to="getRouteLocale('network-exhibition-show',{id:item.id})">
                <exhibitionCard 
                class="h-100"
                :img="item.image"
                :userName="item.user_info.name"
                :place="item.city"
                :price="item.price"
                :title="item.title"
                :isShared="item.is_share"
                :description="item.content"
                :userInfo="item.user_info"
                />
            </router-link>
            </template>
       </d-swiper>
       
</div>
</div>
</template>

<script>
import exhibitionAPI from '@/services/api/exhibitions.js'
import exhibitionCard from '@/components/cards/exhibition.vue';
import plusRectRoundIcon from '@/components/icon-svg/plus-rect-round.vue';
export default {
 name:'top-exhibitions',
 components:{
    plusRectRoundIcon,
    exhibitionCard
 },
 data:()=>({
    itemsTest:[
        {id:44,title:'معرض الازياء الرجالي',city:'جدة',user_info:{name:'سارة'},image:'/assets/img/Rectangle -network.png',content:'معرض متكام لبيع و تنسيق الزهور'},
        {id:43,title:'معرض الازياء الرجالي',city:'جدة',user_info:{name:'سارة'},image:'/assets/img/Rectangle -network.png',content:'معرض متكام لبيع و تنسيق الزهور'},
        {id:44,title:'معرض الازياء الرجالي',city:'جدة',user_info:{name:'سارة'},image:'/assets/img/Rectangle -network.png',content:'معرض متكام لبيع و تنسيق الزهور'},
        {id:43,title:'معرض الازياء الرجالي',city:'جدة',user_info:{name:'سارة'},image:'/assets/img/Rectangle -network.png',content:'معرض متكام لبيع و تنسيق الزهور'},
        {id:44,title:'معرض الازياء الرجالي',city:'جدة',user_info:{name:'سارة'},image:'/assets/img/Rectangle -network.png',content:'معرض متكام لبيع و تنسيق الزهور'},
    ],
    loading:true,
    items:[]
 }),
 methods:{ 

    openAddDialog(){
       this.fireOpenDialog('add-dialog')
  },
    async loadList(){
        this.loading = true;
        try {
            let {data} = await exhibitionAPI.getRecent()

            if(data.success){
                this.items = data.data;
            }
        } catch (error) {
            console.log('error',error)
            console.log('response',error.response)
        }
        this.loading = false;
    }
 },
 mounted(){
    this.loadList()
 }
}
</script>

<style>

</style>