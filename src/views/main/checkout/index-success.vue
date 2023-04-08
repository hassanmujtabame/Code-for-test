<template>
  <div class="height-body-page-without-nav">
    <div class="w-100 h-100 d-flex flex-justify-content-center align-items-center">
        <div class="d-alert d-alert-success mx-auto">
        <h1 >{{ title_page }}</h1>
        <p>{{ desc_page }}</p>
        <router-link :to="route_page" class="btn btn-custmer-w">{{ btn_label }}</router-link>
        
    </div>
    </div>
  </div>
</template>

<script>
export default {
computed:{
    btn_label(){
        switch (this.$route.query.type) {
                case 'network-subscribe': return this.$t('Home');
                case 'academy-subscribe': return this.$t('Home');
                case 'incubator-subscribe': return this.$t('Home');
                case 'service-provider-subscribe': return this.$t('Home');
                case 'course-buy' : return this.$t('view-course');
                case 'ready-service-buy' : return this.$t('view-ready-service');
                default:
                return 'N/A'
            }
    },
    route_page(){
        switch (this.$route.query.type) {
                case 'network-subscribe': return this.getRouteLocale('network-home');
                case 'academy-subscribe': return this.getRouteLocale('academy-home');
                case 'incubator-subscribe': return this.getRouteLocale('incubator-home');
                case 'service-provider-subscribe': return this.getRouteLocale('service-provider-home');
                case 'course-buy': return this.getRouteLocale('academy-course-preview-show',{id:this.$route.query.course});
                case 'ready-service-buy': return this.getRouteLocale('service-provider-ready-service',{id:this.$route.query.service});
            
                default:
                return this.getRouteLocale('index')
            }
    },
    desc_page(){
        switch (this.$route.query.type) {
                case 'network-subscribe': return this.$t('desc-subscribed-network-successful');
                case 'academy-subscribe': return this.$t('desc-subscribed-academy-successful');
                case 'incubator-subscribe': return this.$t('desc-subscribed-incubator-successful');
                case 'service-provider-subscribe': return this.$t('desc-subscribed-service-provider-successful');
                case 'course-buy': return this.$t('desc-bought-course-successful');
                case 'ready-service-buy': return this.$t('desc-bought-ready-service-successful');
            
                default:
                return ''
            }
    },
    title_page(){
            switch (this.$route.query.type) {
                case 'network-subscribe': return this.$t('you-have-subscribed-in-network-successful');
                case 'academy-subscribe': return this.$t('you-have-subscribed-in-academy-successful');
                case 'incubator-subscribe': return this.$t('you-have-subscribed-incubator-successful');
                case 'service-provider-subscribe': return this.$t('you-have-subscribed-service-provider-successful');
                case 'course-buy': return this.$t('you-have-bought-course-successful');
                case 'ready-service-buy': return this.$t('you-have-bought-ready-service-successful');
        
                default:
                return 'N/A'
            }
    }
},
created(){
    if(!this.$route.query.type || !['ready-service-buy','course-buy','network-subscribe','academy-subscribe','service-provider-subscribe','incubator-subscribe'].includes(this.$route.query.type)){
        this.router_push('index')
    }
},
mounted(){

}

}
</script>

<style>

</style>