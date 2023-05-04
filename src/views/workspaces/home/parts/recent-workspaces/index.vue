<template>
    <div class=" p-3">
 
 <div class="container">
     <div class="">
         <div class="row justify-content-between mt-5">
             <div class="col-md-6">
                 <h2>
                    أحدث مساحات العمل
                 </h2>
 
             </div>
             <div class="col-md-6 text-end">
                 <button @click="openAddDialog" class="btn bg-main bg border text-white" >
                  <plusRectRoundIcon/>
                     {{ $t('add_workspace') }}
                 </button>
             </div>
 
         </div>
 
     </div>
     <d-swiper v-if="!loading"  style="overflow-x: hidden"
             :slides-per-view="4"
             :space-between="20"
             is-auto
               :items="items" >
               <template  v-slot:default="{item}" >
                 <router-link class="router-link h-100" :to="getRouteLocale('network-workspace-show',{id:item.id})">
                 <workspaceCard 
                 :title="item.title" 
                               :image="item.image_path" 
                               :company="item.city_name" 
                               :description="item.description" 
                               :price="item.price"
                 />
             </router-link>
             </template>
        </d-swiper>
        
 </div>
 </div>
 </template>
 
 <script>
 import workspaceAPI from '@/services/api/workspace'
 import workspaceCard from '@/components/cards/workspace.vue';
 import plusRectRoundIcon from '@/components/icon-svg/plus-rect-round.vue';
 export default {
  name:'top-workspaces',
  components:{
     plusRectRoundIcon,
     workspaceCard
  },
  data:(vm)=>{
    let   itemTest={id:44,title:'الورود',price:20,company:'ش الملك عبد الله، الورود',user_info:{name:'سارة'},image:`${vm.publicPath}assets/img/Rectangle -network.png`,description:'نبذة عن مساحة العمل نبذة عن مساحة العمل نبذة عن مساحة العمل نبذة عن مساحة العمل'};
    let itemsTest = [];
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
    itemsTest.push(itemTest);
     return{
     loading:true,
     items:process.env.NODE_ENV=='development'?itemsTest:''
  }
},
  methods:{ 
 
     openAddDialog(){
        this.fireOpenDialog('add-dialog')
   },
     async loadList(){
         this.loading = true;
         try {
             let {data} = await workspaceAPI.getRecents()
 
             if(data.success){
                //if(process.env.NODE_ENV!=='development')
                 this.items = data.data;
             }
         } catch (error) {
             console.log('error',error)
             console.log('response',error.response)
         }
         this.loading = false;
     }
  },
  mounted(){
     this.loadList()
  }
 }
 </script>
 
 <style>
 
 </style>