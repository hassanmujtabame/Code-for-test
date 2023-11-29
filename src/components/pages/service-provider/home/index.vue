<template>
  <div>
    <!-- <AuthPage v-if="token" />
    <GuestPage v-else /> -->
    <Default />
  </div>
</template>
<script>
import GuestPage from "./guest.vue";
import AuthPage from "./auth.vue";
import Default from "./default.vue";
export default {
  name: "service-provider",
  components: { GuestPage, AuthPage, Default }
};
</script>
  
  <style>
</style>