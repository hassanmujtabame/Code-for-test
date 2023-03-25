<template>
  <div class="form-group" v-bind="$attrs">
<div class="input-group input-file">
    
<input  type="file" @change="uploadFileStandard($event,validate,handlerFile,emptyFile) || validate($event)" class="hidden-file-input">
<div class="input-file__wrapper" >
    <slot name="prend-icon">
        <i class="input-file__prend-icon px-2" :class="prendIcon"></i>
    </slot>
<span class="input-file__label">{{ placeholder }}</span>
<slot name="append-icon"></slot>
</div>    

</div>
<d-error-input :errors="errors" v-if="errors.length>0" />
</div>
</template>

<script>
export default {
 name:'d-file-input',
  props:{
    label:{},
    classWrapper:{},
    placeholder:{},
    validate:{
        type:Function,
        default:null,
    },
    prendIcon:{
        type:String,
        default:'fa fa-paperclip'
    },
    errors:{
        type:[Array,Object],
    }
 },
 model: {
      prop: 'value',
      event: 'updateValue'
  },
    data: () => {
        return {
           focused:false,
           file:null
        }
    },
    watch: {
      errors:{
        immediate:true,
        deep:true,
        handler(){}
      } 
    },
    methods:{
        handlerFile(file){
        this.file = file;
        this.inputEvent()
    },
    emptyFile(){
        this.file = null;
        this.inputEvent()
    },
        outSide(vn){
            let att=vn.target.attributes[0];
            this.focused=(this.$el.attributes[0]==att)
        },
        inputEvent(){
            this.$emit('updateValue',this.file)
        }
    },
    mounted(){
        //console.mylog('lis',this.$listeners)
    }
}
</script>

<style scoped>
.input-file{
    position:relative;
}
.input-file__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border:1px dashed black;
    border: 1px dashed #d1d1d1;
    border-radius: 6px !important;
}
</style>