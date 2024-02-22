<template>
  <div class="bg-grey w-100 py-2">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-md-6">
          <div v-if="!isMobile">
            <img
              v-if="false"
              class="img-fluid"
              :src="`${publicPath}assets/img/network 289320.png`"
              alt=""
              width="470"
            />
            <AnimateCard />
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column h-100 py-3">
            <h3>بطاقة العضوية</h3>
            <div class="flex-grow-1 mt-2">
              <p class="t-c">
                رياديات ليست مجرد منصة !! نهتم بكم و نقدم الهدايا والعروض
                المذهلة , ليست فقط العروض اكواد خصم على المواقع الالكترونية !
              </p>
              <p class="t-c">
                بل تمكنكي بطاقة العضوية من الحصول على الخصومات من المحلات
                والمتجار فقط ابرزي بطاقتك وأستفيدي من خصموماتك
              </p>
              <router-link
                style="background-color: #f2631c"
                :to="getRouteLocale('network-card-membership')"
                class="btn text-light px-5 py-2"
              >
                احصلي على بطاقة عضوية
              </router-link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimateCard from "@/components/cards/image-card-membership/index.vue";
export default {
  name: "section-membership",
  components: {
    AnimateCard,
  },
};
</script>

<style></style>
