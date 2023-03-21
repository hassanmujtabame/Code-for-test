<template>
<div style="    width: 160px;
height: 160px;" class="box bg-white rounded-circle p-3">
 <div style="display: flex; align-items: center;   justify-content: center;">

   <img :src="img" />
 </div>
 <p class="s-c">{{title}}</p>
   
</div>
</template>

<script>
export default {
name:'card-vue',
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