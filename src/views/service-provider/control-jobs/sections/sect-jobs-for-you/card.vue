<template>
  <div class="box p-3">
    <div class="d-flex align-items-center flex-wrap justify-content-between">
      <div>
        <h4 class="m-c">
          طلب توظيف من :
          <span>{{ title }}</span>
        </h4>
      </div>
      <div>
        <p class="t-c">
          <timeIcon :size="24" />
          تاريخ بداية الطلب : {{ item.dateRequest}}
        </p>
      </div>
    </div>
    <div class="d-flex gap-2 flex-wrap">
      <p class="t-c">
        <account-icon :size="16" />
        {{ item.name }}
      </p>

      <p class="t-c">
        <localisationIcon :size="16" />
        {{item}}
      </p>
      <p class="t-c">
        <emptyWalletIcon :size="16" />
        {{item.price}} {{$t('riyals')}}
      </p>
      <p class="t-c">
        <timerIcon :size="16" />
        {{ $t(typeWork)}}
      </p>
      <p class="t-c">
        <accountCogIcon :size="16" />
        {{job}}
      </p>
      <p class="t-c">
        <schoolWalletIcon :size="16" />
        خبرة {{experience}} سنوات
      </p>
    </div>
    <div class="d-flex flex-wrap align-items-center justify-content-between">
      <p class="t-c w-75 m-0">{{ description }}</p>
      <div class="d-flex gap-1 flex-wrap">
        <button style="height: 40px; width: 100px;" class="btn-main px-2">تأكيد الطلب</button>
        <button class="btn rounded-2 border-danger text-danger px-2 bg-transparent">إلغاء الطلب</button>
      </div>
    </div>
  </div>
</template>

<script>
import accountIcon from "@/components/icon-svg/account.vue";
import accountCogIcon from "@/components/icon-svg/account-cog.vue";
import localisationIcon from "@/components/icon-svg/localisation.vue";
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";
import timeIcon from "@/components/icon-svg/time.vue";
import timerIcon from "@/components/icon-svg/timer.vue";
import schoolWalletIcon from "@/components/icon-svg/school-wallet.vue";

export default {
  name: "card-info",
  components: {
    accountIcon,
    accountCogIcon,
    localisationIcon,
    emptyWalletIcon,
    timerIcon,
    timeIcon,
    schoolWalletIcon
  },
  props: {
    item: {
      type: [Object]
    },

  }
};
</script>

<style>
</style>