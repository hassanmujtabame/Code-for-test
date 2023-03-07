<template>
    <div style="margin-top: 85px" class="consult max-width-100-hidden">
        <d-overlays-simple v-if="loading"/>
        <div  v-else class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <button @click="updatePartner" class="btn btn-custmer btn-local"><i class="fa fa-pen-to-square mx-2"></i>  تعديل بيانات الشركة</button>
                </div>
                <div class="col-12 col-md-6">
                    <a class="btn btn-custmer-w btn-local" :href="itemPage.filePath" download  target="_blank"><i class="fa fa-download mx-2"></i>  تحميل عقد الشركة</a>


                </div>
            </div>
            <div class="mt-5">
                <SectionFilterList />
            </div>
        </div>
        <updatePartnerDialog />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import updatePartnerDialog from './dialogs/update-partner/index'
import SectionFilterList from './parts/section-filter-list'

export default {
 name:'ads-dashboard',
 components:{
    SectionFilterList,
    updatePartnerDialog
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
