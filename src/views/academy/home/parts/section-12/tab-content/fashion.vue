<template>
<div class="row justify-content-center">
    <div v-for="(partner,i) in partners" :key="i" class="col-6 col-md-3 text-center" data-aos="fade-up" data-aos-duration="1000">
                    <ImgAvatar :img="partner.img" :alt="partner.name" size=180 />
                </div>
            </div>
</template>

<script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
import mixinVue from './mixin.vue';
export default {
    mixins:[mixinVue],
    name:'tab-content',
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