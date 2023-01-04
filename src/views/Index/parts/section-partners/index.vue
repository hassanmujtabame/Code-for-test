<template>
    <div class="sec-six">
        <div class="container p-3">
            <h2>شركائنا في رياديات </h2>
            <div class="row justify-content-center">
                <div v-for="(partner,i) in items" :key="i" class=" col-12 col-md-3 text-center" data-aos="fade-up" data-aos-duration="2000">
                    <ImgAvatar :img="partner.image_path"  size=180 />
                </div>
            </div>
        </div>
      </div>
</template>

<script>
import partnersAPI from '@/services/api/partners.js'
import ImgAvatar from '@/components/avatars/img-avatar.vue';
export default {
  name:'partners-riadiat',
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
          let { data } =  await partnersAPI.getPartnersHome();
          if(data.success){
            this.items = data.data
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  mounted(){
    this.initlizing()
 }
}
</script>

<style>

</style>