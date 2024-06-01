<template>
  <div>
    <div
      class="d-flex flex-wrap justify-content-start align-items-center gap-2"
    >
      <label class="w-100 py-2">{{ $t("generate-code") }}</label>
      <button @click="generateCodeConfirm" class="btn btn-customer">
        {{ $t("generate-new-code") }}
      </button>
      <div class="link">
        <b-form-input
          id="create-link"
          v-model="code"
          type="text"
          disabled
          class="py-2 text-center"
          style="width: 120px"
        />
      </div>
      <button
        @click="copyToClipboard()"
        class="text-nowrap btn btn-default px-3"
      >
        {{ $t("copy-code") }}
        <i class="fa-solid fa-copy" style="color: #1fb9b3"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "generate-code-bar",
  data: () => ({
    code: "XXXXX",
  }),
  methods: {
    generateCodeConfirm() {
      let dataEvent = {
        title: "لديك كود بالفعل",
        description:
          "هل أنت متأكد من طلب كود جديد سيتم استبدال الكود الحالي بالكود الجديد؟",

        btns: [
          {
            title: "تأكيد",
            class: "btn btn-customer ",
          },
        ],
      };
      this.showConfirmMsg(dataEvent);
    },
    generateCode() {
      this.code = Math.random().toString(36).substring(2, 8).toUpperCase();
    },
    copyToClipboard() {
      const el = document.createElement("textarea");
      el.value = this.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
};
</script>

<style scoped>
.btn-default {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  color: #344054;
}
label {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #101828;
}
</style>
