<template>
  
        <d-dialog-large 
        :group="group" 
        :loading="loading"
        :closeDialog="closeDialog"
        :openDialog="openDialog"
        >
   
      <div>
    <div class="d-flex align-items-center justify-content-between">

          <div class="col-md-6 col-12">
            <div class="px-3">
                <workSpaces v-for="(item,i) in 5" :key="i" class="my-3" :name="'قاعات مؤتمرات'" :comment="'قاعات  مؤتمرات مؤتمرات مؤتمرات'" :image="'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'"/>
             </div>
          </div>
           <div class="col-md-6 col-12">
                            <VGoogleMap @mapUpdated='getAddressMap' />
          </div>
    </div>
      </div>
      </d-dialog-large>

</template>
<script>
import workSpaces from '../work-spaces.vue'
import VGoogleMap from "@/components/shared/map.vue";


export default {
  components:{workSpaces,VGoogleMap},
  data:()=>{
    return{
        loading:false,
    group:'work-spaces-map',
    showDialog:false,
    workSpacesData:{}

  }},
  
  methods:{
 
    close(){
        this.refreshPage()
    },

    openDialog(data){
        this.loading =  false;
        this.workSpacesData = data
        this.showDialog = true;
        return true;
    },
    closeDialog(){
        this.showDialog = false

        return true;
    },

    

  },
  mounted(){
  }
}
</script>

<style >
label{
    width:100%;
    text-align: start;
}
.img-zone{
    max-width: 430px;
}
input,button,textarea:focus{
    outline: none !;
}
.vue-map-container{
    height: 460px !important;
}
</style>