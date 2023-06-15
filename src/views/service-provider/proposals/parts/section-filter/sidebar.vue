<template>
  <div class="box border p-3 rounded-3">
    <h4>{{ $t('filter') }}</h4>
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
          >تصنيف الخدمة</button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">
            <div>
              <div v-for="(item,i) in states" :key="i" class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="filter.state"
                  :value="item.id"
                  name="flexRadioDefault"
                />
                <label class="form-check-label">{{ item.name }}</label>
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
          >مجالات الاختصاص</button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body">
            <ExpandedPanel :id="('accordionFlushCat')">
              <ExpandedPanelItem
                v-for="(cat,i) in categories"
                :key="i"
                class="form-check"
                :borderBottom="false"
              >
                <template v-slot:title="{id}">
                  <div class="form-check">
                    <input
                      v-model="filter.category_id"
                      :value="cat.id"
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label
                      class="form-check-label accordion-label collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#${id}`"
                      aria-expanded="false"
                      :aria-controls="id"
                    >{{cat.name}}</label>
                  </div>
                </template>

                <!-- children-->

                <template v-slot:default>
                  <div class="cat-children">
                    <div v-for="(catc,j) in cat.childreen" :key="j" class="form-check">
                      <input
                        v-model="filter.category_id"
                        :value="catc.id"
                        class="form-check-input"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="defaultCheck1">{{catc.name}}</label>
                    </div>
                  </div>
                </template>
              </ExpandedPanelItem>
            </ExpandedPanel>
          </div>
        </div>
      </div>
      <!-- cities-->
      <div class="accordion-item show">
        <h2 class="accordion-header" id="panelsStayOpen-headingCities">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseCities"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseCities"
          >موقع طلب الخدمة</button>
        </h2>
        <div
          id="panelsStayOpen-collapseCities"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingCities"
        >
          <div class="accordion-body">
            <div v-for="(city,i) in cities" :key="i" class="form-check">
              <input
                v-model="filter.city_id"
                :value="city.id"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="defaultCheck1">{{city.name}}</label>
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
          >المدة</button>
        </h2>

        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div style="margin: 20px 0px 0 0" class="a">
            <div class="slider-container">
              <rslider-input
                :min.sync="filter.min_period"
                :max.sync="filter.max_period"
                :lmin="0"
                :lmax="1000"
              />
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
          >التكلفة</button>
        </h2>

        <div
          id="panelsStayOpen-collapseFour"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingFour"
        >
          <div style="margin: 20px 0px 0 0" class="a">
            <div class="slider-container">
              <rslider-input
                :min.sync="filter.min_price"
                :max.sync="filter.max_price"
                :lmin="0"
                :lmax="1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 text-center">
      <button @click="updateFilter" class="btn-custmer">{{$t('save')}}</button>
    </div>
  </div>
</template>

<script>
import myRequestsAPIs from "@/services/api/service-provider/user/proposals.js";
import ExpandedPanel from "@/components/expanded-panel/ExpandedPanel.vue";
import ExpandedPanelItem from "@/components/expanded-panel/ExpandedPanelItem.vue";

export default {
  name: "sidebar-box",
  components: {
    ExpandedPanel,
    ExpandedPanelItem
  },
  props: {
    filterItem: {
      type: [Object, Array], //defaults values
      require: true
    }
  },
  data: vm => {
    return {
      states: [
        { id: null, name: "الكل" },
        { id: "online", name: vm.$t("online") },
        { id: "offline", name: vm.$t("offline") }
      ],
      categories: [],
      cities: [
        { id: null, name: "دمام" },
        { id: null, name: "الخبر" },
        { id: null, name: "الرياض" },
        { id: null, name: "تبوك" },
        { id: null, name: "عرعر" },
        { id: null, name: "القصيم" },
        { id: null, name: "الباحة" }
      ],
      filter: vm.filterItem
    };
  },
  watch: {
    filter: {
      deep: true,
      handler(val) {
        this.$emit("change", val);
      }
    }
  },
  methods: {
    updateFilter() {
      this.$emit("change", this.filter);
    },
    async getCategories() {
      try {
        let { data } = await myRequestsAPIs.getCategories();
        if (data.success) {
          let categories = data.data;
          this.categories = categories;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    }
  },
  mounted() {
    this.getCategories();
  }
};
</script>

<style scoped>
.accordion-body {
  padding: 0 !important;
}
.accordion-label::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-right: auto;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}

html[lang="ar"] .accordion-button::after {
  left: 0;
}
.accordion-label {
  position: relative;
  width: 100%;
}
.accordion-label::after {
  position: absolute;
}
html[lang="ar"] .accordion-label::after {
  left: 0;
  margin-left: -5px;
}
html:not([lang="ar"]) .accordion-label::after {
  right: 0;
  margin-right: -5px;
}
.accordion-label:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
html[lang="ar"] .cat-children {
  padding-right: 15px;
}
html:not([lang="ar"]) .cat-children {
  padding-left: 15px;
}
.cat-children label {
  font-size: 12px;
  color: #818080;
}
</style>