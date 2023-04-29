<template>
  <div class="sec-five  mt-5 p-3">
            <div class="">
              <div
                class="d-flex justify-content-center align-items-center container"
              >
                <h1> أستكشف مجالات ريادة الاعمال 
                    
                <a style="color: #2C98B3;" href="">
                    العامة
                </a>
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
import CardVue from '@/components/cards/academy-field.vue'
import academyAPI from '@/services/api/academy/index.js'
export default {
    name:'section-exploring-entrepreneurship',
    components:{
        CardVue
    },
    data:()=>({
      loading : false,
        items:[
            /*{id:1,title:'ريــــــــادة الاعمال',img:'/assets/svg/business.svg'},
            {id:1,title:'المحاسبة والمالية',img:'/assets/svg/account.svg'},
            {id:1,title:'التسويق',img:'/assets/svg/shopping.svg'},
            {id:1,title:'القانون',img:'/assets/svg/law.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
            {id:1,title:'الاستراتيجية والقيادة',img:'/assets/svg/stratigy-leadership.svg'},
          */
        ]
    }),
    methods:{
      async initializing(){
        this.loading= true;
        try{
          let {data } = await academyAPI.getDepartments({belongs_to:'public_academy'})
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