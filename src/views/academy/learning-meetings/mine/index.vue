<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden bg-body-page">

        <div class="container mt-5">
            <!-- filter list-->
            <SectionFilterList />

        </div>
        <SendToAllParticipants />
    </div>
</template>
<script>
import SectionFilterList from './parts/section-filter-list/index.vue'
import SendToAllParticipants from '../dialogs/message-participants/index'
export default {
name:'my-meetings',
components:{
    SectionFilterList,
    SendToAllParticipants
}
}
</script>

<style>
.star-cons-blog {
    position: absolute;
    right: 7.15%;
    left: 81.19%;
    top: 9.72%;
    bottom: 71.67%;
}
.star-cons-blog.stars {
    right: 30.56%;
    left: 60.06%;
    top: 14.17%;
    bottom: 80.28%;
}
.star-blog {
    right: 27.29%;
    left: 69.44%;
    top: 44.59%;
    bottom: 37.92%;
}
</style>