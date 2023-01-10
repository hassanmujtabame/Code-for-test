<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1>أعضاء مميزات    </h1>
                <div>
                  <!---->
                </div>
              </div>
              
              <d-swiper           
                :slides-per-view="5"
                is-auto
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
 name:'section-5',
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

<style>

</style>