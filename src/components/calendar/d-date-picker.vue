<template>
    <vc-date-picker v-model="dateSelected"  :attributes="attributes" :locale="$i18n.locale" style="direction:ltr" v-bind="$attrs"/>
    </template>
    
    <script>
    export default {
     name:'d-calendar',
     props:{
        value:{
            default:null,
        }
     },
     data:()=>{
        return{
        dateSelected:null,
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
      id:'d-date-picker-'+Math.random().toString().substring(2,16)
     }}
    ,
    watch:{
        dateSelected:{
            handler(val){
                this.$emit('input',val)
            }
        },
        value:{
            immediate:true,
            handler(val){
                this.dateSelected=val
            }
        }
    }
    }
    </script>
    
    <style>
    
    </style>