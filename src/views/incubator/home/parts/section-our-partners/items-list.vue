<template>
<<<<<<< HEAD

  <div>

   <d-swiper  
        v-if="items && items.length>1"

              :slides-per-view="4"
              is-auto
              :items='items'
              :space-between="30"
                   :navigation="true"
        :loop="true"
              >
                 <template v-slot="{item}">
              <ImgAvatar class="filter-shadow-partner mx-auto" :img="item.image"   size='180' />
                </template>             
            </d-swiper>
    </div> 
             <!-- <div class="row justify-content-around">
=======
<<<<<<< Updated upstream
   
             <div class="row justify-content-around">
>>>>>>> incubator
     <div v-for="(im,i) in items" :key="i" class="col-6 col-md-3 text-center" data-aos="fade-up" data-aos-duration="1000">
                     <ImgAvatar class="filter-shadow-partner mx-auto" :img="im.image" :alt="im.name??''"  size=180 />
                 </div>
                 <div v-if="items.length==0" style="min-height:180px" class="col-12  d-flex align-items-center">
                   <h3 class="t-c">{{ $t('no-items') }}</h3>
                 </div>
             </div> -->
 </template> 
 
 <script>
 
 import ImgAvatar from '@/components/avatars/img-avatar.vue';
 import incubatorAPI from '@/services/api/incubator';
 export default {
  name:'section-our-partners',
  components:{
     ImgAvatar,
 }
  ,
  data:(/**/)=>{
     return{
         loading:true,
         items:[]
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
=======
    <div>
        <d-swiper  
            v-if="items && items.length > 1"
            :slides-per-view="5"
            :space-between="30"
            is-auto
            :items="items"
            :navigation="true"
            :loop="true"
        >
            <template v-slot="{item}">
                <div class="slide-content">
                    <ImgAvatar class="filter-shadow-partner mx-auto avatar-image" :img="item.image" size='180' />
                    <p class="avatar-name">{{ item.user_name }}</p> <!-- Assuming the item has a 'name' property -->
                </div>
            </template>             
        </d-swiper>
    </div>
</template>

<script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
import incubatorAPI from '@/services/api/incubator';

export default {
    name: 'section-our-partners',
    components: {
        ImgAvatar,
    },
    data() {
        return {
            loading: true,
            items: [],
        };
    },
    watch: {
        loading() {
            if (!this.loading) {
                window.AOS.init();
            }
        },
    },
    methods: {
        async initializing() {
            this.loading = false;
            try {
                const { data } = await incubatorAPI.getPartners();
                if (data.success) {
                    this.items = data.data;
                }
            } catch (error) {
                // Handle the error appropriately
                console.error("Error fetching partners:", error);
            }
            this.loading = true;
        },
    },
    async mounted() {
        await this.initializing();
    }
};
</script>

<style>
.slide-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.avatar-image {
    border-radius: 50%; /* Assuming circular avatars */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.avatar-name {
    font-size: 16px;
    text-align: center;
    color: #333;
    margin-top: 5px;
}
</style>
>>>>>>> Stashed changes
