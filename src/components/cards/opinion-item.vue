<template>
    <div class="item">
        <div class="row align-items-stretch"> 
            <div class="col-8 position-relative" style="margin-top: 60px;">
                <div class="d-flex flex-column">
                 <h6 class="opinion-name">{{ title }}</h6>
                <p class="opinion-text" v-html="desc"></p>
                <h6 class="opinion-name">{{ name }}
                </h6>
            </div>
                <div class="position-absolute dote">
                    <img :src="`${publicPath}assets/svg/double-quoted.svg`" alt="">
                </div>
            </div>
            <div class="col-4">
                <img class="opinion-img rounded-3" :src="image" :alt="name" width="368" height="368">
            </div>
        </div>
    </div>
</template>

<script>
export default {
 props:{
    name:{
        type:String
    },
      title:{
        type:String
    },
    desc:{
        type:String
    },
    image:{
        type:String
    }
 }
}
</script>

<style scoped>
 .dote >img{
    width:40px;
    height:30px;
}

.dote {
    top: -24px !important;
    left:0 !important;
}
.opinion-text{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* or 133% */
text-transform: capitalize;
color: #737373;
flex: 1 0;
}
.opinion-img {
    width: 368px;
    height:368px;
}
.opinion-name{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    text-transform: capitalize;
    color: #FFBC00;
    flex: 0 0;
}
.mobile-layout .dote >img{
    height:15px;
}

.mobile-layout .dote {
    top: -10px !important;
}
.mobile-layout .opinion-img {
    width: 100px;
    height: 100px;
}
.mobile-layout .opinion-name
,.mobile-layout .opinion-text{
    font-size: 16px;
    line-height: 1.3;
}
</style>