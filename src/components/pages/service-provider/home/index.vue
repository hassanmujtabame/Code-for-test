<template>
  <div>
    <AuthPage v-if="token" />
    <GuestPage v-else />
  </div>
</template>
<script>
import GuestPage from "./guest.vue";
import AuthPage from "./auth.vue";
export default {
  name: "service-provider",
  components: { GuestPage, AuthPage }
};
</script>
  
  <style>
</style>