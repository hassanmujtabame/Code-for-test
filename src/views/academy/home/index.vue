<template>
  <div style="margin-top: 85px " class="consult">
    <auth-page v-if="token" />
    <GuestPage v-else />
    </div>
</template>

<script>
import AuthPage from './auth.vue'
import GuestPage from './guest.vue'
export default {
name:"academy-home",
components:{
  AuthPage,
  GuestPage
}
}
</script>

<style>
.consult{
  width:100vw;
  overflow-x: hidden;
}
</style>