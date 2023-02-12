<template>
  <div style="background-color: #F6F8F9;" class="p-4" >

<div id="regestr" class="container" >
    <div  class="box bg-white  p-3  rounded-4 mt-5 ">

        <div class="row  ">
            <div  class="col-md-6">
                <h2>سجل معنا كمدرب</h2>
                <p>
                    أدخل البيانات التالية بدقة لتكون شريك معنا
                </p>
                <ValidationObserver ref="form" tag="div" class="row g-3 needs-validation"  >
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('name')"
                        rules="required"
                        vid="name"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('name') }}</label>
                        <input type="text" v-model="itemForm.name" class="form-control" id="validationCustom03"
                            placeholder="" >
                        </div>
                        <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>

                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('email')"
                        rules="required"
                        vid="email"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('email') }}</label>
                        <input type="email" v-model="itemForm.email" class="form-control" >
                        
                            </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>

                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('phone-number')"
                        rules="required"
                        vid="phone"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('phone-number') }}</label>
                        <input type="number" v-model="itemForm.phone" class="form-control" >
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                        
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('password')"
                        rules="required"
                        vid="password"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('password') }}</label>
                            <div class="w-100 position-relative">
                            <input id="password-field" v-model="itemForm.password"  :type="show?'text':'password'" class="form-control">
                            <span  @click="show=!show"
                                   class="icon-input-end fa-regular position-absolute"
                                   :class="{'fa-eye': !show, 'fa-eye-slash':show }"
                                   >
                               </span>
                               </div>
                            </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                        
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                            tag="div"
                            class="w-100"
                            :name="$t('password-confirmation')"
                            rules="required"
                            vid="password_confirmation"
                            v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('password-confirmation') }}</label>
                        <div class="w-100 position-relative">
                            <input  v-model="itemForm.password_confirmation" :type="showC?'text':'password'" class="form-control  ">
                            <span  @click="showC=!showC"
                                   class="icon-input-end fa-regular position-absolute"
                                   :class="{'fa-eye': !showC, 'fa-eye-slash':showC }"
                                   >
                               </span>
                            </div>
                            </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('identity-id')"
                        rules="required"
                        vid="identity_id"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{$t('identity-id')}}</label>
                        <input type="text" v-model="itemForm.identity_id" class="form-control" >
                        
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('gender')"
                        rules="required"
                        vid="gender"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('gender') }}</label>
                        <select v-model="itemForm.gender" class="form-select  px-3" >
                          <option selected disabled  >الجنس</option>
                          <option value="male">{{$t('Male')}}</option>
                          <option value="female">{{ $t('Female') }}</option>
                        </select>
                    </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('birthday')"
                        rules="required"
                        vid="birthday"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                           
                        <label  class="form-label">{{ $t('birthday') }} </label>
                            <div class="w-100 position-relative">
                            <input type="text" v-model="itemForm.birthday" class="form-control datepicker px-3" >
                            <svg style="top: 6px;left: 6px;" class="position-absolute" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#CDD7D8"/>
                                <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#CDD7D8"/>
                                <path d="M8.5 14.4998C8.37 14.4998 8.24 14.4698 8.12 14.4198C7.99 14.3698 7.89 14.2998 7.79 14.2098C7.61 14.0198 7.5 13.7698 7.5 13.4998C7.5 13.3698 7.53 13.2398 7.58 13.1198C7.63 12.9998 7.7 12.8898 7.79 12.7898C7.89 12.6998 7.99 12.6298 8.12 12.5798C8.48 12.4298 8.93 12.5098 9.21 12.7898C9.39 12.9798 9.5 13.2398 9.5 13.4998C9.5 13.5598 9.49 13.6298 9.48 13.6998C9.47 13.7598 9.45 13.8198 9.42 13.8798C9.4 13.9398 9.37 13.9998 9.33 14.0598C9.3 14.1098 9.25 14.1598 9.21 14.2098C9.02 14.3898 8.76 14.4998 8.5 14.4998Z" fill="#CDD7D8"/>
                                <path d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.39 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.8 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z" fill="#CDD7D8"/>
                                <path d="M15.5 14.4999C15.37 14.4999 15.24 14.4699 15.12 14.4199C14.99 14.3699 14.89 14.2999 14.79 14.2099C14.75 14.1599 14.71 14.1099 14.67 14.0599C14.63 13.9999 14.6 13.9399 14.58 13.8799C14.55 13.8199 14.53 13.7599 14.52 13.6999C14.51 13.6299 14.5 13.5599 14.5 13.4999C14.5 13.2399 14.61 12.9799 14.79 12.7899C14.89 12.6999 14.99 12.6299 15.12 12.5799C15.49 12.4199 15.93 12.5099 16.21 12.7899C16.39 12.9799 16.5 13.2399 16.5 13.4999C16.5 13.5599 16.49 13.6299 16.48 13.6999C16.47 13.7599 16.45 13.8199 16.42 13.8799C16.4 13.9399 16.37 13.9999 16.33 14.0599C16.3 14.1099 16.25 14.1599 16.21 14.2099C16.02 14.3899 15.76 14.4999 15.5 14.4999Z" fill="#CDD7D8"/>
                                <path d="M8.5 18.0002C8.37 18.0002 8.24 17.9702 8.12 17.9202C8 17.8702 7.89 17.8002 7.79 17.7102C7.61 17.5202 7.5 17.2602 7.5 17.0002C7.5 16.8702 7.53 16.7402 7.58 16.6202C7.63 16.4902 7.7 16.3802 7.79 16.2902C8.16 15.9202 8.84 15.9202 9.21 16.2902C9.39 16.4802 9.5 16.7402 9.5 17.0002C9.5 17.2602 9.39 17.5202 9.21 17.7102C9.02 17.8902 8.76 18.0002 8.5 18.0002Z" fill="#CDD7D8"/>
                                <path d="M12 18.0002C11.74 18.0002 11.48 17.8902 11.29 17.7102C11.11 17.5202 11 17.2602 11 17.0002C11 16.8702 11.03 16.7402 11.08 16.6202C11.13 16.4902 11.2 16.3802 11.29 16.2902C11.66 15.9202 12.34 15.9202 12.71 16.2902C12.8 16.3802 12.87 16.4902 12.92 16.6202C12.97 16.7402 13 16.8702 13 17.0002C13 17.2602 12.89 17.5202 12.71 17.7102C12.52 17.8902 12.26 18.0002 12 18.0002Z" fill="#CDD7D8"/>
                                <path d="M15.5 17.9999C15.24 17.9999 14.98 17.8899 14.79 17.7099C14.7 17.6199 14.63 17.5099 14.58 17.3799C14.53 17.2599 14.5 17.1299 14.5 16.9999C14.5 16.8699 14.53 16.7399 14.58 16.6199C14.63 16.4899 14.7 16.3799 14.79 16.2899C15.02 16.0599 15.37 15.9499 15.69 16.0199C15.76 16.0299 15.82 16.0499 15.88 16.0799C15.94 16.0999 16 16.1299 16.06 16.1699C16.11 16.1999 16.16 16.2499 16.21 16.2899C16.39 16.4799 16.5 16.7399 16.5 16.9999C16.5 17.2599 16.39 17.5199 16.21 17.7099C16.02 17.8899 15.76 17.9999 15.5 17.9999Z" fill="#CDD7D8"/>
                                <path d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z" fill="#CDD7D8"/>
                                <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#CDD7D8"/>
                                </svg>
                            </div>
                          
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                        </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('Country')"
                        rules="required"
                        vid="country_id"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('Country') }}</label>
                        <select v-model="itemForm.country_id" class="form-select  px-3" >
                          <option selected disabled  >الدولة</option>
                          <option>مصر </option>
                          <option>السعودية</option>
                          <option>سوريا</option>
                        </select>
                    </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('city')"
                        rules="required"
                        vid="city_id"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('city') }}</label>
                        <select v-model="itemForm.city_id" class="form-select  px-3"  >
                          <option selected disabled  >المدينة</option>
                          <option>المنصورة </option>
                          <option>القاهرة</option>
                          <option>الاسكندرية</option>

                        </select>
                    </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('Specialization')"
                        rules="required"
                        vid="field_id"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('Specialization') }}</label>
                        <select v-model="itemForm.field_id" class="form-select  px-3" id="validationCustom04"  required>
                          <option selected disabled  >مجال التخصص</option>
                          <option>فرونت اند  </option>
                          <option>باك اند </option>
                          <option>مفيش حاجه تانيه </option>

                        </select>
                    </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('education-degree')"
                        rules="required"
                        vid="education_degree"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('education-degree') }}</label>
                        <select v-model="itemForm.education_degree" class="form-select  px-3">
                          <option selected disabled  > الدرجة العلمية</option>
                          <option> بكالرويوس  </option>
                          <option> متوسط </option>
                          <option>  حضانه </option>

                        </select>
                    </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('job-position')"
                        rules="required"
                        vid="job_position"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('job-position') }}</label>
                        <input v-model="itemForm.job_position" type="text" class="form-control" >
                        
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('years_experience')"
                        rules="required|numeric"
                        vid="years_experience"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('years_experience') }}</label>
                        <input v-model="itemForm.years_experience" type="text" class="form-control" >
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('about-you')"
                        rules="required"
                        vid="bio"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                            <label class="form-label">{{ $t('about-you') }}</label>
                     <textarea v-model="itemForm.bio" class="form-control" name="" id="" cols="" rows="5" placeholder="نبذة عنك"></textarea>
                    </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>               
                    <div class="col-md-4 w-100 mt-4">
                        <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('attachment')"
                        rules="required|ext:pdf"
                        vid="cv"
                        v-slot="{errors,validate}"
                        >
                        <div class="form-group">

                        <label  class="w-100 position-relative border rounded-2">
                            <input type="file"  @change="uploadFile($event,validate) || validate($event)" class="form-control opacity-0 " required>
                            <svg style="top: 6px;left: 6px;" class="position-absolute" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#CDD7D8"/>
                                <path d="M14.9999 10.2602C14.8099 10.2602 14.6199 10.1902 14.4699 10.0402L11.9999 7.57021L9.52994 10.0402C9.23994 10.3302 8.75994 10.3302 8.46994 10.0402C8.17994 9.75019 8.17994 9.2702 8.46994 8.9802L11.4699 5.9802C11.7599 5.6902 12.2399 5.6902 12.5299 5.9802L15.5299 8.9802C15.8199 9.2702 15.8199 9.75019 15.5299 10.0402C15.3799 10.1902 15.1899 10.2602 14.9999 10.2602Z" fill="#CDD7D8"/>
                                <path d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z" fill="#CDD7D8"/>
                                <path d="M12 18.2302C9.88995 18.2302 7.76995 17.8902 5.75995 17.2202C5.36995 17.0902 5.15995 16.6602 5.28995 16.2702C5.41995 15.8802 5.84996 15.6602 6.23996 15.8002C9.95996 17.0402 14.05 17.0402 17.77 15.8002C18.16 15.6702 18.59 15.8802 18.72 16.2702C18.85 16.6602 18.64 17.0902 18.25 17.2202C16.23 17.9002 14.11 18.2302 12 18.2302Z" fill="#CDD7D8"/>
                            </svg>
                            <p  style="    top: 6px;right: 13px; color: #979797;" class="position-absolute px-2" >
                        السيرة الذاتية  (بحد أقصى 10 ميجا)

                            </p>
                          </label>
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                    </div>
                    <div class="col-md-4 w-100 mt-4">

                        <div class="form-check ">
                            <ValidationProvider 
                        tag="div"
                        class="w-100"
                        :name="$t('terms_use')"
                        rules=""
                        vid="terms_use"
                        v-slot="{errors}"
                        >
                        <div class="form-group">
                           
                            <input v-model="itemForm.terms_use" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                                أؤكد على اني أوافق على 
                                <a href="" class="m-c">
                                    {{$t('terms_use')}}
                                </a>
                            </label>
                        </div>
                            <d-error-input :errors="errors" v-if="errors.length>0"/>
                        </ValidationProvider>
                          </div>
                    </div>
                    <div class="col-12 my-4">
                        <button class="btn btn-main" @click="save" role="button">سجل الان  </button>
                    </div>
                  
                
                </ValidationObserver>
            </div>
            <div class="col-md-6">
                <div class="box">
                    <div class="position-relative">
                        <img style="width: 100%;height: 82rem;" src="/assets/img/Group 289271.png" alt="">
                    </div>

                </div>

            </div>

        </div>
    </div>

