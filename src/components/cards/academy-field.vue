<template>

    <div style="width: 160px; height: 160px; display: flex; flex-direction: column;" class="box bg-white rounded-circle p-1">
     <div style="display: flex; align-items: center;   justify-content: center; width: 90px; height: 90px; margin:auto">
    
       <img :src="img" class="w-100 h-100 rounded-circle" />
<!-- <img :src="`${publicPath}assets/svg/shopping.svg`" /> -->

     </div>
     <div class="s-c d-flex mx-auto text-center justify-content-center" style="font-weight: 100;  width: 100px;">{{title}}</div> 
       
    </div> 
    </template>
    
    <script>
    export default {
    name:'d-academy-field',
    props:{
        img:{
            type:String,
        },
        title:{
            type:String
        }
    }
    }
    </script>
    
    <style>
    
    </style>