<template>
  <div class="container my-5">
    <Header :user="user" />
    <div>
      <!-- to do -->
      <Feature />
    </div>
    <KnowMore :user="user" />
    <Market />
    <OurCoach />
    <OurCoach2 />
    <About :user="user" />
    <Paths />
    <Question />
    <Sign />
  </div>
</template>

<script>
import UserApi from "@/services/api/user";
import Header from "./parts/header.vue";
import About from "./parts/about.vue";
import Paths from "./parts/paths.vue";
import Feature from "./parts/features.vue";
import KnowMore from "./parts/know-more.vue";
import OurCoach from "./parts/our-coach.vue";
import OurCoach2 from "./parts/our-coach2.vue";
import Market from "./parts/merket.vue";
import Question from "./parts/question.vue";
import Sign from "./parts/sign-up.vue";
export default {
  name: "speical-manager",
  data() {
    return {
      user: {},
    };
  },
  components: {
    Question,
    Sign,
    Header,
    Feature,
    About,
    KnowMore,
    Market,
    OurCoach,
    OurCoach2,
    Paths,
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
