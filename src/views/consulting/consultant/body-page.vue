<template>
     <div  class="container ">
            <div class="row  py-4">

                <div class="col-md-7 bg-white p-3 rounded-4 border mt-5">
                    <div class="box ">
                        <div class="d-flex align-items-center gap-3">
                            <div>
                                <img class="rounded-3" :src="itemPage.image" :alt="itemPage.name" width="200" height="200">
                            </div>
                            <div>
                                <h2 class="consultant-name">
                                    {{itemPage.name}}
                                </h2>
                                <p class="consultant-text">
                                    {{itemPage.job_title}}
                                </p>
                                <button style="background-color:#FFBC00 ; " class="text-white border-0 p-1">
                                    {{itemPage.department_name}}
                                </button>
                            </div>
                        </div>
                        <div class="pt-3 mt-5">
                            <h4 class="consultant-title">
                                نبذه عن المستشار
                            </h4>
                            <p class="consultant-text">
                                {{itemPage.bio}}
                            </p>
                            <!--courses-->
                            <SectionCourses :itemPage="itemPage"/>
                            <SectionProjects :itemPage="itemPage" />
                        </div>

                    </div>
                </div>
                <div class="col-md-5">
                    <div class="box bg-white mt-5  rounded-4 border">
                        <div class="div p-4">
                            <h4 class="consultant-title" >
                                تفاصيل جلسة الاستشارة
                            </h4>
                            <div class="d-flex justify-content-between">
                                <p>
                                    <d-empty-wallet-icon :size="24" />

                                    {{itemPage.consultation_price??'N/A'}} ريال
                                </p>
                                <p>
                                    <d-timer-icon :size="24" />
                                    {{itemPage.during??'N/A'}} دقيقة
                                </p>
                                <p>
                                    <d-chatting-icon :size="24" />
                                    مكالمة
                                </p>
                            </div>
                            <div class="text-center">

                                <button @click="openAddBooking" class="btn-main p" >
                                    احجز جلستك الان
                                </button>
                            </div>

                        </div>
                    </div>
                    <!--rates-->
                    <SectionRates :itemPage="itemPage"/>
                </div>
            </div>
        <AddBookingConsultant />

        </div>
   
</template>
<script>
import SectionCourses from './parts/section-courses'
import SectionProjects from './parts/section-projects'
import SectionRates from './parts/section-rates'
import AddBookingConsultant from './dialogs/add-booking/index.vue'
export default {
    components:{
        SectionCourses,
        SectionProjects,
        SectionRates,
        AddBookingConsultant
    },
    props:{
        itemPage:{},
        opts:{
            type:[Array,Object],
            default:null,
        }
    },
    data:()=>({
        
    }),
    methods:{
        openAddBooking(){
            this.fireOpenDialog('add-booking-consultant',{item:this.itemPage,opts:this.opts})
        },
    }
}
</script>