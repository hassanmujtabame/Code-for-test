<template>
  <d-dialog-large
    :group="group"
    :loading="loading"
    :closeDialog="closeDialog"
    :openDialog="openDialog"
    fullscreen
  >
    <template v-slot:header>
      <span v-html="titleDialog"></span>
    </template>
    <template v-slot:default>
      <div v-if="showDialog" class="container shadow p-4 rounded-2">
        <div>
          <h4>إضافة مشروع</h4>
          <p>
            قم بظبط أعدادات المشاريع التي سيقوم الطلاب برفعها اليك - سنقوم
            بتنبيهك فور ارسال الطلاب مشارعيهم اليك و يمكن ان تجد المشاريع في
            الصفحة الرئيسية للدورة
          </p>
        </div>
        <!-- form-->
        <div class="accordion-body">
          <div>
            <div class="row">
              <div class="col-md-6">
                <ValidationObserver tag="div" ref="form" v-slot="{ invalid }">
                  <ValidationProvider
                    :name="$t('project-title')"
                    tag="div"
                    vid="title"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      :disabled="saving"
                      v-model="itemForm.title"
                      :errors="errors"
                      :label="$t('project-title')"
                    />
                  </ValidationProvider>
                  <div class="mt-3" v-if="!itemPage.id">
                    <!-- project's course -->
                    <ValidationProvider
                      vid="project-course"
                      rules="required"
                      :name="$t('project-course')"
                      v-slot="{ errors }"
                      tag="div"
                      class="mb-4"
                    >
                      <label
                        class="text-cairo form-label"
                        for="project-course"
                        >{{ $t("project-course") }}</label
                      >
                      <select
                        v-model="itemForm.course_id"
                        class="form-select py-3 m-c fs-r-12"
                      >
                        <option
                          v-for="(course, i) in myCourses"
                          :key="i"
                          :value="course.id"
                        >
                          {{ course.title }}
                        </option>
                      </select>
                      <div class="text-input-error">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <div class="mt-3">
                    <div class="">
                      <div>
                        <ValidationProvider
                          :name="$t('project-description')"
                          tag="div"
                          vid="desc"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <d-textarea-input
                            :disabled="saving"
                            v-model="itemForm.desc"
                            :errors="errors"
                            rows="10"
                            label="أضف تعليمات للطلاب تظهر لهم في صفحة المشروع"
                          >
                          </d-textarea-input>
                        </ValidationProvider>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <button
                      class="btn bg-custmer"
                      :disabled="invalid || saving"
                      @click="save"
                      role="button"
                    >
                      <i v-if="saving" class="fa fa-spinner fa-spin"></i>

                      <i v-else class="fa fa-floppy-disk fs-2"></i>
                      {{ $t("save") }}
                    </button>
                  </div>
                </ValidationObserver>
              </div>
              <div class="col-md-6">
                <attachmentsList
                  :itemPage="itemDialog"
                  :lectureId="lectureId"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </d-dialog-large>
</template>

<script>
import academyAPI from "@/services/api/academy";
import attachmentsList from "./attachments/index";
import InstructorsApi from "@/services/api/academy/instructor";

export default {
  name: "add-project-course-dialog",

  props: {
    group: {
      type: String,
      default: "add-project-course-dialog",
    },
  },
  components: {
    attachmentsList,
  },
  computed: {
    titleDialog() {
      return this.itemForm.id
        ? `${this.$t("project-modification")}: <span class="m-c">${
            this.itemDialog.title
          }</span>`
        : this.$t("new-project");
    },
  },
  data: () => ({
    loading: false,
    saving: false,
    showDialog: false,
    itemDialog: { video: null },
    itemPage: {},
    itemForm: { id: null, title: "", state: "", desc: "" },
    lectureId: null,
    myCourses: [],
  }),
  methods: {
    async loadCourses() {
      try {
        let { data } = await InstructorsApi.getCourses();
        if (data.success) {
          this.myCourses = data.data;
        }
      } catch (error) {}
    },
    async save() {
      this.saving = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        this.saving = false;
        console.mylog("invalid title");
        return;
      }
      let formData = this.loadObjectToForm(this.itemForm);
      if (this.itemPage.id) {
        formData.append("course_id", this.itemPage.id);
      } else {
        formData.append("course_id", this.itemForm.course_id);
      }
      formData.append("type", "project");
      try {
        let { data } = this.itemForm.id
          ? await academyAPI.projectsAPI.updateProject(
              this.itemForm.id,
              formData
            )
          : await academyAPI.projectsAPI.addProject(formData);
        if (data.success) {
          if (this.itemForm.id) {
            this.$emit("update", { ...this.itemForm });
            this.eventUpdateLectures(
              { ...this.itemForm, type: "project" },
              "update"
            );
          } else {
            this.itemForm.id = data.data.project_id;
            this.$emit("add", { ...this.itemForm });
            this.eventUpdateLectures(
              { ...this.itemForm, type: "project" },
              "add"
            );

            this.lectureId = this.itemForm.id;
            this.itemDialog.id = this.itemForm.id;
          }

          this.itemDialog.title = this.itemForm.title;
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.mylog("error", error);
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.setErrorsForm(this.$refs.form, response);
          }
        }
      }
      this.saving = false;
    },
    eventUpdateLectures(item, type) {
      this.fireEvent("update-lectures", { item, type });
    },
    openDialog(dataItem) {
      this.loadCourses();

      this.itemForm = { id: null, title: "", state: "", desc: "" };
      this.itemPage = { ...dataItem.page };
      this.itemDialog = { ...dataItem.item };

      if (dataItem) {
        let { id, title, state, desc } = dataItem.item;
        this.itemForm.id = id;
        if (this.itemForm.id === null) {
          this.itemForm.uuid = this.generateRandomString(16);
        }
        this.itemForm.title = title;
        if (state != undefined) this.itemForm.state = state;
        if (desc != undefined) this.itemForm.desc = desc;
      }

      this.loading = false;
      this.lectureId = this.itemForm.id ?? null;

      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      this.eventUpdateLectures({}, "all");
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
    },
  },
};
</script>

<style scoped></style>
