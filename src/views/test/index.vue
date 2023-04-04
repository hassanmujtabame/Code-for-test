<template>
  <Mentionable
    :keys="[]"
    :items="items"
    offset="6"
  >
    <textarea v-model="text">
      </textarea>
  </Mentionable>
</template>
<script>
import { Mentionable } from 'vue-mention'

export default {
name:'ss-ss',
  components: {
    Mentionable,
  },

  data () {
    return {
      text: '',
      items: [
        {
          value: 'cat',
          label: 'Mr Cat',
        },
        {
          value: 'dog',
          label: 'Mr Dog',
        },
      ],
    }
  },
}
</script>
<style>
.mention-item {
  padding: 4px 10px;
  border-radius: 4px;
}

.mention-selected {
  background: rgb(192, 250, 153);
}
</style>