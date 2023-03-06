<template>
  <div class="form-group inline d-audio-input">
    <audio ref="audioInput" class="audio-input-hidden" >
    </audio>
    <audio ref="audioInput2" class="audio-input-hidden" >
        </audio>
    <div class="d-flex p-2 w-100">
        <div class="flex-shrink-0 mx-2" >
            <i @click="recordAudio" class="fa fa-microphone" :class="{recording:recording,'clickable':!recording}"></i>
        </div>
        <div v-if="value_ || media" class="flex-grow-1">
            <av-media 
            type="frequ" 
            :media="media" 
            line-color="darkorange"
            v-if="media && recording"
        ></av-media>
        <av-waveform
        class="w-100"
            v-else-if="audioLoaded"
            :canv-width="200" 
            :canv-height="20"
            canv-class="cn-audio"
            audio-class="audio-input-hidden"
            audio-sink-device-id="sdsfsdfsd"
            ref-link="audioInput"
            :playtime="false"
        ></av-waveform>
        </div>
        <label v-else class="form-label flex-grow-1">{{ label }}</label>
        <div v-if="recording" class="flex-shrink-0 mx-2" >
            <i @click="stop" class="far fa-circle-stop" :class="{recording:recording,'clickable':recording}"></i>
        </div>
        <div v-else-if="value_"  class="flex-shrink-0 mx-2"> 
            <i @click="playAudio" style="color:green" class="far  clickable" :class="{'fa-circle-play':!playing,'fa-circle-pause':playing}" ></i>
            <i @click="deleteAudio"  class="fa fa-trash clickable mx-1" ></i>

        </div>
    </div>
  </div>
</template>

<script>
export default {
 name:'d-audio-input',
 props:{
    label:{},
    errors:{
        type:[Array,Object],
    }
 },
 model: {
      prop: 'value',
      event: 'updateValue'
  }, data: () => {
        return {
            recording:false,
            playing:false,
           focused:false,
           recorder: null,
      chunks: [],
      device: null,
      blobObj: null,
      value_:null,
      media:null,
      audioLoaded:false,
      audioNode:null,
      progress:0,
      currentTime:'N/A'
        }
    },
    watch: {
        value_(){
            this.inputEvent()
        },
      errors:{
        immediate:true,
        deep:true,
        handler(){}
      } 
    },
    methods:{
        outSide(vn){
            let att=vn.target.attributes[0];
            this.focused=(this.$el.attributes[0]==att)
        },
        inputEvent(){
            this.$emit('updateValue',this.value_)
        },
        playAudio(){
            if(this.playing){
                this.audioNode.pause();
            }
            else{
                this.audioNode.play()
            }
            
        },
        deleteAudio(){
            this.clearAudio()
        },
        onPause(){
            this.playing = false;
        },
        onPlaying(){
            this.playing = true;
        },
        onEnded(){
            this.playing = false;
        },
        onTimeupdate(evt){
            this.progress = evt.target.currentTime*100/ evt.target.duration
            let { h, m, s} = this.timeToParts(evt.target.currentTime)
            this.currentTime =  this.timeFormat(h,m,s);
        },
        onLoadedmetadata(){
        //console.mylog('onLoadedmetadata',event)
        this.audioLoaded = true;
        },
        recordAudio() {
            if(this.recording) return;
            this.recording = true;
            
      this.device.then((stream) => {
        this.media = stream
        this.recorder = new MediaRecorder(stream);
        
        this.recorder.ondataavailable = (e) => {
          this.chunks.push(e.data);
          if (this.recorder.state === "inactive") {
            let blob = new Blob(this.chunks, { type: "audio/wav" });
            // save to blobObj
            this.blobObj = blob;
            this.chunks = [];
            // emit to parent
            this.value_ = this.blobObj;
            const reader = new FileReader();
            reader.onload = (e) =>{
                const srcUrl = e.target.result;
                this.$refs.audioInput.src = srcUrl;
            };
            reader.readAsDataURL(this.value_);
            this.blobObj = null;
            this.media = null
          }
        };
        // start
        this.recorder.start();
        this.clearAudio()
        
      });
    },
    clearAudio(){
        if(this.audioNode){
            try {
                this.audioNode.pause();
            } catch (error) {
                //
            }
        } 
        this.value_=null;
        this.playing = false;
        this.audioLoaded = false; 
    },
    stop() {
        if(!this.recording) return;
      this.recorder.stop();
      this.recording = false;
    },
    audioListener(evt){
            /** call function */
           let type = evt.type.charAt(0).toUpperCase() + evt.type.slice(1);
           let funcName = 'on'+type; 
           if(this[funcName] && typeof this[funcName] == "function"){
            this[funcName](evt)
           }else{
            //console.mylog('not found function',funcName)
           }
           //console.mylog('audio listener',type,evt,evt.type,this)
        }
    },
    created() {
    this.device = navigator.mediaDevices.getUserMedia({ audio: true });
  },
    beforeDestroy(){
    if(this.$refs['audioInput']){
        this.$refs.audioInput.removeEventListener('play',this.audioListener);
        this.$refs.audioInput.removeEventListener('loadeddata',this.audioListener);
        this.$refs.audioInput.removeEventListener('loadedmetadata',this.audioListener);
        this.$refs.audioInput.removeEventListener('loadstart',this.audioListener);
        this.$refs.audioInput.removeEventListener('progress',this.audioListener);
        this.$refs.audioInput.removeEventListener('playing',this.audioListener);
        this.$refs.audioInput.removeEventListener('pause',this.audioListener);
        this.$refs.audioInput.removeEventListener('timeupdate',this.audioListener);
        this.$refs.audioInput.removeEventListener('ended',this.audioListener);
    } 
 },
    mounted(){
        this.$nextTick(()=>{
            this.audioNode = this.$refs.audioInput;
        if(this.$refs['audioInput']){
            this.$refs.audioInput.addEventListener('play',this.audioListener);
            this.$refs.audioInput.addEventListener('loadeddata',this.audioListener);
            this.$refs.audioInput.addEventListener('loadedmetadata',this.audioListener);
            this.$refs.audioInput.addEventListener('loadstart',this.audioListener);
            this.$refs.audioInput.addEventListener('progress',this.audioListener);
            this.$refs.audioInput.addEventListener('playing',this.audioListener);
            this.$refs.audioInput.addEventListener('pause',this.audioListener);
            this.$refs.audioInput.addEventListener('timeupdate',this.audioListener);
            this.$refs.audioInput.addEventListener('ended',this.audioListener);
            
        }
    })
    }
}
</script>

<style scoped>

.form-group {
    background: #FFFFFF;
    border: 0.5px solid #D1D1D1;
    border-radius: 4px;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.audio-input-hidden{
    position: absolute;
    visibility: hidden; 
}
.form-group.inline{
    flex-direction: row; 
}
.form-label{
    margin-bottom: 0;
    flex-shrink: 0;
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
/* identical to box height, or 142% */
display: flex;
align-items: center;
color: #979797;
}
.focused{
    box-shadow: 0 0 0 0.1rem #1fb9b359;
    border-color: #1fb9b359;
}
.form-group[disabled] {
    background: #f7f7f7a1;
}
.recording{
    animation-name: recording;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}

</style>
<style>
.cn-audio{
    width: 100% !important;
}
</style>
