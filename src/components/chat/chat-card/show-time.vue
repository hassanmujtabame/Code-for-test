<template>
  <time class="message-group-time"
  v-tooltip="`${dateLong}`"
  :datetime="dateTime"
  v-bind="$attrs"></time>
</template>

<script>
export default {
  props:{
    dateTime:{
        type:String,
    }
  },
  data:(vm)=>{
    var date = new Date(vm.dateTime);
let lang = vm.$i18n.locale=='ar'?'ar-EG-u-nu-latn':'en-US';
var dateString = new Intl.DateTimeFormat(lang, { dateStyle: 'full', timeStyle: 'long' }).format(date);//date.toLocaleDateString('ar-EG-u-nu-latn', options);
    return {
      dateLong:dateString,
      timer:null,
      showDate:'N/A'
    }
  },
  methods:{
    updateDate(){
      //console.mylog('updatedate',this.showDate,this.dateTime)
      this.showDate=this.timeAgoToHuman(this.dateTime)
    }
  },
  beforeDestroy(){
    window.timeAgo.cancel('chat',this.$el)
    
    //clearInterval(this.timer)
  },
  mounted(){
    window.timeAgo.render('chat',this.$el,1000*60)// update after each 60 seconds
    //this.timer = setInterval(this.updateDate, 1000);
  }
}
</script>

<style>
.message-time{
  color: #bfccdf!important;
    font-size: .665em;
    margin: 0;
}
</style>