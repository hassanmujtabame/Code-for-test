<template>
  <div class="container">
    <div class="text-center">
      <h1 style="font-size: 40px; color: #2cb7b3">
        دورتنا في مجال {{ item.name }}
      </h1>
    </div>
    <div class="row">
      <Card v-for="(item, i) in items" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import CoursesAPI from "@/services/api/academy/courses.js";
import Card from "./blog-card.vue";

export default {
  name: "blog-academy",
  components: { Card },
  data() {
    return {
      items: [],
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    async getData() {
      try {
        let { data } = await CoursesAPI.getAll();
        if (data.success) {
          this.items = data.data;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
