<template>
  <div class="mt-5 p-3">

<div class="container">
  <div
    class="d-flex justify-content-between align-items-center"
  >
    <h1 class="home-section-title">{{ $t('Riadiat-podcats') }}</h1>
    <div>
      <router-link class="more" :to="getRouteLocale('network-podcasts')"
      >{{ $t('more') }}
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
                <podcastCard 
                     :image="item.image"
                     :name="item.title"
                     :description="item.time_duration"

                    />
        </template>
    </d-swiper>
</div>
</div>
</template>

<script>
import podcastsAPI from '@/services/api/podcasts.js'
import podcastCard from '@/components/cards/podcast.vue'
export default {
 name:'section-podcast',
 components:{
  podcastCard
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
          let { data } =  await podcastsAPI.getRecent();
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