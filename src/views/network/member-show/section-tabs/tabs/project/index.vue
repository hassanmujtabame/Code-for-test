<template>
    <div class="row">
            <div v-for="(item,i) in items" :key="i" class="col-md-6">
                <ProjectCard 
                 :title="item.title"
                 :image="item.image"
                   :publisher="item['user info'].name"
                   :date-publish="item.datePublish"
                   :rest-day="item.restDay"
                   :investor="item.investor"
                   :minimum-goal="item.minimumGoal"
                   :ownership="item.offered_property"
                   :amount="item.amount"
                />
            </div>
        
        </div>
</template>

<script>
import projectsAPI from '@/services/api/projects';
import ProjectCard from '@/components/cards/investment-project.vue';
export default {
 name:'project-tab',
 components:{
    ProjectCard
 },
 props:{
  userId:{
    type:[String,Number]
  }
 },
 data:()=>({
  loading:true,
  items:[]
 }),
 methods:{
  async loadList(){
    this.loading = true;
      try {
        let { data} = await projectsAPI.getAll(/*{user_id:this.userId}*/)
        if(data.success){
          this.items.push(...data.data)
        }
      } catch (error) {
        console.log('error',error)
        console.log('error response',error.response)
      }
    this.loading = false;
  }
 },
 mounted(){
  this.loadList()
 }
}
</script>

<style>

</style>