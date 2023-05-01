<template>
  <i :class="statusClass"></i>
</template>

<script>
export default {
name:'d-stepper-icon',
props:{
    status:{
        type:String,
        default:'not-started'
    }
},
watch:{
    status(){}
},
computed:{
    statusClass(){
        switch (this.status) {
            case 'finished': return 'fa-solid fa-circle-check m-c';
            case 'in-progress': return 'fa-regular fa-circle-check m-c';
            default:
            return 'fa-regular fa-circle t-c';//not-started
        }
    }
}
}
</script>

<style>

</style>