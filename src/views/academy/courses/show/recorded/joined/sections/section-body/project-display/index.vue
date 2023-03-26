<template>
  <div>
   
    <studentShowVue 
    :itemPage="itemPage"
    :lectureSelected="lectureSelected"  
        />
  </div>
</template>

<script>
import instructorShowVue from './instructor-show.vue'
import studentShowVue from './student-show.vue'

export default {
 name:'project-display',
 props:['lectureSelected','itemPage'],
 components:{
    instructorShowVue,
    studentShowVue
 }
}
</script>

