<template>
<vc-calendar  :attributes="attributes" :locale="$i18n.locale" style="direction:ltr" v-bind="$attrs"/>
</template>

<script>
export default {
 name:'d-calendar',
 data:()=>({
  attributes: [
      {
        key: 'today',
        highlight: true,
        dates: {
    start: new Date(), 
    //end:null  
  }
      }
    ],
  id:'d-calendar-'+Math.random().toString().substring(2,16)
 })
}
</script>

<style>

</style>