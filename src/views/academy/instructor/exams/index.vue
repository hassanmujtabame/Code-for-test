<template>
  <div style="margin-top: 85px; background-color: #fafafa" class="consult">
    <div>
      <div class="container">
        <div class="p-4">
          <div class="row align-items-center mb-3">
            <div class="col-12 col-md-3 mt-3">
              <h4 class="text-cairo">الاختبارت</h4>
              <router-link
                :to="getRouteLocale('academy-instructor-exams-settings')"
              >
                <p class="exams-settings text-cairo">
                  <i class="fa-solid fa-gear"></i>
                  {{ $t("adjust-exams-settings") }}
                </p>
              </router-link>
            </div>
            <div class="col-12 col-md-4 mt-3">
              <label for="" class="position-relative w-100">
                <input
                  class="form-control fs-r-12 py-3 px-5"
                  type="text"
                  placeholder=" أبحث  في قائمة الاختبارات "
                />
                <p style="top: 25%; right: 7px" class="position-absolute">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="#979797"
                    />
                    <path
                      d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                      fill="#979797"
                    />
                  </svg>
                </p>
              </label>
            </div>
            <div class="col-12 col-md-3 mt-3 position-relative">
              <select
                class="form-select form-select-lg fs-r-12 py-3 m-c"
                aria-label=".form-select-lg example"
              >
                <option selected>حسب الاحدث</option>
                <option value="1">الاعلى سعرا</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <p
                style="top: -13px; right: 24px; background: white"
                class="position-absolute"
              >
                ترتيب حسب
              </p>
            </div>
            <button
              @click="addItem"
              class="py-3 btn col-md-2 btn-customer d-flex align-items-center gap-2"
            >
              <i class="fa-solid fa-plus"></i>{{ $t("add-exam") }}
            </button>
          </div>
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item col-12 col-md-4 px-2" role="presentation">
              <button
                class="w-100 nav-link border t-c m-auto py-3 active"
                id="pills-courses-has-exams-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-courses-has-exams"
                type="button"
                role="tab"
                aria-controls="pills-courses-has-exams"
                aria-selected="true"
              >
                دورات تحتوى على اختبارت
              </button>
            </li>
            <li class="nav-item col-12 col-md-4 px-2" role="presentation">
              <button
                class="w-100 nav-link border t-c m-auto py-3"
                id="pills-students-pass-exams-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-students-pass-exams"
                type="button"
                role="tab"
                aria-controls="pills-students-pass-exams"
                aria-selected="false"
              >
                طلاب أجتازو الاختبار
              </button>
            </li>
            <li class="nav-item col-12 col-md-4 px-2" role="presentation">
              <button
                class="w-100 nav-link border t-c m-auto py-3"
                id="pills-students-fails-exams-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-students-fails-exams"
                type="button"
                role="tab"
                aria-controls="pills-students-fails-exams"
                aria-selected="false"
              >
                طلاب لم يجتازو الاختبارت
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <!--courses-has-exams-->
            <coursesHasExams />
            <!--students-pass-exams-->
            <studentsPassExams />
            <!--students-fails-exams-->
            <studentsFailsExams />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coursesHasExams from "./tabs/courses-has-exams/index.vue";
import studentsPassExams from "./tabs/students-pass-exams/index.vue";
import studentsFailsExams from "./tabs/students-fails-exams/index.vue";
export default {
  name: "your-certifcates-page",
  components: {
    coursesHasExams,
    studentsPassExams,
    studentsFailsExams,
  },

  watch: {
    userAcademyRole(newRole) {
      if (newRole != "instructor") {
        this.router_push("academy-your-exams");
      }
    },
  },
  methods: {
    addItem() {},
  },
};
</script>

<style scoped>
h4 {
  font-size: 40px;
  font-weight: 800;
  color: #1fb9b3;
}
.exams-settings {
  font-size: 16px;
  font-weight: 400;
  color: #1fb9b3;
}
</style>
