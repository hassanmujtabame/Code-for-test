<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1> أبرز مدربتنا في الاكاديمية</h1>
                <div>
                    <button class="more">
                      <a href="" class="text-dark">
                          المزيد
                      </a>
                    </button>
                  </div>
              </div>
              <d-swiper
              style="overflow-x: hidden"
            :slides-per-view="5"
            :space-between="10"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardMember 
                :name="item.name" 
                :description="item.description" 
                :img="item.img"/>
                </template>
              </d-swiper>
 </div>
    </div>
  
</template>

<script>

import CardMember from '@/components/cards/card-member.vue'

export default {
    name:'section-best-intructors',
    components:{
        CardMember
    },
    data:()=>({
        items:[
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
            {name:'العنود محمد',description:'التصوير',img:'/assets/img/Rectangle 1775qa.png'},
        ]
    })
}
</script>

<style>

</style>