<template>
 <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">  مقدمو الخدمة </h1>
                        <p class="text-white">
                          إختر مقدم الخدمة المناسب من ضمن أفضل مقدمي الخدمة في السعودية و الخليج العربي. 
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-end">
                            <img class="img-fluid" :src="`${publicPath}assets/svg/frame-52-2.svg`" alt="service-provider-header" />
                        </div>
                    </div>
                </div>
                <template >
                <div class="star-cons-blog">
                    <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
                </div>
                <div class="star-cons-blog stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
                </div>
                <div class="star-blog position-absolute" >
                <img  class="landing"  :src="`${publicPath}assets/svg/start.svg`" alt="">
            </div>
            </template>
        
        <div v-if="false" class="position-absolute" style="width: 100%;height: 100%;top: 0;left: 0" >
            <img class="landing"  :src="`${publicPath}assets/img/background-blogs-header.png`" >
         </div>
        
            </div>
</template>

<script>
export default {
 name:'section-top'
}
</script>

<style scoped>
#btn-signup{
    border: 1px solid #ffffff;
            box-shadow: 0px 4px 15px 1px rgb(0 0 0 / 25%);
            border-radius: 8px;
            background: transparent;
            padding: 10px 25px;
            color: white;
}
</style>
<style>
.star-cons-blog {
    position: absolute;
    right: 7.15%;
    left: 81.19%;
    top: 9.72%;
    bottom: 71.67%;
}
.star-cons-blog.stars {
    right: 30.56%;
    left: 60.06%;
    top: 14.17%;
    bottom: 80.28%;
}
.star-blog {
    right: 27.29%;
    left: 69.44%;
    top: 44.59%;
    bottom: 37.92%;
}
</style>