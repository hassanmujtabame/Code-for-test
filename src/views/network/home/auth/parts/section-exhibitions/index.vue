<template>
      <div class="container mt-5">
            <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1> المعارض</h1>
            <div>
              <router-link class="router-link" custom 
                :to="getRouteLocale('network-exhibitions')"
                v-slot="{navigate}"
                >
                  <button @click="navigate" class="more"> المزيد</button>
                </router-link>
            </div>
          </div>
            <div class="row">
                <div v-for="(item,i) in items" :key="i" class="col-md-4 mt-3">
                  <exhibitionCard 
                :img="item.image"
                :title="item.title"
                :description="item.content"
                :userName="item.user_info.name"
                />
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
        /*{title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
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