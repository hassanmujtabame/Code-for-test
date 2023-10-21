<template>
  <div class="sec-five mt-5 p-5">
    <div class="">
      <div class="d-flex justify-content-between align-items-center container">
        <h1>
          خريجات مميزات في برنامج {{ itemPage.name }} </h1>

      </div>
      <DSwiper v-if="!loading" :slides-per-view="4" is-auto :space-between="10" :loop="true" :navigation="true"
        :items="items">

        <template v-slot:default="{ item }">
          <CardMember :name="item.name" :to="getRouteLocale('incubator-show-profile', { id: item.id })" :img="`${publicPath + item.img}`" />
        </template>
      </DSwiper>
    </div>
  </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardMember from '@/components/cards/card-member.vue'
export default {
  name: 'section-graduated',
  props: {
    itemPage: {}
  },
  components: {

    DSwiper,
    CardMember
  },
  data: (vm) => {
    return {
      loading: false,
      items: [
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
        { name: 'العنود محمد', description: '', img: `assets/img/Rectangle 1775qa.png` },
      ]
    }
  }
}
</script>

<style></style>