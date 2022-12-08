<template>
  <div class="modal fade" :class="{show:dialog}"  tabindex="-1" 
  :style="styleObj"
  aria-labelledby="exampleModalLabel" :aria-hidden="!dialog?'true':'false'">
    <div class="modal-dialog  modal-dialog-centered justify-content-center">
      <div style="width: 80%;" class="modal-content text-center">
        <div class="modal-header border-0">
          <button @click="close()" type="button" class="btn-close" ></button>
        </div>
        <div class="modal-body">
        <slot></slot>
        </div>
        <div class="modal-footer border-0 d-flex flex-column">
           <slot name="actions" :close="close">
           </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'modal-simple',
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