<template>
  <div class="border rounded-3 coupon-card position-relative p-2">


    <div class="d-flex">
      <div class="px-3">
        <h5 class="coupon-card__title m-c">
          {{ title }}
        </h5>
        <p class="coupon-card__description">
          احصل على خصم {{ discount }}% عند استخدامك كود الخصم
        </p>

      </div>
    </div>


    <!-- <button :disabled="!sowDetails" @click="getDetailCoupon" class="btn btn-main2">عرض التفاصيل</button> -->
    <div class="row">
      <div class="input-group input-group-sm input-group-md input-group-lg  m-auto"
        :class="{ 'w-100': !isMobile, 'w-100': isMobile }">

        <span class="input-group-text text-white" style="background: var(--pc);cursor:pointer; border-radius: 0px 5px 5px 0"
          :class="{ 'fs-6': isMobile }" id="inputGroup-sizing-lg">تعديل</span>

        <input type="text" class="form-control p-3" style="color: var(--pc); border-style: dotted; border-color: var(--pc); border-radius: 5px 0px 0px 5px; padding: 10px !important;border-right: hidden;" :class="{ 'fs-6': isMobile }" aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg" :value="name" placeholder="الكوبون" required>

      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'card-vue',
  props: {
    title: {
      type: String
    },
    img: {
      type: String
    },
    tag: {
      type: String,
    },
    discount: {
      type: [String, Number]
    },
    name: {
      type: String,
      default: 'riadiat-10'
    },
    date: {
      type: String,
    },
    id: {
      type: [String, Number]
    },
    during: {
      type: [String, Number]
    },
    sowDetails: {
      type: Boolean,
      default: false,
    },
  },
  data: (vm) => {
    return {
      couponId: `code-coupon-${vm.generateRandomString(8)}`
    }
  },
  methods: {
    getDetailCoupon() {
      this.router_push('network-details-coupon', { id: this.id })
    }

  }
}
</script>
  
<style>
.coupon-card__image {
  height: 72px;
  width: 72px
}

.coupon-card__code {
  width: 95%;
}

.coupon-card__code-text,
.coupon-card__code-icon {
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  color: #1FB9B3;
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
  color: #585858;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
}

.coupon-card__footer {
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
  background-color: rgba(55, 54, 54, 0.62)
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
    opacity: .5;
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
  background-color: #1FB9B3;
  border: 1px solid #1FB9B3;
  border-bottom-right-radius: 7px;
  width: 100%;
  height: 45px;
  color: white;
  border-bottom-left-radius: 7px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;

}
</style>