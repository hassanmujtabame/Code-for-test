<template>
  <div :id="id" class=" owl-carousel owl-theme">
    <slot></slot>
  </div>
</template>

<script>
export default {
 name:'d-carousel',
 props:{
    loop:{
        type:Boolean,
        default:true
    },
    margin:{
        type:[String,Number],
        default:10
    },
    nav:{
        type:Boolean,
        default:true
    },
    rtl:{
        type:Boolean,
        default:true
    },
    responsive:{
        type:[Array,Object],
        default:()=>{
            return {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
        }
    }
 },
 data:()=>({
    id:`d-carousel-${Math.random().toString().substring(2,10)}`
 }),
 methods:{
 reloadComponent(){
    $(`#${this.id}`).owlCarousel({
    loop:this.loop,
    margin:this.margin,
    nav:this.nav,
    rtl:this.rtl,
    responsive:this.responsive
})
 }
 },
 mounted(){
 this.reloadComponent()
 }
}
</script>

<style>

</style>