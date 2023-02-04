<template>
  <div class="sec-five mt-5 p-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-bold"> خريجين وخريجات رياديات جاهزون للتوظيف </h1>
        <div>
          <router-link class="router-link" custom 
                :to="getRouteLocale('service-provider-graduate-riadiat')"
                v-slot="{navigate}"
                >
              <button @click="navigate" class="more">{{ $t('more') }}</button>
            </router-link>
        </div>
      </div>
      <d-swiper v-if="!loading" is-auto :slides-per-view="4" :space-between="10" :items="items">
        <template v-slot:default="{ item }">
          <router-link class="router-link" :to="getRouteLocale('network-member-show',{id:item.id})">
            <CardMember :name="item.name" :description="item.job_name" :img="item.image" />
          </router-link>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import jobsProviderAPIs from '@/services/api/service-provider/jobs'
import CardMember from './card.vue'
export default {
  name: 'section-graduate-riadiat',
  components: {
    CardMember
  },
  data: () => ({
    loading:true,
 
    items: []
  }),
  methods:{
    async initlizing(){
      this.loading = true;
        try {
          let { data } =  await jobsProviderAPIs.getGraduateJobPage();
          if(data.success){
            this.items = data.data
            this.total = data.meta.total
          }
        } catch (error) {
          console.log('error',error)
        }
      this.loading = false;
    }
  },
  mounted(){
    this.initlizing()
  }
}
</script>