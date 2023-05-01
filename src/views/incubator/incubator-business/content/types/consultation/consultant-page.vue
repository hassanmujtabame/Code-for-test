<template>
    <d-dialog-large fullscreen :group="group" 
    :closeDialog="closeDialog" 
    :openDialog="openDialog">
        <template v-slot:default>
            <div v-if="showDialog"  class="position-relative">
                <d-overlays-simple v-if="loading" />
                <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <bodyPage v-else :itemPage="itemPage" :opts="opts" />
                            
        </div>
    
        </template>
    </d-dialog-large>
</template>
<script>
import consultingAPI from '@/services/api/consulting'

import bodyPage  from '@/views/consulting/consultant/body-page.vue'
export default {
    name: "consultant-page-dialog",
    props: {
        group: {
            type: String,
            default: 'consultant-page'
        },
     
        
    },
   components:{
    bodyPage
   },
    data: () => {
        return {
           loading:false,
            hasError:false,
           showDialog: false,
            itemPage:{},
            itemDialog :{},
            opts:{},
             otherData:{},
          
        }
    },
  
    methods: {
        async initializing(){
        this.loading = true;
        this.hasError = false;
        try {
          let {data}= await consultingAPI.consultants.getItem(this.itemDialog.id)
          if(data.success){
            this.itemPage = data.data
          }else{
            window.SwalError(data.message)
            this.hasError = true;
          }
        } catch (error) {
            console.mylog('error',error)
           // 
           this.hasError = true;
        }
        this.loading = false;
    },
        closeMe() {
            this.fireCloseDialog(this.group)
        },
        
 openDialog(data) {
    
            this.itemDialog = data.item;
            this.opts = data.opts
             this.initializing()
            this.showDialog = true;
            return true;
        },
        closeDialog() {
            this.showDialog = false

            return true;
        },
    }
}

</script>

