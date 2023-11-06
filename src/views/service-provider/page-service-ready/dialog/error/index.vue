<template>
  <div class=" p-4" style="margin-top: 200px">

    <router-link  :to="getRouteLocale('service-provider-home')" class="me-2 btn-custmer-w fw-bolder">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.4291 18.82C14.2391 18.82 14.0491 18.75 13.8991 18.6C13.6091 18.31 13.6091 17.83 13.8991 17.54L19.4391 12L13.8991 6.46C13.6091 6.17 13.6091 5.69 13.8991 5.4C14.1891 5.11 14.6691 5.11 14.9591 5.4L21.0291 11.47C21.3191 11.76 21.3191 12.24 21.0291 12.53L14.9591 18.6C14.8091 18.75 14.6191 18.82 14.4291 18.82Z"
          fill="#1FB9B3" />
        <path
          d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
          fill="#1FB9B3" />
      </svg>
      العودة للرئيسية

    </router-link>
    <router-link  :to="getRouteLocale('service-provider-ready-services')" class="me-2 btn-custmer-w fw-bolder">

      الخدمات

    </router-link>

  </div>
</template>

<script>
export default {
  props: {
    pack: {
      type: [Array, Object],
      require: true
    }
  },
  data: (vm) => {
    let type = 'N/A';
    switch (vm.pack.type) {
      case 'free': type = vm.$t('free_package'); break;
      case 'month': type = vm.$t('monthly_package'); break;
      case 'year': type = vm.$t('annual_package'); break;

      default:
        type = 'N/A';
        break;
    }
    return {
      subscribeType: type
    }
  },
  mounted() {
    window.SwalError(" حدث خطاء يرجى اعاده المحاوله")
  } 
}
</script>

<style></style>