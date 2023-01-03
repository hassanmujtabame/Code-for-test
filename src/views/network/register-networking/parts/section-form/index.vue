<template>
    <div style="background-color: #F6F8F9;" class="mt-5 p-4">
        <div class="container">
            <div class="box bg-white  p-3  rounded-4">
                <div class="row align-items-center ">
                    <div class="col-md-6">
                        <h2 id="register-form">
                            {{ $t('Register-with-us-as-a-partner') }}
                        </h2>
                        <p>
                            {{ $t('Enter-the-following-data-accurately-partner-with-us') }}
                        </p>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4 w-100">
                                <input type="text" class="form-control" id="validationCustom03"
                                    :placeholder="$t('company-name')" required>

                            </div>

                            <div class="col-md-4 w-100">
                                <input type="email" class="form-control" id="validationCustom03"
                                    :placeholder="$t('Email')" required>
                            </div>
                            <div class="col-md-4 w-100">
                                <input type="number" class="form-control" id="validationCustom03"
                                    :placeholder="$t('Phone')" required>


                            </div>
                            <div class="col-md-4 w-100 position-relative">
                                <input id="password-field" type="password" class="form-control  "
                                    :placeholder="$t('Password')" required>
                                <span toggle="#password-field"
                                    class="fa-regular fa-eye toggle-password position-absolute eye-password-icon">
                                </span>
                            </div>
                            <div class="col-md-4 w-100 position-relative">
                                <input id="password-field2" type="password" class="form-control  "
                                    :placeholder="$t('Password_confirm')" required>
                                <span toggle="#password-field2"
                                    class="fa-regular fa-eye toggle-password position-absolute eye-password-icon">
                                </span>
                            </div>
                            <div class="col-md-4 w-100">
                                <input type="text" class="form-control" id="validationCustom03"
                                    placeholder="   رابط الموقع الالكتروني الخاص بالشركة" required>
                            </div>
                            <div class="col-md-4 w-100">
                                <select class="form-select px-3" id="validationCustom04" required>
                                    <option selected disabled>مجال التخصص</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>

                                </select>
                            </div>
                            <div class="col-md-4 w-100">
                                <input type="text" class="form-control px-2" id="validationCustom03"
                                    :placeholder="$t('provided-services')" required>
                            </div>
                            <div class="col-md-4 w-100">

                                <textarea name="" class="form-control px-2" id="validationCustom03" cols="30" rows="5"
                                    placeholder="ماذا ستقدم لرياديات ؟"></textarea>
                            </div>
                            <div class="col-md-4 w-100">
                                <label class="w-100 position-relative border rounded-2">
                                    <input type="file" id="validationCustom03" class="form-control opacity-0 " required>
                                    <svg style="    top: 6px;
                                        left: 6px;" class="position-absolute" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                            fill="#CDD7D8" />
                                        <path
                                            d="M14.9999 10.2602C14.8099 10.2602 14.6199 10.1902 14.4699 10.0402L11.9999 7.57021L9.52994 10.0402C9.23994 10.3302 8.75994 10.3302 8.46994 10.0402C8.17994 9.75019 8.17994 9.2702 8.46994 8.9802L11.4699 5.9802C11.7599 5.6902 12.2399 5.6902 12.5299 5.9802L15.5299 8.9802C15.8199 9.2702 15.8199 9.75019 15.5299 10.0402C15.3799 10.1902 15.1899 10.2602 14.9999 10.2602Z"
                                            fill="#CDD7D8" />
                                        <path
                                            d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                                            fill="#CDD7D8" />
                                        <path
                                            d="M12 18.2302C9.88995 18.2302 7.76995 17.8902 5.75995 17.2202C5.36995 17.0902 5.15995 16.6602 5.28995 16.2702C5.41995 15.8802 5.84996 15.6602 6.23996 15.8002C9.95996 17.0402 14.05 17.0402 17.77 15.8002C18.16 15.6702 18.59 15.8802 18.72 16.2702C18.85 16.6602 18.64 17.0902 18.25 17.2202C16.23 17.9002 14.11 18.2302 12 18.2302Z"
                                            fill="#CDD7D8" />
                                    </svg>
                                    <p style="top: 6px;right: 13px; color:#979797;" class="position-absolute px-2">
                                        السجل التجاري (بحد أقصى 10 ميجا)
                                    </p>


                                </label>
                            </div>
                            <div class="col-12 m-2 text-end">
                                <button class="btn btn-main  " type="submit" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" role="button"> {{ $t('Register-now') }} </button>
                            </div>

                        </form>

                    </div>
                    <div class="col-md-6">
                        <!-- image box-->
                        <ImageBox />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageBox from './image-box.vue'
export default {
    name: 'form-register',
    components:{
        ImageBox
    },
    data:()=>{
        return {
            itemForm:{
                company_name:'',
                website:'',
                services:'',
                category_id:'',
                description:'',
                pdf:''
            }
        }
    }
}
</script>

<style>

</style>