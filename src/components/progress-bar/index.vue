<template>
 <div class="d-progress-bar">
                            <div class="d-progress-bar_wrapper" :style="{...styleBar,'border-color':`${bgColor}`}">
                                <div class="d-progress-bar_percent" :style="{width:`${progress}%`,'border-color':`${percentColor}`,...styleBar}">
                        
                                </div>
                            </div>
</div> 
</template>

<script>
export default {
    name:'d-progress-bar',
 props:{
    bgColor:{
        type:String,
        default:"#F6F8F9"
    },
    percentColor:{
        type:String,
        default:"#FFBC00"
    },
    height:{
        type:[Number,String],
        default:2
    },
    progress:{
        type:[Number,String],
        default:0
    }
 },

 watch:{
    progress:{
        immediate:true,
        handler(){}
    },
    height:{
        immediate:true,
        handler(){}
    }
 },
 data:()=>{
    return {
    

    }
 },
 computed:{  
    styleBar(){
            return {
                'border-width':`${this.height}px`,
            }
    }
 },
 methods:{
 },
 mounted(){}
}
</script>

<style>
.d-progress-bar{
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
.d-progress-bar_wrapper{
    border: 2px solid #FFFFFF;
    height: 0;
    width: 100%;
    border-radius: 2px;
}
.d-progress-bar_percent{
    border: 2px solid #1FB9B3;
    height: 0;
    position: absolute;
    z-index: 4;
    width: 50%;
    top: 0;
    right: 0;
    left: auto;
    border-radius: 2px;
}
.d-progress-bar_circle{
    background: var(--m-color);
    border-radius: 50%;
  
    position: absolute;
   
}
/**ltr style */
html[dir=ltr] .d-progress-bar_percent{
  
    right: auto;
    left: 0;
}
html[dir=ltr] .d-progress-bar_circle{
 
    right: auto;
    left: calc(50% + -9px);
}
</style>