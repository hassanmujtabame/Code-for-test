<template>
  <div>
    <component :is="getComponent()"></component>
  </div>
</template>
<script>
import pagesList from './pages';
export default {
name:'ss-ss',
  components: {},

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
  methods:{
    getComponent(){
      if(this.$route.params.page && pagesList[this.$route.params.page]){
        return pagesList[this.$route.params.page]
      }
      return 'div'
    }
  }
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