<template>
  <div class="mt-5 p-3">

<div class="container">
  <div
    class="d-flex justify-content-between align-items-center"
  >
    <h1>{{ $t('Riadiat-podcats') }}</h1>
    <div>
      <router-link custom :to="getRouteLocale('network-learning-meetings')" v-slot="{navigate}">
      <button @click="navigate" class="more">{{ $t('more') }}</button>
      </router-link>
    </div>
  </div>
  <d-swiper
  v-if="!loading"
  :slides-per-view="5"
  is-auto
  :space-between="2"
    :items="items"
              >
                <template  v-slot:default="{item}" >
                <meetingCard 
                     :img="item.image"
                     :name="item.name"
                     :description="item.description"

                    />
        </template>
    </d-swiper>
</div>
</div>
</template>

<script>
import meetingsAPI from '@/services/api/learning-meetings.js'
import meetingCard from '@/components/cards/podcast.vue'
export default {
 name:'section-podcast',
 components:{
    meetingCard
 },
 data:()=>({
  loading:true,
  total:0,
    items:[]
 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await meetingsAPI.getHomeNetwork();
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