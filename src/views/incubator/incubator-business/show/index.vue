<template>
<div style="margin-top: 136px;">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
        {{ $t('has-error') }}
    </div>
    <!-- <div v-else-if="!itemPage.subscribed">
        <div class="height-body-page-without-nav">
    <div class="w-100 h-100 d-flex flex-justify-content-center align-items-center">
        <div class="d-alert d-alert-danger mx-auto">
        <h1 >انت غير مشترك في قسم : {{ itemPage.departement_name }}</h1>
        <p>عليك الاشتراك في القسم لكي تستفيد من متابعة مراحل الحضنة فيه</p>
        <router-link :to="getRouteLocale('incubator-subscribe')" class="btn btn-custmer" >إشترك الان</router-link>
        
    </div>
    </div>
  </div>
    </div> -->
    <div v-else class="container">
        <div class="row">
            <div class="col-md-3">
                <DSidebar :itemPage="itemPage"/>
            </div>
            <div class="col">
                <DContent />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import DSidebar from './sidebar'
import DContent from './content'
import incubatorAPI from '@/services/api/incubator';
export default {
name:'incubator-business',
components:{
    DSidebar,
    DContent
},
data:()=>({
    loading: true,
    hasError: false,
    itemPage:{},
}),
methods:{
    async initializing(){
        this.loading = true;
        this.hasError = false;
        try {
            let { data } = await incubatorAPI.getStageItem(this.$route.params.id);
            if(data.success){
                this.itemPage = {...data.data,subscribed:this.isDeptIncubatorSubscribe({id:data.data.department_id})};
            }
        } catch (error) {
            this.hasError = true;
        }
        this.loading = false;
    }
},
mounted(){
    this.initializing()
}

}
</script>

<style>

</style>