<template>
  <div class="sec-five  mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1 class="home-section-title text-center"> مجالات أخرى  في الأكاديمية</h1>
        
              </div>
              <d-swiper
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
import CardVue from '@/components/cards/academy-field.vue'
import academyAPI from '@/services/api/academy/index.js'
export default {
    name:'section-exploring-entrepreneurship',
    props:{
        itemPage:{}
    },
    components:{
        CardVue
    },
    data:(/*vm*/)=>{
      return{
      loading:false,
        items:[
           /* {id:1,title:'ريــــــــادة الاعمال',img:`${vm.publicPath}assets/svg/business.svg`},
            {id:1,title:'المحاسبة والمالية',img:`${vm.publicPath}assets/svg/account.svg`},
            {id:1,title:'التسويق',img:`${vm.publicPath}assets/svg/shopping.svg`},
            {id:1,title:'القانون',img:`${vm.publicPath}assets/svg/law.svg`},
            {id:1,title:'الاستراتيجية والقيادة',img:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {id:1,title:'الاستراتيجية والقيادة',img:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {id:1,title:'الاستراتيجية والقيادة',img:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {id:1,title:'الاستراتيجية والقيادة',img:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {id:1,title:'الاستراتيجية والقيادة',img:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
            {id:1,title:'الاستراتيجية والقيادة',img:`${vm.publicPath}assets/svg/stratigy-leadership.svg`},
          */
        ]
    }},
    methods:{
      async initializing(){
        this.loading= true;
        try{
          let {data } = await academyAPI.getDepartments()
          if(data.success){
            this.items = data.data.filter(x=>x.id!=this.itemPage.id)
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