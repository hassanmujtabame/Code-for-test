const mixin = {
    methods:{
        loadJS:(src,async=true,defer=false)=>{
          const plugin = document.createElement("script");
          plugin.setAttribute(
          "src",
          src
        );
        if(defer)
        plugin.setAttribute("defer",true)
        plugin.async = async;
        document.body.appendChild(plugin);
        }
      },
    mounted(){
    
      AOS.init();
    
        
      }
  }

  export default mixin;