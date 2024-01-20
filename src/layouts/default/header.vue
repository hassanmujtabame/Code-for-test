<template>
  <TemplateHeader prefixRoute="default-">
    <li class="nav-item px-2">
      <!-- <a class="nav-link active" aria-current="page" href="../index.html"
                >الرئيسية</a>
      -->
      <router-link :to="{ name: 'index', params: { lang: $i18n.locale } }" class="nav-link">{{ $t('Home-page')
      }}</router-link>
    </li>
    <li class="nav-item px-2">
      <router-link v-if="!user" :to="{ name: 'network-home', params: { lang: $i18n.locale } }" class="nav-link">{{
        $t('network') }}</router-link>
      <b-dropdown class="custom-dropdown" :text="selectedItem">
        <b-dropdown-item class="nav-link nav-item px-2" style="cursor: pointer" @click="handleItemClick(' الصفحه الرئيسيه ')">
          <router-link :to="{ name: 'network-home' }" class="nav-link"> الصفحه الرئيسيه </router-link>
        </b-dropdown-item>
        <b-dropdown-item class="nav-link nav-item px-2" style="cursor: pointer" @click="checkExhibitionsSub()">
          {{ $t('Exhibitions') }}
        </b-dropdown-item>
        <b-dropdown-item class="nav-link nav-item px-2" style="cursor: pointer" @click="checkSub()">
          {{ $t('Offers') }}
        </b-dropdown-item>
        <b-dropdown-item class="nav-link nav-item px-2" style="cursor: pointer" @click="checkModelsSub()">
          {{ $t('Models') }}
        </b-dropdown-item>

        <b-dropdown-item class="nav-item px-2" @click="handleItemClick($t('Blogs'))">
          <router-link :to="getRouteLocale('network-blogs')" class="nav-link">{{ $t('Blogs') }}</router-link>
        </b-dropdown-item>
    </b-dropdown>
    </li>
    <li class="nav-item px-2">
      <router-link :to="{ name: 'academy-home', params: { lang: $i18n.locale } }" class="nav-link">{{ $t('academy')
      }}</router-link>
    </li>
    <li class="nav-item px-2">
      <router-link :to="{ name: 'incubator-home', params: { lang: $i18n.locale } }" class="nav-link">{{ $t('incubator')
      }}</router-link>
    </li>

    <!-- <li class="nav-item px-2">
      <router-link
        :to="{name:'affiliate-marketing-home',params:{lang:$i18n.locale}}"
        class="nav-link"
      >التسويق بالعموله</router-link>
    </li> -->


    <li class="nav-item px-2">
      <router-link :to="{ name: 'service-provider-home', params: { lang: $i18n.locale } }" class="nav-link">{{
        $t('services-provider') }}</router-link>
    </li>

    <!-- workspace link -->

    <!-- <li class="nav-item px-2">
      <router-link
        :to="{name:'workspaces-home',params:{lang:$i18n.locale}}"
        class="nav-link"
      >{{ $t('workspaces') }}</router-link>
    </li> -->

    <li class="nav-item px-2">
      <router-link :to="{ name: 'consulting-home', params: { lang: $i18n.locale } }" class="nav-link">{{ $t('consulting')
      }}</router-link>
    </li>
    <li class="nav-item px-2">
      <router-link :to="{ name: 'contact-us', params: { lang: $i18n.locale } }" class="nav-link">{{ $t('contact-us')
      }}</router-link>
    </li>
  </TemplateHeader>
</template>

<script>
import TemplateHeader from "../tamplate/header/index.vue";
import { BDropdown, BDropdownItem } from 'bootstrap-vue'

export default {
  name: "default-header",
  data: () => {
    return {
      showExhibition: false,
      showModels: false,
      showOffers: false,
      selectedItem: 'الشبكه',
    }
  },
  methods: {
    handleItemClick(item) {
      this.selectedItem = item;
      console.log(this.selectedItem)
    }, checkSubscriptionOptions() {
      console.log("optoins", this.user)
      for (let index = 0; index < this.user.subscription_options.length; index++) {
        const element = this.user.subscription_options[index];
        if (element.key == "show_exhibitions") {
          this.showExhibition = true
        } else if (element.key == "models") {
          this.showModels = true

        } else if (element.key == "show_offers") {
          this.showOffers = true
        }
      }
    },
    checkExhibitionsSub() {
      if (!this.showExhibition) {
        let dataEvt = {
          title: 'للأسف لايمكنك  رؤية المعارض  ',
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على المعارض    - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من المعارض و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            { title: 'رقي حسابك', action: () => this.$router.push({ name: 'network-subscribe' }) }
          ]
        }
        this.showConfirmMsg(dataEvt);
        return;
      } else {
        this.handleItemClick($t('Exhibitions'))
        this.router_push('network-exhibitions')
      }
    },
    checkModelsSub() {
      if (!this.showOffers) {
        let dataEvt = {
          title: 'للأسف لايمكنك  رؤية النماذج  ',
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على النماذج  - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من النماذج و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            { title: 'رقي حسابك', action: () => this.$router.push({ name: 'network-subscribe' }) }
          ]
        }
        this.showConfirmMsg(dataEvt);
        return;
      } else {
        this.handleItemClick($t('Models'))
        this.router_push('network-models')
      }
    },
    checkSub() {
      if (!this.showOffers) {
        let dataEvt = {
          title: 'للأسف لايمكنك  رؤية العروض  ',
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من الإطلاع على العروض والخصومات   - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من العروض و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            { title: 'رقي حسابك', action: () => this.$router.push({ name: 'network-subscribe' }) }
          ]
        }
        this.showConfirmMsg(dataEvt);
        return;
      } else {
        this.handleItemClick($t('Offers'))
        this.router_push('network-offers')
      }
    }

  },
  mounted() {
    this.checkSubscriptionOptions()
  },
  components: {
    BDropdown,
    BDropdownItem,
    TemplateHeader
  }
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
}</style>