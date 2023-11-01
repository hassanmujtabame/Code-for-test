<template>
  <div class="box-program">
    <img :src="`${publicPath}assets/svg/half-border-top.svg`" v-if="position=='top'" class="box-program_top" />
    <svg width="20" height="22" viewBox="0 0 20 22" v-if="!isFirst" fill="none" class="box-program_arrow" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2422 21.7903L0.394376 10.9049L19.2422 0.0195312V21.7903Z" fill="#1FB9B3"/>
</svg>

    <img :src="`${publicPath}assets/svg/half-border-top.svg`" v-if="position=='bottom'" class="box-program_bottom" />
  <div class="box-program__wrapper">
  <div class="box-program__icon">
    <img :src="image" />
    </div>
    <div class="box-program__title">
        {{ title }}
    </div>
    <div class="box-program__description t-c">
        {{ description }}
    </div>
  </div>
  </div>
</template>

<script>
export default {
 name:'card-show',
 props:{
    title:{
        type:String
    },
    isFirst:{
        type:Boolean,
        default:false
    },
 
    description:{
        type:String
    },
    image:{
        type:String
    },
    position:{
        type:String,
        default:'top',//top || bottom
    }
 }
}
</script>

<style scoped>
.box-program{
    position: relative;
    width: 265.64px;
    height:249.64px;
    padding:21px 17px;
    border:3px dashed var(--m-color);
    border-radius: 20px;
    background: white;
}
.box-program_top-array{
    position: absolute;
    top:0;
    left:0;
}
.box-program_arrow{

  position: absolute;
    top: calc(50% - 7px);
    z-index: 5;
    right: -22px;
}
.box-program_top{
    position: absolute;
    top: -5px;
    left: -3px;
    width: 265.64px;
}
.box-program_bottom{
    position: absolute;
    bottom: -5px;
    left: -3px;
    width: 265.64px;
    transform: rotate(180deg);
}
.box-program__wrapper{
    border:1px solid var(--m-color);
    height: 100%;
    border-radius: 4px;
    text-align: center;
    padding: 15px 23px;
}
.box-program__icon{
    width:100%;
    height:48px;
    margin-bottom: 11px;
}
.box-program__icon>img{
    width: 48px;
    height: 100%;
}
.box-program__title{
    font-size: 20px;
    line-height: 30px;
}
.box-program__description{
    font-size: 14px;
    line-height: 20px;
}
</style>