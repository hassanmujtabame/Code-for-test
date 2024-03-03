<template>
  <div class="sec-five mt-5 p-5 container-fluid">
    <div class="">
      <div class="d-flex justify-content-between align-items-center">
        <h1>
          {{ title }}
        </h1>
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
          <CardMember
            :description="item.description"
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
import topMarketApi from "@/services/api/market";
export default {
  name: "section-graduated",
  props: {
    itemPage: {},
    title: "",
  },
  components: {
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

<style></style>
