<template>
<div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1>
                    خريجات مميزات في برنامج السياحة                         </h1>
      
              </div>
              <DSwiper
              style="overflow-x: hidden"
            :slides-per-view="5"
            :space-between="10"
              :loop="true"
              :pagination="true"
              :navigation="true"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardMember 
                :name="item.name" 
              
                :img="item.img"/>
                </template>
            </DSwiper>
            </div>
          </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardMember from '@/components/cards/card-member.vue'
export default {
  name:'section-4',
  components:{

  DSwiper,
        CardMember
    },
    data:()=>({
        items:[
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'',img:'/assets/img/Rectangle 1775qa.png'},
        ]
    })
}
</script>

<style>

</style>