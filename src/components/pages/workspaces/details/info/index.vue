<template>
  <div class="box border rounded-3 p-4">
    <div class="border-bottom pb-3 px-2"  v-if="singleWorkspace && singleWorkspace.map_address && singleWorkspace.map_address.address_name">
      <h5>العنوان بالتفصيل</h5>
      <p class="gray-color">{{ singleWorkspace.map_address.address_name }}</p>
    </div>
    <div class="border-bottom py-3 px-2">
      <h5>وصف مكان العمل</h5> 
      <p class="gray-color">{{ singleWorkspace.description }}</p>
    </div>

    <div>
      <h3 class="border-bottom py-3 px-2">تفاصيل مكان العمل</h3>
      <div class="row">
        <div class="col-6 p-2">
          <emptyWalletIcon :size="24" color="#979797" />
          <span> سعر :</span>
          <span class="m-c">
            {{ singleWorkspace.price }} {{ $t("riyals") }}
          </span>
        </div>

        <div class="col-6 p-2">
          <timerIcon :size="24" color="#979797" />
          <span> الساعات :</span>
          <span class="m-c">
           {{ singleWorkspace.start_time }} - {{ singleWorkspace.end_time }}
          </span>
        </div>
        <div class="col-6 p-2">
          <d-distance-icon :size="16" color="currentColor" />
          <span> المساحة :</span>
          <span class="m-c">
           {{ singleWorkspace.area }} متر
          </span>
        </div>
      </div>
    </div>
    <div class="mt-4" v-if="singleWorkspace.features.length">
      <h3 class="border-bottom p-2">الامتيازات </h3>
      <div
        class="d-flex flex-wrap justify-content-start text-white word-intial pt-3"
      >
        <template >
          <p
            class="mx-1"
            v-for="(key, i) in singleWorkspace.features"
            :key="i"
          >
            {{ key.title }}
          </p>
        </template>
      </div>
    </div>
    <div class="mt-4" v-if="singleWorkspace.service_categories.length">
      <h3 class="border-bottom p-2">مجال الاختصاص </h3>
      <div
        class="d-flex flex-wrap justify-content-start text-white word-intial pt-3"
      >
        <template >
          <p
            class="mx-1"
            v-for="(key, i) in singleWorkspace.service_categories"
            :key="i"
          >
            {{ key.title }}
          </p>
        </template>
      </div>
    </div>
    <div class="text-center">
      <span> {{ $t("publish-date") }}: </span>
      <span class="m-c fw-bolder">
        {{ dateReverse(singleWorkspace.created_at) ?? "N/A" }}
      </span>
    </div>
  </div>
</template>

<script>
import timerIcon from "@/components/icon-svg/timer.vue";
import emptyWalletIcon from "@/components/icon-svg/empty-wallet.vue";

export default {
  name:'details-work-space',
  components: {
    timerIcon,
    emptyWalletIcon,
  },
  props: {
    singleWorkspace: {
      type: [Object, Array],
      require: true,
    },
  },
};
</script>
<style scoped>
.gray-color {
  color: #979797;
}
</style>