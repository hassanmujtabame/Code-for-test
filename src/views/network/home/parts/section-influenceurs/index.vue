<template>
   <div class="sec-five mt-5 p-3">
        <div class="">
          <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1>مأثرين وثقوا بنا</h1>
            <div>
              <button class="more">{{ $t('more') }}</button>
            </div>
          </div>
          <d-swiper           
                :slides-per-view="5"
                is-auto
                :space-between="10"
                :items="items"
              >
                <template  v-slot:default="{item}" >
                    <CardMember 
                    :to="getRouteLocale('network-show-profile',{id:item.id})"
                    :name="item.name" 
                    :description="item.job_title" 
                    :img="item.img"/>
                </template>
            </d-swiper>
        </div>
      </div>
</template>

<script>
import CardMember from '@/components/cards/card-member.vue'
export default {
 name:'section-influenceurs',
 components:{
    CardMember
  },
  data:(vm)=>{
    return{
    items:[
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',img:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
    ]
  }}
}
</script>
