<template>
<div class="container mb-5">
            <div class="row mt-5 align-items-center">
           
                <div class="col-md-6">
                    <h2>
                        حاضنة {{itemPage.name}}                    </h2>
                    <p style="color: #979797;line-height: 40px;font-size: 24px;" class="">
                        برنامج احتضان لأفكار المشاريع الريادية في مجال السياحة و يهدف البرنامج الى تطوير المواهب والمهارات والتعليم والتدريب في ريادة الاعمال و المشاريع الريادية                     </p>
                    <div>
              
                     
                        <button class="btn-main my-3">   انضمي الان   </button>
                    </div>

                </div>
                <div class="col-md-6">
                    <img class="img-fluid rounded-3" :src="`${publicPath}assets/img/Rectangle 55.png`" alt="">

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