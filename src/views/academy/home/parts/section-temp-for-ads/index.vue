<template>
  <div class="container" style="background-color: #e8f8f7">
    <div class="row">
      <div class="side-content col-12 col-md-8 d-flex flex-column gap-2">
        <div class="side-title">يقدم لكم رياديات خصم 30% هذا الموسم</div>
        <p class="side-text">
          يسري العرض الترويجي من 1 مايو 2024 إلى 30 يونيو 2024
        </p>
        <button
          class="upgrade-button"
          @click="$router.push({ name: 'network-offers' })"
        >
          استكشف الأن
        </button>
      </div>
      <div class="col-12 d-none d-md-block col-md-4 position-relative p-0">
        <img
          class="img-fluid position-relative"
          :src="`${publicPath}assets/img/Frame_1171276680.png`"
          alt="hero img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-temp-for-ads",
};
</script>

<style scoped>
.side-content {
  padding-block: 50px;
  padding-inline: 100px;
}
.side-title {
  font-family: Cairo;
  font-size: 56px;
  font-weight: 700;
  line-height: 78.4px;
  color: #2cb7b3;
}
.side-text {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 400;
  line-height: 44.98px;
}
.container {
  background-image: url("/public/assets/img/Group_1171276438.png");
  background-size: 90% auto;
  background-repeat: no-repeat;
  background-position: center center;
}
.img-fluid {
  left: 0px;
  height: 100%;
  object-fit: cover;
}
.subscription-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f936;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  width: 30%;
}

@media screen and (max-width: 1200px) {
  .subscription-card {
    flex-direction: column;
    align-items: center;
  }

  .subscription-header {
    flex-direction: column;
    align-items: center !important;
  }

  .subscription-actions {
    align-self: center !important;
  }
}

.subscription-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.subscription-header {
  text-align: center;
  margin-bottom: 20px;
}

.subscription-title {
  font-size: 28px;
  color: #333;
  font-weight: 700;
  margin: 10px 0 10px 20px;
}

.subscription-price {
  font-size: 36px;
  display: flex;
  align-items: center;
}

.subscription-price span {
  color: #222222;
  margin-right: 5px;
}

.currency {
  font-size: 24px;
  color: #555;
  margin-left: 8px;
}

.subscription-features {
  margin-bottom: 10px;
  margin-right: 10px;
}

.features-title {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #555;
  font-size: 18px;
}

.feature-item i {
  color: #1fb9b3;
  margin-right: 10px;
}

.subscription-actions {
  align-self: end;
}

.subscribe-button,
.upgrade-button,
.subscribed-button {
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  width: 180px;
  transition: all 0.3s;
}

.subscribe-button {
  background: linear-gradient(to bottom, #1fb9b3, #13a89d);
  color: #fff;
  margin-bottom: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.subscribe-button:hover {
  background: linear-gradient(to bottom, #13a89d, #1fb9b3);
}

.upgrade-button {
  background: var(--pc);
  color: #fff;
  margin-bottom: 20px;
  width: max-content;
}

.upgrade-button:hover {
  opacity: 0.8;
}

.subscribed-button {
  background: #2eb9b3;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.subscribed-button:hover {
  opacity: 0.8;
}
</style>
