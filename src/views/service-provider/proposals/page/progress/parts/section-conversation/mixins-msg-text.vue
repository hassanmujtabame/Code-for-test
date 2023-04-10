<script>
export default {
   props:['item'],
    data:(vm)=>{
        return {
            timer:null,
            timeAgo : vm.timeAgoToHuman(vm.item.datetime)
        }
    },
    watch:{
        timeAgo(){

        }
    },
    methods:{
        calcTime(){
            this.timeAgo = this.timeAgoToHuman(this.item.datetime)
        },
        startTime(){
                this.timer = setInterval(this.calcTime, 5000);
        },
        stopTimer(){
            if(this.timer)
            clearInterval(this.timer)
        }
    },
    mounted(){
        this.startTime()
    },
    beforeDestroy(){
        this.stopTimer()
    }
}
</script>