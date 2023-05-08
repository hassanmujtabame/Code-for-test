<template>
    <div class="podcast-page__header">
        <div class="podcast-page__header__image" :class="{ 'rotateY-180': $i18n.locale !== 'ar' }"
            :style="{'background-image': 'url(/assets/img/podcast-bg-header.png)'}">
        </div>
        <div class="podcast-page__header__color">
        </div>
        <div class="podcast-page__header__wrapper">
            <div class="podcast-item">
                <div class="podcast-item__image">
                    <img :src="itemPage.image" class="w-100 h-100" />
                </div>
                <div class="podcast-item__content">
                    <h1 class="podcast-item__title">{{ itemPage.title }}</h1>
                    <div class="podcast-item__subtitle">
                        <span>{{ time_duration_str }}</span>
                        <span>{{ itemPage.created_at ?? 'N/A' }}</span>
                    </div>
                    <div class="podcast-item__player">
                        <div class="podcast-item__player-icon"  @click="doPlay">
                            <i  v-if="!play || pause" class="fa fa-play podcast-item__player-icon"></i> 
                            <i  v-if="playing" class="fa fa-pause podcast-item__player-icon"></i> 
                        </div>
                        <div class="podcast-item__player-progress">
                            <div class="podcast-item__player-progress-start-time">{{currentTime}}</div>
                            <div class="podcast-item__player-progress-bar">
                                <d-hover v-slot="{ hover }">
                                    <progressBar @loaded="loadedAudio" 
                                    @play="play = $event"
                                    @timeupdate="ontimeupdate"
                                    @pause="onpause"
                                    @ended="onended"
                                    @playing="onplaying"
                                    :link-audio="itemPage.audio" :sizeCircle="hover ? 18 : 12"
                                     :heightBar="hover ? 4 : 2">
                                    </progressBar>
                                </d-hover>
                            </div>
                            <div class="podcast-item__player-progress-end-time"> {{ time_duration }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import pauseIcon from '@/components/icon-svg/pause.vue';
import progressBar from './progress-bar.vue'
export default {
    name: 'section-header',
    props: ['itemPage'],
    components: {
        progressBar
    },
    data:()=>{
        return {
            currentTime:'00:00',
            play:false,
            playing:false,
            pause:false,
          time_duration:'N/A',
          time_duration_str:'N/A',
        }
    },
    methods:{
        doEvent(data){
            this.fireEvent('audio-tracker-audio-events',data)
        },
        doPlay(){
            if(this.playing)
            this.doEvent({action:'pause'});
           else
            this.doEvent({action:'play'});
            
        },
        ontimeupdate(data){
            this.currentTime = data.current
        },
        onended(){
            this.playing = false;
            this.pause = false;
            this.play = false;
        },
        onpause(){
            this.playing = false;
            this.pause = true;
        },
        onplaying(){
            this.playing = true;
            this.pause = false;
        },
        loadedAudio(data){
            this.time_duration_str = data.time_str
            this.time_duration = data.time
        }
    }
}
</script>

<style>
.podcast-page__header {
    height: 303px;
    position: relative;
    max-width: 100vw;
    overflow: hidden;
}

.podcast-page__header__color {
    width: 100%;
    height: 100%;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.8;
    z-index: -1;
    top: 0;
    position: absolute;
    left: 0;
}

html[rtl] .podcast-page__header__color {
    left: auto;
    right: 0
}

.podcast-page__header__image {
    width: 100%;
    height: 100%;
    /*filter: blur(2.71828px);*/
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -4;
    top: 0;
    position: absolute;
    left: 0;
}

html[dir=ltr] .podcast-page__header__image {
    left: auto;
    right: 0
}

.podcast-page__header__wrapper {
    width: 100%;
    height: 100%;
    padding: 61px 81px 61px 218px;
}

html[dir=ltr] .podcast-page__header__image {
    padding: 61px 218px 61px 81px;
}

.podcast-item {
    display: flex;
}

.podcast-item__image {
    flex-shrink: 0;
    flex-grow: 0;
    height: 180px;
    width: 180px;

}

.podcast-item__image>img {
    border-radius: 8px;
    background: #000000;
}

.podcast-item__content {
    margin-right: 24px;
    flex-grow: 1;
}

html[dir=ltr] .podcast-item__content {
    margin-left: 24px;
    margin-right: unset;
}

.podcast-item__title {
    font-size: 24px;
    color: #FFFFFF;

}

.podcast-item__subtitle {
    font-size: 16px;
    color: #FFFFFF;
}

.podcast-item__subtitle>span {
    padding: 2px;
}

.podcast-item__subtitle>span:not(:first-child):before {
    content: '.';
    width: 7px;
    margin: 0 7px;
    font-size: 14px;
}

.podcast-item__player {
    display: flex;
    margin-top: 10px;
}

.podcast-item__player-icon {
    flex-shrink: 0;
    flex-grow: 0;
    height: 52px;
    width: 52px;
}

.podcast-item__player-icon>svg {
    width: 100%;
    height: 100%
}

.podcast-item__player-progress {
    flex: 1;
    display: flex;
    align-items: center;
}

.podcast-item__player-progress-start-time,
.podcast-item__player-progress-end-time {
    flex-shrink: 0;
    flex-grow: 0;
    color: #FFFFFF;
    padding: 0 18px;
    font-size: 12px;
    min-width: 50px;
}

.podcast-item__player-progress-bar {
    flex: 1
}
.podcast-item__player-icon{
    color: white;
  background: var(--color-primary);
  height: max-content;
  border-radius: 53%;
  font-size: 27px;
  border: 1px solid var(--color-primary);
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>