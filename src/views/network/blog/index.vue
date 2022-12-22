<template>
  <div style="margin-top: 85px" class="consult">
        <div class="consulting">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-md-6">
                        <h1 class="fs-1 text-white">  المدونة </h1>
                        <p class="text-white">
                            كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
                            كابشن بسيط عن اللقاءات واهميتها في سطرين ببساطة
                        </p>
                        <div>
                            <button @click="addBlog" class="btn bg border text-white" >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.3346 17H10.668C10.1213 17 9.66797 16.5467 9.66797 16C9.66797 15.4533 10.1213 15 10.668 15H21.3346C21.8813 15 22.3346 15.4533 22.3346 16C22.3346 16.5467 21.8813 17 21.3346 17Z" fill="white"/>
                                    <path d="M16 22.3327C15.4533 22.3327 15 21.8793 15 21.3327V10.666C15 10.1193 15.4533 9.66602 16 9.66602C16.5467 9.66602 17 10.1193 17 10.666V21.3327C17 21.8793 16.5467 22.3327 16 22.3327Z" fill="white"/>
                                    <path d="M20.0013 30.3327H12.0013C4.7613 30.3327 1.66797 27.2393 1.66797 19.9993V11.9993C1.66797 4.75935 4.7613 1.66602 12.0013 1.66602H20.0013C27.2413 1.66602 30.3346 4.75935 30.3346 11.9993V19.9993C30.3346 27.2393 27.2413 30.3327 20.0013 30.3327ZM12.0013 3.66602C5.85463 3.66602 3.66797 5.85268 3.66797 11.9993V19.9993C3.66797 26.146 5.85463 28.3327 12.0013 28.3327H20.0013C26.148 28.3327 28.3346 26.146 28.3346 19.9993V11.9993C28.3346 5.85268 26.148 3.66602 20.0013 3.66602H12.0013Z" fill="white"/>
                                </svg>
                                أضف تدوينة 
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div style="overflow: inherit" class="m-auto text-end">
                            <img class="img-fluid" src="/assets/img/Frameass.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="star-cons">
                    <img src="/assets/img/starrrr.png" alt="" />
                </div>
                <div class="star-cons stars">
                    <img src="/assets/img/starsss.png" alt="" />
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <!-- recent blogs-->
            <SectionRecentBlog/>
            <!-- #recent blogs-->
            
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
                            <div class="col-md-4 mt-3 " >
                              <div class="box rounded-3 border">
                                <div class="image">
                                  <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                                </div>
                                <div class="text p-3">
                                  <h5>عنوان المدونة </h5>
                                  <p>
                                    نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي
                                  </p>
                                </div>
                                <div class="date d-flex justify-content-between mx-1 p-3">
                                    <p class="m-c">
                                        ريادة الاعمال
                                    </p>
                                  <p>
                                    10  sep, 2021
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                                      </svg>
                                      
                                  </p>
                    
                                </div>
                    
                              </div>
                              
                    
                            </div>
                            <div class="col-md-4 mt-3 " >
                                <div class="box rounded-3 border">
                                  <div class="image">
                                    <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                                  </div>
                                  <div class="text p-3">
                                    <h5>عنوان المدونة </h5>
                                    <p>
                                      نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي
                                    </p>
                                  </div>
                                  <div class="date d-flex justify-content-between mx-1 p-3">
                                      <p class="m-c">
                                          ريادة الاعمال
                                      </p>
                                    <p>
                                      10  sep, 2021
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                                        </svg>
                                        
                                    </p>
                      
                                  </div>
                      
                                </div>
                                
                      
                              </div>
                              <div class="col-md-4 mt-3 " >
                                <div class="box rounded-3 border">
                                  <div class="image">
                                    <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                                  </div>
                                  <div class="text p-3">
                                    <h5>عنوان المدونة </h5>
                                    <p>
                                      نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي
                                    </p>
                                  </div>
                                  <div class="date d-flex justify-content-between mx-1 p-3">
                                      <p class="m-c">
                                          ريادة الاعمال
                                      </p>
                                    <p>
                                      10  sep, 2021
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                                        </svg>
                                        
                                    </p>
                      
                                  </div>
                      
                                </div>
                                
                      
                              </div>
                              <div class="col-md-4 mt-3 " >
                                <div class="box rounded-3 border">
                                  <div class="image">
                                    <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                                  </div>
                                  <div class="text p-3">
                                    <h5>عنوان المدونة </h5>
                                    <p>
                                      نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي
                                    </p>
                                  </div>
                                  <div class="date d-flex justify-content-between mx-1 p-3">
                                      <p class="m-c">
                                          ريادة الاعمال
                                      </p>
                                    <p>
                                      10  sep, 2021
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                                        </svg>
                                        
                                    </p>
                      
                                  </div>
                      
                                </div>
                                
                      
                              </div>
                              <div class="col-md-4 mt-3 " >
                                <div class="box rounded-3 border">
                                  <div class="image">
                                    <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                                  </div>
                                  <div class="text p-3">
                                    <h5>عنوان المدونة </h5>
                                    <p>
                                      نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي
                                    </p>
                                  </div>
                                  <div class="date d-flex justify-content-between mx-1 p-3">
                                      <p class="m-c">
                                          ريادة الاعمال
                                      </p>
                                    <p>
                                      10  sep, 2021
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                                        </svg>
                                        
                                    </p>
                      
                                  </div>
                      
                                </div>
                                
                      
                              </div>
                              <div class="col-md-4 mt-3 " >
                                <div class="box rounded-3 border">
                                  <div class="image">
                                    <img class="w-100" src="/assets/img/Rectangle 1768.png" alt="" height="184">
                                  </div>
                                  <div class="text p-3">
                                    <h5>عنوان المدونة </h5>
                                    <p>
                                      نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي
                                    </p>
                                  </div>
                                  <div class="date d-flex justify-content-between mx-1 p-3">
                                      <p class="m-c">
                                          ريادة الاعمال
                                      </p>
                                    <p>
                                      10  sep, 2021
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                                        </svg>
                                        
                                    </p>
                      
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


        </div>
        <portal to="body">
        <AddBlogDialog  />
        </portal>
    </div>
</template>

<script>
import SectionRecentBlog from './parts/section-recent-blog/index.vue'
import AddBlogDialog from './parts/dialogs/add-blog.vue'
export default {
name:'network-blogs',
components:{
    SectionRecentBlog,
    AddBlogDialog
},
data:()=>({

}),
methods:{
  addBlog(){
    window.EventBus.fire('add-dialog-open-dialog')
  }
}
}
</script>

<style>

</style>