<template>
  <div class="filter-list">
    <div class="text-start ">
      <slot name="top-end"></slot>
    </div>
    <div v-if="!hideTop" class="row align-items-center">
      <div v-if="!hideTotal" class="col-12 mt-3" :class="classTotal">
        <slot name="total">
          <h4>
            {{ $t("nomber") }} {{ pluralName }} :
            <span class="m-c"> {{ metaInfo.total }} {{ singleName }} </span>
          </h4>
        </slot>
      </div>
      <div v-if="!hideTitle" class="col-12 mt-3" :class="classTitle">
        <slot name="title">
          <h3 v-if="title" class="t-c fw-bolder">{{ title }}</h3>
        </slot>
      </div>
      <div class="col-12 mt-3 row mb-3" :class="classSearchOrder">
        <div v-if="!hideSearch" :class="classColSearch">
          <slot name="search">
            <label for="" class="position-relative w-100">
              <input class="form-control py-3 px-5 fs-r-12" type="text" v-model="filter.search" @change="updateFilter"
                :placeholder="searchPlaceholder" />
              <p style="top: 25%; right: 7px" class="position-absolute">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                    fill="#979797" />
                  <path
                    d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                    fill="#979797" />
                </svg>
              </p>
            </label>
          </slot>
        </div>
        <div v-if="!hideOrder" :class="classColOrder" class="position-relative margin">
          <slot name="order">
            <p style="top: -13px; right: 280px; background: white" class="position-absolute">
              ترتيب حسب
            </p>
            <select @change="updateFilter" v-model="filter.order" class="form-select py-3 m-c fs-r-12 w-25"
              aria-label=".form-select-lg example">
              <option v-for="(opt, i) in orderOpts" :key="i" :value="opt.id">
                {{ opt.name }}
              </option>
            </select>

          </slot>
          <slot name="append-order">

          </slot>
        </div>

      </div>
      <!--ordzer-->
      <div v-if="$slots['head-end']" :class="HeadEndClasses" :style="{
        'margin-right': $i18n.locale ? 'auto' : '',
        'margin-left': $i18n.locale ? 'auto' : '',
      }">
        <slot name="head-end"></slot>
      </div>
    </div>
    <div v-if="$slots['before-body']" class="row filter-list__before-body">
      <slot name="before-body"></slot>
    </div>
    <div class="row">
      <div v-if="!hideSide" class="col-xl-3 mt-2">
        <slot name="side">
          <div class="box border p-3 rounded-3">
            <h4>{{ $t("filter") }}</h4>
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne">
                    تصنيف
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <div>
                      <div v-for="(state, i) in states" :key="i" class="form-check">
                        <input class="form-check-input" type="radio" :value="state.id" v-model="stateValue"
                          :selected="state.id === state" name="stateRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                          {{ state.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo">
                    مجالات الاختصاص
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                      <label class="form-check-label" for="defaultCheck1">
                        الازياء
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                      <label class="form-check-label" for="defaultCheck2">
                        المجوهرات
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                      <label class="form-check-label" for="defaultCheck3">
                        تجميل
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                      <label class="form-check-label" for="defaultCheck4">
                        منظمات الحفلات
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                      <label class="form-check-label" for="defaultCheck5">
                        التصوير الفوتوغرافية
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                      <label class="form-check-label" for="defaultCheck6">
                        التصميم
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck7" />
                      <label class="form-check-label" for="defaultCheck7">
                        مصممات الديكور
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck8" />
                      <label class="form-check-label" for="defaultCheck8">
                        العاملين في الافراح
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree">
                    المدة
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse"
                  aria-labelledby="panelsStayOpen-headingThree">
                  <div style="margin: 20px 0px 0 0" class="a">
                    <div class="slider-container">
                      <rslider-input :min.sync="valueMin2" :max.sync="valueMax2" :lmin="0" :lmax="100" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour">
                    التكلفة
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse"
                  aria-labelledby="panelsStayOpen-headingFour">
                  <div style="margin: 20px 0px 0 0" class="a">
                    <div class="slider-container">
                      <rslider-input :min.sync="valueMin1" :max.sync="valueMax1" :lmin="50" :lmax="1000" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 text-center">
              <button class="btn-main">حفظ</button>
            </div>
          </div>
        </slot>
      </div>
      <div :class="{ 'col-xl-9': !hideSide, 'col-lg-12': hideSide }">
        <div class="row">
          <div v-if="items.length == 0">
            <h1 class="t-c text-center">لا يوجد عناصر</h1>
          </div>
          <div v-else class="col-12 row order filter-list-items">
            <div v-for="(item, i) in items" :key="i" :class="classColCard">
              <slot :item="item"></slot>
            </div>
          </div>
          <div class="col-12">
            <slot name="list" :items="items"></slot>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <nav v-if="metaInfo.total_page > 1" aria-label="Page navigation example">
          <ul class="pagination justify-content-center" :style="{
            'flex-direction': $i18n.locale == 'ar' ? 'row-reverse' : 'row',
          }">
            <li class="page-item rotateY-180" :class="{ disabled: metaInfo.current_page == 1 }">
              <button @click="changePage(1)" class="page-link">
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.90013 14.3899C1.58346 14.3899 1.2668 14.2733 1.0168 14.0233C0.533464 13.5399 0.533464 12.7399 1.0168 12.2566L6.0168 7.25661L1.0168 2.25661C0.533464 1.77327 0.533464 0.973275 1.0168 0.489941C1.50013 0.00660808 2.30013 0.00660808 2.78346 0.489941L8.6668 6.37328C9.15013 6.85661 9.15013 7.65661 8.6668 8.13994L2.78346 14.0233C2.53346 14.2733 2.2168 14.3899 1.90013 14.3899Z"
                    fill="#CDD7D8" />
                </svg>
              </button>
            </li>
            <li v-for="(p, i) in metaInfo.total_page" :key="i" class="page-item"
              :class="{ disabled: metaInfo.current_page === p }">
              <button @click="changePage(p)" class="page-link border-0" href="#">
                {{ p }}
              </button>
            </li>

            <li class="page-item rotateY-180" :class="{
              disabled: metaInfo.current_page == metaInfo.total_page,
            }">
              <button @click="changePage(metaInfo.total_page)" class="page-link" href="#">
                <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.09987 14.3899C7.7832 14.3899 7.46653 14.2733 7.21653 14.0233L1.3332 8.13994C0.84987 7.65661 0.84987 6.85661 1.3332 6.37328L7.21653 0.489941C7.69987 0.00660808 8.49987 0.00660808 8.9832 0.489941C9.46654 0.973275 9.46654 1.77327 8.9832 2.25661L3.9832 7.25661L8.9832 12.2566C9.46654 12.7399 9.46654 13.5399 8.9832 14.0233C8.74987 14.2733 8.4332 14.3899 8.09987 14.3899Z"
                    fill="#CDD7D8" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "d-filter-list",
  props: {
    title: {
      type: String,
      default: null,
    },
    pluralName: {
      type: String,
      default: function () {
        return this.$t("services");
      },
    },
    searchPlaceholder: {
      type: String,
      default: function () {
        return this.$t("search");
      },
    },

    singleName: {
      type: String,
      default: function () {
        return this.$t("service");
      },
    },
    classColCard: {
      type: String,
      default: "col-12 col-lg-6 mt-2",
    },
    classColSearch: {
      type: String,
      default: "col-12 col-lg-6",
    },
    classTotal: {
      type: String,
      default: "col-lg-4",
    },
    classTitle: {
      type: String,
      default: "col-lg-2",
    },
    classSearchOrder: {
      type: String,
      default: "col-lg-6",
    },
    classColOrder: {
      type: String,
      default: "col-12 col-lg-6",
    },
    hideTotal: {
      type: Boolean,
      default: false,
    },
    hideOrder: {
      type: Boolean,
      default: false,
    },
    hideSearch: {
      type: Boolean,
      default: false,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
    hideSide: {
      type: Boolean,
      default: false,
    },
    hideTop: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      require: true,
    },
    fakeItems: {
      type: [Array, Object],
      default: () => null,
    },
    orderOpts: {
      type: [Array, Object],
      default: () => {
        return [
          { id: "asc", name: "الاحدث" },
          { id: "desc", name: "الاقدم" },
        ];
      },
    },
    orderName: {
      type: String,
      default: "created_at",
    },
    callList: {
      type: Function,
      default: null,
    },
    group: {
      type: String,
      default: "d-filter-list",
    },
    HeadEndClasses: {
      type: String,
      default: "col-12 col-lg-auto",
    },
  },
  data: () => ({
    states: [
      { id: null, name: "الكل" },
      { id: "online", name: "خدمات اونلاين" },
      { id: "offline", name: "خدمات اوفلاين" },
    ],
    stateValue: null,
    filter: {
      order: "asc",
      search: "",
    },
    metaInfo: {
      current_page: 1,
      to: 10,
      total: 0,
      total_page: 0,
    },
    valueMax1: 40,
    valueMin1: 0,
    valueMax2: 50,
    valueMin2: 20,
    items: [],
  }),
  methods: {
    updateFilter() {
      let obj = {};
      obj[this.orderName] = this.filter.order;
      obj.search = this.filter.search;
      this.$emit("change", obj);
    },
    changePage(page) {
      if (this.metaInfo.current_page !== page) {
        this.metaInfo.current_page = page;
      }
      this.loadList();
    },
    refreshList(evt) {
      if (evt && evt.page) {
        this.changePage(evt.page);
      } else this.changePage(1);
      //this.loadList()
    },
    async loadList() {
      if (this.fakeItems) {
        this.items = this.fakeItems;
        return;
      }
      if (!this.callList && !this.link) return;
      try {
        //let { data } =await this.callList(this.metaInfo)
        let { data } = this.callList
          ? await this.callList(this.metaInfo)
          : await this.$axios.get(
            `${this.link}?page=${this.metaInfo.current_page}`
          );

        if (data.success) {
          this.items = data.data;
          this.metaInfo.to = data.meta.to;
          this.metaInfo.total = data.meta.total;
          this.metaInfo.total_page = data.meta.last_page;
        }
      } catch (error) {
        console.mylog("error", error);
        console.mylog("response", error.response);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.loadList();
    });
  },
  created() {
    window.EventBus.listen(this.group + "-change-page", this.changePage);
    window.EventBus.listen(this.group + "-refresh", this.refreshList);
  },
  beforeDestroy() {
    window.EventBus.off(this.group + "-change-page", this.changePage);
    window.EventBus.off(this.group + "-refresh", this.refreshList);
  },
};
</script>


<style scoped>
@media (max-width: 991px) {
  .margin {
    margin-top: 15px !important;
  }
}
</style>
