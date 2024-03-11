<template>
  <div class="my-profile box info p-3 bg-card" v-bind="$attrs">
    <div
      class="main-img text-center m-auto avatar-user-card clickable"
      @click="showProfile"
      :style="{ height: `${sizeImage}px`, width: `${sizeImage}px` }"
    >
      <img :src="member.image" />
    </div>
    <div class="text-center">
      <h5 style="color: #000; font-size: 24px; font-weight: bold" class="mt-2">
        {{ member.name }}
      </h5>
      <h5 style="font-size: 16px; font-weight: semibold" class="m-c mt-2">
        رياده اعمال
      </h5>
      <h6 style="color: #f2631c; font-size: 12px">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49992 10.0037C7.07992 10.0037 5.91992 8.8504 5.91992 7.42374C5.91992 5.99707 7.07992 4.8504 8.49992 4.8504C9.91992 4.8504 11.0799 6.00374 11.0799 7.4304C11.0799 8.85707 9.91992 10.0037 8.49992 10.0037ZM8.49992 5.8504C7.63326 5.8504 6.91992 6.55707 6.91992 7.4304C6.91992 8.30374 7.62659 9.0104 8.49992 9.0104C9.37326 9.0104 10.0799 8.30374 10.0799 7.4304C10.0799 6.55707 9.36659 5.8504 8.49992 5.8504Z"
            fill="#F2631C"
          />
          <path
            d="M8.50012 15.7304C7.51345 15.7304 6.52012 15.3571 5.74678 14.6171C3.78012 12.7238 1.60678 9.70378 2.42678 6.11044C3.16678 2.85044 6.01345 1.39044 8.50012 1.39044C8.50012 1.39044 8.50012 1.39044 8.50678 1.39044C10.9935 1.39044 13.8401 2.85044 14.5801 6.11711C15.3934 9.71044 13.2201 12.7238 11.2534 14.6171C10.4801 15.3571 9.48678 15.7304 8.50012 15.7304ZM8.50012 2.39044C6.56012 2.39044 4.06678 3.42378 3.40678 6.33044C2.68678 9.47044 4.66012 12.1771 6.44678 13.8904C7.60012 15.0038 9.40678 15.0038 10.5601 13.8904C12.3401 12.1771 14.3134 9.47044 13.6068 6.33044C12.9401 3.42378 10.4401 2.39044 8.50012 2.39044Z"
            fill="#F2631C"
          />
        </svg>
        جده
      </h6>
      <p>
        {{ member.job ?? member.job_title }}
      </p>
      <p class="t-c">{{ member.bio }}</p>
    </div>
    <div class="text-end">
      <div class="message-service">
        <button
          class="text-white border-0 p-2 px-3"
          v-if="showBtnMsg"
          @click="sendMessage"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
              fill="white"
            />
            <path
              d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
              fill="white"
            />
          </svg>
          {{ $t("message") }}
        </button>
        <button
          style="background-color: #f2631c"
          v-if="showBtnChat"
          @click="openChat"
          class="text-white border-0 py-2 px-4 mx-2"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 21.3074H7C3.35 21.3074 1.25 19.2074 1.25 15.5574V8.55737C1.25 4.90737 3.35 2.80737 7 2.80737H17C20.65 2.80737 22.75 4.90737 22.75 8.55737V15.5574C22.75 19.2074 20.65 21.3074 17 21.3074ZM7 4.30737C4.14 4.30737 2.75 5.69737 2.75 8.55737V15.5574C2.75 18.4174 4.14 19.8074 7 19.8074H17C19.86 19.8074 21.25 18.4174 21.25 15.5574V8.55737C21.25 5.69737 19.86 4.30737 17 4.30737H7Z"
              fill="white"
            />
            <path
              d="M11.9998 12.9273C11.1598 12.9273 10.3098 12.6673 9.65978 12.1373L6.52978 9.63734C6.20978 9.37734 6.14978 8.90734 6.40978 8.58734C6.66978 8.26734 7.13978 8.20735 7.45978 8.46735L10.5898 10.9673C11.3498 11.5773 12.6398 11.5773 13.3998 10.9673L16.5298 8.46735C16.8498 8.20735 17.3298 8.25734 17.5798 8.58734C17.8398 8.90734 17.7898 9.38734 17.4598 9.63734L14.3298 12.1373C13.6898 12.6673 12.8398 12.9273 11.9998 12.9273Z"
              fill="white"
            />
          </svg>
          تواصل
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-info-card",
  props: {
    sizeImage: {
      type: String,
      default: "140",
    },
    groupDialog: {
      type: String,
    },
    routeName: {
      type: String,
    },
    showBtnMsg: {
      type: Boolean,
      default: false,
    },
    showBtnChat: {
      type: Boolean,
      default: true,
    },
    member: {
      type: [Array, Object],
      default: () => {
        return {
          image: "/assets/img/avatar-11.jpg",
          name: "عبد الرحمن الشيخ",
          job: "مصمم واجهات اميامية",
          summary:
            "مصمم واجهات محترفة لدي الكثير من الخبرة في تصميم الازياء والعبايات يسرني مساعدتك",
        };
      },
    },
  },
  methods: {
    showProfile() {
      if (this.routeName) {
        this.router_push(this.routeName, { id: this.member.id });
      }
    },
    sendMessage() {
      if (!this.groupDialog) return;
      if (!this.member.id) return;
      this.fireEvent(this.groupDialog, {
        formData: { user_id: this.member.id },
        opts: {},
      });
    },
    openChat() {
      this.fireEvent("chat-bar", { user: this.member });
    },
  },
};
</script>

<style scoped>
.img-person {
  min-height: 140px;
  min-width: 140px;
}
</style>
