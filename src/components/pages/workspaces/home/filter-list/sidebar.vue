<template>
  <div class="box border p-3 rounded-3">
    <h4>
      {{ $t("filter") }}
    </h4>
    <d-expanded-panel class="accordion" id="accordionPanelsStayOpenExample">
      <d-expanded-panel-item :title="$t('classification')" closed>
        <div>
          <div v-for="(type, i) in types" :key="i" class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :value="type.id"
              v-model="filter.type"
              :selected="type.id === filter.type"
              name="stateRadioDefault"
              :id="`flexRadioDefault${i}`"
            />
            <label class="form-check-label" :for="`flexRadioDefault${i}`">
              {{ type.name }}
            </label>
          </div>
        </div>
      </d-expanded-panel-item>
      
      <d-expanded-panel-item :title="$t('the-address')" closed>
        <div v-for="(address, i) in addresses" :key="i" class="form-check">
          <input
            v-model="filter.address_id"
            :value="address.id"
            class="form-check-input my-1"
            type="checkbox"
            :id="`checkboxBtn${i}`"
          />
          <label class="form-check-label" :for="`checkboxBtn${i}`">
            {{ address.name }}
          </label>
        </div>
      </d-expanded-panel-item>

      <d-expanded-panel-item :title="$t('Price')" opened>
        <div class="slider-container">
          <rslider-input
            :min.sync="filter.min_price"
            :max.sync="filter.max_price"
            :lmin="0"
            :lmax="1000"
          />
        </div>
      </d-expanded-panel-item>
    </d-expanded-panel>
    <div class="mt-3 text-center">
      <button @click="updateFilter" class="btn-custmer">
        {{ $t("save") }}
      </button>
    </div>
  </div>
</template>

<script>
import exhibitionsAPIs from "@/services/api/exhibitions.js";

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
      filter: this.filterItem,
    };
  },

  methods: {
    updateFilter() {
      this.$emit("change", this.filter);
    },
    async getAddresses() {
      try {
        let { data } = await exhibitionsAPIs.getCategories();
        if (data.success) {
          this.addresses = data.data;
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getAddresses();
  },
};
</script>

