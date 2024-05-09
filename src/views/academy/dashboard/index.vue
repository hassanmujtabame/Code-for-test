<template>
  <div class="mx-3">
    <WarningTape v-if="hasWarnig"> {{ warningMsg }} </WarningTape>
    <SectionWidgets v-if="userAcademyRole == 'student'" />
    <SectionInstructorWidgets v-if="userAcademyRole == 'instructor'" />
  </div>
</template>

<script>
import WarningTape from "@/components/widgets/warning-tape.vue";
import SectionWidgets from "./parts/section-widgets/index.vue";
import SectionInstructorWidgets from "./parts/section-instructor-widgets/index.vue";
export default {
  name: "your-courses-page",
  components: {
    WarningTape,
    SectionWidgets,
    SectionInstructorWidgets,
  },
  data() {
    return {
      currentUser: {},
      hasWarnig: true,
      warningMsg: this.$t(
        "remember-that-you-cannot-create-courses-before-creating-at-least-3-meetings-to-activate-your-account"
      ),
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style></style>
