<template>
   <div class="container">
            <div class=" table-network ">
                <h2>
                   {{ $t('riadiat-network-schedule') }}
    
                </h2>
                <p>
                    {{ $t('riadiat-network-schedule-text') }}
                    
                </p>
                
                <div style="background-color: #F6F8F9;">
                    <div class="row p-2">
                        <div class="col-md-8">
                            <div class="row">
                                <div v-for="(item,i) in items.filter((x,i)=>i<3)" :key="i" class="col-6  col-lg-3">
                                   <scheduleNetworkCard 
                                   :image="item.image"
                                   :title="item.categoryName"
                                   :time="item.time"
                                   />
                                </div>
                            </div>
    
                        </div>
                        <div class="col-md-4">
                            <div class="position-relative">
                                <!--calendar-->
                                <d-calendar class="calendar-schedule" :class="{'mobile':isMobile}"/>
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
</template>

<script>
import schedulesAPI from '@/services/api/schedules';
import scheduleNetworkCard from './card-schedule.vue'
export default {
 name:'schedule-network',
 components:{
    scheduleNetworkCard
 },
 data:()=>{
    return {
        items:[],
    }
 },
 methods:{
    async loadList(){
        try {
         let { data } = await schedulesAPI.getHomeNetwork() 
         if(data.success){
            this.items = data.data
         }
        } catch (error) {
            console.log('error',error)
        }
    }
 },
 mounted(){
  this.loadList() 
 }
}
</script>

<style>

</style>