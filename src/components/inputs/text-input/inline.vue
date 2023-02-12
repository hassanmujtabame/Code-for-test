<template>
  <div class="form-group">
    <label v-if="label" class="form-label">{{ label }}</label>
    <div class="form-input">
        <input v-on="$listeners" @input="inputEvent" class="form-control" v-bind="$attrs" />
    </div>
  </div>
</template>

<script>
export default {
 name:'d-text-input',
 props:{
    label:{}
 },
 model: {
      prop: 'value',
      event: 'updateValue'
  },
    data: () => {
        return {
           
        }
    },
    watch: {
       
    },
    methods:{
        inputEvent(evt){
            this.$emit('updateValue',evt.target.value)
        }
    },
    mounted(){
        console.mylog('lis',this.$listeners)
    }
}
</script>

<style scoped>

.form-group {
    background: #FFFFFF;
    border: 0.5px solid #D1D1D1;
    border-radius: 4px;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
}
.form-group .form-label{
  
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
    font-size: 16px;
    line-height: 17px;
    border: none;
    flex:1
}
</style>