<template>
  <div class="form-group" :class="{focused:focused,'inline':inline,'solo':solo}" v-click-outside="outSide">
    <label v-if="label" class="form-label">{{ label }}</label>
    <div class="input-group">
        <slot name="prend-icon"></slot>
        <input v-on="$listeners" @focus="focused=true" @input="inputEvent" class="form-control" v-bind="$attrs" />
    <slot name="append-icon"></slot>
    </div>
    <d-error-input :errors="errors" v-if="errors && errors.length>0" />
    <slot name="after-error"></slot>
  </div>
</template>

<script>
export default {
 name:'d-text-input',
 props:{
    label:{},
    inline:{
        type:Boolean,
        default:false,
    },
    solo:{
        type:Boolean,
        default:false,
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
        outSide(vn){
            let att=vn.target.attributes[0];
            this.focused=(this.$el.attributes[0]==att)
        },
        inputEvent(evt){
            this.$emit('updateValue',evt.target.value)
        }
    },
    mounted(){
        //console.mylog('lis',this.$listeners)
    }
}
</script>

<style scoped>

.form-group {
    background: #FFFFFF;
    border: 0.5px solid #D1D1D1;
    border-radius: 4px;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
}
.form-group.inline{
    flex-direction: row; 
}

.form-group .form-label{
    margin-bottom: 0;
    flex-shrink: 0;
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */

display: flex;
align-items: center;


color: #979797;
}
.form-group .form-control{
    color: #667D80;
    font-weight: 400;
    padding: 4px 1px;
    font-size: 16px;
    line-height: 17px;
    border: none;
    flex:1;
   /* box-shadow: 0 0 0 0.1rem rgb(13 110 253 / 25%);*/
   box-shadow:none;
}
.form-group.solo{
    position: relative;
}
.solo label.form-label {
    position: absolute;
    right: 6px;
    top: -10px;
    z-index: 2;
    background: white;
    padding: 1px 5px;
}
.focused{
    box-shadow: 0 0 0 0.1rem #1fb9b359;
    border-color: #1fb9b359;
}
.form-group[disabled] {
    background: #f7f7f7a1;
}
.form-control:disabled {
    background-color: #f6f9fb00;
    opacity: 1;
}
</style>