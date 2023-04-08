<template>
  <div class="height-body-page-without-nav">
    <div class="w-100 h-100 d-flex flex-justify-content-center align-items-center">
        <div class="d-alert d-alert-danger mx-auto">
        <h1 >{{ title_page }}</h1>
        <p>{{ desc_page }}</p>
        <router-link :to="route_page" class="btn btn-danger" >صفحة الرئيسية</router-link>
        
    </div>
    </div>
  </div>
</template>

<script>
export default {
computed:{
    route_page(){
        switch (this.$route.query.type) {
                case 'network-subscribe': return this.getRouteLocale('network-home');
                case 'academy-subscribe': return this.getRouteLocale('academy-home');
                case 'incubator-subscribe': return this.getRouteLocale('incubator-home');
                case 'service-provider-subscribe': return this.getRouteLocale('service-provider-home');
            
                default:
                return this.getRouteLocale('index')
            }
    },
    desc_page(){
        switch (this.$route.query.type) {
                case 'network-subscribe': return this.$t('desc-not-subscribed-network-failure');
                case 'academy-subscribe': return this.$t('desc-not-subscribed-academy-failure');
                case 'incubator-subscribe': return this.$t('desc-not-subscribed-incubator-failure');
                case 'service-provider-subscribe': return this.$t('desc-not-subscribed-service-provider-failure');
                case 'course-buy' : return 'هناك خطأ في عملية الشراء، تواصل معنا لذا لاحظ هنك تغيير في اموالك';
                case 'ready-service-buy' : return 'هناك خطأ في عملية الشراء، تواصل معنا لذا لاحظ هنك تغيير في اموالك';
                default:
                return 'N/A'
            }
    },
    title_page(){
            switch (this.$route.query.type) {
                case 'network-subscribe': return this.$t('you-have-not-subscribed-in-network-failure');
                case 'academy-subscribe': return this.$t('you-have-not-subscribed-in-academy-failure');
                case 'incubator-subscribe': return this.$t('you-have-not-subscribed-incubator-failure');
                case 'service-provider-subscribe': return this.$t('you-have-not-subscribed-service-provider-failure');
                case 'course-buy': return this.$t('you-have-not-bought-course-failure');
                case 'ready-service-buy': return this.$t('you-have-not-bought-ready-service-failure');
                
                default:
                return 'N/A'
            }
    }
},
created(){
    if(!this.$route.query.type || !['course-buy','network-subscribe','academy-subscribe','service-provider-subscribe','incubator-subscribe'].includes(this.$route.query.type)){
        this.router_push('index')
    }
},
mounted(){

}

}
</script>

<style>

</style>