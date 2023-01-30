<template>
     <div class="container">
            <div class="box bg-white    rounded-3">
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" src="/assets/img/pot_3_.png" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <h1 class="fw-bolder ">
                                أعادة تعين كلمة السر                                                                                                                                        </h1>
                            <p>أختر كلمة سر قوية وسهلة الحفظ   
                            </p>
             
                            <form class="row g-3 needs-validation " novalidate>
                        
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
                                        placeholder="    تاكيد كلمة السر" required>
                                        <span
                                        style="top: 12px;left: 15px;color: #CDD7D8;font-size: 23px;" toggle="#password-field2"
                                        class="fa-regular fa-eye toggle-password position-absolute">
                                    </span>
                                </div>
                                <div class="col-12 text-center ">
                                    <button class="btn btn-main  " type="submit"  data-bs-toggle="modal" href="#exampleModalToggle" role="button">  
                                        <router-link :to="getRouteLocale('forget-password-finish')" class="text-white">
                                            تغير كلمة السر
                                        </router-link>  </button>
                                </div>
                                
                            </form>
                        </div>

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