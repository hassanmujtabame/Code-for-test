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
                  v-if="!loading"
              :slides-per-view="5"
              :space-between="10"
              :loop="true"
              :navigation="true"
              :items="items"
            >
            <template  v-slot:default="{item}" >
                <CardVue :title="item.title" :img="item.image"/>
                </template>
                </DSwiper>
                </div>
              </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardVue from './card.vue'
import incubatorAPI from '@/services/api/incubator';
export default {
    name:'section-incubation-projects',
    components:{
        DSwiper,
        CardVue
    },
    data:()=>({
      loading: false,
        items:[
        /*{title:'مركز باكورة الأهلية',image:'/assets/img/Group 14502.png'},
        {title:'مركز باكورة الأهلية',image:'/assets/img/Group 17753.png'},
        {title:'مركز باكورة الأهلية',image:'/assets/img/Group 145029.png'},
        {title:'مركز باكورة الأهلية',image:'/assets/img/Group 1450232.png'},
        {title:'مركز باكورة الأهلية',image:'/assets/img/Group 1450232.png'},
        {title:'مركز باكورة الأهلية',image:'/assets/img/Group 1450232.png'},
        {title:'مركز باكورة الأهلية',image:'/assets/img/Group 1450232.png'},
    */]
    }),
    methods:{
    async initializing(){
      this.loading  = true;
      try {
        let { data } = await incubatorAPI.getProjects({paginate:10})
        if(data.success){
          this.items = data.data
        }
      } catch (error) {
        console.mylog('error',error)
        //
      }
      this.loading  = false;
    }
    },
    mounted(){
      this.initializing()
    }

}
</script>

<style>

</style>