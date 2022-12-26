<template>
    <div style="overflow: hidden;" class="sec-nighn mt-5">
        <div class="container">

            <div class="d-flex justify-content-between align-items-center container my-2">
                <h1>مدونة رياديات </h1>
                <div>
                    <button class="more">المزيد</button>
                </div>
            </div>
            <div class="row">
                <div v-for="(blog,i) in blogs" :key="i" class="col-md-4 " data-aos="fade-right" data-aos-duration="1000">
                    <router-link class="router-link" :to="getRouteLocale('network-blog-show',{id:blog.id})">
                    <d-blog-info-card 
                        :img="blog.image"
                        :title="blog.title"
                        :description="blog.description"
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
    blogs:[]
 }),
 methods:{
    async getRecents() {
            try {
                let { data } = await BlogsAPI.getRecent()
                if (data.success) {

                    let blogs = data.data;

                    this.blogs=blogs.filter((c,i)=>i<3)
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
        }
 },
 mounted(){
    this.getRecents()
    window.AOS.init()
 }
}
</script>

<style>

</style>