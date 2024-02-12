<template>
  <div class="mt-5">
    <div class="container">
      <d-filter-list :call-list="loadList" @change="changeFilter" singleName="" classColCard="col-12 col-md-6 mt-3"
        pluralName=" اعضاء الحاضنة" searchPlaceholder=" ابحث بالاسم او المجال " 
        :orderOpts="[
          { id: 'desc', name: 'الاحدث' },
          { id: 'asc', name: 'الاقدم' },
          ]" classSearchOrder="mb-5 justify-content-center flex-row-reverse align-items-center">
        <template v-slot:side>
          <sidebarFilter @change="changeFilter" :filter-item="fitlterSide" />
        </template>


        <template v-slot="{ item }">
          <router-link class="router-link" :to="getRouteLocale('incubator-show-profile', { id: item.id })">
            <cardInfoVue :providerId="item.id" :name="item.name" :job="item.job_title" :image="item.image" />
          </router-link>
        </template>


      </d-filter-list>
    </div>
  </div>
</template>

<script>
// import serviceProviderAPIs from '@/services/api/service-provider/provider/index'
//import readyServiceCard from '@/components/cards/ready-service.vue';
import MembersAPI from '@/services/api/members.js'

import sidebarFilter from './sidebar-filter.vue'
import cardInfoVue from './card-item'
export default {
  name: 'section-filter-list',
  components: {
    cardInfoVue,
    sidebarFilter
  },
  data: () => ({
    fitlterSide: {
      state: null,
      department_ids: [],
      prd: null,
      rate_value: null,
    },
    filterItem: {
      search: null,
      rate: 'asc',
      state: null,
      department_ids: [],
      prd: null,
      rate_value: null,
    }
  }),
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val }
      this.fireEvent('d-filter-list-refresh')
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,

        ...this.filterItem
      }
      return await MembersAPI.getHomeIncubator(params)
    }
  },
  mounted() {
  }
}
</script>

<style></style>