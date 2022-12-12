<template>
  <div class="container mt-5">
            <div class="d-flex justify-content-between">
                <div>
                    <h2>
                        أحدث النماذج
                    </h2>
                </div>

            </div>
            <div class="row mt-3">
               
                  <div v-for="(item,i) in items" :key="i" class="col-md-3 " >
                    <card-vue :title="item.title" :img="item.img" 
                    :value="item.value"       ></card-vue>   
                  </div>
           
                
            </div>
            <div class="mt-5 blog">
                <ul class="nav nav-pills mb-3 rounded-2 align-items-center" id="pills-tab" role="tablist">
                    <h5 class="m-c fw-bolder m-0">
                        تصنيف المواضيع :
                    </h5>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">الكل</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ريادة الاعمال</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">المالية</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">التطوير</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">الادارة</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">التصميم</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">التدريب</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">الفنون</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">القانون</button>
                      </li>
             
                </ul>
                <div class="row align-items-center">
                    <div class="col-12 col-md-6">

                        <h3 class="t-c ">
                            تدوينات ريادة الاعمال 
                        </h3>
                    </div>
                    <div class="col-12 col-md-6 d-flex gap-2">
                        <div class=" col-12 col-md-6 mt-3">
                            <label for="" class="position-relative">
                                <input class="form-control py-3 px-5" type="text" placeholder="ابحث عن خدمة ">
                                <p style="top: 25%;right: 7px;" class="position-absolute">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#979797"/>
                                        <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#979797"/>
                                        </svg>
                                        
                                </p>
                            </label>
                        </div>
                        <div  class=" col-12 col-md-6 mt-3 position-relative">
                            <select class="form-select form-select-lg mb-3  py-3" aria-label=".form-select-lg example">
                                <option selected>الاقل سعرا   </option>
                                <option value="1">الاعلى سعرا</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                              <p style="    top: -13px;
                              right: 24px;
                              background: white;
                          " class="position-absolute">
                                ترتيب حسب 
                              </p>
                        </div>

                    </div>

                </div>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="row mt-3">
                            <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                              <div class="col-md-3  mt-3" >
                                <div class="box rounded-3 border">
                                  <div class="box ">
                                      <div class="">
                                          <img class="w-100"  src="/assets/img/Mask Group 1.png" alt=""  height="186">
                                      </div>
                                      <div class="text-start bg-white  p-2">
                                          <h6>  خطة العمل ودراسة الجدوى المالية </h6>
                                          <div>
                                            <small class="m-c">
                                                عدد التنزيلات
                                            </small>
                                            <span>
                                                |
                                            </span>
                                            <small class="t-c">
                                                500
                                            </small>
                                        </div>
                          
              
                                      </div>
              
                                  </div>
                                </div>            
                              </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                  </div>
            </div>
            <div class="mt-5">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link"
                        ><svg
                          width="10"
                          height="15"
                          viewBox="0 0 10 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.90013 14.3899C1.58346 14.3899 1.2668 14.2733 1.0168 14.0233C0.533464 13.5399 0.533464 12.7399 1.0168 12.2566L6.0168 7.25661L1.0168 2.25661C0.533464 1.77327 0.533464 0.973275 1.0168 0.489941C1.50013 0.00660808 2.30013 0.00660808 2.78346 0.489941L8.6668 6.37328C9.15013 6.85661 9.15013 7.65661 8.6668 8.13994L2.78346 14.0233C2.53346 14.2733 2.2168 14.3899 1.90013 14.3899Z"
                            fill="#CDD7D8"
                          />
                        </svg>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link border-0" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#"
                        ><svg
                          width="10"
                          height="15"
                          viewBox="0 0 10 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.09987 14.3899C7.7832 14.3899 7.46653 14.2733 7.21653 14.0233L1.3332 8.13994C0.84987 7.65661 0.84987 6.85661 1.3332 6.37328L7.21653 0.489941C7.69987 0.00660808 8.49987 0.00660808 8.9832 0.489941C9.46654 0.973275 9.46654 1.77327 8.9832 2.25661L3.9832 7.25661L8.9832 12.2566C9.46654 12.7399 9.46654 13.5399 8.9832 14.0233C8.74987 14.2733 8.4332 14.3899 8.09987 14.3899Z"
                            fill="#CDD7D8"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
        </div>
</template>
<script>
import cardVue from './card.vue'
export default {
 name:'recent-models',
 components:{
    cardVue
 },
 data:()=>({
    items:[
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500},
        {title:'خطة العمل ودراسة الجدوى المالية',img:'/assets/img/Mask Group 1.png',value:500}
    ]
 })
}
</script>

<style>

</style>