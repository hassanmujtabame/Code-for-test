<template>
  <div class="main-top py-2 position-relative mt-5 mobile-center">
    <div class="container">
      <div class="row align-items-center py-2 m-auto">
        <div class="col-12 col-lg-8 mt-3">
          <h2 class="text-white">
            مدرب، مستشار أو مقدم خدمة وتحتاج إلى مكان للعمل؟
          </h2>

          <p class="text-white desc">
            يمكنك العمل من أي مكان في العالم في قاعات مجهزة بأحدث الأجهزة وأماكن
            مريحة بأفضل الأسعار من خلال أماكن العمل في شبكة رياديات
          </p>
          <div style="margin-top: 20px">
            <router-link
              :to="getRouteLocale('workspaces-home')"
              custom
              v-slot="{ navigate }"
            >
              <button
                @click="navigate"
                role="link"
                class="btn border p-2 text-white bg-transpernt svg-network"
              >
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#F6F8F9"
                  />
                  <path
                    d="M11.9999 18.25C11.7899 18.25 11.5899 18.22 11.4199 18.16C9.26986 17.43 5.85986 14.81 5.85986 10.91C5.85986 8.83 7.53986 7.14001 9.60986 7.14001C10.5099 7.14001 11.3399 7.45001 12.0099 8.01001C12.6799 7.45001 13.5199 7.14001 14.3999 7.14001C16.4699 7.14001 18.1499 8.83 18.1499 10.91C18.1499 14.8 14.7399 17.42 12.5799 18.16C12.4099 18.22 12.1999 18.25 11.9999 18.25ZM9.59987 8.64999C8.35987 8.64999 7.34987 9.67001 7.34987 10.92C7.34987 14.41 10.7199 16.35 11.8999 16.75C11.9399 16.76 12.0399 16.76 12.0799 16.75C13.2599 16.35 16.6299 14.41 16.6299 10.92C16.6299 9.67001 15.6199 8.64999 14.3799 8.64999C13.6799 8.64999 13.0099 8.99 12.5899 9.56C12.3099 9.94 11.6699 9.94 11.3899 9.56C10.9699 8.98 10.3199 8.64999 9.59987 8.64999Z"
                    fill="#F6F8F9"
                  />
                </svg>
                  {{ $t('more') }}
              </button>
            </router-link>
          </div>
        </div>
        <div class="col-12 col-lg-4 mt-3">
          <div>
            <img
              class="landing w-100 main"
              src="@/assets/img/work-spaces/workspace-network.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="star position-absolute">
        <img
          class="landing"
          :src="`${publicPath}assets/svg/start.svg`"
          alt=""
        />
      </div>
      <div class="square position-absolute">
        <img
          class="landing"
          :src="`${publicPath}assets/svg/square.svg`"
          alt=""
        />
      </div>
      <div class="star-two position-absolute">
        <img
          class="landing"
          :src="`${publicPath}assets/svg/start.svg`"
          alt=""
        />
      </div>
      <div class="star-big position-absolute">
        <img
          class="landing"
          :src="`${publicPath}assets/svg/star-big.svg`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-workspace",
};
</script>

<style scoped>
svg {
  max-width: 100%;
  max-height: 100%;
}
.desc {
  width: 75%;
}
@media (max-width: 991px) {
  .desc {
    width: 100% !important;
  }
  .main {
    display: none;
  }
}
</style>