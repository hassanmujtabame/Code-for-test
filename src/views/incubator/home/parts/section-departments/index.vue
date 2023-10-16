<template>
   <div class="sec-five2 mt-5 p-5 bg-transparent">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center"
              >
                <h1 class="home-section-title">
                    تعرفي على مجالات الحاضنة           
                </h1>
        
              </div>
              <DSwiper
              v-if="!loading"
            :slides-per-view="6"
            :space-between="5"
              
              :navigation="true"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardVue :title="item.name" :img="item.image_path"
                :url="getRouteLocale('incubator-program-incubator',{id:item.id})"

                />
                </template>
                </DSwiper>
                
            </div>
          </div>
</template>
<style>

.sec-five2{
  background-color: #E9F8F7 !important;
}
</style>
<script>
import DSwiper from '@/components/swiper/index.vue'
import CardVue from '@/components/cards/incubator-dept-circle.vue'
import incubatorAPI from '@/services/api/incubator';
export default {
    name:'section-incubation-departments',
    components:{
        DSwiper,
        CardVue
    },
    data:(/*vm*/)=>{
      return{
      loading: false,
        items:[
          /*
        {name:'المجوهرات',image_path:`${vm.publicPath}assets/svg/jewelry.svg`},
            {name:'الازيــــــاء',image_path:`${vm.publicPath}assets/svg/fashion.svg`},
            {name:'التقنية',image_path:`${vm.publicPath}assets/svg/techinic.svg`},
            {name:'الزهــــور والهدايا',image_path:`${vm.publicPath}assets/svg/flowers-gifts.svg`},
        {name:'ريــــــــادة الاعمال',image_path:`${vm.publicPath}assets/svg/business.svg`},
            {name:'المحاسبة والمالية',image_path:`${vm.publicPath}assets/svg/account.svg`},
            {name:'التسويق',image_path:`${vm.publicPath}assets/svg/shopping.svg`},
            {name:'القانون',image_path:`${vm.publicPath}assets/svg/law.svg`},
            {name:'الاستراتيجية والقيادة',image_path:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {name:'الاستراتيجية والقيادة',image_path:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {name:'الاستراتيجية والقيادة',image_path:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {name:'الاستراتيجية والقيادة',image_path:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {name:'الاستراتيجية والقيادة',image_path:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {name:'الاستراتيجية والقيادة',image_path:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
*/
    ]
  }
  },
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
      this.initializing()
    }
}
</script>

<style>

</style>