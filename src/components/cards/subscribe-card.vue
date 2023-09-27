<template> 
  <div
    class="box-subscribe border shadow p-5  text-center rounded-2 bg-white d-flex flex-column justify-content-between"
  > 
    <div>
      <h2 class="fw-bolder subscribe-title">{{title}}</h2>
      <h1 class="y-c fw-bolder fs-1 py-1">
        <!-- <span class="subscribe-price">{{subscribed.type=='free'?$t('free'):price}}</span> -->
        <span class="subscribe-price">{{price}} </span>
        <span class="subscribe-price-currency" v-if="subscribed.type!=='free'">{{ $t('riyals') }}</span>
      </h1>
      <div class="text-end">
        <p class="subscribe-feature" v-for="(feature,i) in features" :key="i">
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.53915 7.60486L1.5259 4.59162L0.521484 5.59604L4.53915 9.6137L13.1484 1.00442L12.144 0L4.53915 7.60486Z"
              fill="#1FB9B3"
            />
          </svg>
          {{feature}}
        </p>
      </div>
    </div>
    <div>
      <a
        @click="selected"
        v-if="typeSubscribe=='مجانا'"
        href="#"
        class="btn-main px-4 py-2"
      >{{ $t('subscribe-now') }}</a>
      <a
        @click="selected"
        v-else-if="(packId.id!==subscribed)"
        href="#"
        class="btn-main px-4 py-2"
      >رقي حسابك</a>
      <a
        v-else-if="packId.id==subscribed"
        href="#"
        class="btn-danger px-4 py-2"
      >انت مشترك الان</a>
    </div>
  </div>
</template>

<script>
import networkAPI from '@/services/api/network.js'

export default {
  props: {
    itemId: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    price: {
      type: [String, Number]
    },
    typeSubscribe: {
      type: String
    },  
    typeSectionSub: {
      type: String
    },
    packId:{
      type: [Array, Object]
    },
    features: {
      type: [Array, Object]
    },
    subscribed: {
      // type: [Array, Object]
      type: [String, Number]

    }
  },
   data() {
    return {
      packageType: '',
    }
   },
  methods: {
    selected(evt) {
      evt.preventDefault();
      if (this.typeSubscribe=='مجانا') {
                    this.router_push(`${this.typeSectionSub}-subscribe-finish`)

      // let formData = new FormData();
      // formData.append('package_id',this.packId.id)
      // formData.append('package_type',this.packageType )
      // formData.append('user_id',this.user.id )
      //          try {
      //               let { data } =  networkAPI.PayPackageFreeSelect(formData);
      //               if(data.success){

      //               this.router_push(`${this.typeSectionSub}-subscribe-finish`)
      //               }
      //           } catch (error) {
      //                   // window.SwalError("The given data was invalid")
      //               this.router_push(`${this.typeSectionSub}-subscribe-finish`)

      //           } 
      }else{
            this.$emit("selected", this.typeSubscribe);

      }
    }
  },
  mounted(){
    this.packageType = this.$route.meta.type
  }
};
</script>

<style scoped>
.subscribe-title {
  color: #003439;
  font-size: 32px;
}
.subscribe-feature {
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  /* or 106% */

  color: #0c2f33;
}
.subscribe-price {
  font-size: 56px;
  font-weight: 600;
  color: #ffbc00;
}
.subscribe-price-currency {
  font-size: 24px;
  font-weight: 500;
  color: #ffbc00;
}
</style>