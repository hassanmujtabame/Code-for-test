<template>
   
    <div class="modal fade" 
    :style="styleObj"
    :class="{show:dialog}"
    :aria-hidden="!dialog?'true':'false'"
     aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" @click="close()" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer justify-content-center">
                    <slot name="actions" :close="close">
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
show:{
    type:Boolean,
    default:false,
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
watch:{
  show:{
    immediate:true,
    handler(){
        this.dialog=this.show
    }
  },
  dialog:{
    immediate:true,
    handler(){
        if(!this.dialog)
        this.$emit('update:show',false)
    }
  }
},
methods:{
    close(){
        this.dialog=false
    }
}
}
</script>

<style>

</style>