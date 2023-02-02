<template>
    <div class="box" :class="{'service-stopped':status=='stopped'}">
        <div style="height:164px">
            <img class="w-100" :src="image" alt="" height="164px">
        </div>
        <div class="p-3">
            <div class="d-flex align-items-center justify-content-between">
                <h6>{{ title }}</h6>
                <p class="m-c">
                    {{department}}
                </p>
            </div>
            <p class="text-four-lines" style="height:108px" v-html="description"></p>
        </div>
        <div v-if="status=='stopped'" class="box-stoped">
                            <p class="p-1 m-0">
                                خدمة معلقة
                            </p>
        </div>
    </div>
</template>

<script>
export default {
 name:'ready-service',
 props:{
    image:{
        type:String
    },
    title:{
        type:String,
    },
    department:{
        type:String,
    },
     description:{
        type:String,
    },
    status:{
        type:String,//actived | stopped
    }
 }
}
</script>

<style>

</style>