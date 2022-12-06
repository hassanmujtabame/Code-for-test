<template>
      <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="top: 17px;left: 53%;" class="position-absolute form-loging">
                            <h6>لديك حساب بالفعل؟  
                                <router-link :to="'/login'" class="m-c">
                                  سجل دخولك الان
                                </router-link>
                            </h6>
                        </div>
                        <h1 class="fw-bolder">مرحبا بك معنا</h1>
                        <p>انشئ حساب جديد وأنضمي الى عالم رياديات</p>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4 w-100">
                                <input type="text" class="form-control" id="validationCustom03"
                                    placeholder="الاسم بالكامل" required>
                            </div>

                            <div class="col-md-4 w-100">
                                <input type="email" class="form-control" id="validationCustom03"
                                    placeholder=" البريد الالكتروني" required>
                            </div>

                            <div class="col-md-4 w-100">
                                <input type="number" class="form-control" id="validationCustom03"
                                    placeholder="  رقم الجوال" required>
                            </div>
                            <div class="col-md-4 w-100 position-relative">
                                <input id="password-field"  type="password" class="form-control  "
                                    placeholder="   كلمة السر" required>
                                    <span
                                    style="    top: 12px;
                                    left: 15px;
                                    color: #CDD7D8;
                                    font-size: 23px;
                                " toggle="#password-field"
                                    class="fa-regular fa-eye toggle-password position-absolute">
                                </span>
                            </div>
                            <div class="col-md-4 w-100 position-relative">
                                <input id="password-field2"  type="password" class="form-control  "
                                    placeholder="تاكيد كلمة السر" required>
                                    <span
                                    style="    top: 12px;
                                    left: 15px;
                                    color: #CDD7D8;
                                    font-size: 23px;
                                " toggle="#password-field2"
                                    class="fa-regular fa-eye toggle-password position-absolute">
                                </span>
                            </div>
             
                            <div class="col-12 text-center">
                                <button class="btn btn-main  " type="submit"  data-bs-toggle="modal" href="#exampleModalToggle" role="button"> أشتركي الان  </button>
                            </div>
                            <div>
                                <p>
                                بانشاءك حساب جديد، انت توافق على
                                    <a href="" class="m-c">
                                        شروط الاستخدام وسياسة الخصوصيه
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div class=" col-12 col-md-6">
                        <div class="box">
                            <img src="/assets/svg/riadiat-green-card.svg"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>