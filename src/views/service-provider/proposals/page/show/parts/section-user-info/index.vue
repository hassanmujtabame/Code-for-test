<template>
  <div class="d-flex my-4 gap-2 px-3 align-items-center">
    <div class="d-flex align-items-center gap-3">
      <img
        width="75"
        height="75"
        style="border-radius: 9999px"
        :src="itemPage.user_info.image"
        @click="showProfile"
        alt="user image"
      />
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center gap-2">
          <h6 style="font-size: 24px; font-weight: regular">
            {{ itemPage.user_info.name }}
          </h6>
          <p
            class="px-4 rounded-3"
            style="color: #1fb9b3; background-color: #f6f8f9"
            v-if="itemPage.state === 'online'"
          >
            خدمة اونلاين
          </p>
          <p
            class="px-4 rounded-3"
            style="color: #1fb9b3; background-color: #f6f8f9"
            v-if="itemPage.state === 'offline'"
          >
            خدمة اوفلاين
          </p>
        </div>
        <p style="color: #1fb9b3">
          {{ itemPage.user_info.job_title }}
        </p>
        <p>
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49906 10.536C6.99031 10.536 5.75781 9.31055 5.75781 7.79471C5.75781 6.27888 6.99031 5.06055 8.49906 5.06055C10.0078 5.06055 11.2403 6.28596 11.2403 7.8018C11.2403 9.31763 10.0078 10.536 8.49906 10.536ZM8.49906 6.12305C7.57823 6.12305 6.82031 6.87388 6.82031 7.8018C6.82031 8.72971 7.57115 9.48055 8.49906 9.48055C9.42698 9.48055 10.1778 8.72971 10.1778 7.8018C10.1778 6.87388 9.4199 6.12305 8.49906 6.12305Z"
              fill="#F2631C"
            />
            <path
              d="M8.49726 16.621C7.44892 16.621 6.39351 16.2244 5.57184 15.4381C3.48226 13.4264 1.17309 10.2177 2.04434 6.39977C2.83059 2.93602 5.85517 1.38477 8.49726 1.38477C8.49726 1.38477 8.49726 1.38477 8.50434 1.38477C11.1464 1.38477 14.171 2.93602 14.9573 6.40685C15.8214 10.2248 13.5123 13.4264 11.4227 15.4381C10.601 16.2244 9.54559 16.621 8.49726 16.621ZM8.49726 2.44727C6.43601 2.44727 3.78684 3.54518 3.08559 6.63352C2.32059 9.96977 4.41726 12.8456 6.31559 14.666C7.54101 15.8489 9.46059 15.8489 10.686 14.666C12.5773 12.8456 14.6739 9.96977 13.9231 6.63352C13.2148 3.54518 10.5585 2.44727 8.49726 2.44727Z"
              fill="#F2631C"
            />
          </svg>
          {{ itemPage.city }}
        </p>
      </div>
    </div>
    <button
      @click="openChat"
      class="text-white border-0 px-2 py-1 rounded-3 px-3 mb-3"
      style="background: black"
    >
      <!-- <svg
          width="24"
          height="24"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4294 25.2883L16.0826 24.1844L14.528 23.2636L13.8736 24.3676L15.4294 25.2883ZM10.6016 24.1844L11.2548 25.2883L12.8094 24.3676L12.1574 23.2636L10.6016 24.1844ZM13.8736 24.3676C13.8172 24.4577 13.7389 24.5321 13.6459 24.5836C13.553 24.6351 13.4484 24.6622 13.3421 24.6622C13.2358 24.6622 13.1312 24.6351 13.0383 24.5836C12.9453 24.5321 12.867 24.4577 12.8106 24.3676L11.2548 25.2883C12.1864 26.8634 14.4966 26.8634 15.4294 25.2883L13.8748 24.3676H13.8736ZM11.5344 2.36632H15.1498V0.558594H11.5344V2.36632ZM24.4897 11.7062V12.9114H26.2975V11.7062H24.4897ZM2.19445 12.9114V11.7062H0.386719V12.9114H2.19445ZM0.386719 12.9114C0.386719 14.3033 0.386719 15.3916 0.446976 16.2701C0.507234 17.1559 0.631364 17.8935 0.914575 18.5756L2.58491 17.8838C2.40776 17.4596 2.30411 16.9414 2.24988 16.1472C2.19445 15.3446 2.19445 14.3274 2.19445 12.9114H0.386719ZM8.28408 21.0365C6.77041 21.01 5.97742 20.9136 5.35556 20.6557L4.66501 22.326C5.63515 22.7286 6.73907 22.8189 8.25274 22.8455L8.28408 21.0365ZM0.914575 18.5756C1.26282 19.4164 1.77327 20.1803 2.41677 20.8238C3.06027 21.4673 3.82423 21.9778 4.66501 22.326L5.35556 20.6557C4.10061 20.1359 3.10475 19.1388 2.58491 17.8838L0.914575 18.5756ZM24.4897 12.9114C24.4897 14.3274 24.4897 15.3446 24.4343 16.1472C24.3801 16.9414 24.2764 17.4596 24.1005 17.8838L25.7696 18.5756C26.0528 17.8935 26.177 17.1559 26.2384 16.2701C26.2987 15.3916 26.2975 14.3033 26.2975 12.9114H24.4897ZM18.4314 22.843C19.9451 22.8177 21.049 22.7286 22.0192 22.326L21.3274 20.6557C20.7068 20.9136 19.9138 21.01 18.4013 21.0365L18.4314 22.8442V22.843ZM24.1005 17.8838C23.5806 19.1388 22.5836 20.1359 21.3286 20.6557L22.0192 22.326C22.86 21.9778 23.6239 21.4673 24.2674 20.8238C24.9109 20.1803 25.4214 19.4164 25.7696 18.5756L24.1005 17.8838ZM15.1498 2.36632C17.1395 2.36632 18.5688 2.36632 19.6836 2.47358C20.7851 2.57843 21.4853 2.77848 22.0445 3.12075L22.9881 1.57936C22.0975 1.03463 21.0876 0.791188 19.8547 0.673084C18.6351 0.557389 17.1046 0.558594 15.1498 0.558594V2.36632ZM26.2975 11.7062C26.2975 9.75149 26.2975 8.22215 26.1818 7.00133C26.0649 5.76846 25.8214 4.75734 25.2767 3.86794L23.7341 4.81157C24.0776 5.37076 24.2776 6.07096 24.3825 7.17367C24.4885 8.28723 24.4897 9.71654 24.4897 11.7062H26.2975ZM22.0433 3.12075C22.7328 3.54291 23.3127 4.12231 23.7353 4.81157L25.2767 3.86794C24.7052 2.93513 23.9209 2.15088 22.9881 1.57936L22.0445 3.12195L22.0433 3.12075ZM11.5344 0.558594C9.57961 0.558594 8.05028 0.558594 6.82946 0.673084C5.59659 0.791188 4.58547 1.03463 3.69606 1.57936L4.6397 3.12195C5.19889 2.77848 5.89908 2.57843 7.00179 2.47358C8.11535 2.36753 9.54466 2.36632 11.5344 2.36632V0.558594ZM2.19445 11.7062C2.19445 9.71654 2.19445 8.28723 2.3017 7.17246C2.40655 6.07096 2.60661 5.37076 2.94887 4.81157L1.40748 3.86914C0.862753 4.75855 0.619313 5.76846 0.501208 7.00133C0.386719 8.22336 0.386719 9.75149 0.386719 11.7062H2.19445ZM3.69606 1.57936C2.76325 2.15088 1.979 2.93633 1.40748 3.86914L2.95008 4.81157C3.37204 4.12259 3.95102 3.54321 4.6397 3.12075L3.69606 1.57936ZM12.1562 23.2636C11.9128 22.8503 11.6983 22.4851 11.4886 22.1983C11.2729 21.8838 10.9927 21.6188 10.6667 21.421L9.75798 22.984C9.81462 23.0178 9.89295 23.078 10.0279 23.2636C10.1738 23.4637 10.3389 23.7409 10.6016 24.1844L12.1562 23.2636ZM8.25274 22.843C8.78301 22.8527 9.11684 22.8599 9.37233 22.8876C9.61095 22.9141 9.70374 22.9527 9.75798 22.984L10.6667 21.421C10.3292 21.234 9.95571 21.1214 9.57118 21.0908C9.21204 21.051 8.7806 21.045 8.28408 21.0365L8.25274 22.8455V22.843ZM16.0826 24.1844C16.3453 23.7421 16.5104 23.4637 16.6563 23.2636C16.7912 23.078 16.8696 23.0178 16.9262 22.984L16.0175 21.421C15.668 21.6258 15.415 21.897 15.1956 22.1983C14.9871 22.4851 14.7714 22.8491 14.5268 23.2636L16.0826 24.1844ZM18.4013 21.0365C17.9048 21.045 17.4721 21.051 17.113 21.0908C16.7382 21.1329 16.3706 21.2161 16.0175 21.421L16.9262 22.984C16.9804 22.9527 17.0732 22.9141 17.3119 22.8876C17.5674 22.8599 17.9024 22.8515 18.4327 22.843L18.4013 21.0353V21.0365Z"
            fill="#FFF2F2"
          />
          <g opacity="0.5">
            <path
              d="M8.52148 9.89844H18.1627H8.52148ZM8.52148 14.1165H15.1498H8.52148Z"
              fill="#FFF2F2"
            />
            <path
              d="M8.52148 9.89844H18.1627M8.52148 14.1165H15.1498"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </g>
        </svg> -->
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

      تواصل
    </button>
  </div>
  <!-- <div class="rounded-3 p-4">
    <div class="justify-content-center border-bottom">
      <div class="img-service text-center">
        <img
          class="rounded-circle clickable"
          @click="showProfile"
          :src="itemPage.user_info.image"
          :alt="itemPage.user_info.name"
          width="120"
          height="120"
        />
      </div>
      <div class="t-c text-center mt-3">
        <h4 class="fw-bold">
          {{ itemPage.user_info.name }}
        </h4>
        <p>
          {{ itemPage.user_info.graduate ?? "N/A" }}
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div class="rounded-3 p-4">
    <div class="justify-content-center border-bottom">
      <div class="img-service text-center">
        <img
          class="rounded-circle clickable"
          @click="showProfile"
          :src="itemPage.user_info.image"
          :alt="itemPage.user_info.name"
          width="120"
          height="120"
        />
      </div>
      <div class="t-c text-center mt-3">
        <h4 class="fw-bold">
          {{ itemPage.user_info.name }}
        </h4>
        <p>
          {{ itemPage.user_info.graduate ?? "N/A" }}
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
import SuccessSendOffer from "./success-send-offer.vue";
export default {
  name: "section-user-info",
  props: ["itemPage"],
  components: {
    SuccessSendOffer,
  },
  data: (vm) => {
    return {
      sending: false,
      is_offer_sent: vm.itemPage.is_offer_sent,
      itemForm: {
        note: "",
        file: null,
      },
    };
  },
  methods: {
    showProfile() {
      this.router_push("service-provider-show-profile", {
        id: this.itemPage.user_info.id,
      });
    },
    // uploadFile(evt) {
    //     if (!evt.target.files && !evt.target.files[0]) {
    //         this.itemForm.file = null;

    //         return;
    //     }
    //     this.itemForm.file = evt.target.files[0];
    // },
    // async sendOffer() {
    //     if (!this.$store.state.isProviderRole) {
    //         let dataEvent = {
    //             image: `${this.publicPath}assets/img/Group 1171275670.png`,
    //             title: 'لا يمكنك تقديم عرض تقديم الخدمة',
    //             description: 'حتى تتمكن من التقديم على الخدمات يجب ان تكون كمقدم خدمة في المنصة',
    //             btns: [
    //                 { title: 'تحول كمقدم خدمة', action: () => this.$store.commit('changeRole', 'provider'), class: 'btn btn-custmer' }
    //             ]
    //         }
    //         this.showSuccessMsg(dataEvent)
    //         return;
    //     }
    //     // if (!this.userIsSubProvider) {
    //     //     let dataEvent = {
    //     //         image: `${this.publicPath}assets/img/Group 1171275670.png`,
    //     //         title: 'لا يمكنك تقديم عرض تقديم الخدمة',
    //     //         description: 'حتى تتمكن من التقديم على الخدمات يجب ان تكون مشترك كمقدم خدمة في المنصة',
    //     //         btns: [
    //     //             { title: 'إشترك الان', action: () => this.router_push('service-provider-subscribe'), class: 'btn btn-custmer' }
    //     //         ]

    //     //     }
    //     //     this.showSuccessMsg(dataEvent)
    //     //     return;
    //     // }
    //     this.sending = true;
    //     let valid = this.$refs.form.validate();
    //     if (!valid) {
    //         this.sending = false;
    //         return;
    //     }
    //     try {
    //         let formData = new FormData();
    //         Object.keys(this.itemForm).forEach(key => {
    //             formData.append(key, this.itemForm[key])
    //         })
    //         formData.append('service_id', this.itemPage.id)
    //         formData.append('user_id', this.itemPage.user_info.id)
    //         let { data } = await window.axios.post('service-provider/user/offer-for-service', formData)
    //         if (data.success) {
    //             this.fireOpenDialog('success-send-offer');
    //             this.itemForm.note = '';
    //             this.itemForm.file = null;
    //             this.$refs.form.reset();
    //             this.is_offer_sent = true;
    //             this.sending = false;
    //             this.itempPage.is_offer_sent = true
    //         }
    //     } catch (error) {
    //         console.log('error', error)
    //         if (error.response) {
    //             let response = error.response
    //             if (response.status == 422) {
    //                 if (response.data.errors)
    //                     this.$refs.form.setErrors(response.data.errors)
    //             }
    //         }
    //     }
    //     // this.sending = false;
    // }
    openChat() {
      this.fireEvent("chat-bar", {
        user: {
          id: this.itemPage.user_info.id,
          name: this.itemPage.user_info.name,
          image: this.itemPage.user_info.image,
          bio: this.itemPage.user_info.description,
          job_title: this.itemPage.user_info.job,
          //   id: this.userPage.id,
          //   name: this.userPage.name,
          //   image: this.userPage.image,
          //   bio: this.userPage.description,
          //   job_title: this.userPage.job,
        },
      });
    },
  },
};
</script>

<style></style>
