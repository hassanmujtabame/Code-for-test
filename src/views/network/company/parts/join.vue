<template>
  <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 class="my-0" style="font-size: 48px">انضم لشركاء</h1>
      <h1
        style="width: fit-content; font-size: 48px"
        class="position-relative my-0"
      >
        رياديات
        <img
          style="bottom: -15px; left: 0; width: 100%"
          class="position-absolute"
          src="@/assets/img/company/Vector 14.png"
          alt=""
        />
      </h1>
      <router-link
        class="d-block my-4"
        style="color: #2cb7b3; font-size: 24px; font-weight: bold"
        :to="getRouteLocale('network-subscribe')"
      >
        أنضمي الان
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
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="../../../../assets/img/company/Desktop.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "join-company",
};
</script>

<style></style>
