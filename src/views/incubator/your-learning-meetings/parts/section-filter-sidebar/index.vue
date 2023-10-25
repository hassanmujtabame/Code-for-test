<template>
  <div class="mt-5" style="width:30%;">
    <div>
      <b-button :class="visible_1 ? null : 'collapsed'" :aria-expanded="visible_1 ? 'true' : 'false'"
        aria-controls="collapse-1" @click="toggleCollapse('arrow-1','visible_1')" style="background:transparent; border: none;">
        <img width="20px" height="20px" id="arrow-1" src="@/assets/svg/up-arrow-svgrepo-com.svg"
        alt="">
        <span style="color:initial">
          تصنيف
        </span>
        </b-button>
      <b-collapse id="collapse-1" v-model="visible_1" class="mt-2">
        <b-card style="border:none;">

            <input type="radio" id="first_1" name="collabse-1" value="">
            <label for="first_1" class="me-2">مسجلة</label><br>
  
            <input type="radio" id="first_2" name="collabse-1" value="">
            <label for="first_2" class="me-2">لايف</label><br>
  
            <input type="radio" id="first_3" name="collabse-1" value="">
            <label for="first_3" class="me-2">في المقرات</label><br>

        </b-card>
      </b-collapse>
    </div>
    <div>
      <b-button :class="visible_2 ? null : 'collapsed'" :aria-expanded="visible_2 ? 'true' : 'false'"
        aria-controls="collapse-2" @click="toggleCollapse('arrow-2','visible_2')" style="background:transparent; border: none;">
        <img width="20px" height="20px" id="arrow-2" src="@/assets/svg/up-arrow-svgrepo-com.svg"
        alt="">
        <span style="color:initial">
          مجالات اللقاء
        </span>
        </b-button>
      <b-collapse id="collapse-2" v-model="visible_2" class="mt-2">
        <b-card style="border:none;">

          <input type="checkbox" id="second_1" name="" value="">
          <label for="second_1" class="me-2">تقنية</label><br>

          <input type="checkbox" id="second_2" name="" value="">
          <label for="second_2" class="me-2">ريادة اعمال</label><br>

          <input type="checkbox" id="second_3" name="" value="">
          <label for="second_3" class="me-2">طب </label><br>

          <input type="checkbox" id="second_4" name="" value="">
          <label for="second_4" class="me-2">تدريس</label><br>

          <input type="checkbox" id="second_5" name="" value="">
          <label for="second_5" class="me-2">تغذية</label><br>

          <input type="checkbox" id="second_6" name="" value="">
          <label for="second_6" class="me-2">هندسة </label><br>

          <input type="checkbox" id="second_7" name="" value="">
          <label for="second_7" class="me-2">منظم حفلات</label><br>

          <input type="checkbox" id="second_8" name="" value="">
          <label for="second_8" class="me-2"> </label>تصوير<br>

          <input type="checkbox" id="second_9" name="" value="">
          <label for="second_9" class="me-2">تصميم </label><br>

          <input type="checkbox" id="second_10" name="" value="">
          <label for="second_10" class="me-2">اعمال حرة</label><br>

          <input type="checkbox" id="second_11" name="" value="">
          <label for="second_11" class="me-2">اخر</label><br>
        </b-card>
      </b-collapse>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'filter-sidebar',
  data: (vm) => {
    return {
      visible_1: true,
      visible_2: true,

    }
  },
  methods: {
    toggleCollapse(arrowId, visible) {
      const arrow = document.getElementById(arrowId);

      arrow.classList.toggle('arrow');

      this[visible] = !this[visible]
      // el.firstChild.src = this.src_1

    }
  }

}
</script>

<style scoped>
.collapsed .arrow {
  transform: rotate(180deg);
}
input[type=radio], input[type=checkbox] {
  accent-color: #009688;
}
</style>