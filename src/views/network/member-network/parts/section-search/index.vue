<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="section-members-search container mx-auto row">
      <div class="dropdown-form col-md-5 col-12">
        <div class="dropdown-field category-dropdown">
          <b-dropdown
            variant="outline-secondary"
            split-variant="outline-secondary"
            id="categories"
            class="dropdown-btn"
            right
            text="اختر"
            style="text-align: right"
          >
          </b-dropdown>
          <label for="categories" class="position-absolute dropdown-label"
            >تصنيف العضو</label
          >
        </div>

        <div class="dropdown-field area-dropdown">
          <b-dropdown
            variant="outline-secondary"
            split-variant="outline-secondary"
            id="categories"
            class="dropdown-btn"
            right
            text="اختر"
            style="text-align: right"
          >
          </b-dropdown>
          <label for="categories" class="position-absolute dropdown-label">
            المنطقة</label
          >
        </div>

        <div class="dropdown-field specialty-dropdown">
          <b-dropdown
            variant="outline-secondary"
            split-variant="outline-secondary"
            id="categories"
            class="dropdown-btn"
            right
            text="اختر"
            style="text-align: right"
          >
          </b-dropdown>
          <label for="categories" class="position-absolute dropdown-label"
            >مجالات الاختصاص</label
          >
        </div>
      </div>
      <div class="search-form col-md-6 col-12">
        <b-form-input
          type="text"
          v-model="searchInput"
          class="search-field rounded-3"
          placeholder="ابحث..."
        />
        <div class="search-icon rounded-3" @click="search">
          <!-- <div class="search-img"></div>-->
          <i
            class="fa-solid fa-magnifying-glass"
            style="color: #fff; font-size: 24px"
          ></i>
        </div>
        <span
          @click="search"
          class="search-button input-group-text py-2 mx-2 rounded-3 text-light"
          :class="{ 'fs-6': isMobile }"
          >بحث</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-search",
  methods: {
    search() {},
  },
};
</script>

<style scoped>
.search-field {
  padding-right: 58px;
  width: 60%;
}
.search-button {
  cursor: pointer;
  background-color: #1fb9b3;
  width: 40%;
  display: flex;
  justify-content: center;
}

.section-members-search {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.search-form {
  position: relative;
  margin: 0px 0px;
  width: 45%;
  height: 54px;
  display: flex;
}
.search-icon {
  position: absolute;
  top: 0px;
  right: 10px;
  height: 46px;
  width: 46px;
  margin: 4px 6px;
  padding: 10px;
  cursor: pointer;
  background-color: #1fb9b3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-form {
  width: 35%;
  height: 63px;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .dropdown-form {
    width: 100%;
  }
  .search-form {
    margin-top: 20px;
    width: 100%;
  }
}
.dropdown-field {
  position: relative;
  height: 100%;
}
.dropdown-label {
  position: absolute;
  top: -10px;
  right: 10px;
  z-index: 3;
  font-size: 12px;
  color: #979797;
  background-color: #fff;
  padding: 0 5px;
}
.dropdown-btn {
  height: 100%;
  width: 100%;
  color: #1fb9b3 !important;
  outline-color: #979797 !important;
  text-align: right !important;
}
.category-dropdown {
  width: 28%;
}
.area-dropdown {
  width: 33%;
}
.specialty-dropdown {
  width: 33%;
}
.dropdown-btn :hover {
  color: #1fb9b3;
  background-image: none;
  background-color: white;
}
.dropdown-btn ::after {
  position: absolute;
  right: 15px;
  top: 28px;
}
</style>
