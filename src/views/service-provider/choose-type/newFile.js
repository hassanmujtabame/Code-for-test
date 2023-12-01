/* __placeholder__ */
export default {
name: 'service-provider-type',
data() {
return {
selectedOption: null // Initialize a data property to store the selected option
};
},
computed: {
userIsRoleProvider() {
return this.$store.state.isProviderRole;
}
},
methods: {
switchRole() {
localStorage.setItem('providerOrclient', JSON.stringify(this.selectedOption));
this.$store.commit('changeRole', { 'selected': this.selectedOption });
console.log(this.userIsRoleProvider);
if (this.token) {
this.$router.push('home');
} else {
this.$router.push({ name: 'login' });
}
},
},
mounted() {
let check = JSON.parse(localStorage.getItem('providerOrclient'));
console.log(check);
if (check) {
this.$store.commit('changeRole', { 'selected': check });
this.$router.push('home');
}
}
};
