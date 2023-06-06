<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden">
        <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">  المدونة </h1>
                        <p class="text-white">
                            كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
                            كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
                        </p>
                        <div>
                            <button @click="addBlog" class="btn bg border text-white" >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3346 17H10.668C10.1213 17 9.66797 16.5467 9.66797 16C9.66797 15.4533 10.1213 15 10.668 15H21.3346C21.8813 15 22.3346 15.4533 22.3346 16C22.3346 16.5467 21.8813 17 21.3346 17Z" fill="white"/>
                                    <path d="M16 22.3327C15.4533 22.3327 15 21.8793 15 21.3327V10.666C15 10.1193 15.4533 9.66602 16 9.66602C16.5467 9.66602 17 10.1193 17 10.666V21.3327C17 21.8793 16.5467 22.3327 16 22.3327Z" fill="white"/>
                                    <path d="M20.0013 30.3327H12.0013C4.7613 30.3327 1.66797 27.2393 1.66797 19.9993V11.9993C1.66797 4.75935 4.7613 1.66602 12.0013 1.66602H20.0013C27.2413 1.66602 30.3346 4.75935 30.3346 11.9993V19.9993C30.3346 27.2393 27.2413 30.3327 20.0013 30.3327ZM12.0013 3.66602C5.85463 3.66602 3.66797 5.85268 3.66797 11.9993V19.9993C3.66797 26.146 5.85463 28.3327 12.0013 28.3327H20.0013C26.148 28.3327 28.3346 26.146 28.3346 19.9993V11.9993C28.3346 5.85268 26.148 3.66602 20.0013 3.66602H12.0013Z" fill="white"/>
                                </svg>
                                أضف تدوينة 
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-start ">
                            <img class="img-fluid" :src="`${publicPath}assets/img/Frameass.png`" alt="" />
                        </div>
                    </div>
                </div>
                <template >
                <div class="star-cons-blog">
                    <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
                </div>
                <div class="star-cons-blog stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
                </div>
                <div class="star-blog position-absolute" >
                <img  class="landing"  :src="`${publicPath}assets/svg/start.svg`" alt="">
            </div>
            </template>
        
        <div v-if="false" class="position-absolute" style="width: 100%;height: 100%;top: 0;left: 0" >
            <img class="landing"  :src="`${publicPath}assets/img/background-blogs-header.png`" >
         </div>
        
            </div>
        </div>
        <div class="container mt-5">
            <!-- recent blogs-->
            <SectionRecentBlog/>
            <!-- #recent blogs-->
            <!-- filter list-->
            <SectionFilterList />
        </div>
        
        <AddBlogDialog  />
        <SuccessAddBlogDialog />
        
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list/index.vue'
import SectionRecentBlog from './parts/section-recent-blog/index.vue'
import AddBlogDialog from './parts/dialogs/add-blog.vue'
import SuccessAddBlogDialog from './parts/dialogs/success-add-blog.vue'
export default {
name:'network-blogs',
components:{
    SectionFilterList,
    SectionRecentBlog,
    AddBlogDialog,
    SuccessAddBlogDialog
},
data:(vm)=>{
    return{
  blogs:[
        {id:1,title:'عنوان المدونة',img:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {id:2,title:'عنوان المدونة',img:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {id:3,title:'عنوان المدونة',img:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {id:4,title:'عنوان المدونة',img:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {id:5,title:'عنوان المدونة',img:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
        {id:6,title:'عنوان المدونة',img:`${vm.publicPath}assets/img/Rectangle 3.png`,date:'10  sep, 2021',description:'نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي'},
    ]
}},
methods:{
  addBlog(){
       this.fireOpenDialog('add-blog')
  }
}
}
</script>

<style>
.star-cons-blog {
    position: absolute;
    right: 7.15%;
    left: 81.19%;
    top: 9.72%;
    bottom: 71.67%;
}
.star-cons-blog.stars {
    right: 30.56%;
    left: 60.06%;
    top: 14.17%;
    bottom: 80.28%;
}
.star-blog {
    right: 27.29%;
    left: 69.44%;
    top: 44.59%;
    bottom: 37.92%;
}
</style>