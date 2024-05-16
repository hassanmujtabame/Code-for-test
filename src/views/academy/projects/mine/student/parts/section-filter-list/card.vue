<template>
  <div class="box-exam d-flex align-items-center">
    <div class="flex-grow-1">
      <h3 class="course-name">
        {{ item.course_name }}
      </h3>
      <h3 class="project-title">
        {{ item.project_title }}
        <span>{{ $t("send-date") }} {{ projectDate }}</span>
      </h3>
      <p class="project-note">
        <template v-if="item.status == 'under_correction'">
          <span> ملاحظة : سيقوم المدرب بفحص مشروعك بنفسه وتقيمك </span>
        </template>
        <template v-else-if="item.status == 'replaying'">
          <span class="m-r">
            علامتك هي: {{ item.note }}, لذا يجب إعادت رفع المشروع</span
          >
        </template>
        <template v-else-if="item.status == 'finished'">
          <span class="m-c"
            >مبروك، لقد نجحت في المشروع، علامتك هي:{{ item.note }}</span
          >
        </template>
      </p>
    </div>
    <div class="flex-shrink-0 d-flex">
      <button
        v-if="item.status != 'replaying'"
        class="btn btn-custmer rounded-2 mt-2"
      >
        عرض المشروع
      </button>
      <button v-else class="btn btn-custmer rounded-2 mt-2">
        تعديل المشروع
      </button>
      <button
        class="btn rounded-2 border-danger text-danger bg-transparent mt-2 mx-2"
      >
        حذف المشروع
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "exam-card",
  props: {
    item: {},
  },
  computed: {
    projectDate() {
      return this.item.date ?? "2022-08-29";
    },
  },
};
</script>

<style scoped>
.box-exam {
  border-bottom: 0.5px solid #e1e5e7;
}
.box-exam__course {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}
.course-name {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 700;
  color: #1fb9b3;
}
.project-title {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 500;
  color: #cf1f3e;
}
.project-title span {
  font-weight: 400;
  color: #737373;
  margin-inline: 5px;
}
.project-note * {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 400;
  color: #737373;
}
</style>
