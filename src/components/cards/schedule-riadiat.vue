<template>
    <div class="schedule-card">
                                        <div class="schedule-card__header">
                                            <img :src="image" class="rounded-3" :alt="title" width="166">
                                        </div>
                                        <div  class="schedule-card__body p-2">
                                 
                                            <p class="schedule-card__title text-two-lines">{{title}}</p>
                                            <p>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9995 22.7497C6.06951 22.7497 1.24951 17.9297 1.24951 11.9997C1.24951 6.06972 6.06951 1.24972 11.9995 1.24972C17.9295 1.24972 22.7495 6.06972 22.7495 11.9997C22.7495 17.9297 17.9295 22.7497 11.9995 22.7497ZM11.9995 2.74972C6.89951 2.74972 2.74951 6.89972 2.74951 11.9997C2.74951 17.0997 6.89951 21.2497 11.9995 21.2497C17.0995 21.2497 21.2495 17.0997 21.2495 11.9997C21.2495 6.89972 17.0995 2.74972 11.9995 2.74972Z" fill="#737373"/>
                                                    <path d="M9.14769 17.3335C9.25338 17.3335 9.35907 17.3082 9.45663 17.2407L11.977 15.6806C12.603 15.2926 13.0664 14.4409 13.0664 13.6903V10.2327C13.0664 9.88689 12.79 9.60016 12.4566 9.60016C12.1233 9.60016 11.8469 9.88689 11.8469 10.2327V13.6903C11.8469 13.9939 11.603 14.4409 11.351 14.5927L8.83062 16.1528C8.53793 16.3299 8.4485 16.7179 8.61923 17.0215C8.74118 17.2239 8.94444 17.3335 9.14769 17.3335Z" fill="#737373"/>
                                                    </svg>
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
    title:{},
    image:{},
    date:{},
    time:{},
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
    height:48px
}
</style>