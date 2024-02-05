<template>
  <div id="app position-relative" :class="{ 'mobile-layout': isMobile }">
    <d-overlays-simple class="top-0" v-if="isPageLoading">
      <d-laoding-tail-spin color="#fff" />
    </d-overlays-simple>
    <component :is="$route.meta.layout || 'div'">
      <transition name="fade" mode="out-in">

        <router-view />
      </transition>
    </component>
    <portal-target name="body"> </portal-target>
    <JoinASPartnerDialog />
    <AbuseDialog />
    <dChatBar />
  </div>
</template>
<script>
import JoinASPartnerDialog from "@/common/dialogs/join-as-partner.vue";
import AbuseDialog from "@/common/dialogs/abuse-dialog/index.vue";
import dChatBar from "@/components/chat/bar.vue";
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "",
    // all titles will be injected into this template
    titleTemplate: "%s | ريادات- Riadiat",
    meta: [
      { name: "description", content: "ريادات- Riadiat" },
      // Facebook meta tags
      { property: "og:title", content: "ريادات- Riadiat" },
      { property: "og:description", content: "Your Description" },
      { property: "og:image", content: "Your Image URL" },
      { property: "og:url", content: "Your URL" },
    ],
    style: [
      {
        vmid: "page-load-overlay",
        innerHTML: `
      body div.loading {
        z-index: 999;
        background-color: #0f0f0f;
        opacity: 0.9;
      }
    `,
      },
    ],
  },
  components: {
    JoinASPartnerDialog,
    AbuseDialog,
    dChatBar,
  },
  computed: {
    ...mapGetters({
      isPageLoading: "core/isLoading",
    }),
  },
  methods: {
    onResizeBrowser() {
      /*
      Design for desktop displays from 1024×768 through 1920×1080
      Design for mobile displays from 360×640 through 414×896
      Design for tablet displays from 601×962 through 1280×800
      Small (smaller than 640px)
Medium (641px to 1007px)
Large (1008px and larger)
      */
      this.$store.dispatch("core/setIsMobile", window.innerWidth <= 640);
      this.$store.dispatch(
        "core/setIsTablet",
        window.innerWidth > 641 && window.innerWidth <= 1007
      );
    },
    tagManager() {
      let noscript = document.createElement("noscript");
      let iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        "https://www.googletagmanager.com/ns.html?id=GTM-NGQ5C76"
      );
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      /*noscript.innerHTML=`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGQ5C76"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`*/
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);
    },
    loadJS(src, async = true, defer = false) {
      const plugin = document.createElement("script");
      plugin.setAttribute("src", src);
      if (defer) plugin.setAttribute("defer", true);
      plugin.async = async;
      document.body.appendChild(plugin);
    },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResizeBrowser, {
        passive: true,
      });
    }
  },
  mounted() {
    this.onResizeBrowser();
    window.addEventListener("resize", this.onResizeBrowser, { passive: true });

    // Dynamically add HubSpot script tag to head
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js-eu1.hs-scripts.com/144053130.js';

    script.onload = () => {
      // Code to run after the HubSpot script has loaded
      console.log('HubSpot script loaded!');
      // You can perform additional actions related to HubSpot here
    };

    document.head.appendChild(script);

  },
  created() {

    const plugin = document.createElement("script");
    plugin.innerHTML = "$(function() {  AOS.init();  });";
    document.body.appendChild(plugin);
    window.AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom",
    });
  },
};
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
/*@import "https://unpkg.com/aos@2.3.1/dist/aos.css";*/
@import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css";
@import "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
@import "@/assets/css/main.css";
@import "@/assets/css/colors.css";
@import "@/assets/css/chat.css";
@import "@/assets/css/font-size.css";
@import "@/assets/css/responsive.css";
@import "@/assets/css/calender.css";
@import "@/assets/css/mobile.css";
</style>
<style scoped>
.loading-div {
  width: 150px;
  height: 150px;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(45deg);
  }
}

svg.gear {
  animation: circle 0.5s infinite linear;
}

.fade-enter-active,
.fade-leave-active {
  animation: fadeIn 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  filter: blur(8px);
  /* Add blur effect */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    filter: blur(8px);
  }

  to {
    opacity: 1;
    filter: blur(0);
    /* Remove blur effect */
  }
}</style>
