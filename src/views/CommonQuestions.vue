<template>
   <div style="margin-top: 85px " class="consult">
        <div class="consulting ">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">الاسئلة الشائعة</h1>
                        <p class="text-white">
                            هنا تجد كل الاسئلة التي تدور في ذهنك و كيف تضمن حقوقك في المنصة اذا احتجت الى سؤال أخر 
                            <router-link :to="'/contact-us'" class="text-dark fw-bolder fs-3">
                                فتواصل معنا
                            </router-link>   
                            </p>                                     
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit;" class=" m-auto text-end">
                            <img  src="/assets/img/Frame.png" alt="" >
                        </div>

                    </div>

                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="">
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="">
                </div>

            </div>
        </div>
            <div class="container mt-5">
                <div class="row ">
                    <div  class="col-md-4 mt-2" >
                        <div style="background-color:#F2631C ;" class="  box m-auto text-center text-white p-3 rounded-2">
                            الاسئلة العامة 
                        </div>
                    </div>
                    <div  class="col-md-4 mt-2" >
                        <div style="background-color:#2C98B3 ;" class="  box m-auto text-center text-white p-3 rounded-2">

                            أسئلة مقدم الخدمة                        </div>
                    </div>
                    <div  class="col-md-4 mt-2" >
                        <div style="background-color:#FFBC00 ;" class="  box m-auto text-center text-white p-3 rounded-2">

                            أسئلة العميل
                        </div>
                    </div>
    
                </div>

                <div class="mt-5">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <h3 class="fw-bolder">
                            الاسئلة الشائعة العامة
                        </h3>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ما هي مقدمي خدمات رياديات؟
                            </button>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                كيف أضمن حقوقي؟
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ماذا لو لم أكن راضياً عن مستوى الخدمة؟ 
                            </button>
                          </h2>
                          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                            <h2 class="accordion-header" id="flush-headingFour">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                ماذا سيحدث بعد نشر مشروعي؟
                              </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                          </div>
                      </div>
                </div>
                
                <div class="mt-5">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <h3 class="fw-bolder">الاسئلة الشائعة لمقدم الخدمة</h3>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingOne-serv">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-serv" aria-expanded="false" aria-controls="flush-collapseOne-serv">
                                ما هي مقدمي خدمات رياديات؟
                            </button>
                          </h2>
                          <div id="flush-collapseOne-serv" class="accordion-collapse collapse" aria-labelledby="flush-headingOne-serv" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingTwo-serv">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-serv" aria-expanded="false" aria-controls="flush-collapseTwo-serv">
                                كيف أضمن حقوقي؟
                            </button>
                          </h2>
                          <div id="flush-collapseTwo-serv" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo-serv" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingThree-serv">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-serv" aria-expanded="false" aria-controls="flush-collapseThree-serv">
                                ماذا لو لم أكن راضياً عن مستوى الخدمة؟ 
                            </button>
                          </h2>
                          <div id="flush-collapseThree-serv" class="accordion-collapse collapse" aria-labelledby="flush-headingThree-serv" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                            <h2 class="accordion-header" id="flush-headingFour-serv">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-serv" aria-expanded="false" aria-controls="flush-collapseFour-serv">
                                ماذا سيحدث بعد نشر مشروعي؟
                              </button>
                            </h2>
                            <div id="flush-collapseFour-serv" class="accordion-collapse collapse" aria-labelledby="flush-headingFour-serv" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                          </div>
                      </div>
                </div>
                
                <div class="mt-5">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <h3 class="fw-bolder">
                            الاسئلة الشائعة للعميل
                        </h3>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingOne-clintet">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-clintet" aria-expanded="false" aria-controls="flush-collapseOne-clintet">
                                ما هي مقدمي خدمات رياديات؟
                            </button>
                          </h2>
                          <div id="flush-collapseOne-clintet" class="accordion-collapse collapse" aria-labelledby="flush-headingOne-clintet" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingTwo-clintet">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-clintet" aria-expanded="false" aria-controls="flush-collapseTwo-clintet">
                                كيف أضمن حقوقي؟
                            </button>
                          </h2>
                          <div id="flush-collapseTwo-clintet" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo-clintet" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                          <h2 class="accordion-header" id="flush-headingThree-clintet">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-clintet" aria-expanded="false" aria-controls="flush-collapseThree-clintet">
                                ماذا لو لم أكن راضياً عن مستوى الخدمة؟ 
                            </button>
                          </h2>
                          <div id="flush-collapseThree-clintet" class="accordion-collapse collapse" aria-labelledby="flush-headingThree-clintet" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                          </div>
                        </div>
                        <div class="accordion-item border-bottom m-2">
                            <h2 class="accordion-header" id="flush-headingFour-clintet">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-clintet" aria-expanded="false" aria-controls="flush-collapseFour-clintet">
                                ماذا سيحدث بعد نشر مشروعي؟
                              </button>
                            </h2>
                            <div id="flush-collapseFour-clintet" class="accordion-collapse collapse" aria-labelledby="flush-headingFour-clintet" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
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