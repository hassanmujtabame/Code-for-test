<template>
  <div class="my-5 bg-o">
    <div class="">
      <div class="container">
        <div
          class="row align-items-center justify-content-center"
          :class="{ 'p-4': !isMobile, 'py-4': isMobile }"
        >
          <div class="col-md-6">
            <h1 class="text-white">
              {{ $t("subscribe-newsletter") }}
            </h1>
            <p class="text-white">
              {{ $t("subscribe-newsletter-text") }}
            </p>
          </div>
          <div class="col-md-6">
            <div
              class="input-group input-group-sm input-group-md input-group-lg m-auto"
              :class="{ 'w-75': !isMobile, 'w-100': isMobile }"
            >
              <input
                type="text"
                v-model="form.email"
                class="form-control p-3"
                :class="{ 'fs-6': isMobile }"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                :placeholder="$t('write-your-email')"
                required
              />
              <span
                @click="subscribe"
                class="input-group-text px-4 py-2 mx-2 rounded-3 text-light"
                style="cursor: pointer; background-color: #cf1f3e"
                :class="{ 'fs-6': isMobile }"
                id="inputGroup-sizing-lg"
                >{{ $t("Subscribe") }}</span
              >
            </div>
            <div
              class="input-group input-group-sm input-group-md input-group-lg m-auto"
              :class="{ 'w-75': !isMobile, 'w-100': isMobile }"
            >
              <p style="display: none">{{ pointer }}</p>
              <p class="text-input-error">{{ errors.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter />
  </div>
</template>

<script>
import Newsletter from "@/views/network/blog/parts/dialogs/newsletter.vue";

export default {
  components: { Newsletter },
  data() {
    return {
      form: {
        email: "",
      },
      pointer: false,
      errors: {},
    };
  },
  methods: {
    subscribe: function () {
      let pattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      this.errors.email = null;

      if (!this.form.email.length) {
        this.errors.email = "حقل البريد مطلوب";
        this.pointer = !this.pointer;

        return;
      }
      if (!this.form.email.match(pattern)) {
        this.errors.email = "صيغة البريد الالكتروني غير صحيح";
        this.pointer = !this.pointer;

        return;
      }
      window.axios.post(`newsletter`, this.form).then((res) => {
        this.form.email = "";
        this.fireOpenDialog("newsletter");
      });
    },
    openDeleteDialog() {
      let dataEvt = {
        title: "انت على وشك حذف طلبك",
        description: "",
        type: "warning",
      };
      this.fireOpenDialog("standard-rate-dialog", dataEvt);

      //this.fireOpenDialog('delete-item',this.itemPage)
    },
  },
};
</script>

<style>
.bg-o {
  background: linear-gradient(to left, #1fb9b3, #1fb9b421);
}
</style>
