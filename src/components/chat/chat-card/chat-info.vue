<template>
  <span  class="message-info-group" :class="{reverse:userId!==user.id}">
    <span>
    {{ name }}
    </span>
    <showTime :dateTime="dateTime"  />
  </span>
</template>

<script>
import showTime from './show-time.vue';
export default {
 name:'d-chat-info',
 props:{
    userId:{},
    name:{},
    dateTime:{}
 },
 components:{
    showTime
 }
}
</script>

<style>

</style>