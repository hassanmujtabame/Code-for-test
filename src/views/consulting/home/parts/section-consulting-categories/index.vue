<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center container my-2"
    >
      <h1 class="home-section-title">أبرز مجالات الاستشارة</h1>
      <div style="background-color: #fcd34d; border-radius: 9999px" class="">
        <button
          style="background-color: #fcd34d; border: none; border-radius: 9999px"
          @click="router_push('consulting-fields')"
          class="d-flex btn align-items-center px-5 py-2 text-dark"
        >
          {{ $t("more") }}
          <svg
            style="padding-top: 2px"
            class="mx-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.414 10.6569L12.364 6.70692C12.5462 6.51832 12.647 6.26571 12.6447 6.00352C12.6424 5.74132 12.5372 5.49051 12.3518 5.3051C12.1664 5.11969 11.9156 5.01452 11.6534 5.01224C11.3912 5.00997 11.1386 5.11076 10.95 5.29292L5.293 10.9499C5.19981 11.0426 5.12587 11.1527 5.0754 11.2741C5.02494 11.3954 4.99897 11.5255 4.99897 11.6569C4.99897 11.7883 5.02494 11.9184 5.0754 12.0398C5.12587 12.1611 5.19981 12.2713 5.293 12.3639L10.95 18.0209C11.0422 18.1164 11.1526 18.1926 11.2746 18.245C11.3966 18.2974 11.5278 18.325 11.6606 18.3262C11.7934 18.3273 11.9251 18.302 12.048 18.2517C12.1709 18.2015 12.2825 18.1272 12.3764 18.0333C12.4703 17.9394 12.5445 17.8278 12.5948 17.7049C12.6451 17.582 12.6704 17.4503 12.6693 17.3175C12.6681 17.1847 12.6405 17.0535 12.5881 16.9315C12.5357 16.8095 12.4595 16.6992 12.364 16.6069L8.414 12.6569H18C18.2652 12.6569 18.5196 12.5516 18.7071 12.364C18.8946 12.1765 19 11.9221 19 11.6569C19 11.3917 18.8946 11.1373 18.7071 10.9498C18.5196 10.7623 18.2652 10.6569 18 10.6569H8.414Z"
              fill="#78350F"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="px-5" v-if="isMobile">
      <d-swiper
        v-if="!loading"
        :slides-per-view="4"
        :space-between="10"
        is-auto
        :pagination="false"
        :navigation="true"
        :items="items"
      >
        <template v-slot:default="{ item }">
          <router-link
            class="router-link"
            :to="
              getRouteLocale('consulting-field-consultants', { id: item.id })
            "
          >
            <consultingFieldCard :item="item" />
          </router-link>
        </template>
      </d-swiper>
    </div>
    <div class="row" v-else>
      <div
        v-for="(item, i) in items"
        :key="i"
        class="col-12 mt-3 m-auto col-md-3"
      >
        <router-link
          class="router-link"
          :to="getRouteLocale('consulting-field-consultants', { id: item.id })"
        >
          <consultingFieldCard :item="item" />
        </router-link>
      </div>
    </div>

    <!-- <div class="container">
        <d-swiper
          v-if="!loading"
          :slides-per-view="4"
          is-auto
          :space-between="10"
          :items="items"
        >
          <template v-slot="{ item }">
            <router-link
              class="router-link"
              :to="getRouteLocale('consulting-field-consultants', { id: item.id })"
            >
            
   <consultingFieldCard :item="item"/>
             
            </router-link>
          </template>
        </d-swiper>
      </div> -->
  </div>
</template>

<script>
import consultingFieldCard from "@/components/cards/consulting-field.vue";
import consultingAPI from "@/services/api/consulting/index.js";
export default {
  name: "section-consulting-fields",
  components: {
    consultingFieldCard,
  },
  data: () => ({
    items: [],
    loading: false,
  }),
  methods: {
    async initializing() {
      this.loading = true;
      try {
        let { data } = await consultingAPI.fields.getBest({ paginate: 4 });
        if (data.success) {
          this.items = data.data;
        }
      } catch (error) {
        //
      }
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>

<style></style>
