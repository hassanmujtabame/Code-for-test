<template>
  <TemplateHeader prefixRoute="default-">
    <li class="nav-item">
      <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a>
      -->
      <router-link
        :to="{ name: 'index', params: { lang: $i18n.locale } }"
        class="nav-link"
        >{{ $t("Home-page") }}</router-link
      >
    </li>
    <li class="nav-item">
      <!-- <router-link
        v-if="!user"
        :to="{ name: 'network-home', params: { lang: $i18n.locale } }"
        class="nav-link"
        >{{ $t("network") }}</router-link
      > -->
      <b-dropdown class="custom-dropdown" :text="'الشبكة'">
        <b-dropdown-item
          class="nav-link nav-item text-right"
          style="cursor: pointer"
        >
          <router-link :to="{ name: 'network-home' }" class="nav-link">
            الصفحه الرئيسيه
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item text-right"
          style="cursor: pointer"
        >
          <!-- {{ $t("Exhibitions") }} -->
          <router-link
            :to="getRouteLocale('network-exhibitions')"
            class="nav-link"
            >{{ $t("Exhibitions") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item text-right"
          style="cursor: pointer"
        >
          <!-- {{ $t("Offers") }} -->
          <router-link
            :to="getRouteLocale('network-offers')"
            class="nav-link"
            >{{ $t("Offers") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item text-right"
          style="cursor: pointer"
        >
          <!-- {{ $t("Offers") }} -->
          <router-link :to="getRouteLocale('network-company')" class="nav-link"
            >الشركات</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item text-right"
          style="cursor: pointer"
        >
          <router-link
            :to="getRouteLocale('network-models')"
            class="nav-link"
            >{{ $t("Models") }}</router-link
          >
          <!-- {{ $t("Models") }} -->
        </b-dropdown-item>
        <b-dropdown-item class="nav-item text-right">
          <router-link :to="getRouteLocale('network-blogs')" class="nav-link">{{
            $t("Blogs")
          }}</router-link>
        </b-dropdown-item>
        <b-dropdown-item class="nav-item text-right">
          <router-link
            :to="getRouteLocale('network-member-network')"
            class="nav-link"
            >{{ $t("members") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-item text-right">
          <router-link
            :to="{ name: 'consulting-home', params: { lang: $i18n.locale } }"
            class="nav-link"
            >{{ $t("consulting") }}</router-link
          >
        </b-dropdown-item>
      </b-dropdown>
      <!-- <b-dropdown class="custom-dropdown" :text="'الشبكة'">
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link :to="{ name: 'network-home' }" class="nav-link">
            الصفحه الرئيسيه
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link
            :to="getRouteLocale('network-exhibitions')"
            class="nav-link"
            >{{ $t("Exhibitions") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link
            :to="getRouteLocale('network-offers')"
            class="nav-link"
            >{{ $t("Offers") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link
            :to="getRouteLocale('network-models')"
            class="nav-link"
            >{{ $t("Models") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link :to="getRouteLocale('network-blogs')" class="nav-link">{{
            $t("Blogs")
          }}</router-link>
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link
            :to="getRouteLocale('network-member-network')"
            class="nav-link"
            >{{ $t("members") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link
            :to="{ name: 'consulting-home', params: { lang: $i18n.locale } }"
            class="nav-link"
            >{{ $t("consulting") }}</router-link
          >
        </b-dropdown-item>
      </b-dropdown> -->
      <!-- <b-dropdown v-if="user" class="custom-dropdown" :text="'الشبكة'">
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link :to="{ name: 'network-home' }" class="nav-link">
            الصفحه الرئيسيه
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item"
          style="cursor: pointer"
          @click="checkExhibitionsSub()"
        >
          {{ $t("Exhibitions") }}
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item"
          style="cursor: pointer"
          @click="checkSub()"
        >
          {{ $t("Offers") }}
        </b-dropdown-item>
        <b-dropdown-item
          class="nav-link nav-item"
          style="cursor: pointer"
          @click="checkModelsSub()"
        >
          {{ $t("Models") }}
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link :to="getRouteLocale('network-blogs')" class="nav-link">{{
            $t("Blogs")
          }}</router-link>
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link
            :to="getRouteLocale('network-member-network')"
            class="nav-link"
            >{{ $t("members") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link
            :to="{ name: 'consulting-home', params: { lang: $i18n.locale } }"
            class="nav-link"
            >{{ $t("consulting") }}</router-link
          >
        </b-dropdown-item>
        
      </b-dropdown> -->
      <!-- here  -->
    </li>
    <li class="nav-item">
      <router-link
        v-if="!user"
        :to="{ name: 'academy-home', params: { lang: $i18n.locale } }"
        class="nav-link"
        >{{ $t("academy") }}
      </router-link>

      <b-dropdown v-if="user" :text="'الاكاديمية'" class="custom-dropdown">
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link :to="{ name: 'academy-home' }" class="nav-link">
            الصفحه الرئيسيه
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item
          :key="i"
          v-for="(item, i) in items.filter((x) => x.role == userAcademyRole)"
          class="nav-item px-1"
        >
          <router-link :to="getRouteLocale(item.route)" class="nav-link">{{
            item.text
          }}</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <button
            v-if="userAcademyRole == 'student'"
            @click="switchRole('instructor')"
            style="
              background-color: var(--pc) !important;
              color: white !important;
            "
            class="btn btn-customer"
          >
            {{ $t("switch-to-instructor") }}
          </button>
          <button
            v-if="userAcademyRole == 'instructor'"
            @click="switchRole('student')"
            style="
              background-color: var(--pc) !important;
              color: white !important;
            "
            class="btn btn-customer"
          >
            {{ $t("switch-to-student") }}
          </button>
        </b-dropdown-item>
      </b-dropdown>
    </li>

    <li class="nav-item">
      <router-link
        v-if="!user"
        :to="{ name: 'incubator-home', params: { lang: $i18n.locale } }"
        class="nav-link"
        >{{ $t("incubator") }}</router-link
      >
      <b-dropdown v-if="user" class="custom-dropdown" :text="'الحاضنة'">
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link :to="{ name: 'incubator-home' }" class="nav-link">
            الصفحه الرئيسيه
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link
            :to="getRouteLocale('incubator-incubator-business')"
            class="nav-link"
            >{{ $t("incubator-stages") }}</router-link
          >
        </b-dropdown-item>
        <b-dropdown-item class="nav-item">
          <router-link
            :to="getRouteLocale('incubator-your-learning-meetings')"
            class="nav-link"
            >{{ $t("learning-meetings") }}</router-link
          >
        </b-dropdown-item>

        <b-dropdown-item class="nav-item">
          <router-link
            :to="getRouteLocale('incubator-your-courses')"
            class="nav-link"
            >{{ $t("training-courses") }}</router-link
          >
        </b-dropdown-item>
      </b-dropdown>
    </li>

    <li class="nav-item">
      <router-link
        v-if="!user"
        :to="{ name: 'service-provider-home', params: { lang: $i18n.locale } }"
        class="nav-link"
        >{{ $t("services-provider") }}</router-link
      >

      <b-dropdown v-if="user" :text="'مقدمي الخدمات'" class="custom-dropdown">
        <b-dropdown-item class="nav-link nav-item" style="cursor: pointer">
          <router-link :to="{ name: 'service-provider-home' }" class="nav-link">
            الصفحه الرئيسيه
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item
          :key="i"
          v-for="(item, i) in itemsServiceProvider.filter(
            (x) => x.provider === userIsRoleProvider
          )"
          class="nav-item px-1"
        >
          <router-link :to="getRouteLocale(item.route)" class="nav-link">{{
            item.text
          }}</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <button
            @click="switchRoleServiceProvider()"
            style="
              background-color: var(--pc) !important;
              color: white !important;
            "
            class="btn btn-customer"
          >
            {{
              userIsRoleProvider
                ? $t("switch-to-buyer")
                : $t("switch-to-provider")
            }}
          </button>
        </b-dropdown-item>
      </b-dropdown>
    </li>

    <li class="nav-item">
      <router-link
        :to="{
          name: 'affiliate-marketing-home',
          params: { lang: $i18n.locale },
        }"
        class="nav-link"
        >التسويق بالعموله</router-link
      >
    </li>

    <!-- workspace link -->

    <!-- <li class="nav-item">
      <router-link
        :to="{name:'workspaces-home',params:{lang:$i18n.locale}}"
        class="nav-link"
      >{{ $t('workspaces') }}</router-link>
    </li> -->
    <!-- <router-link :to="getRouteLocale('workspaces-home')" class="d-block">{{ $t("workspaces") }}</router-link> -->

    <li class="nav-item">
      <!-- <router-link :to="{ name: 'consulting-home', params: { lang: $i18n.locale } }" class="nav-link">{{ $t('consulting')
      }}</router-link> -->
      <router-link :to="getRouteLocale('network-subscribe')" class="nav-link"
        >الاشتراكات</router-link
      >
    </li>
    <li class="nav-item">
      <router-link
        :to="{ name: 'contact-us', params: { lang: $i18n.locale } }"
        class="nav-link"
        >{{ $t("contact-us") }}</router-link
      >
    </li>
  </TemplateHeader>
</template>

<script>
import TemplateHeader from "../tamplate/header/index.vue";
import { BDropdown, BDropdownItem } from "bootstrap-vue";

export default {
  name: "default-header",
  data: (vm) => {
    return {
      showExhibition: false,
      showModels: false,
      showOffers: false,
      items: [
        /**instructor */
        {
          route: "academy-instructor-your-courses",
          text: vm.$t("your-courses"),
          role: "instructor",
        },
        {
          route: "academy-instructor-my-meetings",
          text: vm.$t("your-meetings"),
          role: "instructor",
        },
        {
          route: "academy-blogs",
          text: vm.$t("academy-blog"),
          role: "instructor",
        },
        {
          route: "academy-learning-meetings",
          text: vm.$t("academy-meetings"),
          role: "instructor",
        },
        // { route: 'academy-contact-us', text: vm.$t('contact-us'), role: 'instructor' },
        /**student */
        {
          route: "academy-courses",
          text: vm.$t("academy-courses"),
          role: "student",
        },
        {
          route: "academy-learning-meetings",
          text: vm.$t("academy-meetings"),
          role: "student",
        },
        {
          route: "academy-your-courses",
          text: vm.$t("your-courses"),
          role: "student",
        },
        {
          route: "academy-your-learning-meetings",
          text: vm.$t("your-learning-meetings"),
          role: "student",
        },
        // { route: 'academy-contact-us', text: vm.$t('contact-us'), role: 'student' },
        // {route:'academy-your-certificates', text:vm.$t('your-certificates'),role:'student'},
      ],
      itemsServiceProvider: [
        /**provider */
        // { route: 'service-provider-proposals', text: vm.$t('show-your-services'), provider: true },
        {
          route: "service-provider-my-ready-services",
          text: "متابعة خدماتى",
          provider: true,
        },
        {
          route: "service-provider-proposals",
          text: "اعثر على عمل",
          provider: true,
        },
        // { route: 'service-provider-my-ready-services', text: vm.$t('my-services'), provider: true },
        // {route:'service-provider-ready-services', text:vm.$t('service'),provider:true},
        /** client */
        // { route: 'service-provider-request-purchase-services', text: "طلبات شراء خدماتك", provider: true },
        // { route: 'service-provider-my-offers', text: vm.$t('my-proposals'), provider: true },

        {
          route: "service-provider-ready-services",
          text: vm.$t("service"),
          provider: false,
        },

        // { route: 'service-provider-my-proposals', text: 'طلباتى', provider: false },
        // { route: 'service-provider-client-my-purchases', text: vm.$t('my-purchases'), provider: false },

        {
          route: "service-provider-providers",
          text: vm.$t("services-provider"),
          provider: false,
        },

        // contact us
        {
          route: "service-provider-contact-us",
          text: vm.$t("contact-us"),
          provider: true,
        },
        {
          route: "service-provider-contact-us",
          text: vm.$t("contact-us"),
          provider: false,
        },
      ],
    };
  },
  methods: {
    switchRole(newRole) {
      this.switchRoleAcademy(newRole);
    },
    checkSubscriptionOptions() {
      if (!this.user) return;
      if (!this.user.subscription_options) return;
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "show_exhibitions") {
          this.showExhibition = true;
        } else if (element.key == "models") {
          this.showModels = true;
        } else if (element.key == "show_offers") {
          this.showOffers = true;
        }
      }
    },
    // checkSubscriptionOptions() {
    //   for (
    //     let index = 0;
    //     index < this.user.subscription_options.length;
    //     index++
    //   ) {
    //     const element = this.user.subscription_options[index];
    //     if (element.key == "show_exhibitions") {
    //       this.showExhibition = true;
    //     } else if (element.key == "models") {
    //       this.showModels = true;
    //     } else if (element.key == "show_offers") {
    //       this.showOffers = true;
    //     }
    //   }
    // },
    // checkExhibitionsSub() {
    //   if (!this.showExhibition) {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك  رؤية المعارض  ",
    //       description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على المعارض    - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من المعارض و المزيد من المميزات في الشبكة`,
    //       image: `${this.publicPath}assets/img/EmptyState.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   } else {
    //     this.router_push("network-exhibitions");
    //   }
    // },
    // checkModelsSub() {
    //   if (!this.showOffers) {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك  رؤية النماذج  ",
    //       description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على النماذج  - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من النماذج و المزيد من المميزات في الشبكة`,
    //       image: `${this.publicPath}assets/img/EmptyState.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   } else {
    //     this.router_push("network-models");
    //   }
    // },
    // checkModelsSub() {
    //   if (!this.showOffers) {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك  رؤية النماذج  ",
    //       description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على النماذج  - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من النماذج و المزيد من المميزات في الشبكة`,
    //       image: `${this.publicPath}assets/img/EmptyState.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   } else {
    //     this.router_push("network-models");
    //   }
    // },
    // checkSub() {
    //   if (!this.showOffers) {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك  رؤية العروض  ",
    //       description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على العروض والخصومات   - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من العروض و المزيد من المميزات في الشبكة`,
    //       image: `${this.publicPath}assets/img/EmptyState.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   } else {
    //     this.router_push("network-offers");
    //   }
    // },
    // checkSub() {
    //   if (!this.showOffers) {
    //     let dataEvt = {
    //       title: "للأسف لايمكنك  رؤية العروض  ",
    //       description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على العروض والخصومات   - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من العروض و المزيد من المميزات في الشبكة`,
    //       image: `${this.publicPath}assets/img/EmptyState.png`,
    //       btns: [
    //         {
    //           title: "رقي حسابك",
    //           action: () => this.$router.push({ name: "network-subscribe" }),
    //         },
    //       ],
    //     };
    //     this.showConfirmMsg(dataEvt);
    //     return;
    //   } else {
    //     this.router_push("network-offers");
    //   }
    // },
    switchRoleServiceProvider() {
      this.$store.commit("changeRole");
      if (this.$store.state.isProviderRole) {
        localStorage.setItem("providerOrclient", JSON.stringify("provider"));
      } else if (!this.$store.state.isProviderRole) {
        localStorage.setItem("providerOrclient", JSON.stringify("client"));
      }
    },
    // switchRoleServiceProvider() {
    //   this.$store.commit("changeRole");
    //   if (this.$store.state.isProviderRole) {
    //     localStorage.setItem("providerOrclient", JSON.stringify("provider"));
    //   } else if (!this.$store.state.isProviderRole) {
    //     localStorage.setItem("providerOrclient", JSON.stringify("client"));
    //   }
    // },
  },
  computed: {
    userIsRoleProvider() {
      return this.$store.state.isProviderRole;
    },
  },
  mounted() {
    this.checkSubscriptionOptions();
  },
  components: {
    BDropdown,
    BDropdownItem,
    TemplateHeader,
  },
};
</script>

<style>
.custom-dropdown .btn {
  background-color: transparent;
  /* Set the background color to transparent */
  border: 1px solid #ced4da;
  /* Add a border to maintain button structure */
  color: #495057;
  /* Set text color to your desired color */
  border: none;
}

.custom-dropdown .btn:hover,
.custom-dropdown .btn:focus {
  background-color: transparent;
  /* Set the background color for hover/focus state */
  border: 1px solid #80bdff;
  /* Adjust border color for hover/focus state */
}
</style>
