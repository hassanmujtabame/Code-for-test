<template>
  <div @mouseover="hover = true"
    @mouseleave="hover = false">
    <slot :hover="hover"></slot>
    </div>
</template>

<script>
export default {
 name:'d-hover',
 data:()=>({
    hover:false,
 })
}
</script>

<style>

</style>