<template>
  <div id="list-item-4">
                <div class="box border mt-5 ">
                    <h3 class="border-bottom py-2 t-c px-3">
                        معلومات مهنية
                    </h3>
                    <form action="">
                        <div class=" p-3">
                                <div class="row align-items-start ">
                                    <label class="col-md-3 m-c fs-6 fw-bolder">
                              
                                            
                                            
                                            المسمى الوظيفي:

                                    </label>
                                    <div class="col-md-9 row mb-3 ">
                                    
                                            <div class="">
                                                <input type="text" class="form-control" placeholder="   مسماك الوظيفي ( مهندس - طبيب- مصمم - رائد اعمال)">
                                            </div>
                                  
                                    </div>
                                

                                </div>
                                <div class="row  align-items-start">
                                    <label class="col-md-3 m-c fs-5 fw-bolder">
                              
                                            
                                            المجال :

                                    </label>
                                    <div class="col-md-9 row">
                                        <div class="w-100 ">

                                            <div class="  position-relative mb-3 ">
                                                <select name="" id="" class="form-control p-2" >
                                                    <option value="" class="t-c " selected>  حدد مجالك</option>
                                                    <option value="">ذكر </option>
                                                    <option value="">انثى</option>
                                                </select>
                                                <div style="    top: 7px;
                                                left: 10px;" class="position-absolute">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" fill="#737373"/>
                                                        </svg>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                

                                    </div>

                            </div>
                                <div class="row align-items-start ">
                                    <label class="col-md-3 m-c fs-5 fw-bolder">
                                    
                                            
                                            
                                            
                                        سنوات الخبرة :

                                    </label>
                                    <div class="col-md-9 row mb-3 ">
                                    
                                            <div class="">
                                                <input type="text" class="form-control" placeholder="   سوات الخبرة">
                                            </div>
                                  
                                    </div>
                                

                                </div>
                             
                              
                        </div>
                    </form>
                    <div class="m-auto text-center p-3">
                        <button class="btn-main">
                            {{$t('save')}}
                        </button>
                    </div>
               </div>  
            </div>
</template>

<script>
export default {
 name:'list-item'
}
</script>

<style>

</style>