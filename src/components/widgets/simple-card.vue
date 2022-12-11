<template>
 <div>

                        <div class="box d-flex align-items-center justify-content-between ">
                            <h5 :style="{color:color}">
                                {{title}}
                            </h5>
                            <p :style="{color:color}">
                                {{value}}
                            </p>
                        </div>
                        <div class="box d-flex align-items-center justify-content-between ">
                            <router-link :to="url" class="btn border rounded-2 bg-transparent">
                                عرض الكل 
                            </router-link>
          
                        </div>
                   </div>

    
</template>

<script>
export default {
 props:{
    title:{
        type:String,
        require:true
    },
    value:{
        default:''
    },
    color:{
        default:'#F2631C'
    },
    url:{
        type:String,
        
    }
 }
}
</script>

<style>

</style>