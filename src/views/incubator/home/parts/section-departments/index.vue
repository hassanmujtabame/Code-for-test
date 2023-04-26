<template>
   <div class="sec-five mt-5 p-3 bg-transparent">
            <div class="container">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1 class="home-section-title">
                    تعرفي على مجالات الحاضنة           
                </h1>
        
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
                <CardVue :title="item.title" :img="item.image_path"
                :url="getRouteLocale('incubator-program-incubator')"
                />
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
    name:'section-incubation-departments',
    components:{
        DSwiper,
        CardVue
    },
    data:()=>({
      loading: false,
        items:[
        {title:'المجوهرات',image_path:'/assets/svg/jewelry.svg'},
            {title:'الازيــــــاء',image_path:'/assets/svg/fashion.svg'},
            {title:'التقنية',image_path:'/assets/svg/techinic.svg'},
            {title:'الزهــــور والهدايا',image_path:'/assets/svg/flowers-gifts.svg'},
        {title:'ريــــــــادة الاعمال',image_path:'/assets/svg/business.svg'},
            {title:'المحاسبة والمالية',image_path:'/assets/svg/account.svg'},
            {title:'التسويق',image_path:'/assets/svg/shopping.svg'},
            {title:'القانون',image_path:'/assets/svg/law.svg'},
            {title:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},
            {title:'الاستراتيجية والقيادة',image_path:'/assets/svg/stratigy-leadership.svg'},

    ]}),
    methods:{
    async initializing(){
      this.loading  = true;
      try {
        let { data } = await incubatorAPI.getDepartments({paginate:14})
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
      //this.initializing()
    }
}
</script>

<style>

</style>