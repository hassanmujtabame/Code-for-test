<template>
    <div class="item">
        <div class="row align-items-center p">
            <div class="col-md-8 osition-relative">
                <p class="opinion-text" v-html="desc"></p>
                <h6 class="opinion-name">{{ name }}
                </h6>
                <div class="position-absolute dote">
                    <img src="/assets/img/dot.png" alt="">
                </div>
            </div>
            <div class="col-md-4">
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
.opinion-text{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* or 133% */
text-transform: capitalize;
color: #737373;
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
}
</style>