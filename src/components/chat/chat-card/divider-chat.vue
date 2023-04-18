<template>
   <div class="d-divider-chat">
    <p>{{ showText }}</p>
    <hr/>
            </div>
</template>

<script>
export default {
name:'d-divider-chat',
props:{
    text:{},
    isDate:{
        type:Boolean,
        default:false,
    }
},
computed:{
    showText(){
        return this.isDate?this.dateHuman():this.text
    }
},
methods:{
    dateHuman(){
        let today = (new Date());
        if(this.text==today.toISOString().split('T')[0]) return this.$t('today')
        let yesturday = this.getPreviousDay(1,today)
        if(this.text==yesturday.toISOString().split('T')[0]) return this.$t('yesturday')

        return this.text;
    }
}
}
</script>

<style>

</style>