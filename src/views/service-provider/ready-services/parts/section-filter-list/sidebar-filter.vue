<template>
  <div>
    <div class="box border d-none d-md-block p-3 rounded-3">
      <h4>{{ $t("filter") }}</h4>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              تصنيف الخدمة
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div>
                <div v-for="(state, i) in states" :key="i" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    :value="state.id"
                    v-model="filter.state"
                    :selected="state.id === filter.state"
                    name="stateRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {{ state.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item show">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              مجالات الاختصاص
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body show">
              <div v-for="(cat, i) in categories" :key="i" class="form-check">
                <input
                  v-model="filter.category_id"
                  :value="cat.id"
                  class="form-check-input"
                  type="checkbox"
                />
                <label class="form-check-label" for="defaultCheck1">
                  {{ cat.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item show">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseThree"
            >
              مقدمو الخدمة
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div>
              <div v-for="(prd, i) in providers" :key="i" class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  :value="prd.id"
                  v-model="filter.prd"
                  :selected="prd.id === filter.prd"
                  name="stateRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {{ prd.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item show">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFour"
            >
              التقييم
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div style="margin: 20px 0px 0 0" class="a">
              <d-rate-stars v-model="filter.rate_value" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 text-center">
        <button @click="updateFilter" class="btn-custmer">
          {{ $t("save") }}
        </button>
      </div>
    </div>
    <button
      class="py-2 px-5 d-md-none btnFilter rounded-3"
      style="background-color: transparent; border: none"
      :class="{ btnFilter: !showFilter }"
      @click="handleFilter"
    >
      <span v-if="!showFilter" class="text-white">عرض فلتر البحث</span>
      <!-- <svg
        v-if="!showFilter"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
      >
        <path
          d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
        />
      </svg> -->
      <span class="text-white" v-else> اغلاق فلتر البحث </span>
    </button>

    <div v-if="showFilter" class="box border d-block d-md-none p-3 rounded-3">
      <h4>{{ $t("filter") }}</h4>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              تصنيف الخدمة
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div>
                <div v-for="(state, i) in states" :key="i" class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    :value="state.id"
                    v-model="filter.state"
                    :selected="state.id === filter.state"
                    name="stateRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {{ state.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item show">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              مجالات الاختصاص
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body show">
              <div v-for="(cat, i) in categories" :key="i" class="form-check">
                <input
                  v-model="filter.category_id"
                  :value="cat.id"
                  class="form-check-input"
                  type="checkbox"
                />
                <label class="form-check-label" for="defaultCheck1">
                  {{ cat.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item show">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseThree"
            >
              مقدمو الخدمة
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div>
              <div v-for="(prd, i) in providers" :key="i" class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  :value="prd.id"
                  v-model="filter.prd"
                  :selected="prd.id === filter.prd"
                  name="stateRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  {{ prd.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item show">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseFour"
            >
              التقييم
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div style="margin: 20px 0px 0 0" class="a">
              <d-rate-stars v-model="filter.rate_value" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 text-center">
        <button @click="updateFilter" class="btn-custmer">
          {{ $t("save") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import serviceProviderAPIs from "@/services/api/service-provider/provider/index";
export default {
  name: "sidebar-box",
  props: {
    filterItem: {
      type: [Object, Array], //defaults values
      require: true,
    },
  },
  data: (vm) => {
    return {
      providers: [
        { id: null, name: "الكل" },
        { id: "worked", name: "وظفتهم سابقا" },
        { id: "offered", name: "أضافوا عروضا على طلباتك" },
      ],
      states: [
        { id: null, name: "الكل" },
        { id: "online", name: vm.$t("online-services") },
        { id: "offline", name: vm.$t("offline-services") },
        { id: "ready-services", name: vm.$t("ready-services") },
      ],
      categories: [],
      filter: vm.filterItem,
      showFilter: false,
    };
  },
  watch: {
    /*filter:{
            deep:true,
            handler(val){
                this.$emit('change',val)
            }
        }*/
  },
  methods: {
    handleFilter() {
      this.showFilter = !this.showFilter;
    },
    updateFilter() {
      this.$emit("change", this.filter);
    },
    async getCategories() {
      try {
        let { data } = await serviceProviderAPIs.readyService.getCategories();
        if (data.success) {
          let categories = data.data;
          //categories.unshift({ id: null, name: 'الكل' })
          this.categories = categories;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
  },
  mounted() {
    //
    this.getCategories();
  },
};
</script>

<style>
.btnFilter {
  background-color: #1fb9b3 !important;
}
</style>
