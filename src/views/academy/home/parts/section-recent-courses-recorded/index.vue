<template>
  <div class=" mt-5 p-3">
            <div class="container">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
              <h1 class="home-section-title"> أحدث دورتنا المسجلة  </h1>
                <div>
                    <button class="more">
                      <a href="" class="text-dark">
                          {{ $t('more') }}
                      </a>
                    </button>
                  </div>
              </div>
              <d-swiper
              v-if="!loading"
              :slides-per-view="slidesperview"
              :space-between="10"
              is-auto
                :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardVue 
                :item="item"
                />
                </template>
              </d-swiper>
            </div>
          </div>
</template>

<script>
import CardVue from '@/components/cards/academy-course.vue'
import coursesApI from '@/services/api/academy/courses.js'
export default {
    name:'section-recent-courses-recorded',
    components:{
        CardVue
    },
    data:()=>({
        items:[],
        loading:true,
        slidesperview:4
    }),
    methods:{
     async loadList(){
      this.loading =  true;
        try {
          let {data} = await coursesApI.getAll()
          if(data.success){
            this.items = data.data
            if(this.items.length<=4) this.slidesperview=3
          }
        } catch (error) {
          console.log('error',error)
        }
        this.loading =  false;
      }
    },
    mounted(){
      this.loadList()
    }
}
</script>

<style>

</style>