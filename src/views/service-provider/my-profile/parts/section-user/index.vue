<template>
    <div>
  <div class="box info border p-3">
                        <div class="main-img text-center m-auto">
                            <img class="rounded-circle img-person" :src="user.image" :alt="user.name" width="140" height="140">
                        </div>
                        <div class=" text-center">
                            <h5 class="m-c mt-2">
                             {{user.name}}
                            </h5>
                            <p>
                                {{user.job}}
                            </p>
                            <p class="t-c">
                                {{user.bio}}
                               </p>
                        </div>
                        <p class="rating">
                           
                            <span style="color: #FFBC00 ; " class="fw-bold">
                               {{rate_states.rate}}
                            </span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.4802 20.69C8.9802 20.69 8.6302 20.52 8.4202 20.36C8.0202 20.07 7.40019 19.32 7.79019 17.64L8.36017 15.18C8.41017 14.97 8.30018 14.59 8.15018 14.43L6.16019 12.44C5.11019 11.39 5.20018 10.48 5.34018 10.03C5.48018 9.58 5.94018 8.78999 7.40018 8.53999L9.9502 8.12C10.1402 8.08999 10.4502 7.86 10.5302 7.69L11.9402 4.87C12.6202 3.51 13.5202 3.31 14.0002 3.31C14.4802 3.31 15.3802 3.51 16.0602 4.87L17.4702 7.69C17.5602 7.86 17.8602 8.08999 18.0502 8.12L20.6002 8.53999C22.0602 8.77999 22.5202 9.58 22.6602 10.03C22.8002 10.48 22.8902 11.39 21.8402 12.44L19.8502 14.43C19.7002 14.58 19.5902 14.97 19.6402 15.18L20.2102 17.64C20.6002 19.33 19.9802 20.07 19.5802 20.36C19.1802 20.65 18.2902 21.02 16.7902 20.13L14.4002 18.71C14.2002 18.59 13.7802 18.59 13.5802 18.71L11.1902 20.13C10.5002 20.55 9.9202 20.69 9.4802 20.69ZM14.0002 4.81C13.8402 4.81 13.5502 4.99999 13.2802 5.53999L11.8702 8.36C11.5702 8.97 10.8602 9.49001 10.1902 9.60001L7.6402 10.02C7.0702 10.12 6.8102 10.33 6.7602 10.49C6.7102 10.65 6.80018 10.97 7.21018 11.38L9.2002 13.37C9.7102 13.88 9.98019 14.81 9.82019 15.51L9.25019 17.97C9.08019 18.68 9.19017 19.06 9.30017 19.15C9.41017 19.23 9.81018 19.22 10.4302 18.84L12.8302 17.42C13.5002 17.02 14.5102 17.02 15.1702 17.42L17.5602 18.84C18.1902 19.21 18.5902 19.23 18.7002 19.15C18.8102 19.07 18.9202 18.69 18.7502 17.97L18.1802 15.51C18.0202 14.8 18.2802 13.88 18.8002 13.37L20.7902 11.38C21.2002 10.97 21.2902 10.64 21.2402 10.49C21.1902 10.34 20.9302 10.12 20.3602 10.02L17.8102 9.60001C17.1402 9.49001 16.4302 8.97 16.1302 8.36L14.7202 5.53999C14.4502 4.99999 14.1602 4.81 14.0002 4.81Z" fill="#FFBC00"/>
                                <path d="M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#FFBC00"/>
                                <path d="M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z" fill="#FFBC00"/>
                                <path d="M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z" fill="#FFBC00"/>
                                </svg>
                                
                        </p>
                    </div>
                    <div class="box border  mt-3">
                        <div>
                            <h3 class=" border-bottom p-2">
                                تقيم الخدمه 
                            </h3>
                        </div>
                        <div v-for="(item,i) in items" :key="i" class="box border-bottom">

                            <div class="d-flex align-items-center justify-content-between  m-0 p-2">
                                    <div class="d-flex align-items-center ">
                                        <div>
                                            <img class="rounded-circle" :src="item.image" :alt="item.from_user" width="48 " height="48">
                                        </div>
                                        <p class="m-c fw-bold px-1 fs-6 p-0 m-0">
                                           {{item.from_user}}
                                        </p>
                                    </div>
                                    <div>
                                        <d-rate-stars :size="16" :value="item.rate"/>
    
                                    </div>
    
                            </div>
                            <div>
                                <p class="t-c px-2">
                                    {{ item.comment }}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
</template>

<script>
import readyServiceAPI from '@/services/api/service-provider/provider/ready-service.js'

export default {
 name:'section-user',
 data:()=>({
    loading:true,
    items:[],
    rate_states :{
        count_ready_service:0,
        provider_message_count: 0,
        rate: 0,
        count_rate:0,
        service_finished: 0,
        service_underway: 0,
        service_waiting: 0
    }

 }),
 methods:{
    async rateStatics(){
        console.log('ss')
        this.loading =  true;
        try {
           let { data } = await   readyServiceAPI.getRateReadyServicesStatistics() 
           if(data.success){
            this.rate_states =  data.data
           }
        } catch (error) {
            console.log('error',error)
        }
        this.loading =  false;
    },
    async initializing() {
            try {
                
                let {data} = await readyServiceAPI.getListRates()
                if(data.success){
                    this.items = data.data.filter((x,i)=>i<4);
                }
            } catch (error) {
                console.log('error', error)
                console.log('response', error.response)
            }
        }
 },
 mounted(){
    this.rateStatics()
    this.initializing()
 }
}
</script>

<style scoped>
.img-person{
    min-height:140px;
    min-width:140px;
}
</style>