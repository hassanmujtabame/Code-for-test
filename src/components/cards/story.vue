<template>
    <div class="box border rounded-3">
        <div>
            <img class="w-100 rounded-top" src="/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt=""
                height="192">
        </div>
        <div class="text-center p-2">
            <h5>{{ title }}</h5>
            <div>
                <small class="m-c">{{ name }}
                </small>
                <span>
                    |
                </span>
                <small class="t-c">{{ description }}
                </small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name:'story-card',
 props:{
    name:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    }
 }
}
</script>

<style>

</style>