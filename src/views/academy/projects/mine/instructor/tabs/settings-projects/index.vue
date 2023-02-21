<template>
 <div class="tab-pane fade show active " id="pills-settings-projects" role="tabpanel" aria-labelledby="pills-settings-projects-tab" tabindex="0">
                        <div class="box mt-4">

                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h4>
                                        أظبط أعدادات الاشعارات  :
                                    </h4>
                              
                                </div>
                        
    
    
                            </div>
                         
                            <div class="row flex-wrap align-items-center  ">
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                                        <label class="form-check-label" for="flexCheckDefault3">
                                            ارسل لي اشعار كلما ارسل طالب مشروع
                                        </label>
                                      </div>
                                </div>
                            
                       
                            </div>
                        </div>
                        <div class="box mt-4">

                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h4>
                                        أظبط أعدادات الدرجات   :
                                    </h4>
                              
                                </div>
                        
    
    
                            </div>
                         
                            <div class="row flex-wrap align-items-center ">
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="" id="flexCheckDefault4">
                                        <label class="form-check-label" for="flexCheckDefault4">
                                            يجتاز الطالب الاختبار عند حصوله على  نسبة 50%
                                        </label>
                                      </div>
                                </div>
                                <div  class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="" id="flexCheckDefault5">
                                        <label class="form-check-label" for="flexCheckDefault5">
                                            يجتاز الطالب الاختبار عند حصوله على  نسبة 80 %
                                        </label>
                                      </div>
                                </div>
                       
                            </div>
                        </div>
                        <div class="box mt-4">

                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h4>
                                        عدد مرات تسليم المشروع  :
                                    </h4>
                              
                                </div>
                        
    
    
                            </div>
                         
                            <div class="row flex-wrap align-items-center ">
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="" id="flexCheckDefault6">
                                        <label class="form-check-label" for="flexCheckDefault6">
                                            يمكن  لطالب ارسال مشاريع عدد لا نهائي من مرات
                                        </label>
                                      </div>
                                </div>
                                <div  class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" value="" id="flexCheckDefault7">
                                        <label class="form-check-label" for="flexCheckDefault7">
                                            يمكن لطالب ارسال مشروع مرتين من بعدها يعتبر راسب ولا يحصل على شهادة مطلقا
                                        </label>
                                      </div>
                                </div>
                       
                            </div>
                        </div>
                    
                        <div class="text-center mt-4">
                            <button class="btn bg-main text-white px-3">
                                حفظ الاعدادات 
                            </button>
                        </div>
                   

                    </div>
</template>

<script>
export default {
 name:'settings-exams'
}
</script>

<style>

</style>