<template>
<div class="do-exam__body__question">
            <div class="do-exam__body_question-title">{{ item.title }}</div>
            <div class="do-exam__body_question-options">
            <div class="do-exam__body_question-option" v-for="(o,i) in item.options" :key="i">
                <div class="form-check">
                <input class="form-check-input" v-model="value_" :type="item.type" name="exampleRadios" :id="`exampleRadios-${o.id}`" :value="o.id">
                <label class="form-check-label" :for="`exampleRadios-${o.id}`">
                  {{o.title}}
                </label>
                </div>
            </div>
            

            </div>

        </div>  
</template>

<script>
export default {
    props:['item'],
    data:(vm)=>{
        let dv=null;
        if(vm.item.type=='checkbox')
        dv=[]
    return  {
        value_:dv,
    
    }
 },
 watch:{
    value_:{
        deep:true,
        handler(){
            this.$emit('update',{
                question_id:this.item.id,
                response:this.value_
            })
        }
    }
 }
}
</script>

<style scoped>
.do-exam__body_question-title{
    font-family: 'Changa';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #667D80;
}
.do-exam__body_question-options{
    margin-top: 20px;
}
.do-exam__body_question-option>.form-check{
    padding: 5px;
    height: 30px;
}
.do-exam__body_question-option>.form-check>.form-check-input{
    margin: 0 5px;
    outline-color: var(--m-color);
    border-color: var(--m-color);
}
.do-exam__body_question-option>.form-check>.form-check-label{
    font-family: 'Changa';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */
padding: 0 10px;
display: flex;
align-items: center;
color: #667D80;
}
</style>