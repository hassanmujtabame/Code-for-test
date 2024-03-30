<template>
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-8 my-5">
        <div class="d-flex my-5 align-items-center gap-2">
          <img
            class="img-fluid"
            src="@/assets/img/New folder (2)/Rectangle 837.png"
            alt=""
          />
          <div class="d-flex flex-column gap-1">
            <h4>بطاقة فلاورد</h4>
            <router-link
              class="px-4 py-2 text-light rounded-3"
              style="background-color: #f2631c"
              :to="getRouteLocale('')"
            >
              صفح الشركة
            </router-link>
          </div>
        </div>
        <div class="border rounded-3">
          <div class="my-4 mx-4">
            <div class="d-flex flex-column gap-1">
              <label for="location">اختار منطقة المتجر</label>
              <d-select-input v-model="itemForm.country" :errors="errors">
                <option value=""></option>
                <option v-for="(cat, i) in countries" :key="i" :value="cat.id">
                  {{ cat.name }}
                </option>
              </d-select-input>
              <p class="mt-3" for="location">قيمه البطاقه</p>
              <div class="d-flex align-items-center gap-4">
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="50"
                  />
                  50 ريال
                </label>
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="100"
                  />
                  100 ريال
                </label>
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="200"
                  />
                  200 ريال
                </label>
                <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="300"
                  />
                  300 ريال
                </label>
                <!-- <label
                  style="border: 1.5px solid #1fb9b3"
                  class="px-4 rounded-3 py-2"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="itemForm.price"
                    value="option3"
                  />
                  500 ريال
                </label> -->
              </div>
            </div>
          </div>
          <!-- <d-select-input
                      v-model="itemForm.category_id"
                      :errors="errors"
                    >
                      <option value=""></option>
                      <option
                        v-for="(cat, i) in categories"
                        :key="i"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </option>
                    </d-select-input> -->
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import commonAPI from "@/services/api/common";

export default {
  name: "code-page",
  data() {
    return {
      countries: [],
      itemForm: {
        country: "",
        price: 0,
      },
    };
  },
  methods: {
    async loadCountries() {
      try {
        let { data } = await commonAPI.getCountries();
        if (data.success) {
          this.countries = data.data;
        }
      } catch (error) {
        console.log(error);
        //
      }
    },
  },
  mounted() {
    this.loadCountries();
  },
};
</script>

<style></style>
