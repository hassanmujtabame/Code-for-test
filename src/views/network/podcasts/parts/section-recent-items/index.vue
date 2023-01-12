<template>
    <div>
  <div class="d-flex justify-content-between">
                <div>
                    <h2>
                      {{$t('recently-podcast')}}
                    </h2>
                </div>
                <div>
                
                </div>
            </div>
            <div class="row mt-3">
                <div v-for="(item,i) in items" :key="i" class="col-md-auto " >
                    <router-link class="router-link" :to="getRouteLocale('network-podcast-show',{id:item.id})">
                    <podcastCard 
                    :image="item.image"
                     :name="item.title"
                     :description="item.time_duration"
                    />
                    </router-link>
          </div>
            </div>
        </div>
</template>

<script>
import podcastAPI from '@/services/api/podcasts.js'
import podcastCard from '@/components/cards/podcast.vue'
export default {
 name:'recent-podcasts',
 components:{
    podcastCard
 },
 data:()=>({
    loading:true,
    items:[]
 }),
 methods:{
    addItem(){
    this.fireOpenDialog('add-dialog')
  },
    async getRecents() {
        this.loading = true;
            try {
                let { data } = await podcastAPI.getRecent()
                if (data.success) {

                    let items = data.data;
                    this.items=items.filter((c,i)=>i<5)
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
            this.loading = false;
        }
 },
 mounted(){
    this.getRecents()
 }
}
</script>

<style>

</style>