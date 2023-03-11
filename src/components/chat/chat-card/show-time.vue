<template>
  <p class="small ms-3 mb-3 rounded-3 text-muted" v-bind="$attrs">{{ time }}</p>
</template>

<script>
export default {
  props:{
    time:{
        type:String,
    }
  }
}
</script>

<style>

</style>