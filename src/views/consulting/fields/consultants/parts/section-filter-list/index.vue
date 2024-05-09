<template>
  <div>
    <div class="department-title container">استشارات {{ itemPage.name }}</div>

    <div class="department-best">
      <div class="department-best-container container">
        <div class="department-best-title my-2">
          أبرز المستشارين في مجال {{ itemPage.name }}
        </div>
        <div class="row px-5 justify-content-center">
          <div
            v-for="(item, index) in department_best"
            :key="index"
            class="department-best-card col-lg-3 col-md-4 col-sm-6 col-12"
          >
            <router-link
              :to="getRouteLocale('consultant-page', { id: item.id })"
            >
              <consultantCard :item="item" class="mx-auto" />
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-2">
      <d-filter-list
        :call-list="loadList"
        :hideTitle="false"
        classTitle="col-lg-12 mb-3 mt-5"
        classSearchOrder="col-lg-12 d-flex justify-content-center align-items-center mt-4 mb-5"
        :pluralName="$t('consultants')"
        :singleName="$t('consultant')"
        searchPlaceholder="أبحث عن مستشار"
        @change="changeFilter"
      >
        <template v-slot:title>
          <span
            class="department-all"
            v-html="'جميع مستشاري' + ' ' + itemPage.name"
          ></span>
        </template>
        <template v-slot="{ item }">
          <router-link
            class="router-link"
            :to="getRouteLocale('consultant-page', { id: item.id })"
          >
            <consultantCard :item="item" class="mx-auto" />
          </router-link>
        </template>
        <template v-slot:side>
          <sidebarBox :filterItem="filterSide" @change="changeFilter" />
        </template>
      </d-filter-list>
    </div>
  </div>
</template>

<script>
import consultantCard from "@/components/cards/consultant.vue";
import consultingAPI from "@/services/api/consulting";
import consultantsApi from "@/services/api/consulting/consultants";
import sidebarBox from "./sidebar.vue";
export default {
  name: "section-filter-list",
  components: {
    consultantCard,
    sidebarBox,
  },
  props: {
    itemPage: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    department_best: [],
    items: [],
    filterSide: {
      during: null,
      call_type: null,
      min_price: 0,
      max_price: 1000,
    },
    filterItem: {
      created_at: "asc",
      search: null,
      during: null,
      call_type: null,
      min_price: 0,
      max_price: 1000,
    },
  }),
  methods: {
    changeFilter(val) {
      this.filterItem = { ...this.filterItem, ...val };
      this.fireEvent("d-filter-list-refresh");
    },
    async loadList(metaInfo) {
      let params = {
        page: metaInfo.current_page,
        department_id: this.$route.params.id,
        paginate: this.isMobile ? 2 : 6,
        ...this.filterItem,
      };
      try {
        return await consultingAPI.getAll(params);
      } catch (error) {
        //
      }
    },
    async getBestConsultants() {
      try {
        let { data } = await consultantsApi.getBest(this.$route.params.id);
        if (data.success) {
          this.department_best = data.data.slice(0, 4);
        }
      } catch (error) {
        //
      }
    },
  },
  mounted() {
    this.getBestConsultants();
  },
};
</script>

<style scoped>
.department-title {
  padding-top: 48px;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
  color: #414042;
}
.department-best {
  background-image: url("@/assets/img/Path2213.png");
  background-size: 500px auto;
  background-position: 130%;
  background-repeat: no-repeat;
}

.department-best-container {
  padding-top: 20px;
  padding-bottom: 20px;
  background-image: url("@/assets/img/member/decorationIcons2.png");
  background-size: auto auto;
  background-position: right bottom;
  background-repeat: no-repeat;
}

.department-best-title {
  font-size: 40px;
  font-weight: 700;
  color: #414042;
}
.department-best-card {
  margin-top: 20px;
  max-width: 280px;
}

.department-all {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 600;
  color: #414042;
}
.department-best {
  background-color: #f6f8f9;
  padding: 20px 0;
}
</style>
