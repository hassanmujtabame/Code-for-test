<template>
  <div class=" mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
              <h1> أحدث الدورات المسجلة    </h1>
                <div>
                    <button class="more">
                      <a href="" class="text-dark">
                          {{ $t('more') }}
                      </a>
                    </button>
                  </div>
              </div>
              <d-swiper
              style="overflow-x: hidden"
            :slides-per-view="slidesperview"
            :space-between="10"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
              <CardVue 
                :category="item.departmentName"
                :title="item.title" 
                :img="item.path"
                :price="item.price"
                :place="item.placeNAME"
                :description="item.description"
                :name="item.instructorName"
                />
                </template>
              </d-swiper>
            </div>
          </div>
</template>

<script>
import CardVue from '@/components/cards/course.vue'
import coursesApI from '@/services/api/courses.js'
export default {
    name:'section-recent-courses',
    components:{
        CardVue
    },
    data:()=>({
      slidesperview:4,
        items:[]
    }),
    methods:{
     async loadList(){
        try {
          let {data} = await coursesApI.getAll()
          if(data.success){
            this.items = data.data
            if(this.items.length<=4) this.slidesperview=3
          }
        } catch (error) {
          console.log('error',error)
        }
      }
    },
    mounted(){
      this.loadList()
    }
}
</script>

<style>

</style>