<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center container">
      <h2>أحدث الطلبات </h2>
      <div>
        <router-link class="router-link" custom :to="getRouteLocale('service-provider-show-services')"
          v-slot="{ navigate }">
          <button @click="navigate" class="more">{{ $t('more') }}</button>
        </router-link>
      </div>
    </div>
    <div class="row order">
      <div v-for="(item, i) in items" :key="i" class="col-12 col-md-6 mt-2">
        <router-link class="router-link" :to="getRouteLocale('service-provider-show-service-page', { id: item.id })">
          <showRequest 
          :title="item.title"
        :description="item.description"
        :category="item.field_name"
        :price="item.price"
        :during="item.rest_days"
        :place="item.city"
        :offers="item.count_offer"
        :datePublish="item.created_at"
          :image="item.image" 
            :resetDays="item.rest_days" 

            :department="item.category_name" />
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import myRequestsAPIs from '@/services/api/service-provider/user/my-requests.js'
//import CardService from './card.vue'
import showRequest from '@/components/cards/show-service.vue'
export default {
  name: 'section-recent-requests',
  components: {
    showRequest
  }
  ,
  data: () => ({
    loading: true,
    items: []
  }),
  methods: {
    async loadList() {
      this.loading = true;
      try {
        let { data } = await myRequestsAPIs.getRecent()
        if (data.success) {
          this.items = data.data
        }
      } catch (error) {
        console.log('error', error)
        console.log('error response', error.response)
      }
      this.loading = false;
    }
  },
  mounted() {
    this.loadList()
  }
}

</script>

<style>

</style>