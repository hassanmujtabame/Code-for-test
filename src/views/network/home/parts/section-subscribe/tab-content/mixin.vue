<script>
export default {
    name:'mixin-tab',
    props:{
    selected:{
        type:Boolean,

    }
  },
    watch:{
    selected:{
        immediate:true,
        handler(){
          if(window.AOS)
          window.AOS.init()
        }
    }
  },
}
</script>