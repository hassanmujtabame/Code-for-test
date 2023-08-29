<template>
      <div class="container mt-5" v-if="userSubNetwork.type=='year'">
            <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1 class="home-section-title">{{ $t('exhibitions') }}</h1>
            <div>
              <router-link class="more" 
                :to="getRouteLocale('network-exhibitions')"
                >{{$t('more')}}</router-link>
            </div>
          </div>
            <div class="row">
                <div v-for="(item,i) in items" :key="i" class="col-md-4 mt-3">
                  <router-link class="router-link h-100" :to="getRouteLocale('network-exhibition-show',{id:item.id})">
                  <exhibitionCard 
                  class="h-100"
                :img="item.image"
                :title="item.title"
                :price="item.price"
                :place="item.city"
                :description="item.content"
                :isShared="item.is_share"
                :userName="item.user_info.name"
                :userInfo="item.user_info"
                />
              </router-link>
                </div>
            </div>

          </div>
</template>

<script>
import exhibitionsAPI from '@/services/api/exhibitions';
import exhibitionCard from '@/components/cards/exhibition.vue';
export default {
 name:'section-exhibitions',
 components:{
    exhibitionCard
 },
 data:()=>({
  loading:true,
  total:0,
    items:[
        /*{title:'معرض الزهور',image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'معرض متكام لبيع و تنسيق الزهور'},
        */
      ],
 })
 ,
  methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await exhibitionsAPI.getHomeNetwork();
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