<template>
    <div class="item">
        <div class="row align-items-center p">
            <div class="col-md-8 osition-relative">
                <p v-html="desc"></p>
                <h6 style="color: #FFBC00;">{{ name }}
                </h6>
                <div class="position-absolute dote">
                    <img src="/assets/img/dot.png" alt="">
                </div>
            </div>
            <div class="col-md-4">
                <img class="rounded-3  " :src="image" :alt="name" width="368" height="368">
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

<style>

</style>