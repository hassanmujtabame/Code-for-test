<template>
  <div class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError" class="error-message">
      هناك خطأ غير معروف يرجي تحديث الصفحة
    </div>
    <div v-else class="container">
      <div class="row border">
        <div class="col-12 col-md-9 project-details-box">
          <div class="project-title mt-3">{{ itemPage.title }}</div>
          <div class="instructions mt-3">
            اقرا جيدا تعليمات المدرب وقم بارفاق مشروعك بنفس الصيغة التي طلبها
            المدرب
          </div>
          <div class="teacher-instructions mt-4">
            تعليمات المدرب :
            <p class="mt-2">
              نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص
              نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص
              نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص
            </p>
          </div>
          <div class="project-attachments mt-4">مرفقات المدرب :</div>

          <div class="mt-4 d-flex clickable attachment-item">
            <div class="attachment-icon">
              <i class="fa-solid fa-paperclip"></i>
            </div>
            <div class="attachment-details">
              <div>ملف الخطة</div>
              <div class="attachment-size">25 ميجا</div>
            </div>
            <div class="attachment-type">PDF</div>
          </div>

          <div class="project-attachments mt-4">ملف المشروع :</div>

          <div class="d-flex gap-2">
            <button v-if="!delivered" class="btn btn-customer py-3 mt-5">
              ارفع مشروعك الآن
            </button>
            <button v-if="delivered" class="btn btn-customer py-3 mt-5">
              عرض المشروع
            </button>
            <button v-if="delivered" class="btn btn-customer-w py-3 mt-5">
              تعديل المشروع
            </button>
          </div>
        </div>
        <div class="col-12 col-md-3 course-contents-box">
          <span class="course-content">{{ "محتويات الدورة :" }}</span>

          <div
            v-for="(content, index) in courseContents"
            :key="index"
            class="my-2 p-2 course-content-tale d-flex justify-content-between"
            :class="{ active: current == content.id }"
          >
            <span class="clickable">{{ index + 1 }}.{{ content.title }}</span>
            <span v-if="current != content.id">{{ content.duration }}</span>
          </div>
        </div>
      </div>
    </div>
    <project-note-dialog />
  </div>
</template>

<script>
import cardItem from "./card-item.vue";
import academyAPI from "@/services/api/academy";
import projectNoteDialog from "./dialogs/project-note.vue";

export default {
  name: "StudentProjects",
  components: {
    cardItem,
    projectNoteDialog,
  },
  data() {
    return {
      loading: true,
      hasError: false,
      delivered: false,
      itemPage: {},
      courseContents: [
        { id: 1, title: "مقدمة", duration: "04:22" },
        { id: 2, title: "الخطة", duration: "04:22" },
        { id: 3, title: "مقدمة مالية", duration: "04:22" },
        { id: 4, title: "علم الماليات", duration: "04:22" },
        { id: 5, title: "طريقة العمل", duration: "04:22" },
        { id: 6, title: "ما العمل؟", duration: "04:22" },
        { id: 7, title: "مشروعك الأول", duration: "04:22" },
        { id: 8, title: "خطة العمل ودراسة الجدوى المالية", duration: "04:22" },
      ],
    };
  },
  computed: {
    current() {
      return parseInt(this.$route.params.id);
    },
  },
  methods: {
    async loadList() {
      try {
        const { data } = await academyAPI.instructor.getListStudentProject(
          this.itemPage.id
        );
        this.itemPage = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async initialize() {
      this.loading = true;
      try {
        const { data } = await academyAPI.projectsAPI.getItem(
          this.$route.params.id
        );
        if (data.success) {
          this.itemPage = data.data;
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.error(error);
        this.hasError = true;
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.initialize();
  },
};
</script>

<style scoped>
.consult {
  margin-top: 150px;
}
.error-message {
  color: red;
  font-size: 18px;
}
.project-details-box {
  padding: 30px;
  background-color: #fff;
}
.project-title,
.instructions,
.teacher-instructions,
.project-attachments {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
}
.project-title {
  color: #414042;
}
.instructions,
.attachment-name {
  color: #414042;
}
.project-attachments,
.teacher-instructions {
  color: #1fb9b3;
}
.teacher-instructions p {
  padding-inline-start: 80px;
  color: #737373;
}
.attachment-icon {
  color: #1fb9b3;
  padding: 10px;
  font-size: 16px;
}
.attachment-details {
  font-size: 16px;
  color: #737373;
}
.attachment-size {
  font-size: 12px;
  text-align: right;
  color: #979797;
}
.attachment-type {
  margin: 10px;
  padding-inline: 10px;
  font-size: 13px;
  color: #415c5e;
  background-color: #f5f7f7;
}
.course-contents-box {
  background-color: #f6f8f9;
}
.course-content {
  font-size: 24px;
  color: #414042;
}
.course-content-tale span {
  font-size: 16px;
  color: #737373;
}
.active {
  background: #1fb9b333;
  color: #1fb9b3;
}
</style>
