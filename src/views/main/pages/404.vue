<template>
  <div class="height-body-page-without-nav">
    <div class="w-100 h-100 d-flex flex-justify-content-center align-items-center">
        <div class="d-alert  mx-auto">
        <h1 class="page-title" >404</h1>
        <p class="page-desc">{{ $t('not-found-page') }}</p>
        <router-link v-if="false" :to="{name:'index'}" class="btn btn-custmer-w">{{ $t('Home') }}</router-link>
        
    </div>
    </div>
  </div>
</template>

<script>
export default {
name:'page-404'
}
</script>

<style scoped>
.page-title{
    font-size: 40px;
    margin: 0;
}
.page-desc{
    font-size:40px
}
</style>