<template>
<div class="container mb-5">
            <div class="row mt-5 align-items-strech">
           
                <div class="col-md-6 d-flex flex-column">
                    <h2>
                        حاضنة {{itemPage.name}}                    </h2>
                    <p v-html="itemPage.description" style="color: #979797;line-height: 40px;font-size: 24px;" class="flex-grow-1">
                    </p>
                    <div>
              
                     
                        <button class="btn-main my-3">   انضمي الان   </button>
                    </div>

                </div>
                <div class="col-md-6">
                    <div style="width:100%;height:350px" class="rounded-3">
                    <img class="img-fill" :src="itemPage.image_path" alt="">
                </div>
                </div>


            </div>

        </div>
</template>

<script>
export default {
  name:'section-desc',
  props:{
    itemPage:{}
  }
}
</script>

<style>

</style>