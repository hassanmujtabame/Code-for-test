<template>
 <div class="podcast-item__progress-bar">
                            <div class="podcast-item__progress-bar_wrapper" :style="styleBar">
                                <div class="podcast-item__progress-bar_percent" :style="{width:`${progress}%`,...styleBar}">
                        
                                </div>
                                <div class="podcast-item__progress-bar_circle" :style="styleCircle">
                        
                                </div>
                            </div>
</div> 
</template>

<script>
export default {
 props:{
    progress:{
        type:[Number,String],
        default:0
    },
    sizeCircle:{
        type:[Number,String],
        default:12
    },
    heightBar:{
        type:[Number,String],
        default:2
    }
 },

 watch:{
    progress:{
        immediate:true,
        handler(){}
    },
    sizeCircle:{
        immediate:true,
        handler(){}
    },
    heightBar:{
        immediate:true,
        handler(){}
    }
 },
 computed:{
    styleBar(){
            return {
                'border-width':`${this.heightBar}px`
            }
    },
    styleCircle(){
        let sizeCircle = this.sizeCircle;
        return {
            width:`${sizeCircle}px`,
            height: `${sizeCircle}px`,
            top: `calc(50% - ${sizeCircle/2}px)`,
            left:this.$i18n.locale=='ar'?'auto':`calc(${this.progress}% - ${sizeCircle/2}px)`,
            right:this.$i18n.locale!=='ar'?'auto':`calc(${this.progress}% - ${sizeCircle/2}px)`
        }
    }
 }
}
</script>

<style>
.podcast-item__progress-bar{
    width: 100%;
    position: relative;
}
.podcast-item__progress-bar_wrapper{
    border: 2px solid #FFFFFF;
    height: 0;
    width: 100%;
    border-radius: 2px;
}
.podcast-item__progress-bar_percent{
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
.podcast-item__progress-bar_circle{
    background: var(--m-color);
    border-radius: 50%;
  
    position: absolute;
   
}
/**ltr style */
html[dir=ltr] .podcast-item__progress-bar_percent{
  
    right: auto;
    left: 0;
}
html[dir=ltr] .podcast-item__progress-bar_circle{
 
    right: auto;
    left: calc(50% + -9px);
}
</style>