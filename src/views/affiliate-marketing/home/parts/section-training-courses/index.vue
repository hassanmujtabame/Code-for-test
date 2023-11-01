<template>
  <div class="sec-five mt-5 p-5 container">
    <div class="">
      <div class="d-flex justify-content-between align-items-center">
        <h1>
          أحدث الدورات المجانيه
        </h1>

      </div>
      <DSwiper v-if="!loading" :slides-per-view="4" is-auto :space-between="10" :loop="true" :navigation="true"
        :items="items">
        <template v-slot:default="{ item }">
          <AcademyCourseCard :item="item"/>
        </template>
      </DSwiper>
    </div>
  </div>
</template>

<script>
import DSwiper from '@/components/swiper/index.vue'
import CardMember from '@/components/cards/card-member.vue'
import AcademyCourseCard from './academy-course.vue'

export default {
  name: 'section-training-courses',
  props: {
    itemPage: {}
  },
  components: {

    DSwiper,
    CardMember,
    AcademyCourseCard
  },
  data: (vm) => {
    return {
      loading: false,
      items: [
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
        { title: 'التصوير', description: 'التصوير',views: '532', price:789,  img: `assets/img/Rectangle 1775qa.png` },
      ]
    }
  }
}
</script>

<style>
</style>