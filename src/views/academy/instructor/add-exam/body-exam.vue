<template>
  <div class="container" style="background: #fff">
    <div class="box p-4 rounded-3 container" style="background-color: white">
      <ValidationObserver tag="div" ref="form-title">
        <ValidationProvider
          tag="div"
          :name="$t('course-name')"
          vid="coursename"
          rules="required"
          v-slot="{ errors }"
        >
          <label class="form-label">{{ $t("exam-course") }}</label>
          <div class="mb-3">
            <select v-model="itemForm.course_name" class="form-select">
              <option value="" class="t-c" selected>
                {{ $t("exam-course") }}
              </option>
              <option
                v-for="(course, i) in myCourses"
                :key="i"
                :value="course.id"
              >
                {{ course.title }}
              </option>
            </select>
          </div>

          <d-error-input :errors="errors" v-if="errors.length" />
        </ValidationProvider>

        <ValidationProvider
          tag="div"
          :name="$t('exam-title')"
          vid="title"
          rules="required"
          v-slot="{ errors }"
        >
          <label class="form-label">{{ $t("exam-title") }}</label>
          <d-text-input
            type="text"
            v-model="itemForm.title"
            :errors="errors"
            :placeholder="$t('exam-title')"
          >
          </d-text-input>
        </ValidationProvider>
      </ValidationObserver>
      <div class="position-relative">
        <d-overlays-simple v-if="loading" />
        <div
          v-if="questions.length > 0"
          class="row justify-content-stretch"
          style="min-height: 200px"
        >
          <div v-for="(q, i) in questions" :key="i" class="col-md-6 mt-4">
            <AddQuestion
              @delete="showConfirmDeleteItem"
              @saved="savedQuestion"
              @update="updateQuestion"
              :item="q"
            />
          </div>
        </div>
      </div>

      <div class="text-start mt-3">
        <button
          @click="addQuestion"
          :disabled="!lectureId"
          class="btn btn-custmer-w rounded-2 px-4 mx-2"
        >
          <i class="fa-solid fa-plus"></i>
          اضافة سؤال
        </button>
        <button :disabled="!lectureId" class="btn btn-custmer rounded-2 px-4">
          ارفع الاختبار
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AddQuestion from "./parts/add-question.vue";
import academyAPI from "@/services/api/academy";
export default {
  name: "add-exam-body",
  props: {
    courseId: {},
    itemSelected: {
      type: [Array, Object],
      default: () => {
        return { id: null, title: null };
      },
    },
  },
  components: {
    AddQuestion,
  },
  data: (vm) => {
    return {
      saving: false,
      loading: false,
      myCourses: [],
      itemForm: {
        id: vm.itemSelected.id ?? null,
        title: vm.itemSelected.title ?? null,
        course_name: vm.itemSelected.course_name ?? null,
      },
      questions: [],
      lectureId: vm.itemSelected.id ?? 1,
      itemDialog: { ...vm.itemSelected },
    };
  },
  methods: {
    showConfirmDeleteItem(question) {
      console.mylog("showConfirmDeleteItem", question);
      let dataEvent = {
        title: "هل حقا تريد حذف هذا السؤال؟",
        description: question.title,
        groupBtns: "d-flex justify-content-evenly",
        btns: [
          { title: "تراجع", class: "btn btn-custmer btn-danger" },
          {
            title: this.$t("confirm_delete"),
            action: () => this.deleteItem(question),
            class: "btn btn-custmer",
          },
        ],
      };
      this.showConfirmMsg(dataEvent);
    },
    async deleteItem(question) {
      console.mylog("deleting ...", question);
      if (!question.id) {
        let index = this.questions.findIndex((l) => l.uuid === question.uuid);
        if (index > -1) {
          this.questions.splice(index, 1);
        }
        return;
      }

      try {
        let { data } = await academyAPI.examsAPI.deleteQuestion(question.id);
        if (data.success) {
          let index = this.questions.findIndex((l) => l.id === question.id);
          if (index > -1) {
            console.mylog("deleted", index, this.questions[index], question);
            //let questions = this.questions.filter(x=>x)
            this.questions.splice(index, 1);
            //this.questions = [];
            //this.questions = questions.filter(x=>x);
          }
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.setErrorsForm(this.$refs.form, response);
          }
        }
      }
    },
    savedQuestion(question) {
      let index = this.questions.findIndex((l) => l.uuid === question.uuid);
      if (index > -1) {
        this.questions[index] = Object.assign(this.questions[index], question);
      }
    },
    async saveTitle() {
      this.saving = true;
      let valid = await this.$refs["form-title"].validate();
      if (!valid) {
        this.saving = false;
        console.mylog("invalid title");
        return;
      }
      let formData = new FormData();
      formData.append("title", this.itemForm.title);
      formData.append("type", "exam");

      try {
        let { data } = this.itemForm.id
          ? await academyAPI.examsAPI.updateExam(this.itemForm.id, formData)
          : await academyAPI.examsAPI.addExam(this.courseId, formData);
        if (data.success) {
          if (this.itemForm.id) {
            this.$emit("update", { ...this.itemForm, type: "exam" });
          } else {
            this.itemForm.id = data.data.exam_id;
            this.$emit("add", { ...this.itemForm, type: "exam" });

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
    addQuestion() {
      this.questions.push({
        title: `سؤال ${this.questions.length + 1}`,
        uuid: this.generateRandomString(8),
        exam_id: this.lectureId,
        options: [],
      });
    },
    updateQuestion(item) {
      let index = this.questions.findIndex((q) => q.uuid == item.uuid);
      if (index > -1) {
        this.questions[index] = Object.assign(this.questions[index], item);
      }

      this.$emit("update", this.questions);
    },
    async loadQuestions() {
      this.loading = true;
      try {
        let { data } = await academyAPI.examsAPI.getQuestions(this.itemForm.id);
        if (data.success) {
          console.log("data", data);
          let questions = [];
          data.data.forEach((question) => {
            console.mylog("question", question);
            questions.push({
              title: question.title,
              id: question.id,
              uuid: this.generateRandomString(8),
              exam_id: this.lectureId,
              options: question.options.map((x, i) => {
                return {
                  id: question.question_values[i],
                  title: x,
                  is_correct: parseInt(question.corrects[i]),
                };
              }),
            });
          });
          console.mylog("questions", questions);
          this.questions = questions;
        }
      } catch (error) {
        console.mylog("error", error);
        //
      }
      this.loading = false;
    },
  },
  mounted() {
    this.loadQuestions();
  },
};
</script>

<style></style>
