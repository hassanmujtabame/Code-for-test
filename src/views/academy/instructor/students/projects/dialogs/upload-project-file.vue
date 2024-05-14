<template>
  <d-dialog-large
    :xl="false"
    customHeaderClass="text-cairo dialog-header "
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    :group="group"
  >
    <template v-slot:header>
      <div style="width: 100%">ارفع مشروعك</div></template
    >
    <template v-slot:default>
      <ValidationObserver v-if="showDialog" ref="form" tag="div">
        <ValidationProvider
          name="ملف المشروع"
          vid="projectFile"
          tag="div"
          rules="required"
          class="mb-3"
          v-slot="{ errors }"
        >
          <d-file-input
            class="file-input"
            prendIcon="far fa-square-plus"
            :validate="validate"
            :errors="errors"
            v-model="file"
            placeholder="ارفق ملف المشروع"
          />
        </ValidationProvider>
      </ValidationObserver>
    </template>
    <template v-slot:actions>
      <div class="text-center">
        <button @click="save" :disabled="loading" class="btn btn-custmer">
          <i v-if="loading" class="fa fa-spinner fa-spin"></i>
          أرفع الملف
        </button>
      </div>
    </template>
  </d-dialog-large>
</template>

<script>
export default {
  name: "upload-project-file-dialog",
  props: {
    group: {
      default: "upload-project-file-dialog",
    },
  },
  data: () => ({
    showDialog: false,
    loading: false,
    itemForm: { projectFile: null },
    itemDialog: {},
  }),
  methods: {
    async save() {
      if (!this.$refs.form.validate()) {
        console.mylog("invalid");
        return;
      }
      let formData = this.loadObjectToForm(this.itemForm);
      console.log(formData);
      try {
        let { data } = await academy.instructor.rateProject(
          this.itemDialog.id,
          formData
        );
        if (data.success) {
          this.fireCloseDialog(this.group);
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
    },
    openDialog(evt) {
      this.itemDialog = evt;
      this.itemForm = { projectFile: null };
      if (evt.rate) {
        this.itemForm.projectFile = evt.rate.projectFile;
      }
      this.showDialog = true;
      return true;
    },
    closeDialog() {
      this.showDialog = false;
      return true;
    },
  },
};
</script>

<style scoped>
.file-input {
  border-style: solid !important;
  border-color: #1fb9b3 !important;
  color: #1fb9b3 !important;
}
.file-input * {
  color: #1fb9b3 !important;
}
</style>
