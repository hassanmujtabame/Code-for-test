<template>
  <div id="list-item-7">
    <div class="box border mt-5">
      <div class="d-flex justify-content-between px-3 align-items-center">
        <h3 style="color: #1fb9b3" class="border-bottom py-2 t-c px-3">
          اعدادات الاشعارات
        </h3>
        <button
          v-if="!isEnabled"
          @click="enableInput"
          class="btn px-4 py-2 text-light"
          style="background-color: #1fb9b3"
        >
          <svg
            class="mx-1"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4219 0.847656C17.5664 -0.0078125 16.1836 -0.0078125 15.3281 0.847656L14.1523 2.01953L17.9766 5.84375L19.1523 4.66797C20.0078 3.8125 20.0078 2.42969 19.1523 1.57422L18.4219 0.847656ZM6.73437 9.44141C6.49609 9.67969 6.3125 9.97266 6.20703 10.2969L5.05078 13.7656C4.9375 14.1016 5.02734 14.4727 5.27734 14.7266C5.52734 14.9805 5.89844 15.0664 6.23828 14.9531L9.70703 13.7969C10.0273 13.6914 10.3203 13.5078 10.5625 13.2695L17.0977 6.73047L13.2695 2.90234L6.73437 9.44141ZM3.75 2.5C1.67969 2.5 0 4.17969 0 6.25V16.25C0 18.3203 1.67969 20 3.75 20H13.75C15.8203 20 17.5 18.3203 17.5 16.25V12.5C17.5 11.8086 16.9414 11.25 16.25 11.25C15.5586 11.25 15 11.8086 15 12.5V16.25C15 16.9414 14.4414 17.5 13.75 17.5H3.75C3.05859 17.5 2.5 16.9414 2.5 16.25V6.25C2.5 5.55859 3.05859 5 3.75 5H7.5C8.19141 5 8.75 4.44141 8.75 3.75C8.75 3.05859 8.19141 2.5 7.5 2.5H3.75Z"
              fill="white"
            />
          </svg>
          تعديل
        </button>
        <button v-else @click="save" class="btn-main">
          {{ $t("save") }}
        </button>
      </div>
      <!-- <h3 class="border-bottom py-2 t-c px-3">
                        اعدادات الاشعارات
                    </h3> -->
      <div action="">
        <div class="p-3">
          <div class="row">
            <div class="col-md-6">
              <div class="box">
                <div class="form-check">
                  <input
                    :disabled="!isEnabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="itemForm.courses_notification"
                    id="flexCheckDefaultCourses"
                  />
                  <label class="form-check-label" for="flexCheckDefaultCourses">
                    إشعارات الدورات
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="form-check">
                  <input
                    :disabled="!isEnabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="itemForm.meeting_notification"
                    id="flexCheckDefaultmeeting"
                  />
                  <label class="form-check-label" for="flexCheckDefaultmeeting">
                    إشعارات الورش واللقاءات
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :disabled="!isEnabled"
                    v-model="itemForm.attachments_notification"
                    id="flexCheckDefaultattachments"
                  />
                  <label
                    class="form-check-label"
                    for="flexCheckDefaultattachments"
                  >
                    إشعارات المرفقات
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <div class="form-check">
                  <input
                    :disabled="!isEnabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="itemForm.blogs_notification"
                    id="flexCheckDefaultblogs"
                  />
                  <label class="form-check-label" for="flexCheckDefaultblogs">
                    إشعارات المدونة
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="m-auto text-center p-3">
        <button @click="save" class="btn-main">
          {{ $t("save") }}
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import userAPI from "@/services/api/user.js";
export default {
  name: "settings-notif-item",
  props: ["currentUser"],
  data: (vm) => ({
    itemForm: {
      courses_notification: 0,
      blogs_notification: 0,
      attachments_notification: 0,
      meeting_notification: 0,
      ...vm.currentUser.notification_settings,
    },
    isEnabled: false,
  }),
  methods: {
    async save(evt) {
      if (evt) evt.preventDefault();

      let formData = new FormData();
      Object.keys(this.itemForm).forEach((key) => {
        formData.append(`${key}`, this.itemForm[key] ? 1 : 0);
      });

      try {
        let { data } = await userAPI.postNotifSettings(formData);
        if (data.success) {
          window.SwalSuccess(data.message);
          this.isEnabled = false;
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.log("error", error);
        if (error.response) {
          if (error.response.status == 422) {
            this.$refs.form.setErrors(error.response.data.errors);
          }
        }
      }
    },
    enableInput() {
      !this.isEnabled ? (this.isEnabled = true) : "";
    },
  },
};
</script>

<style></style>
