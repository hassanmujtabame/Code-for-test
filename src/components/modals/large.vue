<template>
   
    <div class="modal fade" 
    :style="styleObj"
    :class="{show:dialog}"
    :aria-hidden="!dialog?'true':'false'"
     aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog"
        :class="{'modal-xl':xl&&!lg,'modal-lg':lg,'modal-dialog-centered':centered,'modal-fullscreen':fullscreen}"
        >
            <div class="modal-content">
                <div v-if="!hideHeader" class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                    <slot name="header">
                       
                    </slot>
                    </h1>
                    <button type="button" class="btn-close" @click="closeDialogLocal()" aria-label="Close"></button>
                </div>
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
</template>

<script>
export default {
name:'modal-large',
props:{
    xl:{
        type:Boolean,
        default:true
    },
    lg:{
        type:Boolean,
        default:false
    },
    fullscreen:{
        type:Boolean,
        default:false
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
data:()=>({
    dialog:false,
}),
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
    closeDialogLocal(evt){
        if(this.closeDialog){
         if(this.closeDialog(evt)===true){
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

</style>