<template>
    <div class="form-group select-arrow" :class="{focused:focused}" v-click-outside="outSide">
      <label v-if="label" class="form-label" >{{ label }}</label>
      <div class="input-group">
        <slot name="prend-icon"></slot>
          <select v-on="$listeners"  @focus="focused=true" @input="inputEvent" class="form-control"  v-bind="$attrs" >
        <slot></slot>
        </select>
        <slot name="append-icon"></slot>
      </div>
      <d-error-input :errors="errors" v-if="errors && errors.length>0" />
    </div>
  </template>
  
  <script>
  export default {
   name:'d-select-input',
   props:{
      label:{},
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
             focused:false
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
      padding: 5px 5px;
      padding-left:20px;
      display: flex;
      flex-direction: column;
  }
  html[lang=en] .form-group {
    padding: 5px 5px;
      padding-right:20px;
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
      padding: 4px 1px;
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
      border: none;
      flex:1;
      font-style: normal;
        color: #667D80;
          /* box-shadow: 0 0 0 0.1rem rgb(13 110 253 / 25%);*/
   box-shadow:none;
  }
  .select-arrow{
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: left 0.375rem center;
    background-size: 16px 12px;
 
  }
  html[lang=en] .select-arrow{
   background-repeat: no-repeat;
    background-position: right 0.375rem top;
  }
  .focused{
    box-shadow: 0 0 0 0.1rem #1fb9b359;
    border-color: #1fb9b359;
}

  </style>