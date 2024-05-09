<template>
  <div class="card rounded-4" v-bind="$attrs">
    <div class="px-2 py-2" style="height: 185px">
      <img
        style="height: 185px; width: 100%; object-fit: cover"
        :src="item.image"
        class="rounded-4"
        :alt="item.name"
        @error="handleImageError"
      />
    </div>
    <div class="card-body">
      <div
        class="d-block column justify-content-center text-center align-items-center"
      >
        <div class="card-title mt-2">{{ item.name }}</div>
        <div class="card-field">
          {{ item.job_title ?? "مستشار" }}
        </div>
      </div>
      <!-- <p class="card-text consultant-bio text-two-lines">حاصل على درجة الدكتوراة في ادارة الاعمال كما حصت على شهادة الجامعة الامريكية في هذا المجال</p> -->
      <!-- <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <span class="consultant-price">(4125)</span
          ><d-rate-stars :size="16" :value="item.rate" />
        </div>
        <div>
          <span class="consultant-price">
            <d-empty-wallet-icon :size="16" /> {{ item.consultation_price }}
            {{ $t("riyals") }}
          </span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "consultant-card",
  props: {
    item: {},
  },
  methods: {
    handleImageError(event) {
      // Handle the image error by replacing the src attribute with the placeholder image URL
      event.target.src = "/assets/img/businesswoman.jpg"; // Replace with your placeholder image URL
    },
  },
};
</script>

<style scoped>
.card {
}
.card-img-top {
  height: 173px;
}
.card-title {
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  /* identical to box height, or 167% */

  text-transform: capitalize;

  color: #1b1d1f;
}
.consultant-bio {
  height: 32px;
}
.card-text {
  font-style: normal;
  font-weight: 400;
  font-size: 11.3px;
  line-height: 16px;
  /* or 142% */
  color: #737373;
}
.card-field {
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 17px;
  /* identical to box height, or 142% */
  color: #6d737a;
}
.consultant-price {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  /* identical to box height, or 106% */

  color: #979797;
}
</style>
