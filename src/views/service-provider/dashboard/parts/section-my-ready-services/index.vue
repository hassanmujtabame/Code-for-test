<template>
  <div class="row mt-5">
        <div class="col-md-6">
            <div class="box border p-5 mt-3">
                <div class="d-flex align-items-center justify-content-between">
                    <h3>
                        خدماتي الجاهزة 
                    </h3>
                    <p class="fw-bolder fs-3">
                        300
                    </p>
                </div>
                <div class="row ">
                    <div class="col-md-6 mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span class="fw-bolder m-c fs-6">
                                                100
                                            </span>
                                            <span class="fs-6">
                                                خدمة مكتملة
                                            </span>
                                        </p>
                                        <p class="fs-6 t-c">
                                            25%
                                        </p>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-5">
                        <div class="progress">
                            <div class="progress-bar tow" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span class="fw-bolder m-c fs-6">
                                                52
                                            
                                            </span>
                                            <span class="fs-6">
                                                طلب ينتظر موفقتك
                                            </span>
                                        </p>
                                        <p class="fs-6 t-c">
                                            25%
                                        </p>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-5">
                        <div class="progress three">
                            <div class="progress-bar three" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span style="color:#FFBC00 ;" class="fw-bolder m-c fs-6">
                                              3
                                            
                                            </span>
                                            <span class="fs-6">
                                                قيد التنفيذ
                                            
                                            
                                            </span>
                                        </p>
                                        <p class="fs-6 t-c">
                                            1%
                                        </p>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="box  ">
                <div class="row flex-column mt-3 gap-4">
                    <div class="col-md-12 border p-3">
                            <div class="box d-flex align-items-center justify-content-between ">
                                <h5>
                                    تقيم خدماتي
                                </h5>
                                <p>
                                    0
                                </p>
                            </div>
                            <div class="box d-flex align-items-center justify-content-between ">
                                <button class="btn border rounded-2 bg-transparent">
                                    عرض التقييمات 
                                </button>
                                <div>
                                    <div>
                                    <d-rate-stars  :size="32" :value="rate"/>
                                </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-12 border mt-3 p-3">
                        <div class="box d-flex align-items-center justify-content-between ">
                            <h5>
                                الرسائل الجديدة
                            </h5>
                            <p>
                                0
                            </p>
                        </div>
                        <div class="box d-flex align-items-center justify-content-between ">
                            <button class="btn border rounded-2 bg-transparent">
                                عرض الرسائل 
                            </button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name:'section-my-ready-services',
 data:()=>({
    rate:3,
 })
}
</script>

<style>

</style>