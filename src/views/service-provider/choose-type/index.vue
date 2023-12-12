<template>
    <div class="container shadow p-5 text-center" style="margin-top: 150px; background-color:white;">
        <h1 class="pc">
            قم باختيار العضويه
        </h1>
        <div class="d-flex flex-wrap justify-content-center gap-5">

            <label for="service-provider-choosen"
                :style="`border-color: ${selectedOption == 'service-provider' ? 'var(--pc)' : '#dee2e6'} !important`"
                class="col-sm-12 col-md-5 box p-5  rounded-2 border border-2">
                <div class="row mb-3 mt-5">
                    <h4 class="pc">
                        الانضمام كمقدم خدمه
                    </h4>
                </div>
                <div class="row mb-5">
                    <span>
                        لدى مهارات ارغب فى تقديمها
                    </span>
                </div>
                <div>
                    <input type="radio" v-model="selectedOption" id="service-provider-choosen" name="choose"
                        value="provider">
                </div>
            </label>


            <label for="client-choosen"
                :style="`border-color: ${selectedOption == 'client' ? 'var(--pc)' : '#dee2e6'} !important`"
                class="col-sm-12 col-md-5 box p-5  rounded-2 border border-2">

                <div class="row mb-3 mt-5">
                    <h4 class="pc">
                        الانضمام كعميل
                    </h4>
                </div>
                <div class="row mb-5">
                    <span>
                        لدى عمل اريد انجازه
                    </span>
                </div>
                <div>
                    <input type="radio" v-model="selectedOption" id="client-choosen" name="choose" value="client">
                </div>

            </label>
        </div>
        <div class="row justify-content-center d-flex">
            <button @click="switchRole()"
                class="btn-customer mb-3 mt-4 d-flex gap-3 justify-content-center align-items-center"
                style="line-height: initial; width: 35%;">
                <div>
                    <h4>
                        انشاء حساب
                        {{ selectedOption == 'client' ? 'عميل' : 'مقدم خدمه' }}
                    </h4>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'service-provider-type',
    data() {
        return {
            selectedOption: null // Initialize a data property to store the selected option
        };
    },
    computed: {
        userIsRoleProvider() {
            return this.$store.state.isProviderRole
        },
        clientOrProvider() {
            return this.$store.state.clientOrProvider
        }
    },
    methods: {
        switchRole() {
            localStorage.setItem('providerOrclient', JSON.stringify(this.selectedOption))
            this.$store.commit('changeRole', { 'selected': this.selectedOption })
            if (this.token) {
                this.$router.push('home')
            } else if (this.clientOrProvider == 'client') {
                this.$router.push({
                    name: 'service-provider-register',
                    params: {
                        type: 'client'  // Additional data you want to send
                    }
                });
            } else if (this.clientOrProvider == 'provider') {
                this.$router.push({
                    name: 'service-provider-register',
                    params: {
                        type: 'provider'  // Additional data you want to send
                    }
                });
            }
        },
    },
    mounted() {
        let check = JSON.parse(localStorage.getItem('providerOrclient'))
        console.log(check)
        if (check && this.token) {
            this.$store.commit('changeRole', { 'selected': check })
            this.$router.push('home')
        }
        console.log(this.userIsRoleProvider)
    }
}

</script>

<style scoped>
input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    border-radius: 50%;
    margin-right: 10px;
    background-color: transparent;
    position: relative;
    top: 6px;
}


input[type="radio"]:checked {
    border-color: var(--pc);
}

input[type="radio"]:checked::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: var(--pc);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: appear 0.8s;
}
</style>
