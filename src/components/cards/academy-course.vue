<template>
    <div class="student-course box border">
                                    <div class="student-course__image">
                                        <router-link custom v-slot="{ navigate }" :to="url??{}">
                                     
                                        <img @click="goToCourse(navigate,$event)" class="w-100 rounded-top" :class="{clickable:url}" :src="item.image_path" :alt="item.title"
                                            height="100%">
                                        </router-link>
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
                                            <div v-if="item.progress_ratio">
                                        <d-progress-bar :height="6" :progress="item.progress_ratio"/>
                                        <span class="student-course__item-percent-label">{{ item.progress_ratio }}% مكتمل </span>
                                        </div>
                                        <div v-else class="d-flex">
                                            <button class="btn btn-custmer flex-shrink-0 px-2">حمّل شهادة تخرجك</button>
                                            <button class="btn btn-custmer-w mx-2  flex-shrink-0" @click="rateCourseDialog"> قيّم الدورة </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
</template>

<script>
import academyAPI from '@/services/api/academy';
export default {
    name: 'academy-course-card',
    props:{
        item:{},
        showInfo:{
            type:Boolean,
            default:true
        },
        url:{
           
        },
        showProgress:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        async rateCourse(dataR,form){
            let valid = await form.validate();
            if(!valid) return;
            try{
                let { data } = await academyAPI.coursesApi.rateItem(this.item.id,dataR)
                if(data.success){
                   /* let dataEvt ={
                        title:'',
                        description:``
                    }
                    this.showSuccessMsg(dataEvt);
                    */
                    return true;
                }else{
                    window.SwalError(data.message)
                    return false;
                }
            }catch(error){
                window.catchException.call(this,error,form)
                return false;
            }
        },
        rateCourseDialog(){
            this.fireOpenDialog('standard-rate-dialog',{
                title:this.$t('rate-training-course'),
                btns:[
                    {title:this.$t('send-rate'),action:this.rateCourse}
                ]
            
            })
        },
        goToCourse(navigate,evt){
            //if(evt) evt.preventDefault();
            if(this.url)
            navigate(evt)
            else{
                console.mylog('not url')
            }
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