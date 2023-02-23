<template>
<div class="academy-player-box">
    <video class="rounded-3 w-100 h-100"
                    :src="lectureSelected.video" 
                  ></video> 
</div>
</template>
<script>
export default {
    name:'lecture-display',
    props:['lectureSelected','itemPage']
}
</script>