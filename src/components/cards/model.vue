<template>
  <div class="box rounded-3 border">
                      <div class="box rounded-3 ">
                          <div class="rounded-top">
                              <img class="w-100 rounded-top"  :src="img" :alt="title"  height="186">
                          </div>
                          <div class="text-start bg-white  p-2">
                              <h6>{{title}}</h6>
                              <div>
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
    }
}
}
</script>

<style>

</style>