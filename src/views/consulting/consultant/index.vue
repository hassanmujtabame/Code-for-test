<template>
    <div style="margin-top: 80px;background-color: #F6F8F9;">
        <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container ">
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
        </div>
        <AddBookingConsultant />
    </div>
</template>

<script>
import SectionCourses from './parts/section-courses'
import SectionProjects from './parts/section-projects'
import SectionRates from './parts/section-rates'
import AddBookingConsultant from './dialogs/add-booking/index.vue'
import consultingAPI from '@/services/api/consulting'
export default {
    name: 'consultant-page',
    components:{
        SectionCourses,
        SectionProjects,
        SectionRates,
        AddBookingConsultant
    },
    data:()=>({
        itemPage:{},
        hasError:false,
        loading:true,
    }),
    methods:{
        openAddBooking(){
            this.fireOpenDialog('add-booking-consultant',this.itemPage)
        },
        async initializing(){
        this.loading = true;
        this.hasError = false;
        try {
          let {data}= await consultingAPI.consultants.getItem(this.$route.params.id)
          if(data.success){
            this.itemPage = data.data
          }else{
            window.SwalError(data.message)
            this.hasError = true;
          }
        } catch (error) {
           // 
           this.hasError = true;
        }
        this.loading = false;
    }
    },
    mounted(){
        this.initializing()
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