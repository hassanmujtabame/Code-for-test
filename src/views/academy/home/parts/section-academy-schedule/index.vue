<template>
  <div class="container">
            <div class=" table-network ">
                <h2>جدول اكاديمية رياديات</h2>
                <p>
                    هنا تجدين كل المواعيد  المهمة الخاصة بأكاديمية رياديات
                                </p>
                
                <div style="background-color: #F6F8F9;">
                    <div class="row p-2">
                        <div class="col-md-8">
                            <div class="row">
                                <div v-for="(item,i) in items.filter((x,i)=>i<4)" :key="i" class="col-6  col-lg-3">
                                <router-link class="router-link" :to="getRouteLocale('academy-learning-meeting-show',{id:item.id})">
                                    <scheduleItem
                                    :title="item.title"
                                    :image="item.image"
                                    :time="item.time"
                                    :date="item.date"
                                    />
                                </router-link>
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
import academyAPI from '@/services/api/academy'
import scheduleItem from '@/components/cards/schedule-riadiat.vue'
export default {
name:'section-section-academy-schedule',
components:{
    scheduleItem
},
data:()=>({
    loading:false,
    items:[]
}),
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
    async initializing(){
        this.loading =  true;
        try {
            let { data } = await academyAPI.getHomeSchedules()
            if(data.success){
                this.items =  data.data;
            }
        } catch (error) {
            //
        }
        this.loading =  false;
    }
},
mounted(){
    this.initializing()
}
}
</script>

<style>

</style>