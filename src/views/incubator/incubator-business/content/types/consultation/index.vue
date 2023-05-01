<template>
  <div>
    <h1 class="incubator-business-content__title">{{ phase.title }}</h1>
    <p class="incubator-business-content__desc">{{ phase.description }}</p>
    <div v-if="phase.enabled">
  <itemCard :userName="itemPage[0].name"  />
  </div>
  <div v-else class="container">
    <div class="row">
      <div v-for="(item,i) in itemPage" :key="i" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <CardMember 
                @click-image="openConsultantDialog(item)"
                :name="item.name" 
                :description="item.job_title" 
                :img="item.image"/>
        </div>
    </div>
    <consultantPage />
    </div>
  
  </div>
</template>

<script>
import itemCard from './card-item'
import CardMember from '@/components/cards/card-member.vue'
import consultantPage from './consultant-page'
export default {
name:'section-type-consultation',
components:{
  itemCard,
  CardMember,
  consultantPage
},
props:{
  phase:{},
  itemPage:{}
},
methods:{
  openConsultantDialog(item){
    this.fireOpenDialog('consultant-page',{item,opts:{stage_id:this.phase.stage_id}})
  }
},
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style>

</style>