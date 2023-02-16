<template>
   <div  class="col-12 form-check mt-3">
                <input  class="form-check-input" v-model="is_correct" type="checkbox" :name="`correctRadios-${item.uuid}`"  :value="1">
                <label class="form-check-label clickable fs-r-12-17"  >
           {{label}}
    </label>
    </div>
</template>

<script>
export default {
name:'d-check-input',
props:{
    trueValue:{
        default:true
    },
    falseValue:{
        default:false
    }
},
data:()=>{
    return {
        value_:false,
    }
},
watch:{
    value:{
        deep:true,
        immediate:true,
        handler(){
        if(Array.isArray(this.value)){
            this.value_ = (this.value.includes(this.trueValue)) 
        }else{
            this.value_ = this.value
        }
    }
    }
   
}
}
</script>

<style scoped>
.form-check-label{
    color:var(--label-color);
    font-size: 12px;
    line-height: 17px;
}
</style>