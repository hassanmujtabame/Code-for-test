<template>
  <div class="row w-100">
    <div
      v-for="(instructor, i) in instructors"
      :key="i"
      class="col-6 col-md-2 mx-2 mb-3 text-center"
    >
      <router-link
        class="router-link"
        :to="getRouteLocale('network-offers', {}, { section: 'academy' })"
      >
        <ImgAvatar
          class="filter-shadow-partner mx-auto"
          :img="instructor.image_path"
          :alt="instructor.name ?? ''"
          size="150"
        />
      </router-link>
    </div>
    <div
      v-if="instructors.length == 0"
      style="min-height: 180px"
      class="col-12 d-flex align-items-center text-center w-100"
    >
      <h3 class="t-c text-center w-100">{{ $t("no-items") }}</h3>
    </div>
  </div>
</template>

<script>
import ImgAvatar from "@/components/avatars/img-avatar.vue";
import partnersAPI from "@/services/api/partners.js";
import mixinVue from "./mixin.vue";

export default {
  mixins: [mixinVue],
  name: "tab-content",
  props: {
    categoryId: {
      require: true,
    },
    instructors: {
      require: true,
    },
  },
  components: {
    ImgAvatar,
  },
  data: (vm) => {
    return {
      loading: true,
      items: [],
    };
  },
  methods: {},
  async mounted() {},
};
</script>

<style></style>
