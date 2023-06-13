<template>
  <b-card no-body class="box">
    <div class="d-flex align-items-center gap-3 px-3 text-center">
      <b-img :src="imageSrc" class="mr-3" />
      <h3 class="m-c">{{ title }}</h3>
    </div>
    <div class="box-tow">
      <router-link :to="linkTo" class="text-decoration-none">{{ content }}</router-link>
    </div>
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
  padding: 20px 10px;
}

.box a {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: justify;
  text-transform: capitalize;
  color: #ffffff;
}
</style>
  