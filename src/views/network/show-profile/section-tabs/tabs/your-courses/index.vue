<template>
    <div class="position-relative container" style="min-height:200px">
        <d-single-list
        :call-list="initializing" 
        :paginate="3"
        showMore="أعرض المزيد من الدورات"
        noMoreItems='لا يوجد المزيد من الدورات'
        style="min-height:200px"
        >
            <template v-slot="{item}">
    <CardItem  
        :image="item.image_path"
        :title="item.title"
        :name="item.user_info.name"
        :price="item.price"
        :url="getRouteLocale('academy-course',{id:item.id})"
    />
</template>
    </d-single-list>
    </div>
</template>

<script>
import instructorAPI from '@/services/api/academy/instructor';
import CardItem from './card-item.vue';
export default {
 name:'d-tab-pane-your-course',
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

       return await instructorAPI.getCourses(metaInfo)
      
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