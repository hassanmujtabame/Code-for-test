<template>
   
             <div class="row justify-content-around">
     <div v-for="(im,i) in items" :key="i" class="col-6 col-md-3 text-center" data-aos="fade-up" data-aos-duration="1000">
                     <ImgAvatar class="filter-shadow-partner mx-auto" :img="im.image" :alt="im.name??''"  size=180 />
                 </div>
                 <div v-if="items.length==0" style="min-height:180px" class="col-12  d-flex align-items-center">
                   <h3 class="t-c">{{ $t('no-items') }}</h3>
                 </div>
             </div>
 </template> 
 
 <script>
 
 import ImgAvatar from '@/components/avatars/img-avatar.vue';
 import incubatorAPI from '@/services/api/incubator';
 export default {
  name:'section-our-partners',
  components:{
     ImgAvatar
 }
  ,
  data:(/**/)=>{
     return{
         loading:true,
         items:[
 /*{img:`${vm.publicPath}assets/img/Ellipse 24.png`,name:'partner 01'},
         {img:`${vm.publicPath}assets/img/Ellipse 25.png`,name:'partner 02'},
         {img:`${vm.publicPath}assets/img/Ellipse 24.png`,name:'partner 03'},
         {img:`${vm.publicPath}assets/img/Ellipse 25.png`,name:'partner 04'},
         {img:`${vm.publicPath}assets/img/Ellipse 24.png`,name:'partner 05'},
         {img:`${vm.publicPath}assets/img/Ellipse 25.png`,name:'partner 06'},
         {img:`${vm.publicPath}assets/img/Ellipse 24.png`,name:'partner 07'},
         {img:`${vm.publicPath}assets/img/Ellipse 25.png`,name:'partner 08'},*/
     ]
  }},
  watch:{
 loading(){
     if(!this.loading){
         window.AOS.init()
         console.log()
     }
 
 }
  },
  methods:{
     async initializing(){
         this.loading = false;
         try{
             let {data } = await incubatorAPI.getPartners()
             if(data.success){
                 this.items = data.data
                 
             }
         }catch(error){
             //
         }
         this.loading = true;
     }
  },
   async mounted(){
     await this.initializing();
  }
 }
 </script>
 
 <style>
 
 </style>