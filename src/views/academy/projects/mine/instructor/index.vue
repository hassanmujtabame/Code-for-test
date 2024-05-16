<template>
  <div class="container">
    <d-filter-list
      :call-list="loadList"
      hideSide
      classTitle="col-lg-4 mb-4"
      classSearchOrder="col-lg-5 justify-content-center mb-4"
      classColSearch="w-50 mb-3 "
      classColOrder="w-50 mb-3"
      HeadEndClasses="col-lg-3 mb-4"
      orderName="created_at"
      searchPlaceholder="أبحث  في قائمة المشاريع"
      @change="changeFilter"
      classColCard="col-md-12"
    >
      <template v-slot:title>
        <h4 class="text-cairo">{{ $t("the-projects") }}</h4>
        <router-link :to="getRouteLocale('academy-projects-settings')">
          <p class="projects-settings text-cairo">
            <i class="fa-solid fa-gear"></i>
            {{ $t("adjust-projects-settings") }}
          </p>
        </router-link>
      </template>
      <template v-slot:head-end>
        <button
          @click="addItem"
          class="py-3 btn btn-customer d-flex align-items-center gap-2"
        >
          <i class="fa-solid fa-plus"></i>{{ $t("add-projects") }}
        </button>
      </template>
      <template v-slot:before-body>
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item col-12 col-md-6 px-2" role="presentation">
            <button
              class="w-100 nav-link border t-c m-auto py-3 active"
              id="pills-project-need-revision-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-project-need-revision"
              type="button"
              role="tab"
              aria-controls="pills-project-need-revision"
              aria-selected="true"
            >
              مشاريع جديدة
            </button>
          </li>
          <li class="nav-item col-12 col-md-6 px-2" role="presentation">
            <button
              class="w-100 nav-link border t-c m-auto py-3"
              id="pills-courses-has-projects-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-courses-has-projects"
              type="button"
              role="tab"
              aria-controls="pills-courses-has-projects"
              aria-selected="false"
            >
              مشاريع تحتاج إلى مراجعتك
            </button>
          </li>

          <!-- <li class="nav-item col-12 col-md-3" role="presentation">
                      <button class="nav-link  border t-c m-auto" id="pills-students-list-tab" data-bs-toggle="pill" data-bs-target="#pills-students-list" type="button" role="tab" aria-controls="pills-students-list" aria-selected="false" >  قائمة الطلاب  </button>
                    </li> -->
        </ul>
      </template>

      <template v-slot="{ item }">
        {{ item }}
        <CardItem :item="item" @delete="confirmDeleteItem" />
      </template>
    </d-filter-list>

    <!-- <div class="tab-content" id="pills-tabContent"> -->
    <!-- courses-has-projects -->
    <!-- <NewProjects /> -->
    <!-- project-need-revision -->
    <!-- <ProjectsNeedRevision /> -->
    <!-- students-list -->
    <!-- <studentsFailsExams /> -->
    <!-- </div> -->

    <UpdateProjectDialog />
  </div>
</template>

<script>
import CoursesAPI from "@/services/api/academy/courses.js";
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
    };
  },
  methods: {
    addItem() {
      this.loadCurrentUser();
      // if (!this.user.statusInstructor) {
      //   window.errorMsg("لم يفعل حسابك بعد !");
      // } else {
      //   this.fireOpenDialog("add-meeting", {
      //     id: null,
      //     title: null,
      //     video: null,
      //   });
      // }
    },
    changeCategories(cat) {
      // this.category_id = cat;
      // this.fireEvent("d-filter-list-refresh");
    },
    changeFilter(val) {
      // this.filterItem = { ...this.filterItem, ...val };
      // this.fireEvent("d-filter-list-refresh");
    },
    confirmDeleteItem(item) {
      // let dataEvt = {
      //   title: "هل انت متأكد من حذف اللقاء؟",
      //   description: `${item.title}`,
      //   groupBtns: "d-flex justify-content-evenly",
      //   btns: [
      //     { title: "تراجع", class: "btn btn-custmer btn-danger" },
      //     {
      //       title: this.$t("confirm_delete"),
      //       action: () => this.deleteItem(item),
      //       class: "btn btn-custmer",
      //     },
      //   ],
      // };
      // this.showConfirmMsg(dataEvt);
    },
    async deleteItem(item) {
      // console.mylog("deleting....", item);
      // try {
      //   let { data } = await instructorMeetingsAPI.deleteItem(item.id);
      //   if (data.success) {
      //     this.fireEvent("d-filter-list-refresh");
      //   } else {
      //     window.SwalError(data.message);
      //   }
      // } catch (error) {
      //   console.mylog("error", error);
      // }
    },
    async loadList(metaInfo) {
      this.loading = true;
      try {
        let params = {
          page: metaInfo.current_page,
        };
        return await CoursesAPI.getProjectsNeedRevision(params);
      } catch (error) {
        console.mylog("error", error);
      }
      this.loading = false;
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
