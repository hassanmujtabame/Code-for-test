<template>
  <div>
    <div
      class="d-flex flex-wrap justify-content-start align-items-center gap-2 py-4"
    >
      <div
        class="d-flex w-100 justify-content-between align-items-center gap-2"
      >
        <label class="py-2">{{ $t("operation-summary") }}</label>
        <button class="text-nowrap btn btn-default px-4">
          {{ $t("transfer-request") }}
          <i class="fa-solid fa-money-bill-transfer" style="color: #f55157"></i>
        </button>
      </div>
      <div
        class="d-flex w-100 justify-content-between align-items-center gap-4 pt-3"
      >
        <div class="operation-box flex-fill">
          <img class="operation-img" src="@/assets/img/Icon1.png" />
          <div class="flex-fill">
            <div class="operation-title">{{ $t("total-transfers") }}</div>
            <div class="operation-value">{{ totalTransfers }} ريال سعودي</div>
          </div>
        </div>
        <div class="operation-box flex-fill">
          <img class="operation-img" src="@/assets/img/Icon2.png" />
          <div class="flex-fill">
            <div class="operation-title">{{ $t("total-commissions") }}</div>
            <div class="operation-value">{{ totalCommissions }} ريال سعودي</div>
          </div>
        </div>
        <div class="operation-box flex-fill">
          <img class="operation-img" src="@/assets/img/Icon3.png" />
          <div class="flex-fill">
            <div class="operation-title">{{ $t("transfer-request") }}</div>
            <div class="operation-value">{{ transferRequest }} ريال سعودي</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "operation-summary",
  data() {
    return {
      totalTransfers: "-.--",
      totalCommissions: "-.--",
      transferRequest: "-.--",
    };
  },
};
</script>

<style scoped>
.btn-default {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  border: #c3d3e2 1px solid;
  color: #344054;
}
label {
  font-family: Cairo;
  font-size: 21px;
  font-weight: 600;
  line-height: 31.5px;
  color: #101828;
}
.operation-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #1fb9b3;
}
.operation-img {
  width: 40px;
  height: 40px;
}
.operation-title {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  color: #475467;
}
.operation-value {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #f2631c;
}
</style>
