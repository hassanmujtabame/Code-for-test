<template>
  <EmptyCard
    mainText="لا توجد قصة"
    seconderyText="لم يضف هذا العضو قصته حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else class="tab-body position-relative" style="min-height: 200px">
    <d-overlays-simple v-if="loading" />
    <div v-else>
      <h5 class="m-c">
        {{ itemInfo.title }}
      </h5>
      <div>
        <p v-html="itemInfo.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
import ConsultantsApi from "@/services/api/consulting/consultants";
import EmptyCard from "../components/empty-card.vue";
export default {
  name: "story-tab",
  components: {
    EmptyCard,
  },
  data: () => ({
    loading: true,
    isEmptyObject: true,
    itemInfo: {},
  }),
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await userAPI.getStoryUser(this.$route.params.id);
        if (data.success) {
          this.itemInfo = data.data;
          this.isEmptyObject = false;
        } else {
          this.isEmptyObject = true;
        }
      } catch (error) {
        this.hasError = true;
        console.log("error", error);
        console.log("error response", error.response);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style>
.tab-body {
  margin: 0px -25px;
  padding: 35px;
  border-radius: 36px;
  background-color: white;
  border: 1px;
  box-shadow: 0 0 0.35rem rgba(0, 0, 0, 0.075);
  font-family: change;
}
</style>
