<template>
   <div class="position-relative container" style="min-height:200px">
    <d-filter-list
    :call-list="loadList"
    hideSide
    hideTop
    classColCard="col-12 col-md-3 mt-2"
    >
<template v-slot="{item}">
    <d-avatar class="filter-shadow-partner mx-auto" 
    :img="item.image_path" 
    :alt="item.name??''" 
     size=180 />
</template>
</d-filter-list>
</div>
</template>

<script>
import serviceProviderAPI from '@/services/api/service-provider';
export default {
 name:'service-provider-tab',
 methods:{
    async loadList(metaInfo){
        try {
            let params={
                page:metaInfo.currentPage,
                paginte:8
            }
            return await serviceProviderAPI.partners.getAll(params)
        } catch (error) {
            ///
        }
    }
 }
}
</script>

<style>

</style>