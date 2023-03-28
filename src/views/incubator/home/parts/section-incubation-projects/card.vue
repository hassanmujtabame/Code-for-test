<template>
   <div class="box ">
                            <div class="">
                                <img  :src="img" :alt="title" width="259" height="192">
                            </div>
                            <div class="text bg-white ">
                                <h6 class="border p-3 rounded-bottom s-c">{{title}}</h6>
    
                            </div>
    
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