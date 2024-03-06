<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12">
        <div style="width: fit-content" class="d-flex align-items-center gap-1">
          <h1 style="font-size: 48px">بطاقة</h1>
          <h1 style="font-size: 48px" class="position-relative">
            رياديات
            <img
              style="height: 17px; width: 147px; right: 0px; bottom: -16px"
              class="position-absolute"
              src="../../assets/img/network/Vector 14.png"
              alt=""
            />
          </h1>
        </div>
        <p>
          عروض و خصومات هائلة ومذهلة سواء من اكواد الخصم للمواقع الالكترونية او
          من خلال بطاقة عضوية رياديات في زيارتك لآحدى المتاجر المعروضة على منصة
          رياديات
        </p>
      </div>
      <img
        class="col-md-6 col-12"
        src="../../assets/img/network/DESIGN 5.png"
        alt=""
      />
    </div>
    <CardList />
  </div>
</template>

<script>
import CardList from "../../components/card-list.vue";
export default {
  components: { CardList },
};
</script>

<style></style>
