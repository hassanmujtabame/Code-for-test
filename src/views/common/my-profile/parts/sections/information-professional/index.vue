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
                                <div class="mb-3 ">
                                    <select v-model="itemForm.field_id" class="form-select">
                                        <option value="" class="t-c" disabled selected> حدد مجالك</option>
                                        <option v-for="(d,i) in industries" :key="i" :value="d.id">{{ d.name}} </option>
                                    </select>
                                  
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

                            <ValidationProvider tag="div" 
                            :name="$t('years_experience')"
                             vid="year_experience" 
                             rules="required|numeric"
                                v-slot="{ errors }">
                                <input type="text" v-model="itemForm.year_experience" class="form-control" placeholder="   سوات الخبرة">
                                <d-error-input :errors="errors" v-if="errors.length" />
                            </ValidationProvider>

                        </div>
                    </div>
                    <div class="row align-items-start ">
                        <label class="col-md-3 m-c fs-5 fw-bolder">
                           {{$t('expected_salary')}}:
                        </label>
                        <div class="col-md-9 row mb-3 ">

                            <ValidationProvider tag="div" 
                            :name="$t('expected_salary')" 
                            vid="expected_salary"
                             rules="required|numeric"
                                v-slot="{ errors }">
                                <input type="text" v-model="itemForm.expected_salary" class="form-control" :placeholder="$t('expected_salary')">
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
                expected_salary: '',
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