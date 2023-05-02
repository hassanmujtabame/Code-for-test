<template>
  <div class="consulting ">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">
                            تبحث عن وظيفة مناسبة لك ؟                                                                    </h1>
                        <p class="text-white">
                            مقدمي خدمة رياديات تقدم لك الكثير من الوظائف المميزة التي يمكنك ترشيح نفسك فيها
                        </p>
                        <div>
                        </div>
                        <form action="">
                            <div class="mb-3">
                                <input type="text" class="form-control p-2" id="exampleFormControlInput1" placeholder="أبحث عن الوظيفة">
                            </div>   
                            <div>
                                <button type="submit" class="btn bg-dark text-white tounded-2 p-2 px-3"> ابحث الان</button>
                            </div>                                    
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit;" class=" m-auto text-end">
                            <img class="img-fluid"  :src="`${publicPath}assets/img/Frame-3.png`" alt="" >
                        </div>
                    </div>
                </div>
                <div class="star-cons stars">
                    <img :src="`${publicPath}assets/img/starsss.png`" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
 name:'section-top'
}
</script>

<style>

</style>