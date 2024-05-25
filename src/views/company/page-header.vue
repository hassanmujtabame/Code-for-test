<template>
  <div class="row">
    <div class="img-container col-md-4">
      <img class="img" :src="image" alt="logo " />
    </div>
    <div class="col-md-8">
      <h1 class="name">{{ companyName }}</h1>
      <div class="about-box">
        <p class="about-text">عن الشركة</p>
        <p class="description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "company-page-header",
  props: {
    companyData: {
      type: Object,
    },
  },
  computed: {
    image() {
      return this.companyData.image;
    },
    companyName() {
      return this.companyData.company_name;
    },
    description() {
      return this.companyData.description;
    },
  },
};
</script>

<style scoped>
.img-container {
  height: 300px;
  text-align: center;
}
.img {
  height: 100%;
  width: auto;
}
.name {
  font-family: Cairo;
  font-size: 32px;
  font-weight: 600;
  line-height: 59.97px;
  color: #414042;
}
.about-box {
  border-radius: 24px;
  background: #fafafa;
  padding: 24px;
}
.about-text {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 600;
  line-height: 37.48px;
  color: #cf1f3e;
}
.description {
  font-family: Cairo;
  font-size: 14px;
  font-weight: 400;
  line-height: 26.24px;
  color: #415c5e;
}
</style>
