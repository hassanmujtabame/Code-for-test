<template>
  <div class="btn-type-pay"  :class="[selected?'btn-selected':'']">
    <label @click="$emit('click',$event)"
    :class="[`justify-content-${justify}`]"
    >
  <input type="radio"  
    :value="valueDefault"
    :checked="selected"
    v-bind="$attrs"
    
    @input="$emit('input',$event.target.value)"
  />
 
    <slot></slot>
  </label>
  </div>
  
</template>

<script>
export default {
name:'btn-type-pay',
props:{value:{},valueDefault:{},
 justify:{
  type:String,
  default:'center'
 }
},
  computed:{
      selected(){
        return this.value == this.valueDefault;
      }

  },
  watch:{
    value:{
      immediate:true,
      handler(){}
    }
  }

}
</script>

<style>
.btn-type-pay{
    
   
    border: 1px solid #c3c3c3;
    border-radius: 4px;
}
.btn-type-pay.btn-selected {
  border: 1px solid var(--m-color);
}
.btn-type-pay>label{
  display: flex;
  font-size: 16px;
  padding:2px 5px;
  justify-content: center;
  align-items: center;
}
.btn-type-pay input[type=radio]:checked::after{
  content: '';
    /* position: absolute; */
    /* top: 50%; */
    /* left: 50%; */
    background: var(--m-color);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    padding: 0;
    margin: 0;
}
.btn-type-pay input[type=radio]{
    width: 10px;
    height: 10px;
    outline: 2px solid #c6c6c6;
    border-radius: 50%;
    margin-left: 5px;
    margin-right: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.btn-type-pay input[type=radio]:checked {
    width: 10px;
    height: 10px;
    outline: 2px solid var(--m-color);
}

</style>