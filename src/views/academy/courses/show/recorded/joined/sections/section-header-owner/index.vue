<template>
  <div class="course-show-page__header">
    <div class="row">
      <div v-for="(widget, i) in widgets" :key="i" class="col-6 col-md-3">
        <widgetInfo v-bind="widget" />
      </div>
    </div>
    <div class="text-start">
      <!--actions-->
      <actionsPage :item-page="itemPage" />
    </div>
  </div>
</template>

<script>
import actionsPage from "./actions-page.vue";
import widgetInfo from "../../../../common/section-header-owner/widget-info.vue";
export default {
  name: "section-owner",
  props: {
    itemPage: {},
  },
  components: {
    widgetInfo,
    actionsPage,
  },
  data: (vm) => {
    return {
      widgets: [
        { title: "المشاهدات", content: `${vm.itemPage.views} شخص`, link: null },
        {
          title: "حصلو على شهادة",
          content: `${vm.itemPage.persons_obtain_certification} شخص`,
          link: null,
        },
        { title: "معدل درجات الاختبارات", content: "20/40", link: "/" },
        { title: "المشاريع المرسلة ", content: "20 مشروع", link: "/" },
      ],
    };
  },
};
</script>

<style></style>
