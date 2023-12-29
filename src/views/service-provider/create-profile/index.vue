<template>
    <div class="container" style="margin-top: 120px">
        <div v-if="!user.serviceProviderPortfolio">
            <div v-if="!done">
                <h1 class="fs-2">
                    انشاء ملف اعمالك
                </h1>
                <form-wizard color="#2eb9b3" step-size="xs" @on-complete="save" ref="normalSteps" nextButtonText="التالى"
                    backButtonText="السابق" finishButtonText="الانتهاء">
                    <tab-content title=" التعريف">
                        <!-- <Step1 /> -->
                        <div>
                            <ValidationObserver>
                                <!-- Start job title -->
                                <ValidationProvider vid="job-position-name" rules="required" :name="$t('job-position-name')"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.job_title" type="text"
                                        :placeholder="$t('job-position-name')" required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>
                                <!-- End job title -->


                                <!-- Start the-services-you-offer 'الخدمات التى تقدمها'-->
                                <span class="mb-2">

                                    الخدمات التى تقدمها

                                </span>
                                <!-- category -->
                                <div class="mb-3">
                                    <ValidationProvider tag="div" class="form-group" :name="$t('request-domain')"
                                        vid="category_id" rules="required" v-slot="{ errors }">
                                        <d-select-input :errors="errors" v-model="form.category_id"
                                            @change="loadFields($event)">
                                            <option disabled value class="t-c">{{ $t('request-domain') }}</option>
                                            <option v-for="(cat, i) in categories" :key="i" :value="cat.id">{{ cat.name }}
                                            </option>
                                        </d-select-input>
                                    </ValidationProvider>
                                </div>
                                <!--field-->
                                <div class="mb-3">
                                    <ValidationProvider tag="div" :name="$t('specialite')" vid="service_id"
                                        v-slot="{ errors }">
                                        <option disabled value class="t-c">{{ $t('select-specialite') }}</option>
                                        <MultiselectInput :errors="errors" :opts="fields" track-id="id" label-name="name"
                                            v-model="form.service_id" multi-select />

                                    </ValidationProvider>
                                </div>
                                <!-- End the-services-you-offer -->

                                <!-- Start the-services-you-offer -->

                                <ValidationProvider :name="$t('skills-you-have')" vid="skills" rules="required"
                                    v-slot="{ errors }">
                                    <label class="form-label">{{ $t('skills-you-have') }}</label>
                                    <d-multi-select-tag v-model="form.skills"></d-multi-select-tag>
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                <!-- End the-services-you-offer -->
                                <!-- Start pio -->
                                <ValidationProvider :name="$t('request-description')" vid="description" rules="required"
                                    v-slot="{ errors }">
                                    <label class="form-label">
                                        نبذه تعريفيه عنك
                                    </label>
                                    <d-ckeditor-classic v-model="form.bio" class="form-control" rows="10" :editorConfig="{
                                        minHeight: '150px'
                                    }"></d-ckeditor-classic>
                                    <d-error-input :errors="errors" v-if="errors.length" />
                                </ValidationProvider>
                                <!-- Start pio -->
                                <br>
                            </ValidationObserver>

                        </div>
                    </tab-content>
                    <tab-content title="الخبرات">
                        <!-- <Step2 /> -->
                        <div>
                            <ValidationObserver>
                                <!-- عدد سنوات الخبره -->
                                <ValidationProvider vid="عدد سنوات الخبره" rules="required" :name="'عدد سنوات الخبره'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input type="text" v-model="form.experience_year"
                                        :placeholder="'عدد سنوات الخبره'" required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>
                                <!-- عدد سنوات الخبره -->


                                <!-- مكان او جهة العمل -->
                                <ValidationProvider vid=" مكان او جهة العمل " rules="required" :name="' مكان او جهة العمل '"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input type="text" v-model="form.Workplace" :placeholder="' مكان او جهة العمل '"
                                        required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>
                                <!-- End the-services-you-offer -->
                            </ValidationObserver>
                            <br>

                        </div>
                    </tab-content>
                    <tab-content title="التعليم">
                        <!-- <Step3 /> -->
                        <div>
                            <ValidationObserver>
                                <!-- الجهة التعيلمية -->
                                <ValidationProvider vid="الجهة التعيلمية" rules="required" :name="'الجهة التعيلمية'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.Educational_body" type="text"
                                        :placeholder="'الجهة التعيلمية'" required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>

                                <!-- الدرجة التعليمية -->
                                <ValidationProvider vid="الدرجة التعليمية" rules="required" :name="'الدرجة التعليمية'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.degree" type="text" :placeholder="'الدرجة التعليمية'"
                                        required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>

                                <!--  سنة التخرج -->
                                <ValidationProvider vid="سنة التخرج" rules="required" :name="'سنة التخرج'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.graduation_year" type="text" :placeholder="'سنة التخرج'"
                                        required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </ValidationObserver> <br>


                        </div>
                    </tab-content>
                    <tab-content title="معرض الاعمال">
                        <!-- <Step4 /> -->
                        <div>
                            <ValidationObserver>
                                <!-- هل لديك رابط بورتفوليو خارجي؟ -->
                                <ValidationProvider vid="هل لديك رابط بورتفوليو خارجي؟" rules="required"
                                    :name="'هل لديك رابط بورتفوليو خارجي؟'" v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.portfolio_url" type="text"
                                        :placeholder="'هل لديك رابط بورتفوليو خارجي؟'" required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>
                                <!-- file -->

                                <div class="input-file">

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.8534 17.1104L13.8534 17.1104L13.8552 17.1087L15.7351 15.2287C16.0242 14.9397 16.5059 14.9397 16.7949 15.2287C17.0839 15.5178 17.0839 15.9995 16.7949 16.2885L16.9717 16.4653L16.7949 16.2885L14.9149 18.1685C14.5494 18.5341 14.3484 19.0105 14.3484 19.5186C14.3484 20.0228 14.5466 20.5148 14.9168 20.8706C15.6679 21.6197 16.8782 21.619 17.6285 20.8687L20.5885 17.9087C22.3794 16.1177 22.3794 13.2128 20.5885 11.4218C18.7975 9.63088 15.8926 9.63088 14.1016 11.4218L10.8749 14.6485L11.0517 14.8253L10.8749 14.6485C10.1488 15.3746 9.74837 16.3312 9.74837 17.3453C9.74837 18.3576 10.1476 19.3285 10.8758 20.0429C11.1639 20.332 11.1636 20.8131 10.8749 21.1018C10.5859 21.3908 10.1042 21.3908 9.81512 21.1018C8.80927 20.096 8.26172 18.7598 8.26172 17.3319C8.26172 15.9041 8.80927 14.5679 9.81512 13.5621L13.0418 10.3354L12.8651 10.1586L13.0418 10.3354C15.4109 7.96633 19.2792 7.96633 21.6483 10.3354C24.0173 12.7044 24.0173 16.5728 21.6483 18.9418L18.6883 21.9018L18.6883 21.9018L18.6867 21.9035C18.0155 22.5871 17.1472 22.9219 16.2651 22.9219C15.3948 22.9219 14.5127 22.586 13.8552 21.9285C13.2078 21.2811 12.8484 20.4244 12.8484 19.5186C12.8484 18.6114 13.2088 17.7427 13.8534 17.1104Z"
                                            fill="#737373" stroke="white" stroke-width="0.5" />
                                    </svg>
                                    <label for="fileInput" class="custom-file-upload" v-text="buttonText">
                                    </label>
                                    <input id="fileInput" type="file" @change="handleFileUpload" ref="fileInput" />

                                </div>
                                <br>

                            </ValidationObserver>

                        </div>
                    </tab-content>
                    <tab-content title="الشهادات">
                        <!-- <Step5 /> -->
                        <div>
                            <ValidationObserver>
                                <ValidationProvider vid="اسم الشهادة" rules="required" :name="'اسم الشهادة'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.certificate_name" type="text" :placeholder="'اسم الشهادة'"
                                        required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>

                                <ValidationProvider vid="جهة الإصدار" rules="required" :name="'جهة الإصدار'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.issuer" type="text" :placeholder="'جهة الإصدار'" required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>

                                <ValidationProvider vid="رابط أو كود التوثيق" rules="required" :name="'رابط أو كود التوثيق'"
                                    v-slot="{ errors }" tag="div" class="mb-3">
                                    <b-form-input v-model="form.certificate_url" type="text"
                                        :placeholder="'رابط أو كود التوثيق'" required />
                                    <div class="text-input-error">{{ errors[0] }}</div>
                                </ValidationProvider>
                                <br>

                            </ValidationObserver>

                        </div>
                    </tab-content>
                </form-wizard>
            </div>
            <StepComplete v-if="done" />
        </div>
        <StepComplete v-if="user.serviceProviderPortfolio" />
    </div>
