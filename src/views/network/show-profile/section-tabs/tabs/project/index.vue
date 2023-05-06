<template>
    <div class="position-relative container" style="min-height:200px">
        <d-single-list
        :call-list="initializing" 
        :paginate="3"
        showMore="أعرض المزيد من المشاريع"
        noMoreItems='لا يوجد المزيد من المشاريع'
        style="min-height:200px"
        >
            <template v-slot="{item}">
    <CardItem  
    :title="item.title"
    :description="item.description"
    :publisher="item.user_info.name"
    :date-publish="item.created_at"
    :rest-day="item.rest_days"
    :investor="item.count_invest"
    :minimum-goal="item.minimum_investment"
    :offered_property="item.offered_property"
    :amount="item.amount_financing_required"
    :place="item.place"
 
    />
  </template>
    </d-single-list>
    </div>
  </template>
  
  <script>
   import userAPI from '@/services/api/user.js'
   import CardItem from '@/components/cards/projects/physical/simple'
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
  
       return await userAPI.getProjectsUser(this.$route.params.id,metaInfo)
      
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