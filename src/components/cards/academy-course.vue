<template>
    <div class="student-course box border" style="height: 361px; width:100%">
                                    <div class="student-course__image">
                                        <router-link custom v-slot="{ navigate }" :to="url??{}">
                                     
                                         <img @click="goToCourse(navigate,$event)" class="w-100 rounded-top" :class="{clickable:url}" :src="item.image_path" :alt="item.title"
                                            height="100%">
                                        </router-link>
                                           </div>
                                    <div class="py-3 ">
                                           <div class="d-flex justify-content-between align-items-cent px-3" style="align-items: baseline;">
                                            <h6 class="student-course__title">
                                                {{item.title}}
                                            </h6>
                                            <div  class="d-flex">
                                            <p class="student-course__department t-c">
                                                {{item.views}} مشاهدة
                                            </p>
                                      <img class="mx-2" style="width: 20px; height: 20px;" :src="`${publicPath}assets/img/WhatsApp Image 2023-09-20 at 2.50.30 PM.jpeg`"  /> 
                                            </div>

                                        </div>
                                              <h6 class="text-end px-3">
                                                {{item.title}}
                                            </h6>
                                     
                                               <p class="student-course__item-info col-6 px-3" style="color: #FF6C6A">
                                                        {{item.price??'N/A'}} {{ $t('riyals') }}
                                                </p>
                                        <!-- <p class="student-course__description text-two-lines">{{ item.desc }}</p> -->
                                    <div v-if="item.user_info" class="border-top mt-2 py-2 w-100">
                                     <div class="px-3" v-if="item.user_info.name">{{item.user_info.name}} </div>
                                     <div class="px-3 user_info_description" v-if="item.user_info.description">{{item.user_info.description}} </div>
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
    computed:{
        courseType(){
            
            if (this.item.type==='on-site') 
                return this.item.place_name
                return this.$t(this.item.type);
                    
        
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
                window.DHelper.catchException.call(this,error,form)
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
.student-course__image img{
    object-fit: fill;
    width: 100%;
 height: 100%;
}
.student-course__title{
font-style: normal;
font-weight: 400;
font-size: 17px;
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


/* color: #1FB9B3; */
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
font-size: 13px;
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
.user_info_description{
       overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
}
</style>