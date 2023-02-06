<template>
    <div class="d-flex gap-2 flex-wrap">
 
 <div>
 
     <iframe 
     style="width: 200px;height: 100px;" 
     class="rounded-3 "
     src="https://www.youtube.com/embed/dGG9pWXS3ZQ" 
     title="مقطع تعريفي عن شركة رياديات" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen></iframe> 
 </div>
 <div>
     <h6 class="m-0 p-0 t-x">
         {{title}}
     </h6>
     <p class="m-0 p-0 t-c">
         {{name}}
     </p>
     <p class="m-0 p-0">
         <span class="fw-bolder text-dark">
             {{price??'N/A'}}
         </span>
         ريال
     </p>
 </div>
 
 </div>
 </template>
 
 <script>
 export default {
  name:'card-vue',
   props:{
     title:{
         type:String
     },
     name:{
         type:String
     },
     date:{
         type:String
     },
   
     image:{
         type:String
     },
     price:{
         type:[String,Number]
     },
     itemId:{
         type:[String,Number]
     },
  }
 }
 </script>
 
 <style>
 
 </style>