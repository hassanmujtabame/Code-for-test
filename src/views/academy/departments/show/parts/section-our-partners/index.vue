<template>
    <div class="network-subscribe p-3">
        <h2 class="home-section-title text-center">
            شركائنا في مجال {{ itemPage.title }} 
            </h2>
              <div class=" ">
                 
                <div v-for="(im,i) in items" :key="i" class="col-6 col-md-3 text-center" data-aos="fade-up" data-aos-duration="1000">
                    <ImgAvatar :img="im.image_path" :alt="im.name??''"  size=180 />
                </div>
            </div>
                </div>
  </template>
  
  <script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
import partnersAPI from '@/services/api/partners.js'

  export default {
  name:'section-partners',
    props:{
        itemPage:{}
    },
  components:{
    ImgAvatar
  },
  data:()=>({
      currentTab:'',
      loading:true,
      items:[],
  }),
  methods:{

    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await partnersAPI.getPartnersByCat(this.itemPage.id);
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
    await this.initlizing()
      this.currentTab=`cat-${this.categories[0].id}`
    }
  }
  </script>
  
  <style>
  
  </style>