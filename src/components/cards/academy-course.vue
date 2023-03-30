<template>
    <div class="student-course box border">
                                    <div class="student-course__image">
                                        <img class="w-100 rounded-top" :src="item.image_path" :alt="item.title"
                                            height="100%">
                                    </div>
                                    <div class="p-3 ">
                                        <div class="d-flex justify-content-between ">
                                            <h6 class="student-course__title">
                                                {{item.title}}
                                            </h6>
                                            <p class="student-course__department">
                                                {{item.department_name}}
                                            </p>
                                        </div>
                                        <p class="student-course__description text-two-lines">{{ item.desc }}</p>
                                        <div v-if="showInfo" class="row">

                                                <p class="student-course__item-info col-6">
                                                    <d-empty-wallet-icon :size="24" color="currentColor"/>
                                                        {{item.price??'N/A'}} {{ $t('riyals') }}
                                                </p>

                                                <p class="student-course__item-info col-6">
                                                    <d-localisation-icon :size="24"  color="currentColor"/>
                                                        {{$t(item.type)}}
                                                </p>
                                                
                                                <p class="student-course__item-info  col-12 mt-1">
                                                    <d-school-wallet-icon :size="24"  color="currentColor"/>
                                                    {{item.user_info?item.user_info.name:'N/A'}}
                                                </p>

                                        </div>
                                        <div v-if="showProgress">
                                        <d-progress-bar :height="6" :progress="item.progress_ratio"/>
                                        <span class="student-course__item-percent-label">{{ item.progress_ratio }}% مكتمل </span>
                                        </div>
                                    </div>
                                </div>
</template>

<script>
export default {
    name: 'academy-course-card',
    props:{
        item:{},
        showInfo:{
            type:Boolean,
            default:true
        },
        showProgress:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
.student-course{
    border-radius: var(--bs-border-radius)!important;
}
.student-course__image{
    height:173px;
    min-height: 173px;
    border:1px solid #efefef;
    border-top-left-radius: var(--bs-border-radius)!important;
    border-top-right-radius: var(--bs-border-radius)!important;
}
.student-course__title{
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
text-transform: capitalize;
color: #414042;
}
.student-course__department{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */


color: #1FB9B3;
}
.student-course__description{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* or 142% */
color: #737373;
margin: 0;
height:34px;
text-align: start;
}
.student-course__item-info{

    min-width: 50px;
    margin: 0;
    font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
/* identical to box height, or 106% */

display: flex;
align-items: center;

color: #979797;
}
.student-course__item-percent-label{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
text-transform: capitalize;

/* Medium gray */

color: #737373;
}
</style>