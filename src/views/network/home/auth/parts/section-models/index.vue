<template>
   <div class="mt-5 p-5">
            <div class="conltainer">
              <div
                class="d-flex justify-content-between align-items-center "
              >
                <h1 class="home-section-title mb-3"> {{ $t('riadiat-models') }} </h1>
                <div>
                <router-link class="more" custom 
                :to="getRouteLocale('network-models')"
                >{{ $t('more') }}</router-link>
                </div>
              </div>
              <d-swiper  
              v-if="!loading"
              :slides-per-view="4"
              is-auto
              :items='items'
              :space-between="30"
              >
                 <template v-slot="{item}">
                  <router-link class="router-link" :to="getRouteLocale('network-model-show',{id:item.id})">
                    <ModelItem :title="item.title" :img="item.image" 
                    :value="item.count_download"      />
                  </router-link> 
                </template>             
            </d-swiper>
          </div>
          </div>
</template>

<script>
import modelsAPI from '@/services/api/models.js'
import ModelItem from '@/components/cards/model-icon.vue'
export default {
 name:'section-models',
 components:{
    ModelItem
 },
 data:()=>({
  total:0,
  loading:true,
    items:[
       /* {title:'خطة العمل ودراسة الجدوى المالية',img:`${vm.publicPath}assets/img/Mask Group 1.png`,value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:`${vm.publicPath}assets/img/Mask Group 1.png`,value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:`${vm.publicPath}assets/img/Mask Group 1.png`,value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:`${vm.publicPath}assets/img/Mask Group 1.png`,value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:`${vm.publicPath}assets/img/Mask Group 1.png`,value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:`${vm.publicPath}assets/img/Mask Group 1.png`,value:500}
    */
      ]
 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await modelsAPI.getHomeNetwork();
          if(data.success){
            this.items = data.data
            this.total = data.meta.total
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  mounted(){
    this.initlizing()
  }
 }
</script>

<style>

</style>