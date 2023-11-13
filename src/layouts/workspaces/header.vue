<template>
  <TemplateHeader prefixRoute='workspaces-'>
    <li class="nav-item px-2">
      <router-link :to="getRouteLocale('workspaces-home')" class="nav-link">{{ $t('Home-page') }}</router-link>
    </li>

    <li class="nav-item px-2">
      <router-link :to="getRouteLocale('workspaces-reservations')" class="nav-link">{{ $t('reservations') }}</router-link>
    </li>


    <li class="nav-item px-2">
      <router-link :to="getRouteLocale('workspaces-requests')" class="nav-link">{{ $t('requests') }}</router-link>
    </li>


    <li class="nav-item px-2">
      <router-link :to="getRouteLocale('workspaces-contact-us')" class="nav-link">{{ $t('contact-us') }}</router-link>
    </li>

    <li v-if="!token" class="nav-item px-2 btn-main btn-nav text-center"
      style="padding:5px; height:auto; margin-right: 5px; display: flex; justify-content: center; align-items: center;">
      <router-link :to="getRouteLocale('login')" class="text-white">{{ $t("login") }}</router-link>
    </li>

    <div v-if="false" style="line-height: 2.5; height: 40px;" class="btn-main btn-nav text-center">
      <a href="" class="text-white " data-bs-toggle="modal" data-bs-target="#addModal">{{ $t('add-new-service') }}</a>
    </div>

  </TemplateHeader>
</template>

<script>
import TemplateHeader from '../tamplate/header/index.vue'
export default {
  name: 'default-header',
  components: {
    TemplateHeader
  },
  data: () => {
    return {

      showExhibition: false,
      showModels: false,
      showOffers: false


    }
  },
  methods: {

  },
  mounted() {
    this.loadList()
  }
}
</script>

<style></style>