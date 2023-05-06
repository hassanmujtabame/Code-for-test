<template>
    <div class="box bg-white    rounded-3">

        <div class="row align-items-center p-0 position-relative ">
            <div class="col-12 col-md-6 p-4">
               
                <h1 class="fw-bolder">المشاريع الكبيرة</h1>
                <p>احجزي موعدا مع فريق رياديات للمناقشة حول مشروعك</p>
                <ValidationObserver ref="form">
                    <ValidationProvider :name="$t('Full-name')" vid="name" rules="required" v-slot="{ errors }">
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                                <d-text-input type="text" :errors="errors" class="form-control" v-model="form.name"
                                    :label="$t('Full-name')">
                                </d-text-input>
                            </div>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('Email')" vid="email" rules="required" v-slot="{ errors }">
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                                <d-text-input :errors="errors" type="email" class="form-control" v-model="form.email"
                                    :label="$t('Email')">
                                </d-text-input>
                            </div>
                        </div>
                    </ValidationProvider>
                    
                        <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12 d-flex gap-1">
                                <ValidationProvider :name="$t('Phone')" 
                                tag="div"
                                class="flex-grow-1"
                    vid="phone" 
                    rules="required|numeric|min:8" 
                    v-slot="{ errors }"
                    >
                                <d-text-input :errors="errors" type="text"  v-model="form.phone"
                                    :label="$t('Phone')">
                                </d-text-input>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('country-phone')" 
                                tag="div"
                                class="flex-shrink-0"
                    vid="phone_code" 
                    rules="required" 
                    v-slot="{ errors }"
                    >
                                <d-select-input :errors="errors" type="text" class="text-flag" v-model="form.phone_code"
                                    :label="$t('country-phone')">
                                    <option v-for="(it,i) in phone_codes" :key="i" :value="it.phone_code" >
                                        {{it.flag}}({{ it.phone_code }})
                                    </option>
                                </d-select-input>
                    </ValidationProvider>
                   
                            </div>
                        </div>
                        <ValidationProvider :name="$t('project-name')" 
                        
                    vid="project_name" rules="required" v-slot="{ errors }"
                    >
                    <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                     
                                <d-text-input type="text" :errors="errors" class="form-control" v-model="form.project_name"
                                    :label="$t('project-name')">
                                </d-text-input>
                            </div>
                            </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('project-field')" 
                        
                    vid="project_field" rules="required" v-slot="{ errors }"
                    >
                    <div class="col-md-4 w-100 row mb-2">
                            <div class="cols-12">
                     
                                <d-select-input type="text" :errors="errors" v-model="form.project_field"
                                    :label="$t('project-field')">
                                    <option >حدد المجال</option>
                                </d-select-input>
                            </div>
                            </div>
                    </ValidationProvider>
                    <ValidationProvider :name="$t('project-bio')" 
                        
                        vid="project_bio" rules="required" v-slot="{ errors }"
                        >
                        <div class="col-md-4 w-100 row mb-2">
                                <div class="cols-12">
                         
                                    <d-textarea-input :errors="errors"  v-model="form.project_bio"
                                        :label="$t('project-bio')">
                                    </d-textarea-input>
                                </div>
                                </div>
                        </ValidationProvider>
                    <div class="col-12 text-center">
                        <button @click="signup" class="btn btn-main  " type="submit">ارسال الان</button>
                    </div>
                   

                </ValidationObserver>
            </div>
            <div class=" col-12 col-md-6">
                <div class="box">
                    <img :src="`${publicPath}assets/svg/riadiat-green-card.svg`" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import commonAPI from '@/services/api/common';


export default {
    data: () => ({
        show: false,
        showC: false,
        phone_codes:[
            {phone_code:'+966',flag: "🇸🇦",name_country:{"ar":'سعودية',"en":"saoudi"}},
            {phone_code:'+213',flag: "🇩🇿",name_country:{"ar":'جزائر',"en":"Algeria"}},
            {phone_code:'+20',flag:  "🇪🇬",name_country:{"ar":'مصر',"en":"Egypt"}},
           
        ],
        form: {
            email: process.env.EMAIL || '',
            name: '',
            phone: '',
            phone_code: '+966',
            project_name: '',
            project_field: '',
            project_bio: '',
        },
        hasError: false,
        message: '',
    }),
    methods: {
        async loadCountries(){
            try {
                let {data} = await commonAPI.getListCountries()
                    if(!data.message){
                        let countries = data
                       this.phone_codes= window.DHelper.convertCountriesToPhoneCodes(countries)
                    }
            } catch (error) {
               // 
            }
        },
        async signup(e) {
            e.preventDefault();
            this.hasError = false;
            this.message = '';
            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }
            try {
                let { data } = await this.$axios.post('incubator/contact-us-for-project', this.form);
                if (data.success) {
                    let info = {
                        data: data,
                        form: this.form
                    }
                    this.$emit('success', info)
                } else {
                    this.message = data.message;
                    this.hasError = true;
                }

            } catch (error) {
                this.message = 'خطا غير معروف'
                if (error.response) {
                    let response = error.response
                    if (response.status == 422) {
                        this.message = response.data.message;
                        if (Object.hasOwnProperty.call(response.data, 'errors')) {
                            this.$refs.form.setErrors(response.data.errors)
                        }
                    }
                }

                this.hasError = true;
            }
        }
    },
    mounted(){
        this.loadCountries()
    }
}
</script>
<style scoped>
.icon-input-end {
    color: #CDD7D8;
    font-size: 23px;
    left: 15px;
}

html[lang="en"] .icon-input-end {
    left: auto;
    right: 15px
}
.flag-icon{
    height: 1.5em;
    width: 1.5em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    vertical-align: middle;
}
</style>
