<template>
   <div>

<p class="bg-main p-2 border-0 rounded-2 text-white chat p-0 m-0">
{{ item.content }}
</p>
<small class="t-c">
{{timeAgo}}

</small>
</div>
</template>

<script>
import mixins from './mixins-msg-text.vue'
export default {
    mixins:[mixins],
    name:'my-message',

}
</script>

<style>

</style>