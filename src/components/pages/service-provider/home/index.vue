<template>
  <div>
    <Provider v-if="token && userIsRoleProvider == 'provider'" />
    <Client v-if="token && userIsRoleProvider == 'client'" />
    <Default v-else-if="userIsRoleProvider == ''" />
  </div>
</template>
<script>
import Provider from "./provider";
import Client from "./client";
import Default from "./default.vue";
export default {
  name: "service-provider",
  components: {
    Default, 
    Provider,
    Client
  },
    computed: {
        userIsRoleProvider() {
            return this.$store.state.clientOrProvider
        }
    },
    mounted() {
        let check = JSON.parse(localStorage.getItem('providerOrclient'))
        if (check && this.token) {
            this.$store.commit('changeRole', { 'selected': check })
        }
        console.log(this.userIsRoleProvider)
        console.log('userfd',this.user)
        
    }
};
</script>
  
<style></style>