<template>
   <div style="overflow: hidden;" class="sec-nighn mt-5">
        <div class="container">
          <div
          class="d-flex justify-content-between align-items-center container my-2"
        >
          <h1>مدونة رياديات    </h1>
          <div>
            <button class="more">المزيد</button>
          </div>
        </div>
        <div class="row">
          <div v-for="(blog,i) in blogs" :key="i" class="col-md-4 " data-aos="fade-right" data-aos-duration="1000">
           <BlogInfoCard 
            :img="blog.img"
            :title="(blog.title+' '+i)"
            :description="blog.description"
            :date="blog.date"
           />
          </div>
        </div>
        </div>
      </div>
</template>

<script>
import BlogInfoCard from '@/components/cards/blog-info.vue';
export default {
 components:{
    BlogInfoCard
 },
 data:()=>({
    blogs:[
        {title:'عنوان المدونة',img:'/assets/img/Rectangle 3.png',date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {title:'عنوان المدونة',img:'/assets/img/Rectangle 3.png',date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {title:'عنوان المدونة',img:'/assets/img/Rectangle 3.png',date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},

    ]
 })
}
</script>

<style>

</style>