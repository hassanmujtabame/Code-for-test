<template>
  <d-dialog-large :group="group"
  :xl="false"
  :openDialog="openDialog"
  :closeDialog="closeDialog"
  >
  <template  v-slot:header>
    مشاركة الصفحة
  </template>
    <template v-slot>
        <div class="text-center" v-if="showDialog">
          <div class="d-flex gap-4 justify-content-center p-4 icon-social-exibition">
                            <!--facebook-->
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large"  data-show-count="false"></a>
                           
                           <span v-if="false"> <i  class="fab fa-instagram" ></i></span>

                           <span v-if="false"> <i  class="fab fa-linkedin-in" ></i></span>
                           <div class="fb-share-button" 
                              :data-href="currentUrl" 
                              data-layout="button_count">
                              </div>
                           

                        
                           
                          
                            
                        </div>
        </div>
    </template>
    
  </d-dialog-large>
</template>

<script>
export default {
  name:'d-share-social-media',
 props:{
    group:{
        type:String,
        default:'share-dialog-standard'
    }
 },
 data:()=>({
  showDialog:false,
    itemDialog:{id:null},
    loaded:false,
 }),
 watch:{
  showDialog(){
    if(this.showDialog){
      this.$nextTick(()=>{
        this.initializing()
      })
    }
  }
 },
 methods:{
  
    openDialog(data){
      this.itemDialog=data??{};
      this.currentUrl =window.location.href
      this.showDialog=true;
      //if(!this.loaded)
    
      return true;
    },
    closeDialog(){
      this.showDialog=false;
      let  st = document.getElementById('twitter-share');
    if(st) st.remove()
      return true;
    },
    closeEvent(){
       this.fireEvent(this.group+'-close-dialog')
    },
  initializing(){
    let  st = document.getElementById('twitter-share');
    if(st) st.remove()
   
    this.loadJS('https://platform.twitter.com/widgets.js','twitter-share');
 if(window.FB && window.FB.XFBML){
  console.mylog('FB exists',window.FB)
  window.FB.XFBML.parse()
 }else
    
    this.addScriptJs(`(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`,'facebook-share')
this.loaded = true;  
}
 }
}
</script>

<style scoped>
.dialog-title{
  font-weight: 400;
font-size: 24px;
line-height: 32px;
/* or 133% */

text-align: center;
text-transform: capitalize;

color: #414042;
}
.dialog-desc{
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

text-align: center;

color: #707070;
}

</style>