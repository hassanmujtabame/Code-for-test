<template>
 <div class="tab-pane fade show active " id="pills-settings-exams" role="tabpanel" aria-labelledby="pills-settings-exams-tab" tabindex="0">
    <div  class=" position-relative">
        <d-overlays-simple v-if="loading" />
        <ValidationObserver ref="form" tag="div">   
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
                                    <d-check-input v-model="itemForm.send_notice_pass" :false-value="0" :true-value="1">
                                        ارسل لي أشعار كلما اجتاز طالب اختبار في اي دورة 
                                </d-check-input>
                                      </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check">
                                    <d-check-input v-model="itemForm.send_notice_fail" :false-value="0" :true-value="1">
                                        ارسل لي أشعار للطلاب الذين لم يجتازو الاختبارات في اي دورة 
                                        </d-check-input>
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
                            <ValidationProvider tag="div" 
            vid="degree_success" 
            rules="required"
            :name="$t('Degree')"
            v-slot="{errors}"
            class="row flex-wrap align-items-center ">
                <div class="col-md-6">
                    <div class="form-check">
                        <d-radio-input v-model="itemForm.degree_success" :value="50">
                            يجتاز الطالب الاختبار عند حصوله على نسبة 50%
                        </d-radio-input>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check">
                        <d-radio-input v-model="itemForm.degree_success" :value="80">
                            يجتاز الطالب الاختبار عند حصوله على نسبة 80 %
                        </d-radio-input>
                    </div>
                </div>
                <div v-if="errors.length" class="col-md-12">
                <d-error-input :errors="errors" />
                </div>
            </ValidationProvider>
                          
                        </div>
                        <div class="box mt-4">

                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h4>
                                        عدد مرات اداء الاختبار  :
                                    </h4>
                              
                                </div>
                        
    
    
                            </div>
                            <ValidationProvider tag="div" 
                            vid="number_retakes_exam" 
                            :name="$t('number_retakes_exam')"
                            rules="required"
                            v-slot="{errors}"
                            class="row flex-wrap align-items-center ">
                <div class="col-md-6">

                    <div class="form-check">
                        <d-radio-input v-model="itemForm.number_retakes_exam" name="number_retakes_exam" :value="3">
                            يمكن للطالب اعادة ااختبار 3 مرات في نفس اليوم
                        </d-radio-input>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check">
                        <d-radio-input v-model="itemForm.number_retakes_exam" name="number_retakes_exam" :value="1">
                            بمكن لطالب اعادة الاختبار مرة اخرى بعد مرور 24 ساعه 
                        </d-radio-input>
                    </div>
                </div>

                <div v-if="errors.length" class="col-md-12">
                <d-error-input :errors="errors" />
                </div>
            </ValidationProvider>
                            
                        </div>
                        <div class="box mt-4">

                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <h4>
                                        أظاهر الاجابات الصحيحة :
                                    </h4>
                                </div>
                            </div>
                         
                            <ValidationProvider tag="div" 
                            vid="show_correct_answers" 
                            :name="$t('show_correct_answer')"
                            rules="required"
                            v-slot="{errors}"
                            class="row flex-wrap align-items-center ">
                <div class="col-md-6">

                    <div class="form-check">
                        <d-radio-input v-model="itemForm.show_correct_answers" name="show_correct_answers" :value="1">
                            أظهار الاجابات الصحيحة بعد انهاء الاختبار
                        </d-radio-input>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-check">
                        <d-radio-input v-model="itemForm.show_correct_answers" name="show_correct_answers" :value="0">
                            عدم اظهار الاجابات الصحيحة
                        </d-radio-input>
                    </div>
                </div>

                <div v-if="errors.length" class="col-md-12">
                <d-error-input :errors="errors" />
                </div>
            </ValidationProvider>
                        </div>
                        <div class="text-center mt-4">
                            <button @click="save" :disabled="loading" class="btn bg-main text-white px-3">
                                حفظ الاعدادات 
                            </button>
                        </div>
                   
                </ValidationObserver>
                </div>
                    </div>
</template>

<script>
import academy from '@/services/api/academy';
export default {
    name: 'settings-exams',
    data: () => ({
        loading:false,
        itemForm: {
            send_notice_pass: 0,
            send_notice_fail: 0,
            degree_success: 50,//number 50 | 80
            number_retakes_exam: 1,///3 | 1
            show_correct_answers:0//0|1
        }
    }),
    methods:{
      async save(){
        this.loading =  true;
        let valid = await this.$refs.form.validate();
        if(!valid){
            console.mylog('invalid');
            this.loading =  false;
            return;
        }
        let formData =  this.loadObjectToForm(this.itemForm)
        try {
           let { data } = await academy.examsAPI.saveSettings(formData) 
           if(data.success){
            window.SwalSuccess(data.message)
           }else{
            window.SwalError(data.message)
           }
        } catch (error) {
            window.DHelper.catchException.call(this,error)
        }
        this.loading =  false;
      } ,
      async initializing(){
        this.loading =  true;
      
        try {
           let { data } = await academy.examsAPI.loadSettings() 
           if(data.success){
            let {send_notice_pass,send_notice_fail,degree_success,number_retakes_exam,show_correct_answers} = data.data
            this.itemForm = Object.assign(this.itemForm,{send_notice_pass,send_notice_fail,degree_success,number_retakes_exam,show_correct_answers})
           }else{
            //window.SwalError(data.message)
           }
        } catch (error) {
            window.DHelper.catchException.call(this,error)
        }
        this.loading =  false;
      }  
    },
    mounted(){
        this.initializing()
    }
}
</script>

<style></style>