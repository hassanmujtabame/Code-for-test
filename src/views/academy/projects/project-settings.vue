<template>
  <div style="margin-top: 85px; background: #fafafa">
    <div class="container title">{{ $t("adjust-project-settings") }}</div>
    <div class="container">
      <div class="box p-4 rounded-3" style="background-color: white">
        <div class="tab-content" id="pills-tabContent">
          <!--settings-->
          <settingsTap v-if="userAcademyRole == 'instructor'" />
        </div>
      </div>
      <UpdateProjectDialog />
    </div>
  </div>
</template>

<script>
import settingsTap from "./mine/instructor/tabs/settings-projects/index.vue";
export default {
  name: "projects-settings-page",
  components: {
    settingsTap,
  },
};
</script>

<style scoped>
.title {
  padding-top: 20px;
  padding-bottom: 32px;
  font-size: 40px;
  font-weight: 600;
  color: #414042;
}
</style>
