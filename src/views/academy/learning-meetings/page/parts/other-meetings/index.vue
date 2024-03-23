<template>
  <div class="containerl">
    <div class="sec-five mt-5 p-3">
      <div class="">
        <div
          class="d-flex justify-content-between align-items-center container"
        >
          <h1 style="color: #cf1f3e">لقاءات تعليمية أخرى</h1>
          <!-- <div>
                        <button class="more">{{ $t('more') }}</button>
                    </div> -->
          <router-link
            custom
            :to="getRouteLocale('academy-learning-meetings')"
            v-slot="{ navigate }"
          >
            <button @click="navigate" role="link" class="more">
              {{ $t("more") }}
            </button>
          </router-link>
        </div>
        <d-swiper
          v-if="!loading"
          is-auto
          :items="items"
          class="justify-content-around"
        >
          <template v-slot="{ item }">
            <router-link
              style="width: fit-content"
              class="router-link"
              :to="
                getRouteLocale('academy-learning-meeting-show', { id: item.id })
              "
            >
              <MeetingCard
                :item="item"
                :img="item.image"
                :title="item.title"
                :type="item.type"
                :date="item.date"
                :time="item.time"
              />
            </router-link>
          </template>
        </d-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import meetingsAPI from "@/services/api/learning-meetings.js";
import MeetingCard from "@/components/meeting-academy-card.vue";
// import MeetingCard from "@/components/cards/meeting.vue";
export default {
  name: "other-meetings",
  components: {
    MeetingCard,
  },
  data: () => ({
    loading: true,
    items: [],
  }),
  methods: {
    async loadOtherMeetings() {
      this.loading = true;

      try {
        let { data } = await meetingsAPI.getOtherMeetings(
          this.$route.params.id
        );
        if (data.success) {
          this.items = data.data;
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
        this.hasError = true;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.loadOtherMeetings();
  },
};
</script>

<style></style>
