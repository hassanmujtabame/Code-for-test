<template>
    <div class="position-relative container" style="min-height:200px">
        <d-single-list
        :call-list="initializing" 
        :paginate="3"
        showMore="أعرض المزيد من العروض"
        noMoreItems='لا يوجد المزيد من العروض'
        style="min-height:200px"
        >
            <template v-slot="{item}">
    <CardItem  
        :image="item.image"
        :title="item.name_company"
        :desc="item.description"

        :url="getRouteLocale('network-offers')"
    />
</template>
    </d-single-list>
    </div>
</template>

<script>
import offersAPI from '@/services/api/offers';
import CardItem from './card-item.vue';
export default {
 name:'d-tab-pane-offers',
 components:{
    CardItem,
 },
 data:()=>({
    loading:false,
 }),
 methods:{
   async initializing(metaInfo){
    this.loading = true;
    try {

       return await offersAPI.getMyOffers(metaInfo)
      
    } catch (error) {
        //
    }
    this.loading = false;

   }
 }
}
</script>

<style>

</style>