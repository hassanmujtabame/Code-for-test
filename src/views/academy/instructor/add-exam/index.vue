<template>
    <div style="margin-top: 96px;">
       <AddExamBody @update="questions = $event" :courseId="$route.params.id" />
        <pre v-if="isDevelopment">
            {{ questions }}
        </pre>
    </div>
</template>

<script>
import AddExamBody from './body-exam.vue'
export default {
    name: 'add-exam-page',
    components:{
        AddExamBody
    },
    data:()=>{
        return {
            questions:[]
        }
    }
}
</script>

<style>

</style>