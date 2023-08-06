<template>
 <div class="mt-5">
            <h1 class="home-section-title">اكتشفي دورات مجال {{ title }}</h1>
            <p class="home-section-text my-5">ابرزي شغفك وطوري موهـبتك في مجال الأزياء، يمكنك التسجيل في أي دورة تريدينها بحد أقصى 4 دورات شهريا</p>
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