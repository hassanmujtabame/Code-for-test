<template>
  <div class="box member-filter">
    <d-expanded-panel
      style="height: 150px"
      class="accordion d-flex align-items-start"
      id="accordionPanelsStayOpenExample"
    >
      <d-expanded-panel-item
        class="col-12 col-md-2 border rounded-3 p-2 mt-0 pb-0"
        :title="$t('classification')"
      >
        <div class="">
          <div
            v-for="(state, i) in states"
            :key="i"
            class="form-check states-input-custom"
            style=""
          >
            <input
              class="form-check-input"
              type="radio"
              :value="state.id"
              v-model="filter.membership"
              :selected="state.id === filter.membership"
              @change="updateFilter"
              name="stateRadioDefault"
              :id="`flexRadioDefault${i}`"
            />
            <label class="form-check-label mb-1" :for="`flexRadioDefault${i}`">
              {{ state.name }}
            </label>
          </div>
        </div>
      </d-expanded-panel-item>
      <d-expanded-panel-item
        class="col-12 col-md-2 border rounded-3 p-2 mt-0 pb-0"
        :title="'مجالات الاختصاص'"
      >
        <div
          v-for="(cat, i) in categories"
          :key="i"
          class="form-check states-input-custom"
        >
          <input
            v-model="filter.category_id"
            :value="cat.id"
            class="form-check-input form-check-input-member"
            type="checkbox"
            :id="`defaultCheck1${i}`"
            @change="updateFilter"
          />
          <label class="form-check-label" :for="`defaultCheck1${i}`">
            {{ cat.name }}
          </label>
        </div>
      </d-expanded-panel-item>
      <div
        class="col-12 d-flex flex-md-row flex-column align-items-center gap-3 col-md-7"
      >
        <slot name="search">
          <label for="" class="position-relative w-100">
            <input
              class="form-control py-3 px-5 fs-r-12"
              type="text"
              v-model="filter.search"
              @change="updateFilter"
              placeholder="أبحث  بالاسم او المجال"
            />
            <p style="top: 25%; right: 7px" class="position-absolute">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#979797"
                />
                <path
                  d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                  fill="#979797"
                />
              </svg>
            </p>
          </label>
          <a class="" download>
            <button
              style="width: 160px"
              class="btn bg-main p-2 px-4 text-white d-flex align-items-center"
            >
              <div>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 27V31.5H9V27H6.75V31.5C6.75 32.0967 6.98705 32.669 7.40901 33.091C7.83097 33.5129 8.40326 33.75 9 33.75H27C27.5967 33.75 28.169 33.5129 28.591 33.091C29.0129 32.669 29.25 32.0967 29.25 31.5V27H27Z"
                    fill="white"
                  />
                  <path
                    d="M23.625 23.625L22.0343 22.0343L19.125 24.9435V15.75H16.875V24.9435L13.9657 22.0343L12.375 23.625L18 29.25L23.625 23.625ZM31.5 4.5V2.25H24.75V13.5H27V9H30.375V6.75H27V4.5H31.5ZM19.125 13.5H14.625V2.25H19.125C20.0198 2.25089 20.8778 2.60676 21.5105 3.2395C22.1432 3.87224 22.4991 4.73017 22.5 5.625V10.125C22.4991 11.0198 22.1432 11.8778 21.5105 12.5105C20.8778 13.1432 20.0198 13.4991 19.125 13.5ZM16.875 11.25H19.125C19.4233 11.2497 19.7093 11.1311 19.9202 10.9202C20.1311 10.7093 20.2497 10.4233 20.25 10.125V5.625C20.2497 5.32672 20.1311 5.04075 19.9202 4.82983C19.7093 4.61892 19.4233 4.5003 19.125 4.5H16.875V11.25ZM10.125 2.25H4.5V13.5H6.75V10.125H10.125C10.7215 10.1241 11.2932 9.88677 11.715 9.465C12.1368 9.04324 12.3741 8.47146 12.375 7.875V4.5C12.3744 3.90345 12.1372 3.3315 11.7153 2.90967C11.2935 2.48784 10.7216 2.2506 10.125 2.25ZM6.75 7.875V4.5H10.125L10.1261 7.875H6.75Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div class="mx-3">تنزيل</div>
            </button>
          </a>
        </slot>
      </div>
    </d-expanded-panel>
    <h2 class="">
      <!-- عدد الأعضاء <span class="m-c">{{ totalMembers }} عضو </span> -->
      اعضاء رياديات
    </h2>
  </div>
</template>

<script>
import networkAPIs from "@/services/api/network.js";
import MembersApi from "@/services/api/members.js";

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
      states: [
        { id: null, name: "الكل" },
        { id: "member", name: "عضو" },
        { id: "partner", name: "شريك" },
        { id: "instructor", name: "مدرب" },
      ],
      categories: [],
      filter: vm.filterItem,
      totalMembers: 0,
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
    updateFilter() {
      this.$emit("change", this.filter);
      this.getTotalMembers();
    },
    async getTotalMembers() {
      try {
        let { data } = await MembersApi.getAll(this.filter);
        if (data.success) {
          console.log("145", data);
          this.totalMembers = data.meta.total;
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
    async getCategories() {
      try {
        let { data } = await networkAPIs.getCategories();
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
    this.getCategories();
    this.getTotalMembers();
  },
};
</script>
<style>
.member-filter .accordion-collapse {
  position: relative !important;
}

.member-filter .accordion-body {
  /* position: absolute !important; */
  background: white !important;
  /* width: 100% !important; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12) !important; */
  /* border-bottom-left-radius:20px ; */
  /* border-bottom-right-radius:20px ; */
  padding: 5px !important;
  height: 140px;
  overflow-y: scroll;
}

.states-input-custom input {
  display: none;
}

.states-input-custom label:hover {
  background-color: #1fb9b3 !important;
  color: white;
}

.states-input-custom label {
  cursor: pointer;
  width: 100%;
  padding: 2px 12px;
}

.form-check-input-member:checked + label {
  background-color: #1fb9b3 !important;
  color: white;
}
</style>
