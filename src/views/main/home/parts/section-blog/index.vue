<template>
   <div style="overflow: hidden;" class="sec-nighn mt-5">
        <div class="container">
          <div
          class="d-flex justify-content-between align-items-center container my-2"
        >
          <h1>{{ $t('riadiat-blogger') }}</h1>
          <div>
            <router-link :to="getRouteLocale('network-blogs')" class="more">{{$t('more')}}</router-link>
          </div>
        </div>
        <div class="row">
          <div v-for="(blog,i) in items" :key="i" class="col-md-4 " data-aos="fade-right" data-aos-duration="1000">
           <BlogInfoCard 
           :img="blog.image"
            :title="blog.title"
            :description="blog.description"
            :date="blog.created_at"
            :categories="blog.categories"
           />
          </div>
        </div>
        </div>
      </div>
</template>

<script>
import BlogsAPI from '@/services/api/blogs.js'
import BlogInfoCard from '@/components/cards/blog-info.vue';
export default {
  name:'section-blog',
 components:{
    BlogInfoCard
 },
 data:(vm)=>{
  return{
    blogs:[
        {title:'عنوان المدونة',image:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {title:'عنوان المدونة',image:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {title:'عنوان المدونة',image:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},

    ]
    ,
    loading:true,
  total:0,
    items:[]
 }},
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
 async mounted(){
   await this.initlizing()
    window.AOS.init()
 }
}
</script>

<style>

</style>