<template>
    <div class="box  ">

<div class="main-img position-relative">
    <img style="filter: brightness(0.7);" class=" rounded-2" :src="img" :alt="title" width="368" height="192">

    <div class="position-absolute top-50 px-2 text-start">
        <h6 style="width: fit-content;"  class="bg-yal p-1 px-2 rounded-2 text-white ">
            {{owner}}
        </h6>
        <p class="text-white m-0 p-0">{{title}}
        </p>
        <p  class="text-white p-0 m-0">
           {{date}}
        </p>
    </div>

</div>
</div>
</template>
<script>
export default {
    name:'meeting-card',
 props:{
    img:{
        type:String,
    },
    title:{
        type:String,
    },
    owner:{
        type:String,
    },
    date:{
        type:String,
    }
 }
}
</script>

<style>

</style>