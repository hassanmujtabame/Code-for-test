<template>
  <div style="width: 422px">
    <div :class="[title == 'خدمات عن بعد' ? 'bg-on-line' : 'bg-off-line']" class=""
      style="width: fit-content;  border-radius: 100%; padding: 12px; margin: auto;">
      <b-img :src="imageSrc" class="mr-3" />
    </div>
    <router-link :to="linkTo" class="text-decoration-none p-0" style="z-index: 3 !important;">

      <b-card no-body class="box bg-grey" style="z-index: -1; height: 260px; width: 422px">

        <div class="d-flexl align-items-center gap-3 px-3   text-center" style="padding-top: 10rem; padding-bottom: 5rem">

          <h3 class="my-3" style="color: rgba(0, 0, 0, 1);">{{ title }}</h3>
          <div class="mb-5" style="color:rgba(0, 0, 0, 0.53)">{{ content }}</div>
          <div class="text-center my-5" style="color: rgba(74, 125, 255, 1);">خدماتنا</div>
        </div>

      </b-card>
    </router-link>

  </div>
</template>
  
<script>
export default {
  name: "CardBox",

  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    linkTo: {
      type: Object,
      required: true
    }
  }
};
</script>
  
<style scoped>
.box .box-tow {
  display: flex;
  justify-content: center;
  align-content: center;
}

.box a {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: justify;
  text-transform: capitalize;
  color: #ffffff;
  padding: 5px;
}

@media (max-width: 991px) {
  .box {
    margin-top: 1.5rem;
  }

  img {
    width: 12%;
  }

  .box a {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: justify;
    text-transform: capitalize;
    color: #ffffff;
    padding: 5px;
  }
}

.bg-on-line {
  background: rgba(31, 185, 179, 1);
  transform: translateY(30px);
}

.bg-off-line {
  background: rgba(44, 152, 179, 1);
  padding: 15px !important;
  transform: translateY(30px);
}</style>
  