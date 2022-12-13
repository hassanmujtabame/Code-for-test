<template>
  <div class=" mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1> أهم اكواد الخصم     </h1>
                <div>
         
                      <button @click="addOffer" class="btn bg-main text-white p-2" >
                        أضف عرض او خصم
                      </button>
                  
                  </div>
              </div>
              <d-swiper :items="items" 
              :slides-per-view="3"
                    :space-between="5"
    >
                <template v-slot="{item}">
                  <div  class=" mt-2 ">
                    <CouponCard
                    :img="item.img"
                    :title="item.title"
                    :discount="item.discount"
                    :date="item.date"
                    :during="item.during"
                    :name="item.name"
                    :tag="item.tags[0]" />
                  </div>
             
            
           
                </template>
               
              </d-swiper>
    
            </div>
    
          </div>
</template>

<script>
import CouponCard from '@/components/cards/coupon.vue'
export default {
 name:'corpon-section',
 components:{
    CouponCard
 },
 data:()=>({
    items:[
        {title:'أكسبوكس',name:'Riadiat-10',discount:10,date:'2022/12/12',during:'5',tags:['ترفيه'],img:'/assets/img/Icon ionic-logo-xbox-2.png'},
        {title:'أكسبوكس',name:'Riadiat-10',discount:10,date:'2022/12/12',during:'5',tags:['ترفيه'],img:'/assets/img/Icon ionic-logo-xbox-2.png'},
        {title:'أكسبوكس',name:'Riadiat-10',discount:10,date:'2022/12/12',during:'5',tags:['ترفيه'],img:'/assets/img/Icon ionic-logo-xbox-2.png'},
        {title:'أكسبوكس',name:'Riadiat-10',discount:10,date:'2022/12/12',during:'5',tags:['ترفيه'],img:'/assets/img/Icon ionic-logo-xbox-2.png'},
        {title:'أكسبوكس',name:'Riadiat-10',discount:10,date:'2022/12/12',during:'5',tags:['ترفيه'],img:'/assets/img/Icon ionic-logo-xbox-2.png'},
    ]
 }),
methods:{
  addOffer(){
    window.EventBus.fire('add-dialog-open-dialog')
  }
},
 mounted(){
 
 }
}
</script>

<style>

</style>