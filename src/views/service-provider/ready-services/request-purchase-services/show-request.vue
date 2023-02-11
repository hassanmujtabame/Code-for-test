<template>
    <div class="page-request-purchase" :id="`service-${serviceId}`" style="margin-top:85px">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
     <div v-else class="container">
  <ProgressView :readyService="readyService" :itemPage="itemPage" />
</div>
</div>
</template>

<script>
import requestPurchasesAPI from '@/services/api/service-provider/provider/request-purchases.js'

import ProgressView from './progress/index.vue'
export default {
 components:{
    ProgressView
 }, computed:{
        serviceId(){
            return this.$route.params.id
        }
    },
    data:()=>({
        loading:true,
        hasError:false,
        itemPage:{},
        readyService:{},
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
                let { data } = await requestPurchasesAPI.getItem(this.$route.params.id)
                if (data.success) {
                    let {service,...item} =data.data
                   this.itemPage = item;
                   this.readyService = service;
                   this.isOwner = this.itemPage.user_id==this.user.id
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
.page-request-purchase .title-section {
    color: #414042;
        }
</style>

