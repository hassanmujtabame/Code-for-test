<template>
  <vc-date-picker v-model="date" 
  :locale="$i18n.locale" class="datetime-input" :style="{direction:$i18n.locale=='ar'?'rtl':'ltr'}"
  :mode="mode" :is24hr="is24hr"  :masks="masks">
    <template v-slot="{ inputValue, inputEvents }">
    <input
        
      class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
      :value="inputValue"
      v-on="inputEvents"
        
    />
  </template>
</vc-date-picker>
</template>

<script>
export default {
    name:'date-picker-input',
    props:{
        value:{
            type:String
        },
        is24hr:{
            type:Boolean,
            default:true
        },
        mode:{
            type:String,
            default:'dateTime'
        }, 
        mask: {
            type:String,
      default: 'YYYY-MM-DD',
    },
    },
    data(vm) {
    return {
      date: null,
      modelV:null,
      masks:{
        input:vm.mask
          }
    };
  },
  watch:{
    value:{
        immediate:true,
        handler(val){
            if(val)
            this.date = new Date(val)
        }
    },
    date:{
        deep:true,
        immediate:true,
        handler(val){
            if(val=='Invalid Date') return;
            if(!val) {
                this.$emit('input',null) 
                return;
            }
              /** من إجل جعل اكثر سهولة في الاستعمال */
                /*let value=this.$children[0].inputValues[0]
                let test= this.$children[0].$locale.format(val, this.mask)
                console.log('value',value,test,this.$children[0].$locale)
                this.$emit('input',value)
       */
            if(this.mode=='date')
            this.$emit('input',this.dateToString(val))
            else
            if(this.mode=='time')
            this.$emit('input',this.timeToString(val))
            else  
            this.$emit('input',val.toISOString())
        }
    }
  },
   mounted() {
      this.$root.$on('input', (value) => {
        console.log('dxggdfg',value);
      });
    }

}
</script>

<style scoped>
input{
    border: none !important;
    width: 100%;
    height:100%
}
.datetime-input{
    padding: 0;
    direction: ltr;
}
</style>
<style>
.vc-popover-content-wrapper.is-interactive{
  direction: ltr !important;
}
</style>