<template>
  <div class="sec-color p-0 m-0 sec-one">
        <div class="img-sec-one" :class="{'rotateY-180':$i18n.locale!=='ar'}">
          <img class="img-fluid" src="/assets/img/Group 14510.png" alt="" />
        </div>
        <div class="container" style="position:relative">
          <div class="row align-items-center pt-5 pb-5">
            <div class="col-md-7 text ">
              <h1 class="fs-1 text-js">                المنصة الأولى لريادة الأعمال نقدم من خلالها مجموعة متكاملة من الخدمات ومنها الاحتضان والاستشارات والإرشاد، والتدريب والتعليم والتسويق</h1>
              <p class="header-desc-page">

              </p>
              <div class="" v-if="!token">
       
                <button class="btn-custmer"  @click="router_push('register')">انضمي الان</button>

                <router-link   custom :to="getRouteLocale('login')" v-slot="{navigate}">
                <button class="btn-custmer-w" @click="navigate">سجلي دخولك</button>
                </router-link>
              </div>
            </div>
            <div class="col-md-5 circle-img m-auto">
              <div>
                <img class="landing" src="/assets/img/image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {

  methods:{
    joinUs(evt){
      if(!this.shouldLoginMsg()){
        //navigate(evt)
        this.router_push('register')
      }
    }
  }
}
</script>

<style scoped>
.header-desc-page{
color:black;
}
</style>