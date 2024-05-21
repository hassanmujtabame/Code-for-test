<template>
  <div class="course-project-display">
    <h1 class="course-project-display__title">{{ lectureSelected.title }}</h1>
    <p class="course-project-display__observation">
      اقرا جيدا تعليمات المدرب وقم بارفاق مشروعك بنفس الصيغة التي طلبها المدرب
    </p>
    <h3 class="course-project-display__subtitle mt-5">تعليمات المدرب :</h3>
    <p class="course-project-display__note" v-html="lectureSelected.desc"></p>

    <h3 class="course-project-display__subtitle">مرفقات المدرب:</h3>

    <div class="row">
      <div class="col-12 col-md-6">
        <attachmentCard
          v-for="(attachment, i) in lectureSelected.attachments"
          :key="i"
          :item="attachment"
          :showBorder="lectureSelected.attachments.length - 1 > i"
        />
      </div>
    </div>
    <div v-if="userAcademyRole == 'student'" class="my-3">
      <div v-if="loaded"></div>
      <ValidationObserver v-else ref="form" tag="div">
        <ValidationProvider
          :name="$t('project')"
          vid="file"
          v-slot="{ errors, validate }"
        >
          <label
            :class="{ disabled: uploading }"
            class="btn btn-custmer position-relative"
          >
            <i v-if="uploading" class="fa fa-spinner fa-spin"></i>
            <span v-if="percentProject">{{ percentProject }} %</span>
            إرفع مشروعك الان
            <input
              type="file"
              @change="uploadFile($event, validate) || validate($event)"
              class="hidden-file-input"
            />
          </label>
          <d-error-input :errors="errors" v-if="errors.length" />
        </ValidationProvider>
      </ValidationObserver>
      <div class="row">
        <div class="col-12 col-md-6 position-relative">
          <d-overlays-simple v-if="deleting" />
          <attachmentCard
            v-if="student_project.id"
            :item="student_project"
            :showBorder="false"
            @delete="showConfirmDeleteProjectFile"
            canDelete
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import academyAPI from "@/services/api/academy";
import attachmentCard from "./attachments/card";
export default {
  name: "display-for-student",
  props: ["lectureSelected", "itemPage"],
  components: {
    attachmentCard,
  },
  data: (vm) => {
    return {
      deleting: false,
      student_project: {
        title: "مشروعك",
        id: null,
        ...vm.lectureSelected.student_project,
      } ?? { title: "مشروعك", id: null },
      uploading: false,
      loaded: false,
      percentProject: 0,
      itemForm: {
        project_id: vm.lectureSelected.id,
        file: null,
      },
    };
  },
  methods: {
    async uploadFile(evt, validate) {
      if (validate) {
        let resValid = await validate(evt);
        if (!resValid.valid) {
          this.itemForm.file = null;
          return;
        }
      }
      if (!evt.target.files && evt.target.files.length === 0) {
        this.itemForm.file = null;
        return;
      }
      this.itemForm.file = evt.target.files[0];
      this.uploadProjectFile();
    },
    async uploadProjectFile() {
      this.percentProject = 0;
      if (this.uploading) return;
      this.uploading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.uploading = false;
        return;
      }
      let formData = this.loadObjectToForm(this.itemForm);
      let config = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          this.percentProject = Math.floor((loaded * 100) / total);
          /*if (percent < 100) {
                      console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
                    }*/
        },
      };
      try {
        let { data } = await academyAPI.student.uploadProjectFile(
          formData,
          config
        );
        if (data.success) {
          this.loaded = true;
          this.percentProject = 0;
          let dataEvent = {
            title: "تم رفع مشروعك بنجاح",
            description: "",
          };
          this.showSuccessMsg(dataEvent);

          this.student_project = Object.assign(this.student_project, data.data);
          this.fireEvent("update-lectures", {
            item: {
              ...this.lectureSelected,
              student_project: { ...this.student_project },
            },
            type: "update",
          });
        } else {
          this.percentProject = 0;
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
      this.uploading = false;
    },
    showConfirmDeleteProjectFile(item) {
      let dataEvent = {
        title: "هل حقا تريد حذف مشروعك؟",
        groupBtns: "d-flex justify-content-evenly",
        btns: [
          { title: "تراجع", class: "btn btn-custmer btn-danger" },
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteProjectFile(item),
            class: "btn btn-custmer",
          },
        ],
      };
      this.showConfirmMsg(dataEvent);
    },
    async deleteProjectFile(item) {
      console.mylog("deleting ...", item);
      this.deleting = true;
      try {
        let { data } = await academyAPI.student.deleteProjectFile(item.id);
        if (data.success) {
          this.student_project = Object.assign(this.student_project, {
            title: "مشروعك",
            id: null,
            file: null,
            size: null,
            extension: null,
          });
          this.fireEvent("update-lectures", {
            item: {
              ...this.lectureSelected,
              student_project: { ...this.student_project },
            },
            type: "update",
          });
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.mylog("error", error);
        window.DHelper.catchException.call(this, error);
      }

      this.deleting = false;
    },
  },
};
</script>

<style scoped>
.course-project-display {
  padding: 0 15px;
}

.course-project-display__title {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  text-transform: capitalize;
  color: #414042;
}

.course-project-display__observation {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  text-transform: capitalize;
  color: #414042;
}

.course-project-display__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */
  text-transform: capitalize;
  color: #1fb9b3;
}

.course-project-display__note {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  text-align: right;
  text-transform: capitalize;
  color: #737373;
}
</style>
