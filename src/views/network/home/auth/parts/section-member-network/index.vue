<template>
<div class="sec-five mt-5 p-3">
            <h2 class="m-c text-center">
                بنضمامك لنا أسرة الشبكة أصبح عددها 
                <a href="" class="y-c">
                    520
                </a>
            </h2>
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1>أعضاء الشبكة</h1>
                <div>
                  <button class="more">المزيد</button>
                </div>
              </div>
              <d-swiper           
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
    name:'section-member-network',
 components:{
    CardMember
  },
  data:()=>({
    items:[
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
    ]
  })
}
</script>