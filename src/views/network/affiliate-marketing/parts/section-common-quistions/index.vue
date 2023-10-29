<template>
    <div class="container-fluid mt-5">
        <h1>الأسئله الشائعه </h1>
        <div class="row">
            <div class="col-md-5 image-side" style="min-height:400px">
                <img src="@/assets/img/reset-password.png" style="width: 100%">
            </div>
            <div class="col-md-7 quistions-side">
                <div  class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          هل يوجد مده انتهاء للبرنامج؟
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          هل هناك مكافأت و مميزات أخرى؟
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟

                            </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            هل يوجد مده انتهاء للبرنامج؟

                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                            هل يوجد مده انتهاء للبرنامج؟
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'section-common-quistions'
}
</script>

<style scoped>
.accordion-button{
    font-size: large;
    position: relative;
}
.accordion-button::before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: #2eb9b3;
    border-radius: 50%;
    margin-left: 10px;
}
</style>