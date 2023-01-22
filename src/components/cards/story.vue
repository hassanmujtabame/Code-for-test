<template>
    <div class="box border rounded-3">
        <div class="box-img">
            <img class="w-100 rounded-top" :src="image" :alt="name"
                height="260">
        </div>
        <div class="text-center p-2">
            <h5 style="height:48px">{{ title }}</h5>
            <div>
                <small class="m-c">{{ name??'N/A' }}
                </small>
                <span>
                    |
                </span>
                <small class="t-c">{{ description??'N/A' }}
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

<style scoped>
.box-img>img{
    min-height: 259px;
}
</style>