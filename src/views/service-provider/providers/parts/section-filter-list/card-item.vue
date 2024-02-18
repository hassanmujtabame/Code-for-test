<template>
  <div class="provider-card" style="height: 360px">
    <div class="provider-card__wrapper">
      <div class="provider-card__rate">
        <img
          :src="`${publicPath}assets/svg/star-move.svg`"
          width="24"
          height="24"
        /><span>{{ rate }}</span>
      </div>
      <div class="provider-card__avatar">
        <img :src="image" />
      </div>
      <div class="provider-card__user-info">
        <div class="provider-card__name">{{ name }}</div>
        <div class="provider-card__job">{{ job }}</div>
        <div class="provider-card__bio text-two-lines">{{ bio }}</div>
      </div>
      <div class="provider-card__actions mb-3">
        <button v-if="user.name != name" @click="openChat">
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
          {{ $t("chat") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    providerId: { default: 1 },
    name: { default: "سلمى محمد" },
    job: { default: "مصممة ازياء" },
    bio: {
      default: `مصممة ازياء محترفة لدي الكثير من الخبرة في تصميم الازياء والعبايات يسرني مساعدتك`,
    },
    image: { default: "/assets/img/Group 289326.png" },
    rate: { default: 4.5 },
  },
  methods: {
    openChat() {
      this.fireEvent("chat-bar", {
        user: {
          id: this.providerId,
          name: this.name,
          job_title: this.job,
          bio: this.bio,
          image: this.image,
        },
      });
    },
  },
};
</script>

<style scoped>
.provider-card {
  /* box */
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: #ffffff;
  padding: 16px 16px;
}
.provider-card__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}
.provider-card__rate {
  position: absolute;
  left: -10px;
  top: -10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.provider-card__rate > span {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */
  color: #ffbc00;
}

.provider-card__avatar > img {
  width: 128px;
  height: 128px;
  border: 4px solid #1fb9b3;
  border-radius: 50%;
}
.provider-card__name {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */
  text-transform: capitalize;
  color: #1fb9b3;
  margin-top: 20px;
}
.provider-card__job {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* 979797 */
  color: #979797;
  height: 28px;
}
.provider-card__bio {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #667d80;
  max-width: 320px;
  margin-top: 15px;
  height: 58px;
}
.provider-card__actions {
  margin-top: 20px;
}
.provider-card__actions > button {
  background: #414042;
  border-radius: 8px;
  color: white;
  border: none;
  padding: auto;
  padding: 0.5rem 1rem !important;
  margin: 0 0.5rem;
}
</style>
