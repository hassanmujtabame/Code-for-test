<template>
    <div class="schedule-card">
                                        <div class="schedule-card__header">
                                            <img :src="image" class="rounded-3" :alt="title" width="152">
                                        </div>
                                        <div  class="schedule-card__body p-2">
                                 
                                            <p class="schedule-card__title text-two-lines">{{title}}</p>
                                            <p style="margin-bottom:5px" >
                                                <d-calendar-icon :size="24" color="#737373"/>
                                               
                                                   <span>
                                                  {{ date }}
                                                   </span> 
                                            </p>
                                            <p style="margin-bottom:5px">
                                                <d-timer-icon :size="24" color="#737373"/>
                                               
                                                   <span>
                                                  {{ timeFormatAMPM(time) }}
                                                   </span> 
                                            </p>
                                        </div>
                                    </div>
                                  
</template>

<script>
export default {
  name:'schedule-riadiat-card',
  props:{
    title:{
            type:String,
            default:'N/A'
        },
        image:{
            type:String,
            default:'/assets/img/nwtt1786.png'
        },
        time:{
            type:String,
            default:'00:00'
        },
    date:{},
  }
}
</script>

<style scoped>
 .schedule-card{
 border:1px solid #f1f1f1;
 }
.router-link .schedule-card:hover{
    box-shadow: 0px 3px 3px #dfdfdf;
    margin-top:-5px ;
}
.schedule-card__header,.schedule-card__header>img{
    height: 166px;
    min-height: 166px;
    width: 100%;
}
.schedule-card__title{
    height:48px;
    margin:0;
    }
</style>