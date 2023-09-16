<template>
  <div class="network-goal-item box border d-flex align-items-center rounded-2">
    <div class="network-goal-item__img">
      <img :src="src" class="img-fluid" alt="">
    </div>
    <div class="network-goal-item__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'network-goal-card',
  props: {
    src: {}
  }
}
</script>

<style scoped>
.network-goal-item {
  /*box-shadow: 0px 0px 6px 0.1px #1fb9b369;*/
  background: #FFFFFF;
  box-shadow: 0px 0px 16px 3px rgba(44, 183, 179, 0.2);
  border-radius: 8px;
}

.network-goal-item:hover {
  box-shadow: 0px 0px 10px 2px var(--m-color);
}

.network-goal-item__img {
  width: 82px;
  height: 88px;
  display: flex;
  align-items: center;
}

.network-goal-item__text {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  /* or 167% */
  text-align: center;
  text-transform: capitalize;
  color: #7C797E;
}
</style>