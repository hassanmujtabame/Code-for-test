<template>
  <div class="incubator-business-sidebar">
    <div class="incubator-business-sidebar__wrapper">
    <div class="incubator-business-sidebar__header">
      <h1>مسار حاضنة الأزياء</h1>
      <div class="d-flex align-items-center">
        <div class="flex-grow-1">
        <d-progress-bar :height="3" bgColor="#F6F8F9" percentColor="var(--color-primary)" :progress="50"/>
      </div>
        <span class="flex-shrink-0 percent-label">50%</span>
      </div>
      <div class="d-flex justify-content-between mt-3">
        <span class="percent-label">بداية الحاضنة:{{ start_date }}</span>
        <span class="percent-label">المدة:{{ period }} {{ $t('day_s') }}</span>
      </div>

    </div>
    <div class="incubator-business-sidebar__body">
      <d-expanded-panel  id="step-1">
  <template v-slot>
        <d-expanded-panel-item v-for="n in 3" :key="n" classTitle="step-title">
          <template v-slot:btnTitle >
           
          <i class="fa-solid fa-circle-check m-c"></i>
          المرحلة {{n}}
        </template>
          <d-stepper-head vertical>
          <d-stepper-head-item status="done">
            دورات تدريبية
          </d-stepper-head-item>
          <d-stepper-head-item status="selected">
         جلسة استشارية
          </d-stepper-head-item>
          <d-stepper-head-item status="disabled">
            نماذج
          </d-stepper-head-item>
          </d-stepper-head>
        </d-expanded-panel-item>
      </template>
      </d-expanded-panel>
    </div>
    </div>    
  </div>
</template>

<script>
export default {
name:'d-sidebar',
data:()=>({
  start_date:'30 أكتوبر 2023',
  period:24
}),
mounted(){
}
}
</script>

<style>
.incubator-business-sidebar{
  width: 100%;
  overflow: auto;
  height: calc(100vh - 150px);
  background: #c0c0c0;
  min-height: 400px;
  background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}
.incubator-business-sidebar__wrapper{
  padding: 5px;
}
h1{
  font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 44px;


/* Secondary/#2D2F3A */

color: #2D2F3A;
margin:0;
}
.incubator-business-sidebar__body{
  margin-top: 15px;
}
.incubator-business-sidebar .percent-label{
  font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
padding: 0 5px;
text-transform: capitalize;

/* Secondary/#2D2F3A */

color: #2D2F3A;
}
.incubator-business-sidebar .step-title{
  font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
/* Secondary/#2D2F3A */
padding: 3px;
color: #2D2F3A;
margin:0;
}
</style>