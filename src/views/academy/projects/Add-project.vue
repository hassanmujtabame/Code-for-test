<template>
  <div style="margin-top: 85px; background: #fafafa">
    <div class="container">
      <div class="title">{{ $t("add-a-project") }}</div>
      <div class="sub-title mb-3">{{ $t("add-a-project-sup-title") }}</div>

      <div class="box p-4 rounded-3" style="background-color: white">
        <ValidationObserver ref="addProjectForm">
          <div class="row">
            <div class="col-12 col-md-6">
              <!-- project title -->
              <ValidationProvider
                vid="project-title"
                rules="required"
                :name="$t('project-title')"
                v-slot="{ errors }"
                tag="div"
                class="mb-4"
              >
                <label class="text-cairo form-label" for="project-title">{{
                  $t("project-title")
                }}</label>
                <b-form-input
                  id="project-title"
                  type="text"
                  :placeholder="$t('project-title')"
                  v-model="form.title"
                  required
                />
                <div class="text-input-error">{{ errors[0] }}</div>
              </ValidationProvider>

              <!-- project's course -->
              <ValidationProvider
                vid="project-course"
                rules="required"
                :name="$t('project-course')"
                v-slot="{ errors }"
                tag="div"
                class="mb-4"
              >
                <label class="text-cairo form-label" for="project-course">{{
                  $t("project-course")
                }}</label>
                <select
                  v-model="form.course_id"
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
              <div class="attachments-text mb-2 d-flex justify-content-between">
                {{ $t("attachments") }}

                <i
                  @click="addProjectAttachment"
                  class="fa-solid fa-plus add-icon"
                ></i>
              </div>
              <div class="attachments">
                <div
                  class="attachment-card d-flex justify-content-between align-items-center"
                  v-for="(attachment, i) in attachments"
                  :key="i"
                >
                  <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-paperclip attachment-icon"></i>

                    <div class="attachment-title">
                      {{ attachment.title }}
                    </div>
                    <div class="attachment-format">
                      {{ attachment.format }}
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <div class="attachment-size">
                      {{ attachment.size }}
                    </div>
                    <i
                      @click="downloadAttachment(attachment)"
                      class="fa-solid fa-download attachment-icon"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <!-- project Instructions -->
              <ValidationProvider
                vid="project-instructions"
                :name="$t('instructions')"
                v-slot="{ errors }"
                tag="div"
                class="mb-4"
              >
                <label class="text-cairo form-label" for="project-title">{{
                  $t("add-project-instructions")
                }}</label>
                <b-form-textarea
                  id="project-instructions"
                  type="text"
                  :placeholder="$t('instructions')"
                  v-model="form.desc"
                  rows="12"
                />
                <div class="text-input-error">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </div>
        </ValidationObserver>
      </div>

      <div class="div w-100 d-flex justify-content-end my-3">
        <button @click="save" class="btn btn-customer">
          {{ $t("save-the-project") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import settingsTap from "./mine/instructor/tabs/settings-projects/index.vue";
import InstructorsApi from "@/services/api/academy/instructor";
import ProjectsApi from "@/services/api/academy/project";
export default {
  name: "add-project-page",
  components: {
    settingsTap,
  },
  data() {
    return {
      form: {
        title: "",
        course_id: "",
        desc: "",
      },
      myCourses: [],
      attachments: [],
    };
  },

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
      let valid = await this.$refs.addProjectForm.validate();

      if (!valid) {
        return;
      }
      try {
        let { data } = await ProjectsApi.addProject(this.form);
        if (data.success) {
          window.successMsg();
        } else {
          window.errorMsg(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
    addProjectAttachment() {},
    downloadAttachment(attachment) {},
  },
  created() {
    if (this.userAcademyRole != "instructor") {
      this.router_push("academy-home");
    }
  },
  mounted() {
    this.loadCourses();
  },
};
</script>

<style scoped>
.title {
  padding-block: 20px;
  font-size: 40px;
  font-weight: 600;
  color: #414042;
}
.sub-title {
  padding-bottom: 48px;
  font-size: 20px;
  font-weight: 500;
  color: #737373;
}
.form-label {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 600;
  color: #010b38;
}

.attachments-text {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 600;
  color: #cf1f3e;
}
.add-icon {
  color: #2cb7b3;
  cursor: pointer;
}
.attachment-card {
  overflow: hidden;
  width: 100%;
  padding-block: 12px;
  border-block: 1px solid #f1f1f1;
}
.attachment-size {
  font-family: Cairo;
  font-size: 12px;
  font-weight: 400;
  color: #979797;
}
.attachment-format {
  font-family: Cairo;
  font-size: 10px;
  font-weight: 400;
  padding-inline: 12px;
  background-color: #f5f7f7;
  border-radius: 10px;
  color: #737373;
}
.attachment-title {
  width: 60%;
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  color: #737373;
}
.attachment-icon {
  font-size: 14px;
  color: #1c274c;
}
.fa-download {
  cursor: pointer;
}
</style>
