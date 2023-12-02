<template>
    <div class="mt-5">
        <div class="container">

            <div class="row">
              <ul class="nav nav-pills mb-3 justify-content-center text-center">
                <li class="nav-item col-12 col-md-3">
                  <!-- <router-link to="ready-services" class="nav-link  border w-75 t-c m-auto active">اطلب خدمة
                      جديدة</router-link> -->
      
                  <button @click="openAddService($event, closeNavList)"
                      class="nav-link  border w-75 t-c m-auto active" style="height: 100%">
                      {{ userIsRoleProvider ? $t('add-new-service') : $t('add-new-request') }}
                  </button>
              </li>
                <li class="nav-item col-12 col-md-3">
                  <router-link to="my-proposals" class="nav-link  border w-75 t-c m-auto ">طلباتي
                    المنشورة</router-link>
                </li>
                <li class="nav-item col-12 col-md-3">
                  <router-link to="my-purchases" class="nav-link  border w-75 t-c m-auto ">اعمالي قيد
                    التنفيذ
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        <d-filter-list :call-list="loadList"  hideTotal @change="changeFilter" singleName="" classColCard="col-12 col-md-6 mt-3"
            pluralName="مقدمو الخدمة" :searchPlaceholder="$t('search_by_service_provider')" orderName="rate" :orderOpts="[
                    { id: 'asc', name: 'الأقل تقييما' },
                    { id: 'desc', name: 'الأعلى تقييما', }
                ]"
                classSearchOrder="mb-5 justify-content-center flex-row-reverse align-items-center"
                >
            <template v-slot:side>
                <sidebarFilter @change="changeFilter" :filter-item="fitlterSide" />
            </template>


            <template v-slot="{ item }">
                <router-link class="router-link" :to="getRouteLocale('service-provider-show-profile', { id: item.id })">
                    <cardInfoVue :name="item.name" :bio="item.bio" :job="item.job" :image="item.image" :rate="item.rate" />
                </router-link>
            </template>


        </d-filter-list>
    </div>
</template>

<script>
import serviceProviderAPIs from '@/services/api/service-provider/provider/index'
//import readyServiceCard from '@/components/cards/ready-service.vue';
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
            category_id: [],
            prd: null,
            rate_value: null,
        },
        filterItem: {
            search: null,
            rate: 'asc',
            state: null,
            category_id: [],
            prd: null,
            rate_value: null,
        }
    }),
    methods: {
        changeFilter(val) {
            this.filterItem = { ...this.filterItem, ...val }
            this.fireEvent('d-filter-list-refresh')
        },
        openAddService(evt) {
            evt.preventDefault();
            this.fireOpenDialog('add-ready-service-dialog')
        },
        closeAddService(evt) {
            evt.preventDefault();
            this.fireCloseDialog('add-ready-service-dialog')
        },
        async loadList(metaInfo) {
            let params = {
                page: metaInfo.current_page,

                ...this.filterItem
            }
            return await serviceProviderAPIs.getAll(params)
        }
    },
    mounted() {
    }
}
</script>

<style></style>