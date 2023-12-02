<template>
  <div class="box border p-3 rounded-3 mb-5 mt-2">
    <!-- <h4>{{ $t('filter') }}</h4> -->
    <div class=" " id="accordionPanelsStayOpenExample">
      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >تصنيف الخدمات</button>
        </h2> 
        <div class="d-flex justify-content-between">
            <div>تصنيف الخدمات</div>
            <div> عدد خدماتك <span class="m-c">{{totalServices}} خدمة</span> </div>
            
          </div>

        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne">
          
          <div class="accordion-body">
            <div class=" d-flex rounded-3" style="width:fit-content; border: 1px solid #1FB9B3;">
              <div v-for="(state, i) in states" :key="i" class="form-check form-check-custom-states">
                <input class="form-check-input form-check-states" type="radio" :value="state.id" v-model="filter.state"
                  :selected="state.id === filter.state" name="stateRadioDefault" :id="state.id" @change="updateFilter" />
                <label style="color: #1FB9B3; cursor: pointer;" :id="state.id"
                  class="form-check-label t form-check-custom" :for="state.id">{{ state.name }}</label>
              </div>
            </div>
          </div>

        </div>
      </div> -->
      <div class="accordion-item show mt-3">
        <!-- <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseTwo"
          >مجالات الاختصاص</button>
        </h2> -->
        <!-- <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingTwo"
        > -->
        <div class="accordion-body show d-flex flex-wrap">
          <div v-for="(cat, i) in categories" :key="i" class="form-check mb-2" style="padding-left: 0.5em !important;">
            <input v-model="filter.category_id" :value="cat.id" class="form-check-input-custom" type="checkbox"
              :id="cat.name" @change="updateFilter" />
            <label class="form-check-label py-1 px-2" style="cursor: pointer;" :for="cat.name">{{ cat.name }}</label>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <!-- <div class="accordion-item show">
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
      </div> -->
    </div>
    <!-- <div class="mt-3 text-center">
      <button @click="updateFilter" class="btn-custmer">{{$t('save')}}</button>
    </div> -->
  </div>
</template>

<script>
import readyServiceAPIs from "@/services/api/service-provider/provider/ready-service";
export default {
  name: "sidebar-box",
  props: {
    filterItem: {
      type: [Object, Array], //defaults values
      require: true
    },
    // totalServices:{
    //   type:Number
    // }
  },
  data: vm => {
    return {
      states: [
        // { id: null, name: "الكل" },
        { id: "online", name: vm.$t("online-services") },
        { id: "offline", name: vm.$t("offline-services") },
        // { id: "service", name: vm.$t("ready-service") }
      ],
      categories: [],
      filter: vm.filterItem,
      totalServices: 0
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
      this.getTotalYourServices()
    },
    async getTotalYourServices() {
      try {
        let { data } = await readyServiceAPIs.getAll(this.filter);
        if (data.success) {
          this.totalServices = data.meta.total
        }
      } catch (error) {
        console.log("error", error);
        console.log("error response", error.response);
      }
    },
    async getCategories() {
      try {
        let { data } = await readyServiceAPIs.getCategories();
        if (data.success) {
          let categories = data.data;
          //categories.unshift({ id: null, name: 'الكل' })
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
    this.getTotalYourServices()
  }
};
</script>



<style>
.form-check-input-custom {
  display: none;
}

.form-check-input-custom:checked+label {
  background-color: #1FB9B3;
  border-radius: 5px;
  color: white;
}

.form-check-custom {
  /* border: 1px solid #1FB9B3; */
  /* border-radius: 8px; */
  padding: 3px 45px;

}

.form-check-custom-states {
  padding: 0 !important;
  margin: 0 !important;
}

.form-check-states:checked+label {
  background-color: #1FB9B3;
  border-radius: 5px;
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  color: white !important;
}

.form-check-states:checked+#offline {
  background-color: #1FB9B3;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  color: white !important;
}

.form-check-states {
  display: none;
}

#offline {
  border-right: 1px solid #1FB9B3;
}
</style>