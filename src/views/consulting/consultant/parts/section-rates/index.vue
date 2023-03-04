<template>
  <div class="box bg-white   rounded-4 mt-5 p-2 border">
                        <div class="p-3">

                            <div class="d-flex justify-content-between">
                                <h4 class="s-c fw-bolder">
                                    التقيمات
                                </h4>
                                <h4 class="s-c">
                                    {{itemPage.rate}}
                                </h4>

                            </div>
                            <p class="text-end">
                                <d-rate-font-stars :value="itemPage.rate" readonly/>
                            </p>
                        </div>
                        <div>
                            <div class="comment px-4 py-2 border-bottom ">
                                <div class="d-flex justify-content-between align-items-center">

                                    <h6 class="m-0">
                                        ليلى احمد
                                    </h6>
                                    <p class="m-0">
                                        <span class="s-c">
                                            (4.5)
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-star "></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>


                                        </span>
                                    </p>

                                </div>
                                <small class="s-c ">
                                    دكتور مميز لقد أستفدت منه الكثير
                                </small>
                            </div>
                            <div class="comment px-4 py-2 border-bottom ">
                                <div class="d-flex justify-content-between align-items-center">

                                    <h6 class="m-0">
                                        ليلى احمد
                                    </h6>
                                    <p class="m-0">
                                        <span class="s-c">
                                            (4.5)
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-star "></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>


                                        </span>
                                    </p>

                                </div>
                                <small class="s-c ">
                                    دكتور مميز لقد أستفدت منه الكثير
                                </small>
                            </div>
                            <div class="comment px-4 py-2 border-bottom ">
                                <div class="d-flex justify-content-between align-items-center">

                                    <h6 class="m-0">
                                        ليلى احمد
                                    </h6>
                                    <p class="m-0">
                                        <span class="s-c">
                                            (4.5)
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-star "></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>


                                        </span>
                                    </p>

                                </div>
                                <small class="s-c ">
                                    دكتور مميز لقد أستفدت منه الكثير
                                </small>
                            </div>
                            <div class="comment px-4 py-2 border-bottom ">
                                <div class="d-flex justify-content-between align-items-center">

                                    <h6 class="m-0">
                                        ليلى احمد
                                    </h6>
                                    <p class="m-0">
                                        <span class="s-c">
                                            (4.5)
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-star "></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>


                                        </span>
                                    </p>

                                </div>
                                <small class="s-c ">
                                    دكتور مميز لقد أستفدت منه الكثير
                                </small>
                            </div>
                            <div class="comment px-4 py-2 border-bottom ">
                                <div class="d-flex justify-content-between align-items-center">

                                    <h6 class="m-0">
                                        ليلى احمد
                                    </h6>
                                    <p class="m-0">
                                        <span class="s-c">
                                            (4.5)
                                        </span>
                                        <span>
                                            <i class="fa-solid fa-star "></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                            <i class="fa-solid fa-star active"></i>
                                        </span>
                                    </p>
                                </div>
                                <small class="s-c ">
                                    دكتور مميز لقد أستفدت منه الكثير
                                </small>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
 name:'section-rates',
 props:{
    itemPage:{}
 }
}
</script>

<style scoped>

.consultant-text{
    font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

text-transform: capitalize;

color: #1FB9B3;
}
</style>