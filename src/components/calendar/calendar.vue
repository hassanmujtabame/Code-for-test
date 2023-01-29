<template>
<vc-calendar   
class="my-schedule" 
:attributes="$attrs.attributes??attributes"
 :locale="$i18n.locale" style="direction:ltr" 
 v-bind="$attrs" 
v-on="$listeners"
>
<template #day-content="props">
  <slot name="day-content" v-bind="props"></slot>
  </template>
<template #day-popover="props">
  <slot name="day-popover" v-bind="props"></slot>
  </template>
</vc-calendar>
</template>

<script>
export default {
 name:'d-calendar',
 data:()=>{
  return {
  attributes: [
      {
        key: 'today',
        highlight: true,
        dates: new Date()
      }
    ],
  id:'d-calendar-'+Math.random().toString().substring(2,16)
 }
}
}
</script>

<style >
.my-schedule .vc-weeks{
margin-top: 20px;
}
.my-schedule .vc-header {
  padding: 20px 20px !important;
    border-bottom: 1px solid #8080806b;
}
.my-schedule .vc-day-content{
  color:var(--m-color);
  font-weight: 600 !important;
}
.my-schedule .vc-arrows-container {


    padding: 20px 44px;
    align-items: center;
}
</style>