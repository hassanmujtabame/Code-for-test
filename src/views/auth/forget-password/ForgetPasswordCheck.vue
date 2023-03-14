<template>
          <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="" class="text-center " >
                                 <img class="" src="/assets/img/pot_2_.png" alt="" width="320" height="220">
                        </div>
                        <div class="">

                            <h1 class="fw-bolder ">
                                أكتب الرمز 
                                                                                                                                        </h1>
                            <p>
                                تلقيت رمز الاستعادة على البريد التالي  
                                                                <span>
                                    xxxxxxx@gmail.com
                                </span>
                            </p>
                            <p>
                                لم يصلك الرمز؟
                                <a href="" class="m-c">
                                    أعد الارسال
                                </a>
                            </p>
                            <form class="row g-3 needs-validation " novalidate>
                        
    
                                <div class="col-md-4 w-100">
                                    <input type="text" class="form-control" id="validationCustom01"
                                        placeholder="   رمز استعادة كلمة السر" required>
                                    
                                    
                                </div>
    
                         
                                
                                <div class="col-12 text-center ">
                                    <button class="btn btn-main" type="submit"  data-bs-toggle="modal" href="#exampleModalToggle" role="button">  
                                        <router-link :to="getRouteLocale('register-finish')" class="text-white">
                                            أستمر
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