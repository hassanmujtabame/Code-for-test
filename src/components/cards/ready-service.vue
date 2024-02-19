<template>
  <div class="box rounded-top mb-3 overflow-y-auto">
    <div class="parent">
      <div
        v-b-modal="`my-modal-${id}`"
        class="image2 bg-white"
        style="
          border-radius: 100%;
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.303 3.33301C10.303 1.49301 11.803 9.60172e-06 13.651 9.60172e-06C14.0897 -0.00104223 14.5244 0.0843342 14.9302 0.251264C15.3359 0.418194 15.7048 0.663408 16.0158 0.972906C16.3268 1.2824 16.5738 1.65012 16.7426 2.05507C16.9115 2.46002 16.999 2.89426 17 3.33301C17 5.17401 15.5 6.66701 13.651 6.66701C13.2076 6.66756 12.7685 6.57996 12.3592 6.40932C11.95 6.23868 11.5787 5.98839 11.267 5.67301L6.632 8.82901C6.76108 9.47201 6.69778 10.1388 6.45 10.746L11.532 14.086C12.1306 13.5978 12.8796 13.3318 13.652 13.333C14.0907 13.3321 14.5254 13.4176 14.9311 13.5846C15.3368 13.7517 15.7056 13.997 16.0165 14.3066C16.3274 14.6162 16.5743 14.984 16.743 15.389C16.9118 15.794 16.9991 16.2283 17 16.667C17 18.507 15.5 20 13.651 20C12.7651 20.0019 11.9147 19.6518 11.2869 19.0268C10.659 18.4017 10.3051 17.5529 10.303 16.667C10.3022 16.1996 10.4007 15.7374 10.592 15.311L5.55 12C4.93941 12.5309 4.15712 12.8226 3.348 12.821C2.90922 12.8221 2.47453 12.7366 2.06877 12.5696C1.66301 12.4026 1.29413 12.1573 0.983212 11.8477C0.672295 11.5381 0.425431 11.1702 0.256728 10.7652C0.0880245 10.3601 0.000786975 9.92579 0 9.48701C0.000918172 9.04831 0.0882526 8.61409 0.257015 8.20915C0.425777 7.80421 0.67266 7.43648 0.983564 7.12697C1.29447 6.81746 1.6633 6.57223 2.069 6.40528C2.47469 6.23834 2.9093 6.15296 3.348 6.15401C4.412 6.15401 5.358 6.64701 5.971 7.41501L10.464 4.35601C10.3571 4.02554 10.3028 3.68034 10.303 3.33301Z"
            fill="#414042"
          />
        </svg>
      </div>
    </div>
    <router-link
      class="router-link"
      :to="getRouteLocale('service-provider-ready-service', { id: id })"
    >
      <div class="position-relative">
        <!-- <img class="w-100 image1" :src="image" :alt="title" height="264px" /> -->
        <!-- <h6
          class="px-3 py-1 position-absolute"
          style="background-color: #1fb9b3; color: white; top: 17px; left: 17px"
        >
          جديد
        </h6> -->
      </div>

      <div class="p-3">
        <div class="d-flex justify-content-between">
          <span class="m-c">{{ categoryName }} </span>
          <p class="t-c">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 14.17C9.86988 14.17 8.12988 12.44 8.12988 10.3C8.12988 8.16 9.86988 6.44 11.9999 6.44C14.1299 6.44 15.8699 8.17 15.8699 10.31C15.8699 12.45 14.1299 14.17 11.9999 14.17ZM11.9999 7.94C10.6999 7.94 9.62988 9 9.62988 10.31C9.62988 11.62 10.6899 12.68 11.9999 12.68C13.3099 12.68 14.3699 11.62 14.3699 10.31C14.3699 9 13.2999 7.94 11.9999 7.94Z"
                fill="#979797"
              />
              <path
                d="M11.9997 22.76C10.5197 22.76 9.02969 22.2 7.86969 21.09C4.91969 18.25 1.65969 13.72 2.88969 8.33C3.99969 3.44 8.26969 1.25 11.9997 1.25C11.9997 1.25 11.9997 1.25 12.0097 1.25C15.7397 1.25 20.0097 3.44 21.1197 8.34C22.3397 13.73 19.0797 18.25 16.1297 21.09C14.9697 22.2 13.4797 22.76 11.9997 22.76ZM11.9997 2.75C9.08969 2.75 5.34969 4.3 4.35969 8.66C3.27969 13.37 6.23969 17.43 8.91969 20C10.6497 21.67 13.3597 21.67 15.0897 20C17.7597 17.43 20.7197 13.37 19.6597 8.66C18.6597 4.3 14.9097 2.75 11.9997 2.75Z"
                fill="#979797"
              />
            </svg>
            {{ place ?? "N/A" }}
          </p>
        </div>
        <h6 class="text-two-lines w-75" style="height: 20px">{{ title }}</h6>
        <p class="text-two-lines txt-description" v-html="description"></p>
        <div class="d-flex gap-2 justify-content-between">
          <p style="color: #f2631c" class="t-c">
            <!-- <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.74 22.75H6.26C3.77 22.75 1.75 20.73 1.75 18.24V11.51C1.75 9.02001 3.77 7 6.26 7H17.74C20.23 7 22.25 9.02001 22.25 11.51V12.95C22.25 13.36 21.91 13.7 21.5 13.7H19.48C19.13 13.7 18.81 13.83 18.58 14.07L18.57 14.08C18.29 14.35 18.16 14.72 18.19 15.1C18.25 15.76 18.88 16.29 19.6 16.29H21.5C21.91 16.29 22.25 16.63 22.25 17.04V18.23C22.25 20.73 20.23 22.75 17.74 22.75ZM6.26 8.5C4.6 8.5 3.25 9.85001 3.25 11.51V18.24C3.25 19.9 4.6 21.25 6.26 21.25H17.74C19.4 21.25 20.75 19.9 20.75 18.24V17.8H19.6C18.09 17.8 16.81 16.68 16.69 15.24C16.61 14.42 16.91 13.61 17.51 13.02C18.03 12.49 18.73 12.2 19.48 12.2H20.75V11.51C20.75 9.85001 19.4 8.5 17.74 8.5H6.26Z"
                fill="#979797"
              />
              <path
                d="M2.5 13.16C2.09 13.16 1.75 12.82 1.75 12.41V7.84006C1.75 6.35006 2.69 5.00001 4.08 4.47001L12.02 1.47001C12.84 1.16001 13.75 1.27005 14.46 1.77005C15.18 2.27005 15.6 3.08005 15.6 3.95005V7.75003C15.6 8.16003 15.26 8.50003 14.85 8.50003C14.44 8.50003 14.1 8.16003 14.1 7.75003V3.95005C14.1 3.57005 13.92 3.22003 13.6 3.00003C13.28 2.78003 12.9 2.73003 12.54 2.87003L4.6 5.87003C3.79 6.18003 3.24 6.97006 3.24 7.84006V12.41C3.25 12.83 2.91 13.16 2.5 13.16Z"
                fill="#979797"
              />
              <path
                d="M19.6005 17.7999C18.0905 17.7999 16.8105 16.6799 16.6905 15.2399C16.6105 14.4099 16.9105 13.5999 17.5105 13.0099C18.0205 12.4899 18.7205 12.2 19.4705 12.2H21.5505C22.5405 12.23 23.3005 13.0099 23.3005 13.9699V16.03C23.3005 16.99 22.5405 17.7699 21.5805 17.7999H19.6005ZM21.5305 13.7H19.4805C19.1305 13.7 18.8105 13.8299 18.5805 14.0699C18.2905 14.3499 18.1505 14.7299 18.1905 15.1099C18.2505 15.7699 18.8805 16.2999 19.6005 16.2999H21.5605C21.6905 16.2999 21.8105 16.18 21.8105 16.03V13.9699C21.8105 13.8199 21.6905 13.71 21.5305 13.7Z"
                fill="#979797"
              />
              <path
                d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
                fill="#979797"
              />
            </svg> -->
            {{ price }} {{ $t("riyals") }}
          </p>
        </div>
        <button
          style="background-color: #1fb9b3"
          class="px-5 btn rounded-3 py-2 text-light"
        >
          عرض التفاصيل
        </button>
        <div
          class="d-flex gap-2 justify-content-between align-items-center border-top"
        >
          <!-- <div v-if="name" class="d-flex align-items-center mt-2">
            <div>
              <img
                class=""
                style="border-radius: 100%"
                :src="name.image"
                height="40px"
                width="40px"
              />
            </div>
            <div class="px-3">{{ name.name ?? "N/A" }}</div>
          </div>
          <div
            v-else
            class="d-flex align-items-center"
            style="height: 40px"
          ></div> -->
          <div>
            <!-- <RateStars :value="rates" :size="12" /> -->
          </div>
        </div>
      </div>
    </router-link>
    <b-modal :id="`my-modal-${id}`" :hide-header="true" :hide-footer="true">
      <h5 style="color: #ebae05" class="py-3">
        شارك {{ title ?? "N/A" }} على مواقع التواصل الاجتماعي
      </h5>
      <img
        style="display: flex; margin: auto"
        :src="`${publicPath}assets/img/Group 1171276011.png`"
      />
      <!-- <div
        class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition mt-4"
      >
        <button style="background: transparent; border: 0">
          <ShareNetwork
            network="twitter"
            :url="shareLink"
            title="Share in twitter"
            description="This is another awesome article for awesome readers"
          >
            <img
              class="h-100"
              :src="`${publicPath}assets/img/Twitter.png`"
              alt=""
            />
          </ShareNetwork>
        </button>

        <button style="background: transparent; border: 0">
          <ShareNetwork
            network="Linkedin"
            :url="shareLink"
            title="Share in Linkedin"
            description="This is another awesome article for awesome readers"
          >
            <img
              class="h-100"
              :src="`${publicPath}assets/img/Linkedin.png`"
              alt=""
            />
          </ShareNetwork>
        </button>
        <button style="background: transparent; border: 0">
          <ShareNetwork
            network="Facebook"
            :url="shareLink"
            title="Share in facebook"
            description="This is another awesome article for awesome readers"
          >
            <img
              class="h-100"
              :src="`${publicPath}assets/img/Facebook.png`"
              alt=""
            />
          </ShareNetwork>
        </button>
        <div
          class="fb-share-button"
          :data-href="currentUrl"
          data-layout="button_count"
        ></div>
      </div> -->
    </b-modal>
  </div>
</template>

<script>
import RateStars from "../rate-stars/index";

export default {
  name: "card-service",
  components: { RateStars },
  props: {
    name: {
      type: [String, Object],
    },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    id: {
      type: [String, Number],
    },
    description: {
      type: String,
    },
    categoryName: {
      type: String,
    },
    place: {
      type: String,
      default: "N/A",
    },
    price: {
      type: [String, Number],
    },
    rates: {
      type: [String, Number, Array],
    },
  },
  data: () => {
    return {
      shareLink: "",
    };
  },
  mounted() {
    this.shareLink = window.location.href + "/" + this.id;
  },
};
</script>

<style>
.txt-description {
  height: 60px;
}

.parent {
  position: relative;
  top: 0;
  left: 0;
}

.image1 {
  position: relative;
  top: 0;
  left: 0;
}

.image2 {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.modal-backdrop {
  --bs-backdrop-zindex: none !important;
  --bs-backdrop-bg: none !important;
}

#my-modal___BV_modal_header_,
#my-modal___BV_modal_footer_ {
  visibility: hidden !important;
}
</style>
