<template>
  <div class="mt-5 p-5 container">
    <div class="">
      <div class="d-flex justify-content-center align-items-center">
        <h1>المسوقين الأكثر <span>ربحاً</span></h1>
      </div>
      <DSwiper
        v-if="!loading"
        :slides-per-view="4"
        is-auto
        :space-between="10"
        :loop="true"
        :navigation="true"
        :items="items"
      >
        <template v-slot:default="{ item }">
          <CardMemberMarket
            :description="item.description ?? ' ريادية'"
            :name="item.name"
            :to="getRouteLocale('incubator-show-profile', { id: item.id })"
            :img="item.image"
          />
        </template>
      </DSwiper>
    </div>
  </div>
</template>

<script>
import DSwiper from "@/components/swiper/index.vue";
import CardMember from "@/components/cards/card-member.vue";
import CardMemberMarket from "@/components/list-cards/affiliate/card-member-marketing.vue";
import topMarketApi from "@/services/api/market";
export default {
  name: "section-graduated",
  props: {
    itemPage: {},
    title: "",
  },
  components: {
    CardMemberMarket,
    DSwiper,
    CardMember,
  },
  data: (vm) => {
    return {
      loading: false,
      items: [],
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        let { data } = await topMarketApi.getAll();
        if (data.success) {
          this.items = data.data;
          console.log(data.data);
          this.loading = false;
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
h1 {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 89.95px;
  text-align: center;
}
h1 span {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 89.95px;
  text-align: center;
  color: #1fb9b3;
}
</style>
