<template>
   <div style="margin-top: 85px " class="consult  max-width-100-hidden">
     <PageAuth v-if="token"></PageAuth>
     <PageGuest v-else></PageGuest>
</div>
</template>
<script>
import PageGuest from './guest/index.vue';
import PageAuth from './auth/index.vue';

export default {
name:'IndexPage',
components:{
  PageGuest,
  PageAuth
},

}
</script>

