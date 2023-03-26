<template>
  <div class="sec-five mt-5 p-3">
                <div class="">
                  <div
                    class="d-flex justify-content-between align-items-center container"
                  >
                    <h1 class="home-section-title">
                        المشاريع المحتضنة
                    </h1>
                    <div>
                      <button class="more">{{ $t('more') }}</button>
                    </div>
                  </div>
                  <DSwiper
              :slides-per-view="5"
              :space-between="10"
              :loop="true"
              :navigation="true"
              :items="items"
            >
            <template  v-slot:default="{item}" >
                <CardVue :title="item.title" :img="item.img"/>
                </template>
                </DSwiper>
                </div>
              </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardVue from './card.vue'

export default {
    name:'section-incubation-projects',
    components:{
        DSwiper,
        CardVue
    },
    data:()=>({
        items:[
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 14502.png'},
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 17753.png'},
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 145029.png'},
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 1450232.png'},
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 1450232.png'},
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 1450232.png'},
        {title:'مركز باكورة الأهلية',img:'/assets/img/Group 1450232.png'},
    ]
    })

}
</script>

<style>

</style>