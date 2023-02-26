<template>
  <div class=" mt-5 p-3">
            <div class="container">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
              <h1 class="home-section-title">دورات في المقرات</h1>
                <div>
                    <button class="more">
                      <router-link :to="getRouteLocale('academy-courses',{},{type:'on-site'})" class="text-dark">
                          {{ $t('more') }}
                      </router-link>
                    </button>
                  </div>
              </div>
              <div class="row">
              <div
             class="col-12 col-sm-6 col-md-4 mt-2"
                v-for="(item,i) in items"
                :key="i"
              >
              <router-link class="router-link" :to="getRouteLocale('academy-course-show',{id:item})" >
                <CardVue 
                :item="item"
                />
                </router-link>
              </div>
            </div>
            </div>
          </div>
</template>

<script>
import CardVue from '@/components/cards/academy-course.vue'
import coursesApI from '@/services/api/academy/courses.js'
export default {
    name:'section-recent-courses-on-site',
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
          let {data} = await coursesApI.getRecentCourses({paginate:6,type:'on-site'})
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