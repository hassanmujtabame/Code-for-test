<template>
  <div class="sec-five p-3">
    <div class="">
      <div class="d-flex justify-content-between align-items-center ">
        <h1 class="home-section-title px-3"> أبرز مدربتنا في اكاديمية رياديات</h1>
        <div v-if="true">
          <button class="more">
            <a href="" class="text-dark">
              {{ $t('more') }}
            </a>
          </button>
        </div>
      </div>
      <div class="container">

        <d-swiper v-if="!loading" :slides-per-view="4" is-auto :space-between="10" :items="items">
          <template v-slot:default="{ item }">
            <CardMember :countCourse="item.countCourse"  :name="item.name" :img="item.image" :to="getRouteLocale('academy-show-profile', { id: item.id })" />
          </template>
        </d-swiper>

      </div>
    </div>
  </div>
</template>

<script>

import CardMember from '@/components/cards/card-member.vue'
import academyAPI from '@/services/api/academy';
export default {
  name: 'section-best-instructors',
  components: {
    CardMember
  },
  data: () => ({
    loading: true,
    total: 0,
    items: [],
    slidesperview: 2

  }),
  methods: {
    async initlizing() {
      this.loading = true;
      try {
        let { data } = await academyAPI.instructor.getBest({ paginate: 8 });
        if (data.success) {
          this.items = data.data
        }
      } catch (error) {
        console.log('error', error)
      }
      this.loading = false;
    }
  },
  mounted() {
    this.initlizing()

  }
}
</script>

<style>
.swiper-slide {
  width: 257.5px !important
    /* width:280px !important */
}

.provider-card {
  width: 100% !important
}
</style>