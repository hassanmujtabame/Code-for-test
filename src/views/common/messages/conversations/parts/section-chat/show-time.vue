<template>
  <p class="message-time ms-3 rounded-3" v-bind="$attrs">{{ time }}</p>
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
.message-time{
  color: #bfccdf!important;
  font-size: .665em;
  margin: 0;
}
</style>