<template>
  <div class="main-top py-5 position-relative">
        <h1 class="text-white px-5 fs-1 position-relative z-index-1"> {{ $t('consulting-fields') }} </h1>
       
        <div class="position-absolute top-0 h-100" :class="{'rotateY-180':$i18n.locale!='ar','right-0':$i18n.locale!='ar','left-0':$i18n.locale=='ar'}">
          <img src="/assets/img/anim-hwo-ar-you.png" class="h-100" alt="" />
        </div>
      </div>
</template>

<script>
export default {
 name:'section-top'
}
</script>