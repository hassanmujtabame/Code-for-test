<template>
  <div class="box filter-work-space  p-3 " style="height: 200px">

    <d-expanded-panel  class="accordion d-flex align-items-center w-100" id="accordionPanelsStayOpenExample">
  
      <d-expanded-panel-item class="col-12 col-md-2 border rounded-3 p-2 " :title="$t('the-address')" closed>
        <div v-for="(address, i) in cities" :key="i" class="form-check states-input-custom ">
          <input
            v-model="filter.city_id"
            :value="address.id"
            class="form-check-input my-1 form-check-input-address"
            type="checkbox"
            :id="`checkboxBtn${i}`"
            @change="updateFilter"
          />
          <label class="form-check-label" :for="`checkboxBtn${i}`">
            {{ address.name }}
          </label>
        </div>
      </d-expanded-panel-item>
  <d-expanded-panel-item class="col-12 col-md-2 border rounded-3 p-2 " title="نوع المكان" closed>
        <div>
          <div v-for="(type, i) in types" :key="i" class="form-check states-input-custom">
            <input
              class="form-check-input"
              type="radio"
              :value="type.id"
              v-model="filter.type"
              :selected="type.id === filter.type"
              name="stateRadioDefault"
              :id="`flexRadioDefault${i}`"
              @change="updateFilter"
            />
            <label class="form-check-label" :for="`flexRadioDefault${i}`">
              {{ type.name }}
            </label>
          </div>
        </div>
      </d-expanded-panel-item>
            <div class="col-12 col-md-5">
          <slot name="search">
            <label for="" class="position-relative w-100">
              <input
                class="form-control py-3 px-5 fs-r-12"
                type="text"
                v-model="filter.search"
                @change="updateFilter"
                placeholder="أين تريد أن تعمل؟"
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
          </slot>
        </div> 
             <div class="col-12 col-md-2">
               <button class="rounded-2  d-flex border mx-auto bg-transparent justify-content-center align-items-center w-75" style="height: 47px; color: #1FB9B3">
                  <img  :src="`${publicPath}assets/svg/fluent_my-location-24-filled.svg`"  />
                 <span class="px-2">الاقرب</span>
               </button>
        </div> 
    </d-expanded-panel>

    <!-- <div class="mt-3 text-center">
      <button @click="updateFilter" class="btn-custmer">
        {{ $t("save") }}
      </button>
    </div> -->
  </div>
</template>

<script>
import exhibitionsAPIs from "@/services/api/exhibitions.js";
import commonAPIs from "@/services/api/common.js";

export default {
  name: "sidebar-box",
  props: {
    filterItem: {
      type: [Object, Array], //defaults values
      require: true,
    },
  },
  data() {
    return {
      types: [
        { id: null, name: "الكل" },
        { id: "office_room", name: "غرفة مكتبية" },
        { id: "meeting_rooms", name: "قاعة الاجتماعات" },
      ],
      addresses: [],
      cities:[],
      filter: this.filterItem,
    };
  },

  methods: {
    updateFilter() {
      this.$emit("change", this.filter);
    },
     async loadCities() {  
      try {
        let { data } = await commonAPIs.cities();

        if (data.success) {
          this.cities = data.data;
        }
      } catch (error) {
        console.mylog("error", error);
      }
    },
    // async getAddresses() {
    //   try {
    //     let { data } = await exhibitionsAPIs.getCategories();
    //     if (data.success) {
    //       this.addresses = data.data;
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
  mounted() {
    // this.getAddresses();
    this.loadCities();

  },
};
</script>

<style>
.filter-work-space .accordion-collapse {
    position: relative !important;

}
.filter-work-space .accordion-body{
    position: absolute !important;
    background: white !important;
    width: 100% !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12) !important;
    border-bottom-left-radius:20px ;
    border-bottom-right-radius:20px ;
    padding: 5px !important;
    height: 90px;
    overflow-y: scroll;
}
.states-input-custom input{
    display: none;
}
.states-input-custom label:hover{
     background-color: #1FB9B3 !important;
    color: white;
}
.states-input-custom label{
    cursor:pointer;
    width: 100%;
    padding: 2px 12px;
}
.form-check-input-address:checked + label{
     background-color: #1FB9B3 !important;
    color: white !important;

}
</style>