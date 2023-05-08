<template>
    <div style="margin-top: 96px;">
        <div class="shadow container">
            <div class="container">
                <div class="row align-items-center ">
                    <div class="col-md-6">
                        <div>
                            <img v-if="false" class="img-fluid" :src="`${publicPath}assets/img/network 289320.png`" alt="" width="470">
                            <AnimateCard />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h3 class="home-section-title">
                                بطاقة العضوية
                            </h3>
                            <p class="page-text">
                                نبذه عن بطاقة العضوية واهميتها و ازاي هنستخدمها يعني نكتب تفاصيل عنها بطريقة توضح
                                اهميتها و بتجدد كل قد ايه - كل التفاصيل عنها بمعنى اصح بس بطريقة تشد الانتباه
                            </p>
                            <p class="page-text">
                                نبذه عن بطاقة العضوية واهميتها و ازاي هنستخدمها يعني نكتب تفاصيل عنها بطريقة توضح
                                اهميتها و بتجدد كل قد ايه - كل التفاصيل عنها بمعنى اصح بس بطريقة تشد الانتباه
                            </p>
                            <p class="page-text">
                                نبذه عن بطاقة العضوية واهميتها و ازاي هنستخدمها يعني نكتب تفاصيل عنها بطريقة توضح
                                اهميتها و بتجدد كل قد ايه - كل التفاصيل عنها بمعنى اصح بس بطريقة تشد الانتباه
                            </p>
                            <button class="btn-main mt-3" @click="downloadCard">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.0013 30.3337H12.0013C4.7613 30.3337 1.66797 27.2403 1.66797 20.0003V12.0003C1.66797 4.76033 4.7613 1.66699 12.0013 1.66699H20.0013C27.2413 1.66699 30.3346 4.76033 30.3346 12.0003V20.0003C30.3346 27.2403 27.2413 30.3337 20.0013 30.3337ZM12.0013 3.66699C5.85463 3.66699 3.66797 5.85366 3.66797 12.0003V20.0003C3.66797 26.147 5.85463 28.3337 12.0013 28.3337H20.0013C26.148 28.3337 28.3346 26.147 28.3346 20.0003V12.0003C28.3346 5.85366 26.148 3.66699 20.0013 3.66699H12.0013Z"
                                        fill="white" />
                                    <path
                                        d="M16.0006 20.3463C15.7472 20.3463 15.4939 20.2529 15.2939 20.0529L11.2939 16.0529C10.9072 15.6663 10.9072 15.0263 11.2939 14.6396C11.6806 14.2529 12.3206 14.2529 12.7072 14.6396L16.0006 17.9329L19.2939 14.6396C19.6806 14.2529 20.3206 14.2529 20.7072 14.6396C21.0939 15.0263 21.0939 15.6663 20.7072 16.0529L16.7072 20.0529C16.5072 20.2529 16.2539 20.3463 16.0006 20.3463Z"
                                        fill="white" />
                                    <path
                                        d="M16 20.3464C15.4533 20.3464 15 19.893 15 19.3464V8.67969C15 8.13302 15.4533 7.67969 16 7.67969C16.5467 7.67969 17 8.13302 17 8.67969V19.3464C17 19.9064 16.5467 20.3464 16 20.3464Z"
                                        fill="white" />
                                    <path
                                        d="M15.998 24.3062C13.1846 24.3062 10.358 23.8529 7.67798 22.9596C7.15798 22.7862 6.87797 22.2129 7.05131 21.6929C7.22464 21.1729 7.78464 20.8796 8.31797 21.0662C13.278 22.7196 18.7313 22.7196 23.6913 21.0662C24.2113 20.8929 24.7846 21.1729 24.958 21.6929C25.1313 22.2129 24.8513 22.7862 24.3313 22.9596C21.638 23.8662 18.8113 24.3062 15.998 24.3062Z"
                                        fill="white" />
                                </svg>
                                تحميل بطاقتك
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" p-3 mt-5 ">
                <h3 class="home-section-title text-center fs-r-32-40">
                    يمكنك ابراز بطاقتك لكاشير العلامات التجارية التالية
                </h3>
                <div class="mt-3">
                   <dFilterList />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dFilterList from './filter-list/filter'
import AnimateCard from '@/components/cards/image-card-membership/index.vue'
export default {
    name: 'card-membership',
    components:{
        AnimateCard,
        dFilterList
    },
    methods:{
        downloadCard(evt){
            if(!this.shouldSubNetworkMsg('انت غير مشترك في الشبكة',evt)){
                if(this.userSubNetwork.type=='free'){
                    let dataEvt ={
                        title:'للأسف ليست لديك بطاقة عضوية',
                        description:`انت مشترك في الباقة المجانية وهذه الباقة لا تمنحك بطاقة العضوية - رقي حسابك الى الباقة الشهرية او السنوية و استفيد من بطاقة العضوية و المزيد من المميزات في الشبكة`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`,
                        btns:[
                            {title:'رقي حسابك',action:()=>this.router_push('network-subscribe')}
                        ]
                    }
                    this.showConfirmMsg(dataEvt);
                    return;
                }
                let dataEvt ={
                        title:'بطاقة عضوية',
                        description:`بطاقة العضوية غير جاهزة الان`,
                        image:`${this.publicPath}assets/img/Group 1171275670.png`
                    }
                    this.showConfirmMsg(dataEvt);
            } 

        }
    }
}
</script>

<style scoped>
.page-text{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    color: #979797;
}

</style>