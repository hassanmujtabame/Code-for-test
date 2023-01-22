<template>
 <DialogSubscribe 
        fullscreen
        :group="group"
        :openDialog="openDialog"
        :closeDialog="closeDialog"
        >
                <template>
     <DialogBody :pack="pack"  v-if="showDialog" />
          </template>
    
                </DialogSubscribe> 
</template>

<script>
import DialogBody from './SubscribeFinish.vue'
import DialogSubscribe from '@/components/modals/large.vue'

export default {
    props:{
        group:{
            type:String,
            default:'success-network-subscribed'
        }
    },
    components:{
        DialogBody,
        DialogSubscribe
    },
    data:()=>{
        return {
            showDialog:false,
            pack:null
        }
    },
  methods:{
    openDialog(data){
        this.pack = data
        this.showDialog = true
        return true;
    },
    closeDialog(){
        this.showDialog = false
        return true;
    },
  }
}
</script>

<style>

</style>