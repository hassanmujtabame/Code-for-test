<template>
  <div class="incubator-business-content">
    <d-stepper-head v-if="false" >
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
  </div>
</template>

<script>
export default {
name:'d-content'
}
</script>

<style>
.incubator-business-content{
  width: 100%;
  overflow: auto;
  height: calc(100vh - 150px);
  background: #c0c0c0;
  min-height: 400px;

}
</style>