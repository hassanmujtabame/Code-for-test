<template>
    <div style="margin-top: 85px" class="consult max-width-100-hidden">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <button class="btn btn-custmer btn-local"><i class="fa fa-pencil"></i>  تعديل بيانات الشركة</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custmer-w btn-local"><i class="fa fa-pencil"></i>  تعديل بيانات الشركة</button>


                </div>
            </div>
            <div class="mt-5">
                <SectionFilterList />
            </div>
        </div>
    </div>
</template>

<script>
import SectionFilterList from './parts/section-filter-list'
export default {
 name:'ads-dashboard',
 components:{
    SectionFilterList
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
}
</style>
