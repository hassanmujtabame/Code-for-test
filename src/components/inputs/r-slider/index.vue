<template>
   <input type="text" :id="id" class="slider" />
</template>

<script>
export default {
 name:'rslider-input',
 props:{
  min:{
    type:[Number,String],
    default:0
  },
  tooltips:{
    type:[Array,Object],
    default:null
  },
  max:{
    type:[Number,String],
    default:100
  },
  step:{
    type:[Number,String],
    default:1
  },
  lmin:{
    type:[Number,String],
    default:0
  },
  lmax:{
    type:[Number,String],
    default:100
  },
},
 data:(vm)=>{
    return {id:`d-r-slider-input-${Math.random().toString().substring(2,8)}`,
    contentMin:vm.min,
    contentMax:vm.max,
    slider:null,
    loaded:false
}

 },
 mounted(){
    if(!this.loaded)
    this.initialize()
 },
 methods:{
    onchange(vals){
        let [mn,mx] =vals.split(',')
               this.contentMax=mx;
               this.contentMin=mn;
              this.$emit('update:min', this.contentMin)
              this.$emit('update:max', this.contentMax)
    },
    initialize(){
       this.slider= new window.rSlider({
            target: "#"+this.id,
            values: { min: this.lmin, max: this.lmax },
            step: this.step,
            tooltips:this.tooltips,
            range: true,
            set: [this.contentMin,  this.contentMax],
            scale: true,
            labels: false,
            onChange: this.onchange,
          });
          this.loaded=true
    }
 }
}
</script>

<style>
  @import "@/assets/css/rSlider.min.css";
</style>