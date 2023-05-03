<template>
 <div>
    <h1 class="incubator-business-content__title">{{ phase.title }}</h1>
    <p class="incubator-business-content__desc">{{ phase.description }}</p>
    <div class="container">
    <div class="row">
  <div class="col-12 col-md-4" v-for="(item,i) in itemPage" :key="i">
    <router-link class="router-link" :to="getRouteLocale('academy-learning-meeting-show',{id:itemPage.id})">
   
   <meetingCard 
               :item="item"
                    :img="item.image"
                    :title="item.title"
                    :type="item.type"
                    :date="item.date"
                   />
                   </router-link>
  </div>
</div> 
 
                  </div>
                  </div>

</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
export default {
name:'section-type-meeting',
  components:{
    meetingCard,
  },
  props:{
  phase:{},
  itemPage:{}
},
mounted(){
  console.mylog('mounted type',this.phase,this.itemPage)
}
}
</script>

<style>

</style>