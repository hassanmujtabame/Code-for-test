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
              <d-swiper
              style="overflow-x: hidden"
            :slides-per-view="4"
            :space-between="10"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardVue :title="item.title" :img="item.img"/>
                </template>
              </d-swiper>
            </div>
          </div>
</template>

<script>
import CardVue from './card.vue'

export default {
    name:'section-recent-courses',
    components:{
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