<template>
   <div class="container p-4">
            <h2 class="text-center">
                شركائنا في مجال الازياء
            </h2>
            <div class="row">

                <div v-for="(partner,i) in partners" :key="i" class="col-12 col-md-3 text-center mt-2" data-aos="fade-up" data-aos-duration="1000">
                    <ImgAvatar :img="partner.img" :alt="partner.name" size=180 />
                </div>
            
            </div>
        </div>
</template>

<script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
import { AOS } from 'aos';
export default {
 name:'section-8',
 components:{
    ImgAvatar
}
 ,
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
 }),
 mounted(){
    window.AOS.init()
 }
}
</script>

<style>

</style>