<template>
<div class="row justify-content-around">
    <div>
          <a class=""  :href="categoryId.website" target="_blank">

        <div class="bg-main text-white text-center " style="width: 128px; height:128px; cursor: pointer; border-radius: 100%;     display: flex; justify-content: center; align-items: center; ">
          {{categoryId.company_name}}
        </div>
          </a>

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
 data:()=>{
  return{
    loading:true,
    items:[]
 }}
 ,methods:{
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