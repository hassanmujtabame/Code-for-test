<template>
    <div class="position-relative" style="min-height:200px">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else >
        <div class="row">
            <div v-for="(item,i) in items" :key="i" class="col-md-6 mt-2">
                <router-link class="router-link" :to="getRouteLocale('network-investment-project-show',{id:item.id})">   
             <projectCard 
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
             </router-link>
            </div>
        </div>
        <!-- end row-->
        <div v-if="false" class="w-100 mt-3">
            <button class="btn-more-loading"> {{ $t('more') }} </button>
        </div>
        </div>
        </div>
</template>

<script>
import projectCard from '@/components/cards/projects/physical/simple'
import userAPI from '@/services/api/user.js'
export default {
 name:'project-tab',
 components:{
    projectCard
 },
 data:()=>({
    loading:true,
    hasError:false,
    metaD:{},
    items:[]
 }),
 methods:{

    async initializing(){
        this.loading = true;
        try {
            let { data } = await userAPI.getProjectsUser(this.$route.params.id)
            if(data.success){
                this.items.push(...data.data) 

            }else{
                  this.hasError = true;
                }
        } catch (error) {
            this.hasError = true;
            console.log('error',error);
            console.log('error response',error.response);  
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