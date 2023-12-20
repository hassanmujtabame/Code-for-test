<template>
  <d-filter-list :call-list="loadList" hideSide hideOrder classColCard="col-12 col-md-4"
    classSearchOrder="col-12 col-md-4" classColSearch="col-12">
    <template v-slot:total="{ }">
      <button class="btn bg-main text-white" @click="addCourseFirst" role="button">
        <plusCircleOutline :size="24" color="currentColor" />
        أضافة دورة جديدة
      </button>
    </template>
    <template v-slot:head-end>
      <button class="more">المزيد</button>
    </template>
    <template v-slot="{ item }">
      <router-link class="router-link" :to="getRouteLocale('academy-course-show', { id: item.id })">
        <CourseCard :item="item" />
      </router-link>
    </template>
  </d-filter-list>
</template>

<script>
import plusCircleOutline from '@/components/icon-svg/plus-circle-outline.vue';
import CourseCard from './card'
import instructorAPI from '@/services/api/academy/instructor';
export default {
  name: 'filter-list',
  components: {
    plusCircleOutline,
    CourseCard
  },
  data: () => {
    return {
      loading: false,
      items: [
        {},
        {},
        {},
        {},
        {},
        {},
      ]
    }
  },
  methods: {
    async loadList(metaInfo) {
      this.loading = true;
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: this.isMobile ? 2 : 12
        }
        return await instructorAPI.getCourses(params)
      } catch (error) {
        //
      }
      this.loading = false
    },
    async addCourseFirst() {
      let {data} = await window.axios.get(`academy/instructor/meetings?page=1`);

      if (!this.user.statusInstructor) {
        window.errorMsg("لم يفعل حسابك بعد !");
      }
      else if(this.user.statusInstructor && data.data.length < 4){
        window.errorMsg(`يجب عليك رفع ${4 - data.data.length} من اللقاءات لكى تنشئ دوره`);
      } 
      else {
        this.fireOpenDialog('add-course-first')
      }
    }
  },
  mounted(){
    this.loadList()
  }
}
</script>

<style></style>