<template>
  <div class="sec-five mt-5 p-3" v-if="this.items">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center container">
        <h1 class="home-section-title">أعضاء مميزون (السفيرات) </h1>
        <div>
          <!---->
        </div>
      </div>

      <d-swiper v-if="!loading" :slides-per-view="4" is-auto :space-between="10" :items="items">
        <template v-slot:default="{ item }">
          <CardMember :name="item.name" :img="item.image" :to="getRouteLocale('network-show-profile', { id: item.id })" />
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import memberAPI from '@/services/api/members'
import CardMember from '@/components/cards/card-member.vue'
export default {
  name: 'section-5',
  components: {
    CardMember
  },
  data: () => ({
    loading: true,
    items: [
       /* {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
        {name:'العنقود محمد',image:`${vm.publicPath}assets/img/Rectangle 1775qa.png`,description:'التصوير'},
  */]
  }),
  methods: {
    async initializing() {
      this.loading = true
      try {
        let { data } = await memberAPI.getHomeNetwork()
        if (data.success) {
          this.items = data.data
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