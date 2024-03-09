<template>
  <div class="card">
    <div class="image-container">
      <img :src="img" :alt="title" class="card-image" />
    </div>
    <div class="text border">
      <div class="hr"></div>
      <h6 class="title">{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-vue",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 260px; /* fixed width */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 10px; /* space between cards */
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}

.image-container {
  width: 100%;
  height: 192px; /* fixed height */
  overflow: hidden;
  position: relative;
}
.hr {
  border-bottom: 1px solid #eee;
  margin-top: 15px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* this will ensure the image covers the container without distortion */
  display: block;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 15px 15px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
  flex: 1; /* this ensures the text container takes up the remaining space, making it consistent across cards */
}
</style>
