<template>
    <div style="margin-top: 96px;">
        <d-overlays-simple v-if="loading" />
        <div v-else-if="hasError">
            هناك خطأ غير معروف،يرجي تحديث الصفحة
        </div>
        <div v-else class="container">
          <physicalPage v-if="itemPage.investment_type=='physical'" 
          :itemPage="itemPage"  
          :isOwner="isOwner"
          />
          <moralPage v-else
          :itemPage="itemPage"  
          :isOwner="isOwner"
          />
        </div>
        
           
     
    </div>
</template>

<script>
import ProjectsAPI from '@/services/api/projects.js'

import moralPage from './moral/index';
import physicalPage from './physical/index';
export default {
  name: 'investment-prpject-page',
  components:{
    moralPage,
    physicalPage
  },
  data:()=>{
    return {
      loading:true,
      hasError:false,
      isOwner:false,
      itemPage:{},
  }},
  methods:{
   
   
    async initializing() {
      this.loading = true;
      this.hasError = false;
            try {
                let { data } = await ProjectsAPI.getItem(this.$route.params.id)
                if (data.success) {
                    
                    this.isOwner = this.user && data.data.user_info.id===this.user.id
                   this.itemPage = data.data;
                }else{
                  this.hasError = true;
                }
            } catch (error) {
                console.mylog('error', error)
                console.mylog('error response', error.response)
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