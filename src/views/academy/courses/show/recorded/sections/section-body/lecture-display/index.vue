<template>
<div class="academy-player-box">
    <d-overlays-simple v-if="progressing" />
    <video ref="myVideoPreview" id="course-video-preview" class="rounded-3 w-100 h-100"
                    :src="lectureSelected.video"
                    controls 
                  ></video> 
</div>
</template>
<script>
import academyAPI from '@/services/api/academy';
export default {
    name:'lecture-display',
    props:['lectureSelected','itemPage'],
    components:{},
    data:()=>{
        return {
            videoTag:null,
            progressing:false,
            loadedVideo:false,
            currentTime:'00:00',
            play:false,
            playing:false,
            pause:false,
            time_duration:'N/A',
            time_duration_str:'N/A',
            progress:0,
        }
    },
    methods:{
        doEvent(data){
            this.fireEvent('video-tracker-video-events',data)
        },
        doPlay(){
            if(this.playing)
            this.videoTag.pause();
           else
           this.videoTag.play();
            
        },
        timeFormat(h,m,s){
        let formattedTime="";
        if(h)
        formattedTime +=h.toString().padStart(2, '0')+ ':'
        //if(m)
        formattedTime += m.toString().padStart(2, '0')+ ':'
        formattedTime += s.toString().padStart(2, '0');
        return formattedTime
    },
    timeToParts(duration){
        var h = Math.floor(duration/ (60*60));
            var m =  Math.floor(duration / 60);
            var s =  Math.floor(duration% 60);
            return {h,m,s}
    },
    timeHuman(h,m,s){
        let str="";
        if(h){
            str+=`${h} ${this.$t('hour_s')}`
            if(m) str+=`${this.$t('and')}`
        } 
        if(m){
            str+=`${m} ${this.$t('minute_s')}`
            if(s) str+=`${this.$t('and')}`
        } 
        if(s) str+=`${s} ${this.$t('second_s')}`
        return str;
    },
        onTimeupdate(evt){
            this.progress = evt.target.currentTime*100/ evt.target.duration
            let { h, m, s} = this.timeToParts(evt.target.currentTime)
            this.currentTime =  this.timeFormat(h,m,s);
        },
        onWaiting(){
            /*Fires when the video stops because it needs to buffer the next frame */
        },
      async  onEnded(){
            this.playing = false;
            this.pause = false;
            this.play = false;
            if(this.userAcademyRole !== 'student' || ! this.loadedVideo) return;
            this.fireEvent('update-lectures',{item:{...this.lectureSelected},type:'completed'
        })

            try {
                await academyAPI.lecturesAPI.postAsEnded(this.lectureSelected.id)

            } catch (error) {
                window.DHelper.catchException.call(this,error)
            }
        },
        onLoadstart(){
            this.progressing = true;
        },
        onProgress(){},
        onPause(){
            this.playing = false;
            this.pause = true;
        },
        onPlaying(){
            this.playing = true;
            this.pause = false;
        },
        onError(evt){
            console.mylog('error video',evt)
            this.progressing = false;
        },
        onLoadeddata(evt){
            if(evt){
                this.loadedVideo = true;
            }
        },
        onLoadedmetadata(evt){
            
            this.progressing = false;
            if(!evt) return;
            this.videoTag = evt.target;
            let { h, m, s} = this.timeToParts(evt.target.duration)
            var formattedTime =  this.timeFormat(h,m,s);
            this.time_duration_str = this.timeHuman(h,m,s)
            this.time_duration = formattedTime
            
        },
        videoListener(evt){
            /** call function */
           let type = evt.type.charAt(0).toUpperCase() + evt.type.slice(1);
           let funcName = 'on'+type; 
           if(this[funcName] && typeof this[funcName] == "function"){
            this[funcName](evt)
           }else{
            console.mylog('not found function',funcName)
           }
           console.mylog('video listener',type,evt,evt.type,this)
        }
    },
    beforeDestroy(){
    if(this.$refs['myVideoPreview']){
        this.$refs.myVideoPreview.removeEventListener('play',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('loadeddata',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('loadedmetadata',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('loadstart',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('progress',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('playing',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('pause',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('timeupdate',this.videoListener);
        this.$refs.myVideoPreview.removeEventListener('ended',this.videoListener);
    } 
 },
 mounted(){
    if(this.lectureSelected.video)
    this.$nextTick(()=>{
        if(this.$refs['myVideoPreview']){
            this.$refs.myVideoPreview.addEventListener('play',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('loadeddata',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('loadedmetadata',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('loadstart',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('progress',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('playing',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('pause',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('timeupdate',this.videoListener);
            this.$refs.myVideoPreview.addEventListener('ended',this.videoListener);
            
        }
    })
 }
}
</script>
<style scoped>
.academy-player-box{
    position: relative;
}
</style>