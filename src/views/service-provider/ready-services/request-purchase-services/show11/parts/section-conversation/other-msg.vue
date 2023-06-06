<template>
    <div class="d-flex justify-content-end">
        <div class="">
            <p class=" p-2 border-0 rounded-2 text-dark chat-req text-start  p-0 m-0">
              {{item.content}}
            </p>
            <small class="t-c text-start ">
                {{timeAgo}}
            </small>
        </div>

    </div>
</template>

<script>
import mixins from './mixins-msg-text.vue'
export default {
    mixins:[mixins],
    name:'other-message',
}
</script>

<style>

</style>