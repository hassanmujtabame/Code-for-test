<template>
  <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container podcast-page">
      <div class=" position-relative">
        <img class="w-100" :src="itemPage.image" :alt="itemPage.categoryName" height="432">
        <div class="d-flex gap-2 position-absolute bottom-0 data">
          <p  :style="{'background-color':colors[c%3]}" class="p-1 px-2 rounded-2 text-white m-0">
            {{ itemPage.categoryName }}
          </p>
        </div>
      </div>

      <div class="row mt-5">
        <div class=" col-12 col-md-8">
          <h3 class="m-c">{{ itemPage.title }}
          </h3>
          
        </div>
        <div class="col-12 col-md-4">
          <div v-if="isOwner" class="box  rounded-3 p-2">
          <div class="text-end">
                  
                        <button @click="openEditDialog" class="btn bg-main border-0 text-white p-2 mx-1"   >
                           <img src="/assets/svg/update.svg" />   
                           تعديل 
                        </button>
                        <button @click="openDeleteDialog" class="btn bg-danger border-0 text-white p-2"   >
                            <img src="/assets/svg/trash-outline.svg" />
                           حذف 
                        </button>

                        
                  
          </div>
          </div>
          
        </div>
      </div>
    </div>
  
    <UpdateItemDialog />
    <deleteItemDialog/>

  </div>
</template>

<script>
import podcastsAPI from '@/services/api/podcasts.js'
import UpdateItemDialog from '../podcasts/parts/dialogs/update-item.vue'
import deleteItemDialog from '../podcasts/parts/dialogs/del-item.vue'
export default {
  name: 'blog-page',
  components:{
    UpdateItemDialog,
    deleteItemDialog
  },
  data:()=>{
    return {
      isOwner:false,
      loading:true,
      hasError:false,
      itemPage:{},
      colors:['#F2631C','#FFBC00','#2C98B3']
  }},
  methods:{
    openEditDialog(){
      this.fireOpenDialog('update-item',this.itemPage)
    },
    openDeleteDialog(){
      this.fireOpenDialog('delete-item',this.itemPage)
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await podcastsAPI.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.isOwner = true;//this.itemPage.user_info.id==this.user.id
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                this.hasError = true;
              }

            this.loading = false;
        }
  },
  mounted(){
    this.initializing()
  }
}
</script>

<style>
.blog-page .pargrapg>*{
  width:100% !important;
}
</style>