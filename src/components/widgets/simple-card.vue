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
                            <button class="btn border rounded-2 bg-transparent">
                                عرض الكل 
                            </button>
          
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
    }
 }
}
</script>

<style>

</style>