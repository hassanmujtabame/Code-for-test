<template>
 <div class="podcast-item__progress-bar">
                            <div class="podcast-item__progress-bar_wrapper" :style="styleBar">
                                <div class="podcast-item__progress-bar_percent" :style="{width:`${progress}%`,...styleBar}">
                        
                                </div>
                                <div class="podcast-item__progress-bar_circle" :style="styleCircle">
                        
                                </div>
                                <audio ref="myaudio" style="display:none"  v-if="linkAudio"   :src="linkAudio"></audio>
                            </div>
</div> 
</template>

<script>
export default {
 props:{
    group:{
        type:String,
        default:'audio-tracker'
    },
    sizeCircle:{
        type:[Number,String],
        default:12
    },
    heightBar:{
        type:[Number,String],
        default:2
    },
    linkAudio:{
        type:[Number,String],
        default:2
    }
 },

 watch:{
    progress:{
        immediate:true,
        handler(){}
    },
    sizeCircle:{
        immediate:true,
        handler(){}
    },
    heightBar:{
        immediate:true,
        handler(){}
    }
 },
 data:()=>{
    return {
        progress:0,
        audioTag:null,
    }
 },
 computed:{
    disabled(){
        return !!this.linkAudio && this.audioTag
    },  
    styleBar(){
            return {
                'border-width':`${this.heightBar}px`
            }
    },
    styleCircle(){
        let sizeCircle = this.sizeCircle;
        return {
            width:`${sizeCircle}px`,
            height: `${sizeCircle}px`,
            top: `calc(50% - ${sizeCircle/2}px)`,
            left:this.$i18n.locale=='ar'?'auto':`calc(${this.progress}% - ${sizeCircle/2}px)`,
            right:this.$i18n.locale!=='ar'?'auto':`calc(${this.progress}% - ${sizeCircle/2}px)`
        }
    }
 },
 methods:{
    audioEvent(data){
        switch (data.action) {
           case 'play': this.audioTag.play(); break; 
           case 'pause': this.audioTag.pause(); break; 
          
            default:
                break;
        }
    },
    timeFormat(h,m,s){
        let formattedTime="";
        if(h)
        formattedTime +=h.toString().padStart(2, '0')+ ':'
        if(m)
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
    onplay(event) {
        console.log('onplay',event)
        this.$emit('play',true)
     },
     onended(event) {
        console.log('onended',event)
        this.$emit('ended',true)
     },
     onpause(event) {
        console.log('onpause',event)
        this.$emit('pause',true)
     },
     onloadeddata(event){
        console.log('loadeddata',event)
     },
     onloadedmetadata(event){
        console.log('onloadedmetadata',event)
        this.audioTag = event.target;
        let { h, m, s} = this.timeToParts(event.target.duration)
        var formattedTime =  this.timeFormat(h,m,s);
       
        let dataEvent = {
            time:formattedTime,
            time_str:this.timeHuman(h,m,s)
        }
        this.$emit('loaded',dataEvent)
                console.log('formattedTime',formattedTime)
        //console.log('currentTime', event.srcElement.currentTime)
        //console.log('duration',event.srcElement.duration)

     },
     onloadstart(event){
        console.log('onloadstart',event)
       // console.log('formattedTime', event.srcElement.currentTime, event.srcElement.duration)

     },
     onprogress(/*event*/){
        //console.log('onprogress',event)
     },
     ontimeupdate(event){
       // console.log('ontimeupdate',event)
        this.progress = event.target.currentTime*100/ event.target.duration
        let { h, m, s} = this.timeToParts(event.target.currentTime)
        var formattedTime =  this.timeFormat(h,m,s);
        this.$emit('timeupdate',{current:formattedTime})
     },
     onplaying(event){
        console.log('onplaying',event)
        this.$emit('playing',true)
     }
 },
 created(){
    window.EventBus.listen(this.group+'-audio-events',this.audioEvent)
  },
 beforeDestroy(){
    window.EventBus.off(this.group+'-audio-events',this.audioEvent)
    if(this.$refs['myaudio']){
        this.$refs.myaudio.removeEventListener('play',this.onplay);
        this.$refs.myaudio.removeEventListener('loadeddata',this.onloadeddata);
        this.$refs.myaudio.removeEventListener('loadedmetadata',this.onloadedmetadata);
        this.$refs.myaudio.removeEventListener('loadstart',this.onloadstart);
        this.$refs.myaudio.removeEventListener('progress',this.onprogress);
        this.$refs.myaudio.removeEventListener('playing',this.onplaying);
        this.$refs.myaudio.removeEventListener('pause',this.onpause);
        this.$refs.myaudio.removeEventListener('timeupdate',this.ontimeupdate);
        this.$refs.myaudio.removeEventListener('ended',this.onended);
    } 
 },
 mounted(){
    if(this.linkAudio)
    this.$nextTick(()=>{
        if(this.$refs['myaudio']){
            console.log('sd')
            this.$refs.myaudio.addEventListener('play',this.onplay);
            this.$refs.myaudio.addEventListener('loadeddata',this.onloadeddata);
            this.$refs.myaudio.addEventListener('loadedmetadata',this.onloadedmetadata);
            this.$refs.myaudio.addEventListener('loadstart',this.onloadstart);
            this.$refs.myaudio.addEventListener('progress',this.onprogress);
            this.$refs.myaudio.addEventListener('playing',this.onplaying);
            this.$refs.myaudio.addEventListener('pause',this.onpause);
            this.$refs.myaudio.addEventListener('timeupdate',this.ontimeupdate);
            this.$refs.myaudio.addEventListener('ended',this.onended);
            
        }
    })
 }
}
</script>

<style>
.podcast-item__progress-bar{
    width: 100%;
    position: relative;
}
.podcast-item__progress-bar_wrapper{
    border: 2px solid #FFFFFF;
    height: 0;
    width: 100%;
    border-radius: 2px;
}
.podcast-item__progress-bar_percent{
    border: 2px solid #1FB9B3;
    height: 0;
    position: absolute;
    z-index: 4;
    width: 50%;
    top: 0;
    right: 0;
    left: auto;
    border-radius: 2px;
}
.podcast-item__progress-bar_circle{
    background: var(--m-color);
    border-radius: 50%;
  
    position: absolute;
   
}
/**ltr style */
html[dir=ltr] .podcast-item__progress-bar_percent{
  
    right: auto;
    left: 0;
}
html[dir=ltr] .podcast-item__progress-bar_circle{
 
    right: auto;
    left: calc(50% + -9px);
}
</style>