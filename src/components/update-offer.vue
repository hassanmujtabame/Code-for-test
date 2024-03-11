<template>
  <div
    style="width: 100%; height: 100%"
    class="py-5 overflow-x-hidden overflow-x-none"
  >
    <button @click="handleToggle">x</button>
    <ValidationObserver
      tag="div"
      class="px-2 overflow-x-hidden overflow-x-none"
      style="overflow-y: auto"
      ref="form"
    >
      <!-- <div class="mx-auto">
        <loadImageInput v-model="itemForm.image" />
      </div> -->
      <!-- company name -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("company-name") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="name_company"
            :name="$t('company-name')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.name_company">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div>
      <!-- company type -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("company-type") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="type_company"
            :name="$t('company-type')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.type_company">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div>
      <!-- offer desc -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("details") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="description"
            :name="$t('details')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.description">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div>
      <!-- web site -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("website") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="website"
            :name="$t('website')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.website">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div>
      <!-- discount code -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("discount-code") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="code"
            :name="$t('discount-code')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.code">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div>
      <!-- offer during -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-during") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="during"
            :name="$t('offer-during')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.duration">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div>
      <!-- <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-during") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="during"
            :name="$t('offer-during')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.duration">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div> -->
      <!-- <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-during") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="during"
            :name="$t('offer-during')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.duration">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div> -->
      <!-- <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-during") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="during"
            :name="$t('offer-during')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.duration">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div> -->
      <!-- <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-during") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="during"
            :name="$t('offer-during')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.duration">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div> -->
      <!-- <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-during") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="during"
            :name="$t('offer-during')"
            v-slot="errors"
          >
            <d-text-input :errors="errors" v-model="itemForm.duration">
            </d-text-input>
          </ValidationProvider>
        </div>
      </div> -->
      <!-- offer department -->
      <div class="row mt-3">
        <div class="col-4 p-0 border">
          <div
            class="add-offer__field-name w-100 h-100 d-flex align-items-center px-2"
          >
            {{ $t("offer-department") }}
          </div>
        </div>
        <div class="col-8 p-0">
          <ValidationProvider
            vid="category_id"
            :name="$t('offer-department')"
            v-slot="errors"
          >
            <d-select-input :errors="errors" v-model="itemForm.category_id">
              <!-- <option :value="itemForm.category_id" selected>
                {{ itemForm.category.name }}
              </option> -->
              <option v-for="(dept, i) in categories" :key="i" :value="dept.id">
                {{ dept.name }}
              </option>
            </d-select-input>
          </ValidationProvider>
        </div>
      </div>
    </ValidationObserver>
    <div class="my-5 text-center">
      <button @click="save" :disabled="loading" class="btn btn-custmer">
        تعديل
      </button>
    </div>
  </div>
</template>

<script>
import networkAPI from "@/services/api/network.js";
import offersAPI from "@/services/api/offers";

export default {
  props: {
    // itemForm: {
    //   type: Object,
    // },
    id: {
      type: [String, Number],
    }, // specifying obj as an object type
  },
  data() {
    return {
      categories: [],
      loading: false,
      itemForm: {
        duration: "",
        code: "",
        category_id: "",
        website: "",
        description: "",
        type_company: "",
        name_company: "",
        image: "",
      },
    };
  },
  methods: {
    handleToggle() {
      this.$emit("close");
    },
    async save() {
      try {
        const dataToUpdate = {
          duration: this.itemForm.duration,
          code: this.itemForm.code,
          category_id: this.itemForm.category_id,
          website: this.itemForm.website,
          description: this.itemForm.description,
          type_company: this.itemForm.type_company,
          name_company: this.itemForm.name_company,
          image: this.itemForm.image,
        };
        const requestBody = {
          data: dataToUpdate,
          _method: "PUT",
        };

        return await Promise.all([
          offersAPI.editOffer(requestBody, this.id),
          this.fireEvent("d-filter-list-refresh"),
        ]);
      } catch (err) {
        console.log(err);
      }
    },
    async getItem() {
      try {
        let { data } = await offersAPI.getItem(this.id);
        let transformedData = {
          duration: data.data.duration || "",
          code: data.data.code || "",
          category_id: data.data.category_id || "",
          website: data.data.website || "",
          description: data.data.description || "",
          type_company: data.data.type_company || "",
          name_company: data.data.name_company || "",
          image: data.data.image || "",
          category: data.data.category,
        };
        this.itemForm = transformedData;
        console.log(`it worked`);
      } catch (err) {
        console.log(err);
      }
    },
    async loadCategories() {
      try {
        let { data } = await offersAPI.getCategories();
        if (data.success) {
          this.categories = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  mounted() {
    this.getItem();
    this.loadCategories();
  },
};
</script>

<style></style>
