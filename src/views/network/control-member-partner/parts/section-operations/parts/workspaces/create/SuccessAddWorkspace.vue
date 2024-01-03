<template>
  <d-dialog-large
    :group="group"
    :xl="false"
    :openDialog="openDialog"
    :closeDialog="closeDialog"
  >
    <template v-slot>
      <div class="text-center">
        <div>
          <img :src="`${publicPath}assets/img/cuate-2.png`" alt="" />
        </div>
        <div>
          <h4>لقد تم إرسال تفاصيل مكان العمل إلى فريق رياديات</h4>
          <p>سيتم مراجعة مكان العمل و نشره على الفور</p>
        </div>

        <div class="mt-3">
          <button
            @click="closeEvent"
            style="height: 40px"
            class="btn btn-main-v"
          >
            {{ $t("Home") }}
          </button>
        </div>
      </div>
    </template>
  </d-dialog-large>
</template>
  
  <script>
export default {
  props: {
    group: {
      type: String,
      default: "success-add-workspace",
    },
  },
  data() {
    return {
    };
  },
  methods: {
    goHomeWorkspace() {
      this.closeEvent();
      this.$router.push(this.getRouteLocale("workspace-home"));
    },
    openDialog() {
      return true;
    },
    closeDialog() {
      return true;
    },
    closeEvent() {
      this.fireEvent(this.group + "-close-dialog");
    },
  },
};
</script>
  
  <style>
</style>