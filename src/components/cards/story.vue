<template>
    <div class="box border rounded-3">
        <div>
            <img class="w-100 rounded-top" :src="image" :alt="name"
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
    image:{
        type:String
    },
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