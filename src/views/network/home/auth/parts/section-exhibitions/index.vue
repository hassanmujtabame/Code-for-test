<template>
      <div class="container mt-5">
            <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1> المعارض      </h1>
            <div>
              <button class="more">المزيد</button>
            </div>
          </div>
            <div class="row">
                <div v-for="(item,i) in items" :key="i" class="col-md-4 mt-3">
                    <exhibitionCard 
                :img="item.image"
                :title="item.title"
                :description="item.description"
                />
                </div>
               
                
                
            </div>

          </div>
</template>

<script>
import exhibitionCard from '@/components/cards/exhibition.vue';
export default {
 name:'section-exhibitions',
 components:{
    exhibitionCard
 },
 data:()=>({
    items:[
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
        {title:'معرض الزهور',image:'/assets/img/Rectangle -network.png',description:'معرض متكام لبيع و تنسيق الزهور'},
    ],
 })
}
</script>

<style>

</style>