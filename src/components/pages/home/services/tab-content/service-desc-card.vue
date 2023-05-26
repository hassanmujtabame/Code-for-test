<template>
  <div class="text-network p-4" v-bind="atts">
    <h3>{{title}}</h3>

    <p class>
      <slot></slot>
    </p>
    <button @click="router_push(routeName)" class="btn btn-custmer my-2">
      <i class="fa fa-arrow-up-right-from-square"></i>

      {{ $t('know-more') }}
    </button>
  </div>
</template>

<script>
//import OpenLinkSVG from '@/components/icon-svg/open-link.vue'
//import BtnSimple from '@/components/btns/BtnSimple.vue'
export default {
  props: {
    title: {
      type: String
    },
    selected: {
      type: Boolean
    },
    routeName: {
      type: [String],
      default: "index"
    }
  },
  watch: {
    selected: {
      immediate: true,
      handler() {
        if (window.AOS) window.AOS.init();
      }
    }
  },
  computed: {
    atts() {
      return {
        "data-aos-once": "false",
        "data-aos-duration": 2000,
        "data-aos": "fade-right"
      };
    }
  },
  components: {
    /* OpenLinkSVG,*/
    //  BtnSimple
  }
};
</script>

<style>
</style>