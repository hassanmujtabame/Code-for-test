<template>
  <div class="sec-five p-3">
    <div class="px-3">
      <div class="d-flex justify-content-between align-items-center container">
        <div class="d-flex flex-column gap-2">
          <h1 class="home-section-title">أبرز مستشارينا</h1>
          <p style="color: #888">
            هل تبحث عن أفضل مستشار لنجاحك في ريادة الأعمال؟ إذا كان الأمر كذلك،
            فنحن ندعوك للتعرف على أفضل المستشارين لدينا.
          </p>
        </div>
        <div>
          <!-- <router-link
            :to="getRouteLocale('consulting-consultants')"
            class="more"
            >{{ $t("more") }}</router-link
          > -->
        </div>
      </div>

      <DSwiper
        v-if="!loading"
        :slides-per-view="4"
        :space-between="10"
        is-auto
        :pagination="false"
        :navigation="true"
        :items="items"
      >
        <template v-slot:default="{ item }">
          <Card
            :to="getRouteLocale('consultant-page', { id: item.id })"
            :name="item.name"
            :description="item.job_title"
            :img="item.image"
          />
        </template>
      </DSwiper>
    </div>
  </div>
</template>

<script>
import DSwiper from "@/components/swiper/index.vue";
// import CardMember from "@/components/cards/card-member.vue";
import Card from "@/components/best-consult-item.vue";
import consultingAPI from "@/services/api/consulting";
export default {
  name: "section-best-consultants",
  components: {
    DSwiper,
    Card,
  },
  data: () => ({
    loading: true,
    items: [],
    consultants: true,
  }),
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await consultingAPI.consultants.getBest({ paginate: 6 });
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        //
      }
      this.loading = false;
    },
    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "consultants") {
          this.consultants = true;
        }
      }
    },
  },
  mounted() {
    // this.checkSubscriptionOptions();

    this.initializing();
  },
};
</script>

<style></style>
