<template>
    <d-dialog-large :xl="false" :group="group"
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    >
                    <template v-slot:header>جدول مواعيد جديد</template>
                    <template v-slot:default>
                    <ValidationObserver v-if="showDialog" tag="div" class="form-dialog" ref="form">
                        <div class="row add-portfolio m-3 p-0">
                            <div class="col-12 ">
                                <ValidationProvider
                                tag="div"
                                :name="$t('service-name')"
                                vid="service"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <div class="mb-3">
                                    <input type="text" class="form-control" v-model="itemForm.service"  :placeholder="$t('service-name')">
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            
                                <div class="row mb-3 p-0">
                                    <div class="box">
                                        
                                        <div class="row justify-content-center p-0">

                                            
                                                <div class="row p-0">

                                                    <div class="col-md-6">
                                                        <ValidationProvider
                                                        tag="div"
                                                        class="form-group"
                                                        :name="$t('start_date_schedule')"
                                                        vid="start_date"
                                                        rules="required"
                                                        v-slot="{errors}"
                                                        >
                                                      
                                                            <label for="input_from">
                                                                <p>
                                                                    تاريخ
                                                                    <span class="m-c ">
                                                                        بداية الجدول
                                                                    </span>
                                                                </p>
                                                            </label>
                                                            <date-picker-input mode="date" class="form-control" :max-date='itemForm.not_end_date?itemForm.end_date:""' v-model="itemForm.start_date" />
                                                            <d-error-input :errors="errors" v-if="errors.length" />
                                                        </ValidationProvider>
                                                    </div>
                                                    <div class="col-md-6">
                                                        
                                                            <ValidationProvider
                                                                v-if="itemForm.not_end_date" 
                                                                tag="div"
                                                                class="form-group"
                                                                :name="$t('end_date_schedule')"
                                                                vid="end_date"
                                                                rules="required"
                                                                v-slot="{errors}"
                                                            >
                                                            <label for="input_to">
                                                                <p>
                                                                    تاريخ
                                                                    <span class="text-danger">
                                                                        نهاية الجدول
                                                                    </span>
                                                                </p>
                                                            </label>
                                                            <date-picker-input mode="date" class="form-control"  :min-date='itemForm.start_date' v-model="itemForm.end_date" />

                                                            <d-error-input :errors="errors" v-if="errors.length" />
                                                        </ValidationProvider>
                                                    </div>
                                                    <div  class="form-check m-2">
                                                        <input class="form-check-input" type="checkbox" v-model="itemForm.not_end_date"
                                                            id="flexCheckChecked" checked>
                                                        <label class="form-check-label t-c" for="flexCheckChecked">
                                                            لايوجد تاريخ النهاية
                                                        </label>
                                                    </div>
                                                </div>
                                        </div>


                                    </div>


                                </div>
                                <div class="row mb-3 p-0">
                                    <div class="box">
                                        <div class="row justify-content-center p-0">
                                            <h6 class="t-c">الفترة الزمنية للخدمة خلال اليوم</h6>
                                          
                                                <div class="row p-0">

                                                    <div class="col-md-6">
                                                        <ValidationProvider
                                                                
                                                                tag="div"
                                                                class="form-group"
                                                                :name="$t('start_time_schedule')"
                                                                vid="start_time"
                                                                rules="required"
                                                                v-slot="{errors}"
                                                            >
                                                            <label for="input_from">
                                                                <p>

                                                                    <span class="m-c ">
                                                                        من
                                                                    </span>
                                                                </p>
                                                            </label>
                                                            <date-picker-input mode="time" class="form-control" v-model="itemForm.start_time" />
                                                                <d-error-input :errors="errors" v-if="errors.length" />
                                                        </ValidationProvider>
                                                           
                                                    </div>
                                                    <div class="col-md-6">
                                                        <ValidationProvider
                                                                tag="div"
                                                                class="form-group"
                                                                :name="$t('end_time_schedule')"
                                                                vid="end_time"
                                                                rules="required"
                                                                v-slot="{errors}"
                                                            >
                                                            <label for="input_to">
                                                                <p>
                                                                    <span class="text-danger">
                                                                        الى
                                                                    </span>
                                                                </p>
                                                            </label>
                                                            <date-picker-input mode="time" class="form-control" v-model="itemForm.end_time" />
                                                                <d-error-input :errors="errors" v-if="errors.length" />
                                                        </ValidationProvider>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <ValidationProvider
                                    tag="div"
                                    :name="$t('max_service_period')"
                                    vid="max_period"
                                    rules="required|numeric"
                                    v-slot="{errors}">
                                <div class="mb-3">
                                   
                                    <label class="form-label">أقصى مدة للخدمة</label>    
                                    <div class="position-relative">           
                                    <select v-model="itemForm.max_period" class="form-control ">
                                        <option value="" class="t-c" selected> أقصى مدة للخدمة</option>
                                        <option value="">يوم</option>
                                        <option value="">يومين</option>
                                    </select>
                                    <div style="top: 7px;left: 10px;" class="position-absolute">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                                fill="#737373" />
                                        </svg>
                                    </div>
                                </div>        
                                </div>
                                <d-error-input :errors="errors" v-if="errors.length" />
                             </ValidationProvider>
                                <div class="mb-3">
                                <ValidationProvider
                                    tag="div"
                                    :name="$t('max_service_number')"
                                    vid="max_number"
                                    rules="required|numeric"
                                    v-slot="{errors}">
                                    <label class="form-label">{{ $t('max_service_number') }}</label>
                                    <input type="text" v-model="itemForm.max_number" class="form-control" placeholder="أقصى عدد من العملاء لكل موعد">
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                </div>
                                <div class="mb-3">
                                    
                                <ValidationProvider
                                    tag="div"
                                    :name="$t('color')"
                                    vid="color"
                                    rules="required"
                                    v-slot="{errors}">
                                    <label class="form-label">اختار لون  لتميز  الجدول</label>  
                                    <input type="color" v-model="itemForm.color" class="form-control" placeholder="أقصى عدد من العملاء لكل موعد">
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                </div>
                            </div>
                        </div>
                    </ValidationObserver>
                    </template>
                <template v-slot:actions>
                    <button type="button" class="btn btn-main" >
                        انشئ الجدول
                    </button>
                </template>
    </d-dialog-large>
</template>

<script>
export default {
 name:'dialog-new-schedule',
 props:{
    group:{
        type:String,
        default:'new-schedule'
    }
 },
 data:()=>{
    return {
        showDialog:false,
        itemForm:{
            not_end_date:false,
            start_date:null,
            end_date:null,
            service:'',
            start_time:null,
            end_time:null,
            max_period:null,
            max_number:null,
            color:'#ffffff',
            
        }
    }
 },
 methods:{
    async save() {
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }

            try {
                //
            } catch (error) {
                console.log('error',error)
            }
    },
    closeEvent(){
        this.fireCloseDialog(this.group)
    },
    openDialog(){
        this.itemForm={
            not_end_date:false,
            start_date:null,
            end_date:null,
            service:'',
            start_time:null,
            end_time:null,
            max_period:null,
            max_number:null,
            color:'#ffffff',
            
        }
        this.showDialog =  true;
        this.$refs.form.reset()
        return true;
    },
    closeDialog(){
        this.showDialog =  false;
        return true;
    }
 }
 
}
</script>

<style scoped>
.form-dialog{
    max-height: 400px;
    overflow: auto;
}
</style>