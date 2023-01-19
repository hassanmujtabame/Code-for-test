<template>
  <div class="box rounded-3 border" >
                      
                          <div class="rounded-top">
                              <img class="w-100 rounded-top"  :src="img" :alt="title"  height="186">
                          </div>
                          <div class="text-start bg-white  p-2">
                              <h6>{{title}}</h6>
                              <div>
                                <DownloadIcon />
                                <small class="box-download">
                                    عدد التحميلات: <strong>{{value}} مرة</strong>
                                </small>
                                
                            </div>
              
  
                          </div>
  
                      </div>
</template>

<script>
import DownloadIcon from '@/components/icon-svg/arrow-down-circle-outline.vue'
export default {
    name:'card-vue',
    components:{
        DownloadIcon
    },
props:{
    img:{
        type:String
    },
    title:{
        type:String
    },
    value:{
        type:[String,Number]
    }
}
}
</script>

<style scoped>
.box-download{
    color: var(--b-color);
    font-size: 12px;
}
</style>