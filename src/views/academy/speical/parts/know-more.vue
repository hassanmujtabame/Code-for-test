<template>
  <div class="row">
    <div class="col-md-6 my-auto">
      <div class="">
        <h1 style="font-size: 50px; font-weight: bolder" class="m-0">
          تعرفي على انواع
        </h1>
        <h1
          style="width: fit-content; font-size: 50px; font-weight: bolder"
          class="position-relative m-0"
        >
          التدريب
          <img
            style="width: 100%; bottom: -15px; left: 4px"
            class="position-absolute"
            src="@/assets/img/academy/Vector 14.png"
            alt=""
          />
        </h1>
      </div>
      <router-link v-if="!show" style="color: #2cb7b3; font-size: 30px">
        أنضمي كمدربة
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M26.6654 18.2285C27.4938 18.2285 28.1654 17.5569 28.1654 16.7285C28.1654 15.9001 27.4938 15.2285 26.6654 15.2285V18.2285ZM26.6654 15.2285H5.33203V18.2285H26.6654V15.2285Z"
            fill="#2CB7B3"
          />
          <path
            d="M13.332 8.72656L5.33203 16.7266L13.332 24.7266"
            stroke="#2CB7B3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="col-md-6 col-12 d-none d-md-block">
      <img
        class="img-fluid"
        src="../../../../assets/img/academy/lefy.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggle() {
      if (this.user.is_instructor) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    // toggle() {
    //   if (this.user.is_instructor) {
    //     this.show = false;
    //   } else {
    //     this.show = true;
    //   }
    // },
    // toggle() {
    //   if (this.user.is_instructor) {
    //     this.show = false;
    //   } else {
    //     this.show = true;
    //   }
    // },
    // toggle() {
    //   if (this.user.is_instructor) {
    //     this.show = false;
    //   } else {
    //     this.show = true;
    //   }
    // },
  },
};
</script>

<style></style>
