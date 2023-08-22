<template>
  <b-card no-body class="box">
    <!-- <div class="d-flex align-items-center gap-3 px-3 text-center">
      <b-img fluid :src="imageSrc" class="mr-3" />
      <h3 class="m-c">{{ title }}</h3>
    </div>  -->
    <router-link :to="linkTo" class="text-decoration-none p-0">
    <div :class="[title =='خدمات تقدم أوفلاين'?'bg-grey':'bg-main']" class="d-flexl align-items-center gap-3 px-3  text-center" style="padding-top: 5rem; padding-bottom: 5rem">
      <b-img  :src="imageSrc" class="mr-3" />
      <h3 class="mt-3" :class="[title =='خدمات تقدم أوفلاين'?'m-c':'text-white']">{{ title }}</h3>
    </div> 
    </router-link>
    <!-- <div class="box-tow">
      <router-link :to="linkTo" class="text-decoration-none">{{ content }}</router-link>
    </div> -->
  </b-card>
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
</style>
  