</div>
</div>
</template>

<script>
import instructorAPI from '@/services/api/academy/instructor';
export default {
    name: "section-form",
    components: {  },
    data: () => {
        return {
            laoding:false,
            itemForm:{
                name:'',
                email:'',
                phone:'',
                password:'',
                password_confirmation:'',
                identity_id:'',
                gender:'',
                birthday:'',
                country_id:'',
                city_id:'',
                field_id:'',
                education_degree:'',
                job_position:'',
                years_experience:'',
                bio:'',
                cv:null,
                terms_use:false,
            },
            show: false,
            showC: false,
        };
    },
    methods:{
        async save(){
            this.laoding = true;
            let valid = await this.$refs.form.validate();
            if(!valid){
                console.mylog('invalid')
                //return;
            }
            let dataEvt = {
                        icon:true,
                        descriptionClass:'m-c',
                        title:'نشكرك على تسجيلك معنا',
                        description:`سنتواصل معك خلال الايام القليلة القادمة لتأكيد
بيانتك و تأكيد الاشتراك  `,
                        btns:[
                            {title:this.$t('Home'),action:()=>this.router_push('academy-home')}
                        ]
                    }
                    this.showSuccessMsg(dataEvt)
                    let ok=false
                if(ok)
            try {
               let formData =  this.loadObjectToForm(formData,this.itemForm)
                let { data } = await instructorAPI.register(formData)
                if(data.success){
                    let dataEvt = {
                        icon:true,
                        title:'',
                        description:'',
                    }
                    this.showSuccessMsg(dataEvt)
                }
            } catch (error) {
                //
            }
            this.loading = false;
        },
        async uploadFile(evt,validate){
       let resValid = await validate(evt)
       if(!resValid.valid){
        this.itemForm.cv =  null;
                return;
       }
        if (!evt.target.files && !evt.target.files[0]) {
            this.itemForm.cv =  null;
                return;
            }
        this.itemForm.cv = evt.target.files[0];
   
       
},
    }
}
</script>

<style scoped>
.icon-input-end{
    color: #CDD7D8;
    font-size: 23px;
    left: 15px;
}
html[lang="en"] .icon-input-end{
    left: auto;
    right:15px
}
</style>
