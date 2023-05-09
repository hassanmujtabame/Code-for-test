<template>
  <p class="message-group-time" v-bind="$attrs">{{ time }}</p>
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