<template>
<div id="list-item-7">
                <div class="box border mt-5 ">
                    <h3 class="border-bottom py-2 t-c px-3">
                        اعدادات الاشعارات
                    </h3>
                    <form action="">
                        <div class=" p-3">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="box">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                إشعارات الدورات 
                                            </label>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="box">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                إشعارات الورش واللقاءات 
                                            </label>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="box">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                إشعارات المرفقات 
                                            </label>
                                          </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="box">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                إشعارات المدونة
                                            </label>
                                          </div>
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