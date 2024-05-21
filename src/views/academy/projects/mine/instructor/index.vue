<template>
  <div class="container">
    <div>
      <div class="row">
        <!-- title -->
        <div class="col-lg-4 my-4">
          <h4 class="text-cairo">{{ $t("the-projects") }}</h4>
          <router-link :to="getRouteLocale('academy-projects-settings')">
            <p class="projects-settings text-cairo">
              <i class="fa-solid fa-gear"></i>
              {{ $t("adjust-projects-settings") }}
            </p>
          </router-link>
        </div>
        <!-- search order -->
        <div class="row col-lg-5 justify-content-center mt-4">
          <!-- search -->
          <div class="w-50 mb-3">
            <label for="" class="position-relative w-100">
              <input
                v-model="filterItem.searchQuery"
                @keyup.enter="changeFilter"
                class="form-control fs-r-12 py-3 px-5"
                type="text"
                placeholder="ابحث في قائمة المشاريع"
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
          <!-- order -->
          <div class="w-50 mb-3 position-relative">
            <select
              v-model="filterItem.sortOrder"
              @change="changeFilter"
              class="form-select form-select-lg fs-r-12 py-3 m-c"
              aria-label=".form-select-lg example"
            >
              <option selected value="asc">الأحدث</option>
              <option value="desc">الأقدم</option>
            </select>
            <p
              style="top: -13px; right: 24px; background: white"
              class="position-absolute"
            >
              ترتيب حسب
            </p>
          </div>
        </div>
        <!-- head end -->
        <div class="col-lg-3 my-4">
          <button
            @click="addItem"
            class="py-3 btn btn-customer d-flex align-items-center gap-2"
          >
            <i class="fa-solid fa-plus"></i>{{ $t("add-projects") }}
          </button>
        </div>
      </div>
      <div>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item col-12 col-md-6 px-2" role="presentation">
            <button
              class="w-100 nav-link border t-c m-auto py-3 active"
              id="pills-courses-has-projects-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-courses-has-projects"
              type="button"
              role="tab"
              aria-controls="pills-courses-has-projects"
              aria-selected="true"
            >
              مشاريع جديدة
            </button>
          </li>
          <li class="nav-item col-12 col-md-6 px-2" role="presentation">
            <button
              class="w-100 nav-link border t-c m-auto py-3"
              id="pills-project-need-revision-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-project-need-revision"
              type="button"
              role="tab"
              aria-controls="pills-project-need-revision"
              aria-selected="false"
            >
              مشاريع تحتاج إلى مراجعتك
            </button>
          </li>

          <!-- <li class="nav-item col-12 col-md-3" role="presentation">
                      <button class="nav-link  border t-c m-auto" id="pills-students-list-tab" data-bs-toggle="pill" data-bs-target="#pills-students-list" type="button" role="tab" aria-controls="pills-students-list" aria-selected="false" >  قائمة الطلاب  </button>
                    </li> -->
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <!-- courses-has-projects -->
          <NewProjects :filterItem="filterItem" />
          <!-- project-need-revision -->
          <ProjectsNeedRevision :filterItem="filterItem" />
          <!-- students-list -->
          <!-- <studentsFailsExams /> -->
        </div>
      </div>
    </div>

    <UpdateProjectDialog />
  </div>
</template>

<script>
import SettingsExams from "./tabs/settings-projects/index.vue";
import NewProjects from "./tabs/courses-has-projects/index.vue";
import ProjectsNeedRevision from "./tabs/project-need-revision/index.vue";
import CardItem from "./card-item.vue";
import UpdateProjectDialog from "@/views/academy/courses/show/recorded/dialogs/add-project/index.vue";
export default {
  name: "your-certifcates-page",
  components: {
    SettingsExams,
    NewProjects,
    ProjectsNeedRevision,
    UpdateProjectDialog,
    CardItem,
  },
  data() {
    return {
      loading: false,
      filterItem: {
        searchQuery: "",
        sortOrder: "asc",
      },
    };
  },
  methods: {
    addItem() {
      this.loadCurrentUser();
      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      } else {
        this.fireOpenDialog("add-meeting", {
          id: null,
          title: null,
          video: null,
        });
      }
    },

    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
    },
  },
};
</script>

<style scoped>
h4 {
  font-size: 40px;
  font-weight: 800;
  color: #1fb9b3;
}
.projects-settings {
  font-size: 16px;
  font-weight: 400;
  color: #1fb9b3;
}
ul {
  padding-inline-start: 0px;
}
.nav-link {
  font-size: 20px;
  padding: 12px;
}
</style>
