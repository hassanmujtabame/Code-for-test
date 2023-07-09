<template>
    <div style="overflow: hidden;" class="sec-nighn my-5" v-if="this.items.length">
        <div class="container">

            <div class="d-flex justify-content-between align-items-center container my-2">
                <h1 class="home-section-title">{{ $t('riadiat-blogger') }} </h1>
                <div>
                  <router-link  class="more" :to="getRouteLocale('network-blogs')" >
                {{ $t('more') }}
              </router-link>
                </div>
            </div>
            <div class="row">
                <div v-for="(blog,i) in items" :key="i" class="col-md-4 " data-aos="fade-right" data-aos-duration="1000">
                    <router-link class="router-link" :to="getRouteLocale('network-blog-show',{id:blog.id})">
                    <d-blog-info-card 
                        :img="blog.image"
                        :title="blog.title"
                        :description="blog.short_description??blog.description"
                        :date="blog.created_at"
                    />
                    </router-link>
          </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogsAPI from '@/services/api/blogs.js'
export default {
 name:'section-blogs',
 data:()=>({
    loading:true,
  total:0,
    items:[]
 }),
 methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await BlogsAPI.getHomeNetwork();
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
    window.AOS.init()
 }
}
</script>

<style>

</style>