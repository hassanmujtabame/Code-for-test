<template>
  <div class="d-flex justify-content-between py-3 gap-2">
    <div
      class="w-60 d-flex flex-wrap justify-content-between align-items-center gap-2"
    >
      <label class="w-100">{{ $t("create-link") }}</label>
      <select
        @change="generateUrl"
        v-model="page"
        class="form-select py-2 m-c"
        aria-label=".form-select-lg example"
        style="width: 200px"
      >
        <option v-for="(opt, i) in pageOpts" :key="i" :value="opt.value">
          {{ opt.name }}
        </option>
      </select>
      <div class="link flex-fill">
        <b-form-input
          id="create-link"
          class="py-2"
          type="text"
          v-model="pageLink"
          readonly
        />
      </div>
      <button
        @click="copyToClipboard('create-link')"
        class="text-nowrap btn btn-default px-3"
      >
        {{ $t("copy-link") }}
        <i class="fa-solid fa-copy" style="color: #1fb9b3"></i>
      </button>
    </div>
    <div
      class="w-40 d-flex flex-wrap justify-content-between align-items-center gap-2"
    >
      <label class="w-100">{{ $t("shortcut-link") }}</label>
      <div class="link flex-fill">
        <b-form-input
          id="shortcut-link"
          class="py-2"
          type="text"
          v-model="pageLinkShortcut"
          readonly
        />
      </div>
      <button
        @click="copyToClipboard('shortcut-link')"
        class="text-nowrap btn btn-default px-3"
      >
        {{ $t("copy-link") }}
        <i class="fa-solid fa-copy" style="color: #1fb9b3"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "generate-link-bar",
  data: () => ({
    page: 1,
    pageOpts: [
      { id: 1, name: "الرئيسية", value: "" },
      { id: 2, name: "الشبكة", value: "network" },
      { id: 3, name: "الحاضنة", value: "incubator" },
      { id: 4, name: "الاكاديمية", value: "academy" },
      { id: 5, name: "مقدمي الخدمة", value: "service-provider" },
    ],
    pageLink: "",
    pageLinkShortcut: "",
  }),

  methods: {
    generateUrl() {
      this.textOfCopy = "نسخ الرابط";
      let host = window.location.host;
      let page = this.page;
      console.log(this.page,host)

      let url = null;
      if (page == "") {
        url = host + "/ar" + "?affiliate_id=" + this.user.affiliate_id;
      } else {
        url =
          host +
          "/ar/" +
          page +
          "/home" +
          "?affiliate_id=" +
          this.user.affiliate_id;
      }
      this.pageLink = url;
      this.pageLinkShortcut = "...";
    },
    copyToClipboard(id) {
      // Get the input field
      var input = document.getElementById(id);

      // Select the text field
      input.select();
      input.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      document.execCommand("copy");
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
.w-60 {
  width: 60%;
}
.w-40 {
  width: 40%;
}
</style>
