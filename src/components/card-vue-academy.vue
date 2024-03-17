<template>
  <div class="py-2">
    <div
      style="border-radius: 9999px; border: 2px solid #1fb9b3"
      class="box-our-field-marketing shadow"
    >
      <div class="box-our-field-marketing__wrapper">
        <div
          style="
            display: flex;
            color: var(--m-color);
            align-items: center;
            justify-content: center;
          "
        >
          <component :is="`${icon}-icon`" />
          <img class="box-image" v-if="false" :src="img" />
        </div>
        <p style="color: #1fb9b3" class="">{{ title }}</p>
      </div>
    </div>
  </div>
  <!-- <div class="py-2">
    <div
      style="border-radius: 9999px; border: 2px solid #1fb9b3"
      class="box-our-field-marketing shadow"
    >
      <div class="box-our-field-marketing__wrapper">
        <div
          style="
            display: flex;
            color: var(--m-color);
            align-items: center;
            justify-content: center;
          "
        >
          <component :is="`${icon}-icon`" />
          <img class="box-image" v-if="false" :src="img" />
        </div>
        <p style="color: #1fb9b3" class="">{{ title }}</p>
      </div>
    </div>
  </div> -->
  <!-- <div class="py-2">
    <div
      style="border-radius: 9999px; border: 2px solid #1fb9b3"
      class="box-our-field-marketing shadow"
    >
      <div class="box-our-field-marketing__wrapper">
        <div
          style="
            display: flex;
            color: var(--m-color);
            align-items: center;
            justify-content: center;
          "
        >
          <component :is="`${icon}-icon`" />
          <img class="box-image" v-if="false" :src="img" />
        </div>
        <p style="color: #1fb9b3" class="">{{ title }}</p>
      </div>
    </div>
  </div> -->
  <!-- <div class="py-2">
    <div
      style="border-radius: 9999px; border: 2px solid #1fb9b3"
      class="box-our-field-marketing shadow"
    >
      <div class="box-our-field-marketing__wrapper">
        <div
          style="
            display: flex;
            color: var(--m-color);
            align-items: center;
            justify-content: center;
          "
        >
          <component :is="`${icon}-icon`" />
          <img class="box-image" v-if="false" :src="img" />
        </div>
        <p style="color: #1fb9b3" class="">{{ title }}</p>
      </div>
    </div>
  </div> -->
  <!-- <div class="py-2">
    <div
      style="border-radius: 9999px; border: 2px solid #1fb9b3"
      class="box-our-field-marketing shadow"
    >
      <div class="box-our-field-marketing__wrapper">
        <div
          style="
            display: flex;
            color: var(--m-color);
            align-items: center;
            justify-content: center;
          "
        >
          <component :is="`${icon}-icon`" />
          <img class="box-image" v-if="false" :src="img" />
        </div>
        <p style="color: #1fb9b3" class="">{{ title }}</p>
      </div>
    </div>
  </div> -->
  <!-- <div class="py-2">
    <div
      style="border-radius: 9999px; border: 2px solid #1fb9b3"
      class="box-our-field-marketing shadow"
    >
      <div class="box-our-field-marketing__wrapper">
        <div
          style="
            display: flex;
            color: var(--m-color);
            align-items: center;
            justify-content: center;
          "
        >
          <component :is="`${icon}-icon`" />
          <img class="box-image" v-if="false" :src="img" />
        </div>
        <p style="color: #1fb9b3" class="">{{ title }}</p>
      </div>
    </div>
  </div> -->
</template>

<script>
import jewelryIcon from "@/components/icon-svg/jewelry-icon.vue";
import beautyIcon from "@/components/icon-svg/beauty-icon.vue";
import techinicIcon from "@/components/icon-svg/techinic-icon.vue";
import swimmingIcon from "@/components/icon-svg/swimming-icon.vue";
import ecommerceIcon from "@/components/icon-svg/ecommerce-icon.vue";
import fashionIcon from "@/components/icon-svg/fashion-icon.vue";
import flowersGiftsIcon from "@/components/icon-svg/flowers-gifts-icon.vue";

export default {
  name: "card-vue",
  components: {
    jewelryIcon,
    beautyIcon,
    techinicIcon,
    swimmingIcon,
    ecommerceIcon,
    fashionIcon,
    flowersGiftsIcon,
  },
  props: {
    img: {
      type: String,
    },
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.box-our-field-marketing {
  border-radius: 10px;
  /* border: 1px solid var(--m-color); */
  padding: 15px;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-image path {
  color: red;
}
</style>
