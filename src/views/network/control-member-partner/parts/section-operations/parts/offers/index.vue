<template>
    <div  class="consult max-width-100-hidden">
        <div class="container">
            <div class="mt-5">
                <SectionFilterList />
            </div>
        </div>
        <addOfferDialog />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import addOfferDialog from './add-offer/index.vue'
import SectionFilterList from './section-filter-list/index.vue'

export default {
 name:'ads-dashboard',
 components:{
    SectionFilterList,
    addOfferDialog
 },
 data:()=>({
    loading:true,
    itemPage:{filePath:null}
 }),
 computed:{
...mapGetters({
   companyInfo: 'auth/partner'
})
 },
 watch:{
    companyInfo:{
        deep:true,
        immediate:true,
        handler(){
            if(!this.userPartner){
                //  this.router_push('network-offers');
                //   this.fireOpenDialog('join-as-partner',this.getRouteLocale('register-networking'))

            }
            this.itemPage = Object.assign(this.itemPage,this.companyInfo)
            this.loading = false;
        }
    }
 },
 methods:{
    updatePartner(){
       
        this.fireOpenDialog('update-partner-dialog', this.itemPage)
    }
 }
}
</script>

<style  scoped>
.btn-local{
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height, or 125% */
    text-transform: capitalize;
    color: #FFFFFF;
    height: 128px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
