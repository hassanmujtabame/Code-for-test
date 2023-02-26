<template>
     <div class="container mt-5">
            <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1 class="home-section-title">المدونة</h1>
            <div>
              <router-link :to="getRouteLocale('academy-blogs')" class="more">{{ $t('more') }}</router-link>
            </div>
          </div>
            <div class="row">
                <div v-for="(item,i) in items" :key="i" class="col-md-4 mt-2" >
                  <router-link class="router-link" :to="getRouteLocale('academy-blog-show',{id:item.id})">
           
                    <BlogInfoCard 
                    :img="item.image"
                    :title="item.title"
                    :description="item.short_description??item.description"
                    :date="item.created_at"
                    />
                  </router-link>
          </div>
              
            </div>
 
        </div>
</template>

<script>
import BlogInfoCard from '@/components/cards/blog-info.vue';
import academyAPI from '@/services/api/academy';
export default {
name:'section-blog',
components:{
    BlogInfoCard
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
          let { data } =  await academyAPI.blogs.getAll();
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