<template>
  <div class="container my-5">
    <div class="row my-5">
      <div
        style="display: flex; flex-direction: column; justify-content: center"
        class="col-md-6 my-5"
      >
        <h1 class="m-0" style="font-size: 50px; font-weight: bold">
          شارك خبراتك ومهاراتك
        </h1>
        <p>ساهمي في تنمية نساء المجتمع بانضمامك إلينا</p>
        <router-link
          class=""
          style="color: #2cb7b3; font-size: 30px; font-weight: bold"
          :to="getRouteLocale('')"
        >
          أنضمي كمدربة
          <svg
            class="mx-2"
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
      <div class="col-md-6 my-5 position-relative">
        <img
          style="z-index: 4; height: 672px; width: 100%"
          class="position-relative"
          src="@/assets/img/academy/Right.png"
          alt=""
        />
        <img
          style="z-index: 3; top: 0; left: 0"
          class="img-fluid position-absolute"
          src="@/assets/img/academy/v.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "speical-manager",
};
</script>

<style></style>
