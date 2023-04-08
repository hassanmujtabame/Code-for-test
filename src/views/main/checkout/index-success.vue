<template>
  <div class="height-body-page-without-nav">
    <div class="w-100 h-100 d-flex flex-justify-content-center align-items-center">
        <div class="d-alert d-alert-success mx-auto">
        <h1 >{{ title_page }}</h1>
        <p>{{ desc_page }}</p>
        <router-link :to="route_page" class="btn btn-custmer-w" >صفحة الرئيسية</router-link>
        
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
                case 'network-subscribe': return this.$t('desc-subscribed-network-successful');
                case 'academy-subscribe': return this.$t('desc-subscribed-academy-successful');
                case 'incubator-subscribe': return this.$t('desc-subscribed-incubator-successful');
                case 'service-provider-subscribe': return this.$t('desc-subscribed-service-provider-successful');
            
                default:
                return 'N/A'
            }
    },
    title_page(){
            switch (this.$route.query.type) {
                case 'network-subscribe': return this.$t('you-have-subscribed-in-network-successful');
                case 'academy-subscribe': return this.$t('you-have-subscribed-in-academy-successful');
                case 'incubator-subscribe': return this.$t('you-have-subscribed-incubator-successful');
                case 'service-provider-subscribe': return this.$t('you-have-subscribed-service-provider-successful');
            
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