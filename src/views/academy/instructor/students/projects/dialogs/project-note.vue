<template>
  <d-dialog-large
    :xl="false"
    customHeaderClass="text-cairo dialog-header "
    :open-dialog="openDialog"
    :close-dialog="closeDialog"
    :group="group"
  >
    <template v-slot:header>
      <div style="width: 100%">قيم مشروع الطالب</div></template
    >
    <template v-slot:default>
      <ValidationObserver v-if="showDialog" ref="form" tag="div">
        <ValidationProvider
          :name="$t('rate-project')"
          vid="note"
          tag="div"
          rules="required|numeric|between:0,100"
          class="mb-3"
          v-slot="{ errors }"
        >
          <d-text-input
            :errors="errors"
            label="تقييم الطالب"
            v-model="itemForm.note"
          >
          </d-text-input>
        </ValidationProvider>
        <ValidationProvider
          :name="$t('rate-project')"
          vid="rate"
          tag="div"
          rules=""
          class="mb-3"
          v-slot="{ errors }"
        >
          <d-textarea-input
            rows="7"
            :errors="errors"
            label="أكتب رسالة للطالب اذا رغبت"
            v-model="itemForm.desc"
          >
          </d-textarea-input>
        </ValidationProvider>
      </ValidationObserver>
    </template>
    <template v-slot:actions>
      <div class="text-center">
        <button @click="save" :disabled="loading" class="btn btn-custmer">
          <i v-if="loading" class="fa fa-spinner fa-spin"></i>
          أرسل التقييم
        </button>
      </div>
    </template>
  </d-dialog-large>
</template>

<script>
import academy from "@/services/api/academy";
export default {
  name: "project-rate-dialog",
  props: {
    group: {
      default: "project-rate-dialog",
    },
  },
  data: () => ({
    showDialog: false,
    loading: false,
    itemForm: { note: null, desc: "" },
    itemDialog: {},
  }),
  methods: {
    async save() {
      if (!this.$refs.form.validate()) {
        console.mylog("invalid");
        return;
      }
      let formData = this.loadObjectToForm(this.itemForm);
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
      this.itemForm = { note: null, desc: "" };
      if (evt.rate) {
        this.itemForm.note = evt.rate.note;
        this.itemForm.desc = evt.rate.desc;
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
.dialog-header *,
.dialog-header {
  width: 100%;
  font-size: 24px !important;
  font-weight: 700 !important;
  color: #2cb7b3 !important;
}
</style>
