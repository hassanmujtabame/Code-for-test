<template>
  <div class="box-img-gallery">

    <button @click="removeGallary" class="btn-close">
      <TrashOutlineIcon :size="24" />
    </button>

    <img class="w-100 h-100" :src='item.src' />
  </div>
</template>

<script>
import TrashOutlineIcon from '@/components/icon-svg/trash-outline.vue'
export default {
  props: ['item'],
  components: {
    TrashOutlineIcon
  },
  methods: {
    removeGallary() {

      this.$emit('remove', this.item.id)
    }
  }
}
</script>

<style scoped>
.box-img-gallery {
  padding: 5px;
  margin-right: 5px;
  margin-left: 5px;
  height: 100px;
  width: 100%;

  max-width: 100%;
  max-height: 100px;
  position: relative;
  border: 1px solid;
  display: inline-block;
}

.box-img-gallery .btn-close {
  position: absolute;
  background: #b41313f7;
  border: 0;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 4px;
}

html:not([lang=ar]) .box-img-gallery .btn-close {
  right: 4px;
  left: auto;
}
</style>