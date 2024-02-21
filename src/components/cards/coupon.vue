<template>
  <div
    @click="getDetailCoupon"
    class="border rounded-3 coupon-card cursor-pointer position-relative d-flex flex-column"
  >
    <!-- <div class="d-flex justify-content-end p-3" style="height: 75px">
      <p
        style="background-color: var(--m-color); width: fit-content"
        class="text-white px-3 rounded-2"
      >
        {{ tag ?? "الجميع" }}
      </p>
    </div> -->
    <div class="d-flex px-3 py-3">
      <div class="">
        <img class="img-fluid rounded-4" :src="img" alt="card img" />
      </div>
    </div>
    <div class="text-start px-3">
      <h5 class="coupon-card__title">
        {{ title }}
      </h5>
    </div>
    <div class="px-3 py-2 d-flex justify-content-between">
      <p class="coupon-card__description w-50">
        احصل على خصم {{ discount }}% عند استخدامك كود الخصم
      </p>
      <p style="color: #f2631c" class="t-c p-0 m-0 my-2">
        <!-- <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0811 15.1673H6.76111C5.50111 15.1673 4.58111 14.6407 4.22777 13.734C3.86111 12.7873 4.20111 11.614 5.08111 10.8207L8.17444 8.00065L5.08111 5.18065C4.20111 4.38732 3.86111 3.21398 4.22777 2.26732C4.58111 1.35398 5.50111 0.833984 6.76111 0.833984H11.0811C12.3411 0.833984 13.2611 1.36065 13.6144 2.26732C13.9811 3.21398 13.6411 4.38732 12.7611 5.18065L9.66777 8.00065L12.7678 10.8207C13.6411 11.614 13.9878 12.7873 13.6211 13.734C13.2611 14.6407 12.3411 15.1673 11.0811 15.1673ZM8.92111 8.67398L5.75444 11.554C5.19444 12.0673 4.94777 12.814 5.16111 13.3673C5.36111 13.8806 5.92777 14.1673 6.76111 14.1673H11.0811C11.9144 14.1673 12.4811 13.8873 12.6811 13.3673C12.8944 12.814 12.6544 12.0673 12.0878 11.554L8.92111 8.67398ZM6.76111 1.83398C5.92777 1.83398 5.36111 2.11398 5.16111 2.63398C4.94777 3.18732 5.18777 3.93398 5.75444 4.44732L8.92111 7.32732L12.0878 4.44732C12.6478 3.93398 12.8944 3.18732 12.6811 2.63398C12.4811 2.12065 11.9144 1.83398 11.0811 1.83398H6.76111Z"
            fill="#979797"
          />
        </svg> -->
        متبقى {{ during }}
      </p>
      <!-- <p class="t-c p-0 m-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.0013 15.1667C4.50797 15.1667 1.66797 12.3267 1.66797 8.83333C1.66797 5.34 4.50797 2.5 8.0013 2.5C11.4946 2.5 14.3346 5.34 14.3346 8.83333C14.3346 12.3267 11.4946 15.1667 8.0013 15.1667ZM8.0013 3.5C5.0613 3.5 2.66797 5.89333 2.66797 8.83333C2.66797 11.7733 5.0613 14.1667 8.0013 14.1667C10.9413 14.1667 13.3346 11.7733 13.3346 8.83333C13.3346 5.89333 10.9413 3.5 8.0013 3.5Z"
            fill="#979797"
          />
          <path
            d="M8 9.16536C7.72667 9.16536 7.5 8.9387 7.5 8.66536V5.33203C7.5 5.0587 7.72667 4.83203 8 4.83203C8.27333 4.83203 8.5 5.0587 8.5 5.33203V8.66536C8.5 8.9387 8.27333 9.16536 8 9.16536Z"
            fill="#979797"
          />
          <path
            d="M10 1.83398H6C5.72667 1.83398 5.5 1.60732 5.5 1.33398C5.5 1.06065 5.72667 0.833984 6 0.833984H10C10.2733 0.833984 10.5 1.06065 10.5 1.33398C10.5 1.60732 10.2733 1.83398 10 1.83398Z"
            fill="#979797"
          />
        </svg>
        {{ $t("publish-date") }} : {{ date }}
      </p> -->
    </div>

    <!-- <button :disabled="!sowDetails" @click="getDetailCoupon" class="btn btn-main2">عرض التفاصيل</button> -->
  </div>
</template>

<script>
export default {
  name: "card-vue",
  props: {
    title: {
      type: String,
    },
    img: {
      type: String,
    },
    tag: {
      type: String,
    },
    discount: {
      type: [String, Number],
    },
    name: {
      type: String,
      default: "riadiat-10",
    },
    date: {
      type: String,
    },
    id: {
      type: [String, Number],
    },
    during: {
      type: [String, Number],
    },
    sowDetails: {
      type: Boolean,
      default: false,
    },
  },
  data: (vm) => {
    return {
      couponId: `code-coupon-${vm.generateRandomString(8)}`,
    };
  },
  methods: {
    getDetailCoupon() {
      this.router_push("network-details-coupon", { id: this.id });
    },
  },
};
</script>

<style>
.coupon-card__image {
  height: 72px;
  width: 72px;
}

.coupon-card__code {
  width: 95%;
}

.coupon-card__code-text,
.coupon-card__code-icon {
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  color: #1fb9b3;
}

.coupon-card__title {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  text-align: right;
  text-transform: capitalize;

  color: #585858;
}

.coupon-card__description {
  color: #bbaacc;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
}

. d-flex justify-content-between align-items-center {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #979797;
  width: fit-content;
  text-align: justify;
}

.overlay-alert {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(55, 54, 54, 0.62);
}

.copyAlert {
  opacity: 1;
  color: rgb(79, 222, 79);
  background: rgba(79, 222, 79, 0.5);
  display: block;
  padding: 5px 14px;
  width: 75%;
  border-radius: 8px;
  animation-name: disappear;
  animation-iteration-count: infinite;
  animation-duration: 2.5s;
}

@keyframes disappear {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}

.btn-main2 {
  background-color: #1fb9b3;
  border: 1px solid #1fb9b3;
  border-bottom-right-radius: 7px;
  width: 100%;
  height: 45px;
  color: white;
  border-bottom-left-radius: 7px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
</style>
