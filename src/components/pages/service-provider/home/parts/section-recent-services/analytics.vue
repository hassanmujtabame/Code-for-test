<template>
  <div
    class="card-container d-flex flex-column gap-2"
    style="overflow-y: scroll"
  >
    <div
      v-for="(item, i) in analytics"
      :key="i"
      class="col-12 d-flex align-items-center gap-3"
    >
      <h4>
        {{ item.name }}
      </h4>
      <div
        style="color: black"
        :style="{ backgroundColor: getBackgroundColor(i) }"
        class="tag"
      >
        {{ item.count_service }}
      </div>
    </div>
  </div>
</template>

<script>
import serviceProviderApi from "@/services/api/service-provider/index";
export default {
  data: () => {
    return {
      analytics: [],
    };
  },
  methods: {
    async getAnalytics() {
      const { data } = await serviceProviderApi.getAnalytics();
      if (data.success) {
        this.analytics = data.data;
      }
    },
    getBackgroundColor(index) {
      // Define your logic to determine the background color based on the index
      // For example, you can use a list of predefined colors or generate colors dynamically
      // Here's a simple example using an array of colors:
      const colors = ["#FEA7D5", "#A7D5FE", "#FECBA7", "#A7FEA7", "#D5A7FE"];
      return colors[index % colors.length]; // Use modulo operator to cycle through colors
    },
  },
  mounted() {
    this.getAnalytics();
  },
};
</script>

<style scoped>
.tag {
  color: black;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 5px;
}

.card-container {
  width: 300px;
  height: 332px;
  padding: 10px;
}
</style>
