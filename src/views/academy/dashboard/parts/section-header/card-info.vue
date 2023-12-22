<template>
    <div class="box border rounded-2 align-items-center  p-5 row">
        <div class="col-md-5">
            <img class="rounded-circle" :src="member.image" :alt="member.name" width="150" height="150">
        </div>
        <div class="col-md-6  ">

            <h5 class="m-c">
                {{ member.name }}
            </h5>
            <p>
                {{ member.job }}
            </p>
            <button @click="$router.push(link ?? getRouteLocale('academy-my-profile'))"
                class="border px-3 py-2 rounded-2 bg-transparent btn-custmer-w" style="padding:10px 15px !important">
                صفحتك الشخصية
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        member: {
            type: [Object, Array],
            require: true
        },
        link: {
            type: String,
            default: null
        }
    }
}
</script>

<style></style>