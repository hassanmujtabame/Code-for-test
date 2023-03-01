<template>
<div class="sec-five p-3">
            <div class="">
              <div
                class="d-flex justify-content-between align-items-center container"
              >
                <h1 class="home-section-title">أبرز مستشارينا</h1>
                <div>
                  <button class="more">{{ $t('more') }}</button>
                </div>
              </div>
            
              <DSwiper
             
            :slides-per-view="4"
            :space-between="10"
            
              :pagination="false"
              :navigation="true"
              :items="items"
            >
       
            <template  v-slot:default="{item}" >
                <CardMember 
                :name="item.name" 
                :description="item.description" 
                :img="item.image"/>
                </template>
            </DSwiper>
            </div>
          </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardMember from '@/components/cards/card-member.vue'
import consultingAPI from '@/services/api/consulting'
export default {
 name:'section-best-consultants',
 components:{
  DSwiper,
    CardMember
  },
  data:()=>({
    items:[
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},
        {name:'العنقود محمد',img:'/assets/img/Rectangle 1775qa.png',description:'التصوير'},

    ]
  }),
  methods:{
    async initializing(){

        try {
          let {data}= await consultingAPI.getAll({paginate:4})
          if(data.success){
            this.items = data.data
          }
        } catch (error) {
           // 
        }
    }
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style>

</style>