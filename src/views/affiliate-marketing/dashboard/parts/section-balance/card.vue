<template>
  <div>
    <p>
              <img :src="img">
                {{title}}
            </p>
            <h3 class=" fw-bolder" :class="classValue">
                {{ value }}
            </h3>

  </div>
</template>

<script>
export default {
name:'card-vue',
props:{
    title:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    classValue:{
        type:String,
        default:'m-c'
    },
    value:{
        default:'N/A'
    },
},
watch:{
    value(){
        //
    }
}
}
</script>

<style>

</style>