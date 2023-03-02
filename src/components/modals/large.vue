<template>
   
    <div class="modal fade" 
    :style="styleObj"
    :class="{show:dialog}"
    :aria-hidden="!dialog?'true':'false'"
     :aria-labelledby="`modal-large-${modalId}`"
        tabindex="-1">
        <div class="modal-dialog"
        :class="{'modal-xl':xl&&!mlg,'modal-lg':mlg,'modal-dialog-centered':centered,'modal-fullscreen':fullscreen}"
        >
            <div class="modal-content">
                <div v-if="!hideHeader" class="modal-header">
                    <h1 class="modal-title" :id="`modal-large-${modalId}`">
                    <slot name="header">
                       
                    </slot>
                    </h1>
                    <button type="button" class="btn-close" @click="closeDialogLocal($event,true)" :style="{'padding':fullscreen?'0 30px':null}" aria-label="Close"></button>
                </div>
                <div class="position-relative">
                <d-overlays-simple v-if="loading" />

                <div class="modal-body">
                    <slot :close="closeDialogLocal" :dialog="dialog"></slot>
                </div>
                <div class="modal-footer justify-content-center">
                    <slot name="actions" :close="closeDialogLocal" :dialog="dialog">
                    </slot>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'modal-large',
props:{
    xl:{
        type:Boolean,
        default:true
    },
    mlg:{
        type:Boolean,
        default:false
    },
    fullscreen:{
        type:Boolean,
        default:false
    },
    loading:{
        type:Boolean,
        default:false,
    },
    centered:{
        type:Boolean,
        default:true
    },
    hideHeader:{
        type:Boolean,
        default:false
    },
    group:{
        type:String,
        require:true
    },
    openDialog:{
        type:Function,
        default:null
    },
    closeDialog:{
        type:Function,
        default:null
    }
},
data:(vm)=>{
   return {
    modalId:vm.generateRandomString(8),
    dialog:false,
}},
watch:{
    loading(){}
},
computed:{
 styleObj(){
    return {
      'z-index': 99999999,
        background: '#000000a3',
        display:this.dialog?'block':'none'
    }
 }
},

methods:{
    change(){
    this.$emit('change',this.dialog)
},
    openDialogLocal(evt){
        //console.log('opens')
        if(this.openDialog){
         if(this.openDialog(evt)===true){
            this.dialog=true;
            this.change()
         }
        }else{
        this.dialog=true
        this.change()
    }
    },
    closeDialogLocal(evt=null,btn=false){
        if(this.closeDialog){
         if(this.closeDialog(evt,btn)===true){
            this.dialog=false;
            this.change()
         }
        }else{
        this.dialog=false
        this.change()
    }
    }
},
created(){
    window.EventBus.listen(this.group+'-open-dialog',this.openDialogLocal)
    window.EventBus.listen(this.group+'-close-dialog',this.closeDialogLocal)
  },
  beforeDestroy(){
    window.EventBus.off(this.group+'-open-dialog',this.openDialog)
    window.EventBus.off(this.group+'-close-dialog',this.closeDialog)
  },
}
</script>

<style>
.modal-title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

display: flex;
align-items: center;

text-transform: capitalize;

color: #414042;
margin: 0;
}
</style>