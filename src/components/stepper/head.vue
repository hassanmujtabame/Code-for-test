<template>
  <div class="d-stepper-head" :class="{vertical:vertical}">
  <div class="d-stepper-head__wrapper">
    <slot :vertical="vertical"></slot>
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
  },
  space:{
    type:Number,
    default:20
  }
}
}
</script>

<style>
.d-stepper-head{
  padding:3px;
}
.vertical.d-stepper-head{
height: 100%;
}
.d-stepper-head__wrapper{
  display:flex;
  flex-direction: row;
  /*align-items: center;*/
    gap: 5px;
    justify-content: space-evenly;
}
.vertical .d-stepper-head__wrapper{
  flex-direction: column;
  height: 100%;
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
.d-stepper-head-item__content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:5px;
  margin-right: -100%;
}
.vertical .d-stepper-head-item__content{
  flex-direction: row;
margin-right: 0;
}

.d-stepper-head-item{
  z-index: 1;
  position: relative;
  flex:1;
  display: flex;
}
.vertical .d-stepper-head-item{
  display: block;
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
    width: 100%;
    position: absolute;
    /* margin: -30px 5px 0 -12px; */
    left: 0;
    top: 12px;
}

.vertical .d-stepper-head__wrapper .d-stepper-head-item:not(:last-child):after{
  min-height: 20px;
  height: 100%;
    width: 0px;
    min-width: 0px;
    border:1px dashed var(--color-primary);
    display: block;
    position: relative;
    /* margin: -10px 11px; */
    margin: 0px -3px;
    left: auto;
    top:0;
}
.d-stepper-head__wrapper .d-stepper-head-item:last-child{
  flex:0
}
.d-stepper-head-item__title{
  line-height: 1;
    font-size: .9rem;
}
</style>