<template>
  <i :class="statusClass"></i>
</template>

<script>
export default {
name:'d-stepper-icon',
props:{
    status:{
        type:String,
        default:'disabled'
    }
},
watch:{
    status(){}
},
computed:{
    statusClass(){
        switch (this.status) {
            case 'done': return 'fa-solid fa-circle-check m-c';
            case 'selected': return 'fa-regular fa-circle-check m-c';
            default:
            return 'fa-regular fa-circle t-c';//disabled
        }
    }
}
}
</script>

<style>

</style>