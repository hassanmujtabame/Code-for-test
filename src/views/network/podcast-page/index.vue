<template>
  <div style="margin-top: 96px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class=" podcast-page">
      

      <div class="row mt-5">
        <SectionPodcastHeader :itemPage="itemPage" />
      </div>
      <div class="container">
      <div class="row">
        <SectionPodcastRecent />
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
import SectionPodcastRecent from '../home/auth/parts/section-podcast/index.vue'
import SectionPodcastHeader from './section-header/index.vue'
export default {
  name: 'blog-page',
  components:{
    UpdateItemDialog,
    deleteItemDialog,
    SectionPodcastRecent,
    SectionPodcastHeader
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