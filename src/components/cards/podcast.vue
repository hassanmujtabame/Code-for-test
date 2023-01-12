<template>
  <div class="box podcast-card ">
                        <div class="podcast-card-wrapper">
                            <div class="podcast-card-image position-relative">
                                <div class="podcast-card-play">
                                    <PlayIcon class="podcast__icon-play" />
                                </div>
                            <img  :src="image" :alt="name"  >
                        </div>
                        </div>
                        <div class="text-center bg-white box-deatils" :class="{'p-3':!description}">
                            <h6 class="network-podcast-name">{{name}}</h6>
                            <p v-if="description" class="network-podcast-description">{{description}}</p>

                        </div>

                    </div>
</template>

<script>
import PlayIcon from '@/components/icon-svg/play.vue'
export default {
 name:'card-podcast',
 components:{
    PlayIcon
 },
 props:{
    image:{
        type:String,
        default:'/assets/img/podcast.png',
    },
    name:{
        type:String,
        default:'رائدات الأعمال'
    },
    description:{
        type:String,
        default:'55 دقيقة'
    }
 }
}
</script>

<style scoped>
.box{
    width: 210px;
    height:260px;
    padding: 10px 15px;
    max-width: 210px;
    overflow: hidden;
    background: #000;
    border-radius: 8px;
}
.podcast-card-play{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.podcast__icon-play {
    border: 1px solid #c6c6c6ad;
    border-radius: 50%;
    cursor: pointer;
}
.box-deatils{
    padding-top: 5px;
    max-width: 100%;
    height: calc(260px - 180px);
    background-color: transparent !important;
    color:white;
}
.network-podcast-name,.network-podcast-description{
    font-size: 16px;
    font-weight: bold;
    color:white
}
.podcast-card-image{
    width: 100%;
    height: 180px;
    
}
.podcast-card-image>img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
</style>