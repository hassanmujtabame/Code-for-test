<template>
 <div class="">
            <h1 class="home-section-title">اكتشفي دورات مجال {{ title }}</h1>
            <p class="home-section-text">ابرزي شغفك وطوري موهـبتك في مجال الأزياء، يمكنك التسجيل في أي دورة تريدينها بحد أقصى 4 دورات شهريا</p>
        </div>
</template>

<script>
export default {
  name:'section-header',
  props:{
    title:{},
    departmentId:{}
  }
}
</script>

<style>

</style>