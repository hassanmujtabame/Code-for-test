<template>
  <div class="row mt-5">
        <div class="col-md-6">
            <div class="box border p-5 mt-3">
                <div class="d-flex align-items-center justify-content-between">
                    <h3>
                        خدماتي الجاهزة 
                    </h3>
                    <p class="fw-bolder fs-3">
                        {{ itemCard.count_ready_service }}
                    </p>
                </div>
                <div class="row ">
                    <div class="col-md-6 mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Example with label" :style="{width: `${percentFinished}%`}" :aria-valuenow="percentFinished" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span class="fw-bolder m-c fs-6">
                                                {{ itemCard.service_finished }}
                                            </span>
                                            <span class="fs-6">
                                                خدمة مكتملة
                                            </span>
                                        </p>
                                        <p class="fs-6 t-c">
                                            {{percentFinished}}%
                                        </p>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-5">
                        <div class="progress">
                            <div class="progress-bar tow" role="progressbar" aria-label="Example with label" :style="{width: `${percentWaiting}%`}" :aria-valuenow="percentWaiting" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span class="fw-bolder m-c fs-6">
                                               {{ itemCard.service_waiting }}
                                            
                                            </span>
                                            <span class="fs-6">
                                                طلب ينتظر موفقتك
                                            </span>
                                        </p>
                                        <p class="fs-6 t-c">
                                            {{percentWaiting}}%
                                        </p>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-5">
                        <div class="progress three">
                            <div class="progress-bar three" role="progressbar" aria-label="Example with label" :style="{width: `${percentUnderway}%`}" :aria-valuenow="percentUnderway" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span style="color:#FFBC00 ;" class="fw-bolder m-c fs-6">
                                                {{ itemCard.service_underway }}
                                            
                                            </span>
                                            <span class="fs-6">
                                                قيد التنفيذ
                                            
                                            
                                            </span>
                                        </p>
                                        <p class="fs-6 t-c">
                                            {{percentUnderway}}%
                                        </p>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="box  ">
                <div class="row flex-column mt-3 gap-4">
                    <div class="col-md-12 border p-3">
                            <div class="box d-flex align-items-center justify-content-between ">
                                <h5>
                                    تقيم خدماتي
                                </h5>
                                <p>
                                   {{itemCard.count_rate}}
                                </p>
                            </div>
                            <div class="box d-flex align-items-center justify-content-between ">
                                <button @click="router_push('service-provider-rate-my-service')" class="btn border rounded-2 bg-transparent">
                                    عرض التقييمات 
                                </button>
                                <div>
                                    <div>
                                    <d-rate-stars  :size="32" :value="itemCard.rate"/>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-12 border mt-3 p-3">
                        <div class="box d-flex align-items-center justify-content-between ">
                            <h5>
                                الرسائل الجديدة
                            </h5>
                            <p>
                                {{itemCard.provider_message_count}}
                            </p>
                        </div>
                        <div class="box d-flex align-items-center justify-content-between ">
                            <button class="btn border rounded-2 bg-transparent">
                                عرض الرسائل 
                            </button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import readyServicesAPI from '@/services/api/service-provider/provider/ready-service.js'
export default {
 name:'section-my-ready-services',
 data:()=>({

    loading:true,
    itemCard:{
        count_ready_service:0,
        provider_message_count: 0,
        rate: 0,
        count_rate:0,
        service_finished: 0,
        service_underway: 0,
        service_waiting: 0
    }
 }),
 computed:{
  percentFinished(){
    return this.calcPercent(this.itemCard.service_finished,this.itemCard.count_ready_service)
  },
  percentUnderway(){
    return this.calcPercent(this.itemCard.service_underway,this.itemCard.count_ready_service)
  },
  percentWaiting(){
    return this.calcPercent(this.itemCard.service_waiting,this.itemCard.count_ready_service)
  }
 },
 methods:{
    calcPercent(x,total){
        if(!total) return 0
        return Math.floor(x/total * 100)
    },

    async initializing(){
        console.log('ss')
        this.loading =  true;
        try {
           let { data } = await   readyServicesAPI.getRateReadyServicesStatistics() 
           if(data.success){
            this.itemCard =  data.data
           }
        } catch (error) {
            console.log('error',error)
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