<template>
  <div class="sec-five">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="home-section-title"> أبرز مدربتنا في اكاديمية رياديات</h1>
                <div v-if="false">
                    <button class="more">
                      <a href="" class="text-dark">
                          {{ $t('more') }}
                      </a>
                    </button>
                  </div>
              </div>
              <d-swiper
                :slides-per-view="4"
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
    name:'section-best-instructors',
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