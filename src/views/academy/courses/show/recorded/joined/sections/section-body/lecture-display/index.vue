<template>
  <div class="academy-player-box">
    <d-overlays-simple v-if="progressing" />
    <!-- <iframe ref="myVideoPreview" allowfullscreen class="bg-black rounded-3 w-100 h-100" :src="lectureSelected.video + '?title=0&&byline=0&&portrait=0'" id="course-video-preview" ></iframe> -->
    <vimeo-player
      :options="{
        title: 0,
        byline: 0,
        portrait: 0,
      }"
      ref="myVideoPreview"
      style="width: 100%; height: 100%"
      :video-id="getVimeoVideoId(lectureSelected.video)"
      class="bg-black rounded-3"
    >
    </vimeo-player>
  </div>
</template>
<script>
import academyAPI from "@/services/api/academy";
export default {
  name: "lecture-display",
  props: ["lectureSelected", "itemPage"],
  components: {},
  data: () => {
    return {
      videoTag: null,
      progressing: false,
      loadedVideo: false,
      currentTime: "00:00",
      play: false,
      play: false,
      pause: false,
      time_duration: "N/A",
      time_duration_str: "N/A",
      progress: 0,
    };
  },
  methods: {
    getVimeoVideoId(url) {
      // Match Vimeo video ID pattern in the URL
      const match = url.match(
        /(?:https?:\/\/)?(?:www\.)?(?:player\.)?vimeo\.com\/(?:video\/)?(\d+)(?:.*)?/
      );

      if (match && match[1]) {
        return match[1]; // Return the matched Vimeo video ID
      } else {
        // Handle cases where the URL doesn't match the expected format
        return null;
      }
    },
    doEvent(data) {
      this.fireEvent("video-tracker-video-events", data);
    },
    doPlay() {
      if (this.play) this.videoTag.pause();
      else this.videoTag.play();
    },
    onTimeupdate(evt) {
      this.progress = (evt.target.currentTime * 100) / evt.target.duration;
      let { h, m, s } = this.timeToParts(evt.target.currentTime);
      this.currentTime = this.timeFormat(h, m, s);
    },
    onWaiting() {
      /*Fires when the video stops because it needs to buffer the next frame */
    },
    async onEnded() {
      console.log("ended");
      // this.play = false;
      // this.pause = false;
      // this.play = false;
      if (this.userAcademyRole != "student") return;
      this.fireEvent("update-lectures", {
        item: { ...this.lectureSelected },
        type: "completed",
      });

      try {
        await academyAPI.lecturesAPI.postAsEnded(this.lectureSelected.id);
      } catch (error) {
        window.DHelper.catchException.call(this, error);
      }
    },
    onLoadstart() {
      // this.progressing = true;
      console.log("ssss");
    },
    onProgress() {},
    onPause() {
      this.play = false;
      this.pause = true;
    },
    onPlay() {
      this.play = true;
      this.pause = false;
    },
    onError(evt) {
      console.mylog("error video", evt);
      this.progressing = false;
    },
    onLoadeddata(evt) {
      if (evt) {
        this.loadedVideo = true;
      }
    },
    onLoadedmetadata(evt) {
      this.progressing = false;
      if (!evt) return;
      this.videoTag = evt.target;
      let { h, m, s } = this.timeToParts(evt.target.duration);
      var formattedTime = this.timeFormat(h, m, s);
      this.time_duration_str = this.timeHuman(h, m, s);
      this.time_duration = formattedTime;
    },
    videoListener(evt) {
      console.log("Event type:", evt.type);
      /** call function */
      let type = evt.type.charAt(0).toUpperCase() + evt.type.slice(1);
      let funcName = "on" + type;
      if (this[funcName] && typeof this[funcName] == "function") {
        this[funcName](evt);
      } else {
        console.mylog("not found function", funcName);
      }
      console.mylog("video listener", type, evt, evt.type, this);
    },
  },
  beforeDestroy() {
    if (this.$refs["myVideoPreview"]) {
      // this.$refs.myVideoPreview.$off('play', this.onPlay);
      // this.$refs.myVideoPreview.$off('loadeddata', this.onLoadeddata);
      // this.$refs.myVideoPreview.$off('loadedmetadata', this.onLoadedmetadata);
      // this.$refs.myVideoPreview.$off('loadstart', this.onLoadstart);
      // this.$refs.myVideoPreview.$off('progress', this.onProgress);
      // this.$refs.myVideoPreview.$off('pause', this.onPause);
      // this.$refs.myVideoPreview.$off('timeupdate', this.onTimeupdate);
      this.$refs.myVideoPreview.$off("ended", this.onEnded);
    }
  },
  mounted() {
    if (this.lectureSelected.video)
      this.$nextTick(() => {
        if (this.$refs["myVideoPreview"]) {
          console.log("set $on");

          // this.$refs.myVideoPreview.$on('play', this.onPlay);
          // this.$refs.myVideoPreview.$on('loadeddata', this.onLoadeddata);
          // this.$refs.myVideoPreview.$on('loadedmetadata', this.onLoadedmetadata);
          // this.$refs.myVideoPreview.$on('loadstart', this.onLoadstart);
          // this.$refs.myVideoPreview.$on('progress', this.onProgress);
          // this.$refs.myVideoPreview.$on('pause', this.onPause);
          // this.$refs.myVideoPreview.$on('timeupdate', this.onTimeupdate);
          this.$refs.myVideoPreview.$on("ended", this.onEnded);
        }
      });
  },
};
</script>
<style>
iframe {
  width: 100%;
  height: 100%;
}

.academy-player-box {
  position: relative;
}
</style>
