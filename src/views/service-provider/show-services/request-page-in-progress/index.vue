<template>
    <div style="margin-top:85px">
      <d-overlays-simple v-if="loading" />
      <div v-else-if="hasError">
          <div class="container d-flex align-items-center justify-content-center" style="min-height:200px">
              {{ msgError }}
          </div>
          
      </div>
      <ProgressPage v-else :item-page="itemPage" />
      </div>
  </template>
  
  <script>
import myRequestsAPIs from '@/services/api/service-provider/user/my-requests-client.js'
import ProgressPage from '../page/progress/index'
  export default {
   name:'Service-request-page-in-progress',
   components:{
    ProgressPage
   },
    data:()=>{
      return {
        loading:true,
        hasError:false,
        msgError:null,
        itemPage:{},
        colors:['#F2631C','#FFBC00','#2C98B3']
    }},
    methods:{
    
      async initializing() {
        this.loading = true;
        this.hasError = false;
        this.msgError = null;
              try {
                  let { data } = await myRequestsAPIs.getItem(this.$route.params.id)
                  if (data.success) {
                     this.itemPage = data.data;
                  }else{
                    this.hasError = true;
                    this.msgError = data.message
                  }
              } catch (error) {
                  console.log('error', error)
                  console.log('error response', error.response)
                  this.hasError = true;
                  this.msgError = 'هناك خطأ غير معروف يرجي تحديث الصفحة'
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