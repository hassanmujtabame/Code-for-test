<template>
    <div class="box border rounded-2 align-items-center  p-4 row bg-card" v-bind="$attrs">
        <div class="col-md-5">
            <img class="rounded-circle img-person clickable" @click="showProfile" :src="member.image" :alt="member.name"
                width="150" height="150">
        </div>
        <div class="col-md-6  ">

            <h5 class="m-c">{{ member.name }}</h5>
            <p>{{ member.job ?? member.job_title }}</p>
            <router-link custom :to="getRouteLocale('my-profile')" v-slot="{ navigate }">
                <button @click="navigate" role="link" class="btn btn-outline-success px-3">
                    {{ $t('account-profil') }}
                </button>
            </router-link>

        </div>


    </div>
</template>

<script>
export default {
    name: 'user-dash-info',
    props: {
        routeName: {
            type: String,
        },
        member: {
            type: [Array, Object],
            default: () => {
                return {
                    image: '/assets/img/avatar-11.jpg',
                    name: 'عبد الرحمن الشيخ',
                    job: 'مصمم واجهات اميامية',
                }
            }
        }
    },
    methods: {
        showProfile() {
            if (this.routeName) {
                this.router_push(this.routeName, { id: this.member.id })
            }
        },
    }
}
</script>

<style scoped>
.img-person {
    min-height: 150px;
    min-width: 150px;
}
</style>