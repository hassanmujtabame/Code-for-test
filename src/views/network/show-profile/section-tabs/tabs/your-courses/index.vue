<template>
  <EmptyCard
    mainText="لا يوجد أي درس"
    seconderyText="لم يضف هذا العضو أي درس حتى الأن"
    v-if="isEmptyObject"
  />
  <div v-else class="container" style="min-height: 200px">
    <div class="show-profile-grid-container">
      <div v-for="(item, i) in courses" :key="i" class="grid-item">
        <CardItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import instructorAPI from "@/services/api/academy/instructor";
import CardItem from "../components/course-card";
import EmptyCard from "../components/empty-card.vue";
import { isEmptyObject } from "jquery";

export default {
  name: "d-tab-pane-your-course",
  components: {
    CardItem,
    EmptyCard,
  },
  data: () => ({
    loading: false,
    isEmptyObject: true,
    courses: [],
  }),

  methods: {
    async initializing(metaInfo) {
      this.loading = true;
      try {
        const response = await instructorAPI.getCourses(metaInfo);

        this.courses = response.data.data.slice(0, 8);
        if (this.courses.length > 0) {
          this.isEmptyObject = false;
        }
      } catch (error) {}
      this.loading = false;
    },
  },
  mounted() {
    this.initializing();
  },
};
</script>
<!-- {
  course object 
  {
    "id": 302,
    "title": "معسكر التجميل",
    "type": "on-site",
    "place_map": "https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%B1%D9%8A%D8%A7%D8%AF%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AD%D8%AF%D9%88%D8%AF%D8%A9%E2%80%AD/@24.7605706,46.7157664,15z/data=!4m6!3m5!1s0x3e2efdb4a5756abf:0x2f5774a23cbe4344!8m2!3d24.7605706!4d46.7157664!16s%2Fg%2F11h1m7_3v8?entry=ttu",
    "desc": "برنامج متكامل يقدم من قبل خبراء ريادة الأعمال وخبراء التجميل من خلال مجموعة من الخدمات الإرشادية والتعليمية تقدم من قبل فريق مؤهل مهنيًا في مجال ريادة الأعمال والتجميل؛ وذلك لدعم وتوجيه رائدات الأعمال والشغوفات في مجال التجميل بآلية متكاملة وبرامج تدريبية مكثفة وعقد جلسات إلهامية وإرشادية جماعية وجلسات استشارية، ليساهم  في الانطلاق نحو عالم ريادة الأعمال وتأسيس مشاريع في مجال التجميل.",
    "image_path": "http://back-end-new.test/uploads/academy/courses/9cIxUVaAONtMEB08cSYKnPTNOQrlBJB354XHxIOc.png",
    "type_training": "prive",
    "price": 2500,
    "short_description": "",
    "place_id": null,
    "place_name": null,
    "learn": [strings.............],
    "start_time": "17:00",
    "end_time": "21:00",
    "user_info": {
        "id": 98,
        "name": "أكاديمية رياديات",
        "image": "http://back-end-new.test/uploads/users/uYVnBzRsFGYyaTXEoBRbMNLwswPieCZvQGpghVxw.png",
        "description": null,
        "graduate": null,
        "note": null,
        "job_title": null
    },
    "attachments": [],
    "rates": [],
    "department_name": "أكاديمية التجميل",
    "department_id": 60,
    "status": "published",
    "views": 131,
    "start_date": "2024-05-11",
    "course_days": [
        "sunday",
        "tuesday",
    ],
    "number_day_course": "7",
    "map_address": {
        "lat": 24.782369593602784,
        "lng": 46.74201922753906,
        "address_name": "RFDA6696، 6696 علي المروزي، 3986، حي الشهداء، الرياض 13241، السعودية"
    }
}
==================================================================
    metaInfo object
    "current_page": 1,
    "total": 10,
    "last_page": 0,
    "paginate": 2,
    "to": 2,
    "total_page": 5
} -->
<style></style>
