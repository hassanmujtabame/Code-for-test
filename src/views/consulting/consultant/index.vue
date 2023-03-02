<template>
    <div style="margin-top: 80px;background-color: #F6F8F9;">
        <div class="container ">
            <div class="row  py-4">

                <div class="col-md-7 bg-white p-3 rounded-4 border mt-5">
                    <div class="box ">
                        <div class="d-flex align-items-center gap-3">
                            <div>
                                <img class="rounded-3" src="/assets/img/man.png" alt="" width="200" height="200">
                            </div>
                            <div>
                                <h2 class="consultant-name">
                                    أحمد محمد خالد
                                </h2>
                                <p class="consultant-text">
                                    دكتوراة في ريادة الاعمال
                                </p>
                                <button style="background-color:#FFBC00 ; " class="text-white border-0 p-1">
                                    ريادة الاعمال
                                </button>
                            </div>
                        </div>
                        <div class="pt-3 mt-5">
                            <h4 class="consultant-title">
                                نبذه عن المستشار
                            </h4>
                            <p class="consultant-text">
                                حاصل على درجة الدكتوراة في ادارة الاعمال كما حصت على شهادة الجامعة الامريكية في هذا
                                المجال
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

                                    150 ريال
                                </p>
                                <p>
                                    <d-timer-icon :size="24" />
                                    60 دقيقة
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
    name: 'consultant-page',
    components:{
        SectionCourses,
        SectionProjects,
        SectionRates,
        AddBookingConsultant
    },
    data:()=>({
        itemPage:{}
    }),
    methods:{
        openAddBooking(){
            this.fireOpenDialog('add-booking-consultant',this.itemPage)
        }
    }
}
</script>

<style scoped>
.consultant-name{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */
    text-transform: capitalize;
    color: #1FB9B3;
}
.consultant-text{
    font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* or 120% */
text-transform: capitalize;

color: #979797;

}
.consultant-title{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-transform: capitalize;

color: #414042;
}
</style>