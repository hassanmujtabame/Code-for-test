<template>
  <div class="box rounded-3 border">
                      <div class="box rounded-3 ">
                          <div class="rounded-top">
                              <img class="w-100 rounded-top"  :src="img" :alt="title"  height="186">
                          </div>
                          <div class="text-start bg-white  p-2">
                              <h6 class="box-title text-center text-two-lines">{{title}}</h6>
                              <div v-if="!hideCounter">
                                <small class="m-c">
                                    عدد التنزيلات
                                </small>
                                <span>
                                    |
                                </span>
                                <small class="t-c">
                                    {{value}}
                                </small>
                            </div>
              
  
                          </div>
  
                      </div>
                    </div> 
</template>

<script>
export default {
    name:'card-vue',
props:{
    img:{
        type:String
    },
    title:{
        type:String
    },
    value:{
        type:[String,Number]
    },
    hideCounter:{
        type:Boolean,
        default:false
    }
}
}
</script>

<style scoped>
.box-title{
    height:40px;
}
</style>