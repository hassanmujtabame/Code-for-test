<template>
    <div class="box border p-3 rounded-2 mt-5">
        <h2 class="border-bottom p-2">
            متطلبات الوظيفة
        </h2>
        <p class="p-3" v-html="itemPage.desc">
            </p>
    </div>
</template>

<script>
export default {
    name: 'section-requirement',
    props:['itemPage']
}
</script>

<style>

</style>