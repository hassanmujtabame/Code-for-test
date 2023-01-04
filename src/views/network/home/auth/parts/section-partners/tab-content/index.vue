<template>
<div class="row justify-content-around">
    <div v-for="(im,i) in items" :key="i" class="col-6 col-md-3 text-center" data-aos="fade-up" data-aos-duration="1000">
                    <ImgAvatar :img="partner.image_path" :alt="im.name??''"  size=180 />
                </div>
            </div>
</template>

<script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
import partnersAPI from '@/services/api/partners.js'
import mixinVue from './mixin.vue';
export default {
    mixins:[mixinVue],
    name:'tab-content',
    props:{
        categoryId:{
            require:true
        }
    },
components:{
    ImgAvatar
},
 data:()=>({
    partners:[
        {image_path:'/assets/img/Ellipse 24.png',name:'partner 01'},
        {image_path:'/assets/img/Ellipse 25.png',name:'partner 02'},
        {image_path:'/assets/img/Ellipse 24.png',name:'partner 03'},
        {image_path:'/assets/img/Ellipse 25.png',name:'partner 04'},
        {image_path:'/assets/img/Ellipse 24.png',name:'partner 05'},
        {image_path:'/assets/img/Ellipse 25.png',name:'partner 06'},
        {image_path:'/assets/img/Ellipse 24.png',name:'partner 07'},
        {image_path:'/assets/img/Ellipse 25.png',name:'partner 08'},
    ]
    ,
    loading:true,
    items:[]
 }) ,methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await partnersAPI.getPartnersByCat(this.categoryId);
          if(data.success){
            this.items = data.data
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  async mounted(){
  await  this.initlizing()
 }
}
</script>

<style>

</style>