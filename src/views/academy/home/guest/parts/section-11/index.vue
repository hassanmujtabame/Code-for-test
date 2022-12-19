<template>
  <div class=" mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1> أحدث دورتنا      </h1>
                <div>
                    <button class="more">
                      <a href="" class="text-dark">
                          المزيد
                      </a>
                    </button>
                  </div>
              </div>
              <DSwiper
              style="overflow-x: hidden"
            :slides-per-view="4"
            :space-between="10"
              :loop="true"
              :pagination="true"
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
    name:'section-11',
    components:{
        DSwiper,
        CardVue
    },
    data:()=>({
        items:[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
        ]
    })
}
</script>

<style>

</style>