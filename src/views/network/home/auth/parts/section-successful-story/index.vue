<template>
   <div class="container mt-5">
            <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1 class="home-section-title">  {{ $t('success-stories') }}      </h1>
            <div>
                <router-link class="more"  
                :to="getRouteLocale('network-success-stories')"
                >
                    {{ $t('more') }}

                </router-link>
            </div>
          </div>
            <div class="row">

                <div v-for="(item,i) in items" :key="i" class="col-md-3">
                  <router-link class="router-link" :to="getRouteLocale('network-success-story-show',{id:item.id})">
                    <d-story-card
                        :image="item.image"
                        :title="item.title"
                        :name="item.user_info.name"
                        :description="item.user_info.job"
                    />
                  </router-link>
                </div>
                
            </div>
          </div>
</template>

<script>
import StoriesAPI from '@/services/api/stories.js'
export default {
 name:'section-successfull-story',
 data:()=>({
    loading:true,
    total:0,
    items: []
}),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await StoriesAPI.getHomeNetwork();
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