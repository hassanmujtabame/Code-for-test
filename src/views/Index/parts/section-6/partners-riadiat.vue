<template>
    <div class="sec-six">
        <div class="container p-3">
            <h2>شركائنا في رياديات </h2>
            <div class="row justify-content-center">
                <div v-for="(partner,i) in partners" :key="i" class=" col-12 col-md-3 text-center" data-aos="fade-up" data-aos-duration="2000">
                    <ImgAvatar :img="partner.img" :alt="partner.name" size=180 />
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
export default {
    components:{
        ImgAvatar
    },
 data:()=>({
    partners:[
        {img:'/assets/img/Ellipse 24.png',name:'partner 01'},
        {img:'/assets/img/Ellipse 25.png',name:'partner 02'},
        {img:'/assets/img/Ellipse 24.png',name:'partner 03'},
        {img:'/assets/img/Ellipse 25.png',name:'partner 04'},
        {img:'/assets/img/Ellipse 24.png',name:'partner 05'},
        {img:'/assets/img/Ellipse 25.png',name:'partner 06'},
        {img:'/assets/img/Ellipse 24.png',name:'partner 07'},
        {img:'/assets/img/Ellipse 25.png',name:'partner 08'},
    ]
 })
}
</script>

<style>

</style>