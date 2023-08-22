<template>
<div class="row justify-content-around">
    <div v-for="(im,i) in items" :key="i" class="col-6 col-md-3 text-center" data-aos="fade-up" data-aos-duration="1000">
                    <ImgAvatar class="filter-shadow-partner mx-auto" :img="im.image_path" :alt="im.name??''"  size=180 />
                </div>
                <div v-if="items.length==0" style="min-height:180px" class="col-12  d-flex align-items-center">
                  <h3 class="t-c">{{ $t('no-items') }}</h3>
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