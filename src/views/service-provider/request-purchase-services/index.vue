<template>
    <div style="margin-top: 96px;">
        <div class="container">
            <div class="box border shadow p-4">
                <div class="row align-items-center">
                    <div class=" col-12 col-md-4 mt-3">
                        <h4 class="fw-bold">
                            طلبات شراء خدماتك
                        </h4>
                    </div>
                    <div class=" col-12 col-md-5 mt-3">
                        <label for="" class="position-relative w-100">
                            <input class="form-control py-3 px-5" type="text" placeholder=" أبحث  في قائمة طلباتك  ">
                            <p style="top: 25%;right: 7px;" class="position-absolute">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                                        fill="#979797" />
                                    <path
                                        d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                                        fill="#979797" />
                                </svg>

                            </p>
                        </label>
                    </div>
                    <div class=" col-12 col-md-3 mt-3 position-relative">
                        <select class="form-select mb-3  py-3 m-c" aria-label=".form-select-lg example">
                            <option selected> قرب موعد التسليم </option>
                            <option value="1">الاعلى سعرا</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <p style="top: -13px;right: 24px;background: white;" class="position-absolute">
                            ترتيب حسب
                        </p>
                    </div>

                </div>
                <ul class="nav nav-pills  mb-3">
                    <li v-for="(btn,i) in actions" :key="i" class="nav-item col-12 col-md-3">
                        <button class="nav-link  border w-75 t-c m-auto mt-1" :class="{active:status==btn.status}"
                             type="button" 
                             @click="changeFilter(btn.status)"
                            >{{ btn.label }}</button>
                    </li>
                </ul>
                <div style="background-color: rgba(255, 136, 0, 0.1);;">
                    <p class="p-3">
                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.3124 21.3125C14.3124 21.7601 14.4902 22.1893 14.8067 22.5057C15.1231 22.8222 15.5524 23 15.9999 23C16.4475 23 16.8767 22.8222 17.1932 22.5057C17.5096 22.1893 17.6874 21.7601 17.6874 21.3125C17.6874 20.8649 17.5096 20.4357 17.1932 20.1193C16.8767 19.8028 16.4475 19.625 15.9999 19.625C15.5524 19.625 15.1231 19.8028 14.8067 20.1193C14.4902 20.4357 14.3124 20.8649 14.3124 21.3125ZM14.8749 10.625V17.0938C14.8749 17.2484 15.0015 17.375 15.1562 17.375H16.8437C16.9984 17.375 17.1249 17.2484 17.1249 17.0938V10.625C17.1249 10.4703 16.9984 10.3438 16.8437 10.3438H15.1562C15.0015 10.3438 14.8749 10.4703 14.8749 10.625ZM31.5987 26.0938L16.9737 0.78125C16.7558 0.405078 16.3796 0.21875 15.9999 0.21875C15.6202 0.21875 15.2405 0.405078 15.0261 0.78125L0.401086 26.0938C-0.0313357 26.8461 0.51007 27.7812 1.37491 27.7812H30.6249C31.4898 27.7812 32.0312 26.8461 31.5987 26.0938ZM4.05382 25.1129L15.9999 4.43398L27.946 25.1129H4.05382Z"
                                fill="#F2631C" />
                        </svg>
                        <span style="color:#F2631C ;">
                            تذكر أنك لا تستطيع قبول أكثر من 10 عروض في نفس الوقت
                        </span>
                        <span style="color:#F2631C ;">
                            / تلغى الخدمات قيد الانتظار بعد مرور اسبوع
                        </span>
                    </p>

                </div>
                
                    <div class="" 
                        >
                        
                        <div v-for="(item,k) in items" :key="'b-'+k">
                            <d-request-purchase-card
                            :status="item.status"
                            :service="item.service"
                            :name="item.name"
                            :dateRequest="item.dateRequest"
                            :place="item.place"
                            :during="item.during"
                            :requests="item.requests"
                            :description="item.description"
                            :homeDelivery="item.homeDelivery"
                            :delivery="item.delivery"
                            >

                          
                            
                            
                        </d-request-purchase-card>
                        <hr/>
                    </div>


                        <div class=" mt-5">

                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link"><svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M1.90013 14.3899C1.58346 14.3899 1.2668 14.2733 1.0168 14.0233C0.533464 13.5399 0.533464 12.7399 1.0168 12.2566L6.0168 7.25661L1.0168 2.25661C0.533464 1.77327 0.533464 0.973275 1.0168 0.489941C1.50013 0.00660808 2.30013 0.00660808 2.78346 0.489941L8.6668 6.37328C9.15013 6.85661 9.15013 7.65661 8.6668 8.13994L2.78346 14.0233C2.53346 14.2733 2.2168 14.3899 1.90013 14.3899Z"
                                                    fill="#CDD7D8" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link border-0" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link border-0" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link border-0" href="#">1</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><svg width="10" height="15" viewBox="0 0 10 15"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.09987 14.3899C7.7832 14.3899 7.46653 14.2733 7.21653 14.0233L1.3332 8.13994C0.84987 7.65661 0.84987 6.85661 1.3332 6.37328L7.21653 0.489941C7.69987 0.00660808 8.49987 0.00660808 8.9832 0.489941C9.46654 0.973275 9.46654 1.77327 8.9832 2.25661L3.9832 7.25661L8.9832 12.2566C9.46654 12.7399 9.46654 13.5399 8.9832 14.0233C8.74987 14.2733 8.4332 14.3899 8.09987 14.3899Z"
                                                    fill="#CDD7D8" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                   
                   
              
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'request-purchase-services',
    data:()=>{
        return {
            status:'all',
            actions:[
                {label:'كل الطلبات',status:"all"},
                {label:'طلبات بأنتظار الموافقة',status:"pending"},
                {label:'طلبات تعمل عليها',status:"processing"},
                {label:'طلبات تم الانتهاء منها',status:"completed"},
            ],
            items:[
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'completed',homeDelivery:true,delivery:true},
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'processing',homeDelivery:true,delivery:true},
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'pending',homeDelivery:true,delivery:true},
                {service:'تصميم ازياء',name:'محمد علي',place:'الدمام',price:'2500',during:'7 أيام',dateRequest:'25-10-2022',status:'completed',homeDelivery:true,delivery:true},
            ]
        }
        
    },
    methods:{
        changeFilter(status){
            this.status=status
        }
    }
}
</script>

<style>

</style>