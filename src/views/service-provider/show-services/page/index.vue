<template>
    <div style="margin-top:85px">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
        <template v-else >
            <progressPage v-if="itemPage.user_offer && itemPage.is_offer_sent"
            :item-page="itemPage" 
            />
            <showPage v-else :item-page="itemPage" />
        </template>
        
    </div>
</template>

<script>
import myRequestsAPIs from '@/services/api/service-provider/provider/my-requests.js'
import readyServiceAPIs from '@/services/api/service-provider/provider/ready-service'
import showPage from './show/index.vue'
import progressPage from './progress/index.vue'
export default {
    name: 'request-page',
    components:{
        showPage,
        progressPage
    },
    data:()=>({
        loading:true,
        hasError:false,
        itemPage:{},
        isOwner:false,
        colors:['#2C98B3', '#1FB9B3' ,'#F2631C', '#FFBC00']
    }),
    methods:{
        openSendAbuse(){
      this.fireOpenDialog('abuse-comment',this.itemPage);
    },
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
                let { data } = await myRequestsAPIs.getItem(this.$route.params.id)
                if (data.success) {
                   this.itemPage = data.data;
                   this.isOwner = this.itemPage.user_id==this.user.id
                   try {
                  await readyServiceAPIs.setAsView(this.$route.params.id)
                } catch (error) {
                    console.log('error', error)
                    console.log('error response', error.response)
                }
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
                //this.hasError = true;
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

</style>