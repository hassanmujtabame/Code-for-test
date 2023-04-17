<template>
  <div style="margin-top: 85px " class="consult">
    <div class="bg-body-page">
        <div class="container" style="background-color: white;">
            <div class="box border shadow p-4">

                <div class="row align-items-center">
                    <div class=" col-12 col-md-4 mt-3">
                        <h4 class="fw-bold">
                            المشاريع 
                        </h4>
                    </div>
                    <div class=" col-12 col-md-5 mt-3">
                        <label for="" class="position-relative w-100">
                            <input class="form-control py-3 px-5" type="text" placeholder=" أبحث  في قائمة الاختبارات ">
                            <p style="    top: 25%;
                            right: 7px;
                        " class="position-absolute">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#979797"/>
                                    <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#979797"/>
                                    </svg>
                                    
                            </p>
                        </label>
                    </div>
                    <div  class=" col-12 col-md-3 mt-3 position-relative">
                        <select class="form-select form-select-lg mb-3  py-3 m-c" aria-label=".form-select-lg example">
                            <option selected> حسب الاحدث  </option>
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
                <ul class="nav nav-pills  mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item col-12 col-md-3" role="presentation">
                      <button class="nav-link  border t-c m-auto active" id="pills-settings-projects-tab" data-bs-toggle="pill" data-bs-target="#pills-settings-projects" type="button" role="tab" aria-controls="pills-settings-projects" aria-selected="true">ظبط اعدادات المشاريع  </button>
                    </li>
                    <li class="nav-item col-12 col-md-3" role="presentation">
                      <button class="nav-link  border t-c m-auto" id="pills-project-need-revision-tab" data-bs-toggle="pill" data-bs-target="#pills-project-need-revision" type="button" role="tab" aria-controls="pills-project-need-revision" aria-selected="false">مشاريع تحتاج مراجعتك </button>
                    </li>
                    <li class="nav-item col-12 col-md-3" role="presentation">
                      <button class="nav-link  border t-c m-auto" id="pills-courses-has-projects-tab" data-bs-toggle="pill" data-bs-target="#pills-courses-has-projects" type="button" role="tab" aria-controls="pills-courses-has-projects" aria-selected="false"> دورات تحتوي الى مشاريع</button>
                    </li>
                    
                    <li class="nav-item col-12 col-md-3" role="presentation">
                      <button class="nav-link  border t-c m-auto" id="pills-students-list-tab" data-bs-toggle="pill" data-bs-target="#pills-students-list" type="button" role="tab" aria-controls="pills-students-list" aria-selected="false" >  قائمة الطلاب  </button>
                    </li>
                  </ul>

                     <div class="tab-content" id="pills-tabContent">
                   <!--settings-->
                   <SettingsExams />
                   <!--courses-has-projects-->
                   <coursesHasExams />
                    <!--project-need-revision-->
                    <studentsPassExams />
                    <!--students-list-->
                    <studentsFailsExams />
                    </div>
                  </div>
            </div>
            </div>
  </div>

</template>

<script>
import SettingsExams from './tabs/settings-projects/index.vue'
import coursesHasExams from './tabs/courses-has-projects/index.vue'
import studentsPassExams from './tabs/project-need-revision/index.vue'
import studentsFailsExams from './tabs/students-list/index.vue'
export default {
  name: 'your-certifcates-page',
  components:{
    SettingsExams,
    coursesHasExams,
    studentsPassExams,
    studentsFailsExams,
  }
}
</script>

<style>

</style>