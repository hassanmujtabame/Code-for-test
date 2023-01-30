<template>
    <div id="list-item-4">
        <div class="box border mt-5 ">
            <h3 class="border-bottom py-2 t-c px-3">
                معلومات مهنية
            </h3>
            <ValidationObserver ref="form">
                <div class=" p-3">
                    <div class="row align-items-start ">
                        <label class="col-md-3 m-c fs-6 fw-bolder">
                             {{ $t('position_role') }} :
                        </label>
                        <div class="col-md-9 row mb-3 ">

                            <ValidationProvider tag="div" :name="$t('position_role')" vid="job_title" rules="required"
                                v-slot="{ errors }">
                                <input type="text" v-model="itemForm.job_title" class="form-control"
                                    placeholder="مسماك الوظيفي ( مهندس - طبيب- مصمم - رائد اعمال)">
                                    <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="row  align-items-start">
                        <label class="col-md-3 m-c fs-5 fw-bolder">
                            {{ $t('industry') }} :
                        </label>
                        <div class="col-md-9 row">
                            <div class="w-100 ">
                                <ValidationProvider tag="div" :name="$t('industry')" vid="field_id" rules="required"
                                v-slot="{ errors }">
                                <div class="position-relative mb-3 ">
                                    <select v-model="itemForm.field_id" class="form-control p-2">
                                        <option value="" class="t-c" disabled selected> حدد مجالك</option>
                                        <option v-for="(d,i) in industries" :key="i" :value="d.id">{{ d.name}} </option>
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
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-start ">
                        <label class="col-md-3 m-c fs-5 fw-bolder">
                           {{$t('years_experience')}}:
                        </label>
                        <div class="col-md-9 row mb-3 ">

                            <ValidationProvider tag="div" :name="$t('years_experience')" vid="year_experience" rules="required"
                                v-slot="{ errors }">
                                <input type="text" v-model="itemForm.year_experience" class="form-control" placeholder="   سوات الخبرة">
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>

                        </div>
                    </div>
                </div>
            </ValidationObserver>
            <div class="m-auto text-center p-3">
                <button @click="save" class="btn-main">
                    {{ $t('save') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import userAPI from '@/services/api/user.js'
export default {
    name: 'professional-item',
 props:['currentUser'],
    data: (vm) => {
        return {
            industries: [],
            itemForm: {
                job_title: '',
                year_experience: '',
                field_id: '',
                ...vm.currentUser.career_informations
            }
        }
    },
    methods: {
        async save(evt) {
            if (evt) evt.preventDefault();
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid')
                return;
            }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach(key => {
                formData.append(`${key}`, this.itemForm[key])
            })

            try {
                let { data } = await userAPI.postCareerInformation(formData)
                if (data.success) {
                    window.SwalSuccess(data.message)
                } else {
                    window.SwalError(data.message)
                }
            } catch (error) {
                console.log('error', error)
                if (error.response) {
                    if (error.response.status == 422) {
                        this.$refs.form.setErrors(error.response.data.errors)
                    }
                }

            }
        },
        async loadIndustries(){
                try {
                    let { data } = await userAPI.getIndustries()
                if (data.success) {
                   this.industries =  data.data
                } else {
                    window.SwalError(data.message)
                }
                } catch (error) {
                    console.log('error', error)
                }
        }
    },
    mounted(){
        this.loadIndustries()
    }
}
</script>

<style>

</style>