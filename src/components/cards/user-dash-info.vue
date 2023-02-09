<template>
    <div class="box border rounded-2 align-items-center  p-4 row">
        <div class="col-md-5">
            <img class="rounded-circle img-person clickable" @click="showProfile" :src="member.image" :alt="member.name"
                width="150" height="150">
        </div>
        <div class="col-md-6  ">

            <h5 class="m-c">{{ member.name }}</h5>
            <p>{{ member.job??member.job_title }}</p>
            <router-link custom :to="getRouteLocale('my-profile')" v-slot="{navigate}">
            <button @click="navigate" role="link" class="border px-3 py-2 rounded-2 bg-transparent">
                {{ $t('account-profil') }}
            </button>
            </router-link>
            
        </div>


    </div>
</template>

<script>
export default {
 name:'user-dash-info',
 props:{
    routeName:{
        type:String,
    },
   member:{
     type:[Array,Object],
     default:()=>{return {
        image:'/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg',
        name:'عبد الرحمن الشيخ',
        job:'مصمم واجهات اميامية',
     }}
   }
 },
 methods:{
    showProfile(){
        if(this.routeName){
            this.router_push(this.routeName,{id:this.member.id})
        }
    },
 }
}
</script>

<style scoped>
.img-person{
    min-height: 150px;
    min-width: 150px;
}
</style>