<template>
   <div class="container">
            <div class=" section-schedule ">
                <h2 class="home-section-title">
                   {{ $t('riadiat-network-schedule') }}
    
                </h2>
                <p class="home-section-text">
                    {{ $t('riadiat-network-schedule-text') }}
                    
                </p>
                
                <div class="section-schedule-content" >
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
                                <div  class="calendar-schedule"  :class="{'mobile':isMobile}">
                                <d-calendar v-if="!loading" 
                               
                                :attributes="attributes"
                                @dayclick="dayclick"
                                >
                                <template #day-popover="{ day, format, masks }">
                                    <div class="text-xs text-gray-300 font-semibold text-center">
                                    {{ format(day.date, masks.dayPopover) }}
                                    <hr class="mt-1"/>
                                    <div :class="{'text-right':$i18n.locale=='ar','text-left':$i18n.locale!=='ar'}">
                                    <p   class=" pb-1 mb-1">{{ day.attributes[0].customData.categoryName }}</p>
                                    <p  class=" pb-1 mb-1">{{ $t('titled') }} :  {{ day.attributes[0].customData.title }}</p>
                                    <p class=" pb-1 mb-1">{{ $t('at-time') }} :  {{ timeFormatAMPM(day.attributes[0].customData.time) }}</p>
                                    </div>    
                                </div>
                                </template>
                                </d-calendar>
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
</template>

<script>
import schedulesAPI from '@/services/api/schedules';
import scheduleNetworkCard from '@/components/cards/card-schedule.vue'
export default {
 name:'schedule-network',
 components:{
    scheduleNetworkCard
 },
 data:()=>{
    return {
        loading:false,
        items:[],
    }
 },
 computed:{
 attributes() {
      return [
        // Attributes for todos
        ...this.items.map(event => ({
          dates: event.date,
          dot: {
            color: 'red',
            //class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: true,
          customData: event,
        })),
      ];
    },
},
 methods:{
    dayclick(day){
        if(process.env.NODE_ENV !== 'production')
        console.log('day',day)
    },
    async loadList(){
        this.loading = true;
        try {
         let { data } = await schedulesAPI.getHomeNetwork() 
         if(data.success){
            this.items = data.data
            if(process.env.NODE_ENV !== 'production')
            this.items.push({id: -1, title: "تجريب", categoryName: "ويبنار تججريب",
date:new Date(),image:null,time:"02:37"})
         }
        } catch (error) {
            console.log('error',error)
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