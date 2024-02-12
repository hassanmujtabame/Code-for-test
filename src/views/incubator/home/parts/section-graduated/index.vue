<template>
  <div class="sec-five mt-5 p-3" v-if="items.length > 0">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center container">
        <h1 class="home-section-title"> خريجين رياديات </h1>
      </div>

      <d-swiper v-if="!loading" :slides-per-view="4" is-auto :space-between="10" :items="items">
        <template v-slot:default="{ item }">
          <CardMember :name="item.name" :img="!success ?
              publicPath + item.image : item.image" :item="item"
            :to="getRouteLocale('incubator-show-profile', { id: item.id })" />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import memberAPI from '@/services/api/members'
import CardMember from './card-member.vue'
export default {
  name: "section-graduated",
  components: {
    CardMember
  },
  data: () => {
    return {
      loading: false,
      success: false,
      items: [
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
        { name: 'العنقود محمد', image: `assets/img/Rectangle 1775qa.png`, description: 'التصوير' },
      ]
    }
  },
  methods: {
    async initializing() {
      this.loading = true
      try {
        let { data } = await memberAPI.getGraduates()
        if (data.success) {
          this.items = data.data
          this.success = true
        }
      } catch (error) {
        console.log('error', error)
      }
      this.loading = false
    }
  },
  mounted() {
    this.initializing()
  }
}
</script>

<style></style>