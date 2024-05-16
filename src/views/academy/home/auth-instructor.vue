<template>
  <div class="container my-5">
    <Header :user="user"></Header>
    <div>
      <!-- to do -->
      <SectionFeatures />
    </div>
    <KnowMore :user="user" />
    <!-- <SectionTrainingFields />
    <Market />
    <OurCoach />
    <OurCoach2 />
    <About :user="user" />
    <Paths />
    <Question />
    <Sign /> -->
  </div>
</template>

<script>
import Header from "./parts/InstructorHeader/index.vue";
import SectionFeatures from "./parts/section-features/index.vue";
import KnowMore from "./parts/know-more/index.vue";
import SectionTrainingFields from "./parts/section-training-fields/index.vue";

// import UserApi from "@/services/api/user";
// import About from "./parts/about.vue";
// import Paths from "./parts/paths.vue";
// import Feature from "./parts/features.vue";
// import OurCoach from "./parts/our-coach.vue";
// import OurCoach2 from "./parts/our-coach2.vue";
// import Market from "./parts/merket.vue";
// import Question from "./parts/question.vue";
// import Sign from "./parts/sign-up.vue";
export default {
  name: "speical-manager",
  data() {
    return {
      user: {},
    };
  },
  components: {
    Header,
    SectionFeatures,
    KnowMore,
    SectionTrainingFields,
    // Question,
    // Sign,
    // Feature,
    // About,
    // Market,
    // OurCoach,
    // OurCoach2,
    // Paths,
  },
  methods: {
    async getUser() {
      try {
        let { data } = await UserApi.me();
        if (data.success) {
          this.user = data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
