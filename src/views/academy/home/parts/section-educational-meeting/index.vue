<template>
  <div class="sec-fivell mt-5 p-3" v-if="items.length">

    <div class="containerll">
      <div class="d-flex justify-content-between align-items-center container">
        <h1 class="home-section-title"> لقاءات تعليمية</h1>
        <div>
          <router-link custom :to="getRouteLocale('academy-learning-meetings')" v-slot="{ navigate }">
            <button @click="navigate" role="link" class="more">{{ $t('more') }}</button>
          </router-link>
        </div>
      </div>
      <d-swiper v-if="!loading" :slides-per-view="3" :space-between="15" is-auto :items="items">
        <template v-slot:default="{ item }">
          <router-link class="router-link" :to="getRouteLocale('academy-learning-meeting-show', { id: item.id })">
            <meetingCard :item="item" :img="item.image" :title="item.title" :type="item.type" :date="item.date" />
          </router-link>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import meetingCard from '@/components/cards/meeting.vue'
import academyAPI from '@/services/api/academy';
export default {
  name: 'section-eductional-meeting',
  components: {
    meetingCard
  },
  data: () => ({
    loading: true,
    total: 0,
    items: []
  }),
  methods: {
    async initlizing() {
      this.loading = true;
      try {
        let { data } = await academyAPI.meetingsAPI.getAllMeeting();
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

<style></style>