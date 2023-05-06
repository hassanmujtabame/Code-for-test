<template>
  <div class="position-relative container" style="min-height:200px">
      <d-single-list
      :call-list="initializing" 
      :paginate="3"
      showMore="أعرض المزيد من المدونات"
      noMoreItems='لا يوجد المزيد من المدونات'
      style="min-height:200px"
      >
          <template v-slot="{item}">
  <CardItem  
  :itemId="item.id"
  :title="item.title"
  :views="item.watched"
  :date="item.created_at"
  :image="item.image"
  :liked="item.liked"
  />
</template>
  </d-single-list>
  </div>
</template>

<script>
 import userAPI from '@/services/api/user.js'
import CardItem from './card.vue';
export default {
name:'d-tab-pane-your-blogs',
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

     return await userAPI.getBlogstUser(this.$route.params.id,metaInfo)
    
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