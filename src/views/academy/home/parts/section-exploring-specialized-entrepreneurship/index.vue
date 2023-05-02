<template>
  <div class="sec-five mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1> أستكشف مجالات ريادة الاعمال 
                    
                <a style="color: #F2631C;" href="">متخصصة </a>
                </h1>
        
              </div>
              <d-swiper
              v-if="!loading"
                :slides-per-view="7"
                is-auto
                :space-between="10"
                :items="items"
                class="academy-departments"
            >
       
            <template  v-slot:default="{item}" >
              <router-link class="router-link" :to="getRouteLocale('academy-department-show',{id:item.id})">
                <CardVue :title="item.title" :img="item.image_path"/>
              </router-link>
                </template>
              </d-swiper>
            </div>
          </div>
</template>

<script>
import CardVue from './card.vue'
import academyAPI from '@/services/api/academy/index.js'
export default {
    name:'section-exploring-specialized-entrepreneurship',
    components:{
        CardVue
    },
    data:()=>({
      loading : false,
        items:[
           /* {id:1,title:'المجوهرات',img:`${vm.publicPath}assets/svg/jewelry.svg`},
            {id:1,title:'الازيــــــاء',img:`${vm.publicPath}assets/svg/fashion.svg`},
            {id:1,title:'التقنية',img:`${vm.publicPath}assets/svg/techinic.svg`},
            {id:1,title:'الزهــــور والهدايا',img:`${vm.publicPath}assets/svg/flowers-gifts.svg`},
            {id:1,title:'التجـــــــارة الالكترونية',img:`${vm.publicPath}assets/svg/ecommerce.svg`},
            {id:1,title:'السباحة',img:`${vm.publicPath}assets/svg/swimming.svg`},
            {id:1,title:'التجميل',img:`${vm.publicPath}assets/svg/beauty.svg`},
            {id:1,title:'التجميل',img:`${vm.publicPath}assets/svg/beauty.svg`},
            {id:1,title:'التجميل',img:`${vm.publicPath}assets/svg/beauty.svg`},
          */
        ]
    }),
    methods:{
      async initializing(){
        this.loading= true;
        try{
          let {data } = await academyAPI.getDepartments({belongs_to:'specialized_academy'})
          if(data.success){
            this.items = data.data
          }else{
            //window.SwalError(data.message)
          }
        }catch(error){
          //

        }
        this.loading = false;
      }
    },
    mounted(){
      this.initializing()
    }
}
</script>

<style>

</style>