</template>

<script>
// import Step1 from './parts/step-one.vue';
// import Step2 from './parts/step-two.vue';
// import Step3 from './parts/step-three.vue';
// import Step4 from './parts/step-four.vue';
// import Step5 from './parts/step-five.vue';
import StepComplete from './parts/step-complete.vue';
import MultiselectInput from "./multiselect.vue"



import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import providerAPIs from "@/services/api/service-provider/index.js"
import proposalsAPIs from "@/services/api/service-provider/user/proposals.js";
import ServiceProviderAPIs from "@/services/api/service-provider/provider/ready-service";

// import other step components

export default {
    name: 'service-provider-create-profile',
    components: {
        // Step1,
        // Step2,
        // Step3,
        // Step4,
        // Step5,
        MultiselectInput,
        StepComplete,
        FormWizard,
        TabContent,
    },

    data() {
        return {
            done: false,
            buttonText: 'ارفق الملفات', // Initial button text
            fields: [],
            form: {
                file: null,
                service_id: [],
                category_id: null,
                job_title: '',
                bio: '',
                portfolio_url: '',
                experience_year: '',
                Workplace: '',
                Educational_body: '',
                degree: '',
                graduation_year: '',
                skills: '',
                certificate_name: '',
                certificate_url: '',
                issuer: ''
            },
            categories: []
        }
    },
    methods: {
        handleFileUpload(event) {
            this.form.file = event.target.files[0];
            this.buttonText = this.form.file.name;
        },
        async loadFields(val, ch = true) {
            console.mylog("cc", val);
            if (ch) this.form.service_id = [];

            if (!this.form.category_id) {
                this.fields = [];
                return;
            }
            try {
                let { data } = await ServiceProviderAPIs.getFields(
                    this.form.category_id
                );
                if (data.success) {
                    this.fields = data.data;
                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async loadCategories() {

            try {
                let { data } = await proposalsAPIs.getCategories();
                if (data.success) {
                    this.categories = data.data;
                    this.form.category_id = null

                }
            } catch (error) {
                console.log("error", error);
            }
        },
        async save() {
            console.log('form1', this.form)
            this.loading = true;
            let formData = new FormData();
            Object.keys(this.form).forEach(key => {
                formData.append(key, this.form[key]);
            });

            try {
                let { data } = await providerAPIs.createProfile(formData);
                // let {data} = window.axios.post('service-provider/provider/portfolios',formData, { headers: {'Content-Type': 'application/json',}})
                if (data.success) {
                    // let dataEvent;
                    // dataEvent = {
                    //     title: "لقد تم انشاء ملف اعمالك",
                    //     description: ""
                    // }

                    this.done = true
                    console.log('its worked very good');

                    // this.fireOpenDialog("standard-success-message", dataEvent);
                } else {
                    window.SwalError(data.message);
                }
            } catch (error) {
                //
                if (error.response) {
                    let response = error.response;
                    console.log(response)
                    // if (response.status == 422) {
                    //     if (response.data.errors)
                    //         this.$refs.form.setErrors(response.data.errors);
                    // }
                }
            }
            this.loading = false;
        },
    },
    mounted() {
        this.loadCategories()
    }
}
</script>

<style>
.vue-form-wizard .wizard-progress-bar {
    float: right !important;
    transform: translateX(-15px) !important;
}

.wizard-header {
    display: none !important;
}

i.wizard-icon {
    display: none !important;
}

.wizard-icon-container {
    border-radius: 50% !important;
    border: 5px solid white !important;
}
</style>

