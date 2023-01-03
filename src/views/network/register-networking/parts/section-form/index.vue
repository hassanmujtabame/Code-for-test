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
                        <div class="box">
                            <div class="position-relative">
                                <img style="width: 100%;" src="/assets/img/Frame 5001.png" alt="">
                                <div style="" class="position-absolute img-bg-contact">
                                    <img class="w-100" src="/assets/img/logo-white.png" alt="">

                                </div>
                                <div style="top: 68%; left: 27%;" class="position-absolute icon-contact">
                                    <a href="" class="mx-2">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_214_8338" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="-1" y="0" width="41" height="41">
                                                <g clip-path="url(#clip0_214_8338)">
                                                    <path
                                                        d="M37.1146 0.000976563H2.88428C1.29095 0.000976563 -0.000549316 1.29248 -0.000549316 2.8858V37.1161C-0.000549316 38.7095 1.29095 40.001 2.88428 40.001H37.1146C38.7079 40.001 39.9995 38.7095 39.9995 37.1161V2.8858C39.9995 1.29248 38.7079 0.000976562 37.1146 0.000976562V0.000976563ZM29.1312 15.5948C29.1401 15.7917 29.1443 15.9894 29.1443 16.1881C29.1443 22.2541 24.527 29.249 16.0831 29.2493H16.0834H16.0831C13.4907 29.2493 11.0782 28.4894 9.04669 27.1873C9.40588 27.2297 9.77148 27.2507 10.1417 27.2507C12.2925 27.2507 14.2719 26.5171 15.8433 25.2857C13.8337 25.2485 12.1393 23.9213 11.5546 22.0972C11.8345 22.1509 12.1223 22.1802 12.4174 22.1802C12.8364 22.1802 13.2422 22.1238 13.628 22.0185C11.5275 21.598 9.94513 19.7416 9.94513 17.5187C9.94513 17.4979 9.94513 17.4793 9.94574 17.4601C10.5643 17.804 11.2717 18.0109 12.0249 18.0341C10.7923 17.2117 9.98206 15.8057 9.98206 14.213C9.98206 13.3719 10.2094 12.584 10.6037 11.9056C12.8675 14.6833 16.2507 16.5101 20.066 16.702C19.9872 16.3657 19.9467 16.0154 19.9467 15.6553C19.9467 13.1211 22.0026 11.0651 24.5377 11.0651C25.8582 11.0651 27.0508 11.6233 27.8885 12.5156C28.9344 12.3093 29.9164 11.9272 30.8036 11.4014C30.4603 12.4729 29.7327 13.3719 28.7849 13.9405C29.7135 13.8294 30.5985 13.5831 31.421 13.2175C30.8066 14.1382 30.0275 14.947 29.1312 15.5948Z"
                                                        fill="white" />
                                                </g>
                                            </mask>
                                            <g mask="url(#mask0_214_8338)">
                                                <circle cx="19.9998" cy="20.001" r="20" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_214_8338">
                                                    <rect width="40" height="40" fill="white"
                                                        transform="translate(-0.000213623 0.000976562)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="" class="mx-2">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_214_8338" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="-1" y="0" width="41" height="41">
                                                <g clip-path="url(#clip0_214_8338)">
                                                    <path
                                                        d="M37.1146 0.000976563H2.88428C1.29095 0.000976563 -0.000549316 1.29248 -0.000549316 2.8858V37.1161C-0.000549316 38.7095 1.29095 40.001 2.88428 40.001H37.1146C38.7079 40.001 39.9995 38.7095 39.9995 37.1161V2.8858C39.9995 1.29248 38.7079 0.000976562 37.1146 0.000976562V0.000976563ZM29.1312 15.5948C29.1401 15.7917 29.1443 15.9894 29.1443 16.1881C29.1443 22.2541 24.527 29.249 16.0831 29.2493H16.0834H16.0831C13.4907 29.2493 11.0782 28.4894 9.04669 27.1873C9.40588 27.2297 9.77148 27.2507 10.1417 27.2507C12.2925 27.2507 14.2719 26.5171 15.8433 25.2857C13.8337 25.2485 12.1393 23.9213 11.5546 22.0972C11.8345 22.1509 12.1223 22.1802 12.4174 22.1802C12.8364 22.1802 13.2422 22.1238 13.628 22.0185C11.5275 21.598 9.94513 19.7416 9.94513 17.5187C9.94513 17.4979 9.94513 17.4793 9.94574 17.4601C10.5643 17.804 11.2717 18.0109 12.0249 18.0341C10.7923 17.2117 9.98206 15.8057 9.98206 14.213C9.98206 13.3719 10.2094 12.584 10.6037 11.9056C12.8675 14.6833 16.2507 16.5101 20.066 16.702C19.9872 16.3657 19.9467 16.0154 19.9467 15.6553C19.9467 13.1211 22.0026 11.0651 24.5377 11.0651C25.8582 11.0651 27.0508 11.6233 27.8885 12.5156C28.9344 12.3093 29.9164 11.9272 30.8036 11.4014C30.4603 12.4729 29.7327 13.3719 28.7849 13.9405C29.7135 13.8294 30.5985 13.5831 31.421 13.2175C30.8066 14.1382 30.0275 14.947 29.1312 15.5948Z"
                                                        fill="white" />
                                                </g>
                                            </mask>
                                            <g mask="url(#mask0_214_8338)">
                                                <circle cx="19.9998" cy="20.001" r="20" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_214_8338">
                                                    <rect width="40" height="40" fill="white"
                                                        transform="translate(-0.000213623 0.000976562)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="" class="mx-2">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_214_8326" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="-1" y="0" width="41" height="41">
                                                <g clip-path="url(#clip0_214_8326)">
                                                    <path
                                                        d="M37.1149 0.000976563H2.88451C1.29118 0.000976563 -0.000320435 1.29248 -0.000320435 2.8858V37.1161C-0.000320435 38.7095 1.29118 40.001 2.88451 40.001H37.1149C38.7082 40.001 39.9997 38.7095 39.9997 37.1161V2.8858C39.9997 1.29248 38.7082 0.000976562 37.1149 0.000976562V0.000976563ZM14.1879 30.2354H9.317V15.5811H14.1879V30.2354ZM11.7526 13.5801H11.7209C10.0863 13.5801 9.02922 12.4549 9.02922 11.0486C9.02922 9.61066 10.1187 8.5166 11.785 8.5166C13.4512 8.5166 14.4766 9.61066 14.5083 11.0486C14.5083 12.4549 13.4512 13.5801 11.7526 13.5801ZM31.7514 30.2354H26.8811V22.3957C26.8811 20.4255 26.1758 19.0818 24.4134 19.0818C23.0679 19.0818 22.2665 19.9882 21.9144 20.8631C21.7856 21.1762 21.7541 21.6138 21.7541 22.0518V30.2354H16.8835C16.8835 30.2354 16.9473 16.9559 16.8835 15.5811H21.7541V17.656C22.4014 16.6575 23.5596 15.2372 26.1438 15.2372C29.3484 15.2372 31.7514 17.3316 31.7514 21.8326V30.2354Z"
                                                        fill="white" />
                                                </g>
                                            </mask>
                                            <g mask="url(#mask0_214_8326)">
                                                <circle cx="19.9998" cy="20.001" r="20" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_214_8326">
                                                    <rect width="40" height="40" fill="white"
                                                        transform="translate(-0.000213623 0.000976562)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a href="" class="mx-2">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_214_8323" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                                x="-1" y="0" width="41" height="41">
                                                <circle cx="19.9998" cy="20.001" r="20" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_214_8323)">
                                                <path
                                                    d="M29.3297 0.000976801L20.6652 -1.99902L11.9964 0.000976801C9.79635 0.000976801 -0.00151563 8.80098 -0.00151563 11.001L-2.66818 26.6676C-2.66818 28.8676 9.79774 40.001 11.9977 40.001H29.3297C31.5297 40.001 38.6652 32.8676 38.6652 30.6676L42.6652 12.6676C42.6652 10.4676 31.5297 0.000976801 29.3297 0.000976801ZM27.3297 4.00098V10.001H23.3297C22.1297 10.001 21.3297 10.801 21.3297 12.001V16.001H27.3297V22.001H21.3297V36.001H15.3297V22.001H11.3297V16.001H15.3297V11.001C15.3297 7.20098 18.5297 4.00098 22.3297 4.00098H27.3297Z"
                                                    fill="white" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'form-register'
}
</script>

<style>

</style>