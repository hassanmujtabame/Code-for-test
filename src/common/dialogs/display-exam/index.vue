<template>
    <d-dialog-large fullscreen :group="group" 
    :closeDialog="closeDialog" 
    :openDialog="openDialog">
        <template v-slot:default>
           <BodyForm 
           v-if="showDialog"
            :exam="itemDaliog"
           v-bind="$attrs"
           >
          
        </BodyForm>
        </template>
    </d-dialog-large>
</template>
<script>

import BodyForm  from './exam.vue'
export default {
    name: "display-exam-dialog",
    props: {
        group: {
            type: String,
            default: 'display-exam-dialog'
        },
        
    },
   components:{
    BodyForm
   },
    data: () => {
        return {
            showDialog: false,
             itemDaliog: {}
        }
    },
  
    methods: {
       
        closeMe() {
            this.fireCloseDialog(this.group)
        },
        
        openDialog(data) {
    
            this.itemDaliog = data;
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

