<template>
  <div class="d-stepper-head" :class="{vertical:vertical}">
  <div class="d-stepper-head__wrapper">
    <slot></slot>
  </div>

  </div>
</template>

<script>
export default {
name:'d-stepper-head',
props:{
  vertical:{
    type:Boolean,
    default:false
  }
}
}
</script>

<style>
.d-stepper-head{
  padding:3px
}
.d-stepper-head__wrapper{
  display:flex;
  flex-direction: row;
  /*align-items: center;*/
    gap: 5px;
}
.vertical .d-stepper-head__wrapper{
  flex-direction: column;
}
 .d-stepper-head-item__wrapper{
  display:flex;
  flex-direction: column;
  padding: 5px;
}
.vertical .d-stepper-head-item__wrapper{
  display:flex;
  flex-direction: row;
  gap:3px;
}
.d-stepper-head-item{
  z-index: 1;
  position: relative;

}
.d-stepper-head-item .icon-status{
  z-index: 1;
    border-radius: 50%;
    position: relative;
    background: white;
    width: max-content;
}
.d-stepper-head__wrapper .d-stepper-head-item:not(:last-child):after{
  z-index: -1;
    content: "";
    /*background: var(--color-primary);*/
    min-width: 20px;
    height: 0px;
    border:1px dashed var(--color-primary);
    display: block;
    position: relative;
    margin: -27px 5px 0 -12px;
  
    /* left: 81px;*/
}
.vertical .d-stepper-head__wrapper .d-stepper-head-item:not(:last-child):after{
  min-height: 20px;
  height: auto;
    width: 0px;
    min-width: 0px;
    border:1px dashed var(--color-primary);
    display: block;
    position: relative;
    margin: -10px 11px;
}
.d-stepper-head-item__title{
  line-height: 1;
    font-size: .9rem;
}
</style>