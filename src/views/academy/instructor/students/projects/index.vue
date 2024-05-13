<template>
  <div style="margin-top: 150px" class="consult">
    <d-overlays-simple v-if="loading" />
    <div v-else-if="hasError">هناك خطأ غير معروف يرجي تحديث الصفحة</div>
    <div v-else class="container">
      <div class="row border">
        <div class="col-12 col-md-9 project-details-box">
          <div class="project-title mt-3">مشروعك الاول</div>
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
        </div>
        <div class="col-12 col-md-3 course-contents-box">
          <span class="course-content">{{ "محتويات الدورة :" }}</span>

          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 1 + "." }}{{ "مقدمة" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 2 + "." }}{{ "الخطة" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 3 + "." }}{{ "مقدمة مالية" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 4 + "." }}{{ "علم الماليات" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 5 + "." }}{{ "طريقة العمل" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 6 + "." }}{{ "ما العمل؟" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between active"
          >
            <!-- <div class="course-content-tale d-flex justify-content-between" :class="{ active: current == i} "> -->
            <span>{{ 7 + "." }}{{ "مشروعك الأول" }}</span>
            <span v-if="current == i">{{ "04:22" }}</span>
            <!-- <span v-if="selected == i">{{ "04:22" }}</span> -->
          </div>
          <div
            class="my-2 px-2 course-content-tale d-flex justify-content-between"
          >
            <span>{{ 8 + "." }}{{ "خطة العمل ودراسة الجدوى المالية" }}</span>
            <span>{{ "04:22" }}</span>
          </div>
        </div>
      </div>
    </div>
    <projectNoteDialog />
  </div>
</template>

<script>
import cardItem from "./card-item.vue";
import academyAPI from "@/services/api/academy";
import projectNoteDialog from "./dialogs/project-note.vue";
export default {
  name: "student-projects",
  components: {
    cardItem,
    projectNoteDialog,
  },
  data: () => {
    return {
      loading: true,
      hasError: false,
      itemPage: {},
    };
  },
  computed: {
    current() {
      return this.$route.params.id;
    },
  },
  methods: {
    async loadList() {
      try {
        return await academyAPI.instructor.getListStudentProject(
          this.itemPage.id
        );
      } catch (error) {
        //
      }
    },
    async initlializing() {
      this.loading = true;
      try {
        let { data } = await academyAPI.projectsAPI.getItem(
          this.$route.params.id
        );
        if (data.success) {
          this.itemPage = data.data;
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initlializing();
  },
};
</script>

<style scoped>
.project-details-box {
  padding: 30px;
  background-color: #fff;
}
.project-title {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #414042;
}
.instructions {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #414042;
}
.teacher-instructions {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #1fb9b3;
}
.teacher-instructions * {
  padding-inline-start: 80px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #737373;
}
.project-attachments {
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #1fb9b3;
}
.course-contents-box {
  background-color: #f6f8f9;
}
.course-content {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #414042;
}
.course-content-tale span {
  font-size: 16px;
  font-weight: 400;
  line-height: 29.44px;
}
.active span {
  color: #1fb9b3;
}
.active {
  background: #1fb9b333;
  color: #1fb9b3;
}
</style>
