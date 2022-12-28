<template>
  <div  class="col-12 text-input-error">{{errors[0]}}</div>
</template>

<script>
export default {
    name:'error-input',
    props:{
        errors:{
            type:[Array,Object],
            require:true
        }
    }

}
</script>

<style>

</style>