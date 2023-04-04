<template>
 <VDropdown
  :distance="6"
>
  <!-- This will be the popover reference (for the events and position) -->
  <slot ></slot>

  <!-- This will be the content of the popover -->
  <template #popper>
    <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
    <p>
      {{ msg }}
    </p>

    <!-- You can put other components too -->
    <ExampleComponent char="=" />
  </template>
</VDropdown>
</template>

<script>
export default {
 name:'d-mentionable'
}
</script>

<style>

</style>