<template>
  <div>
    <p>
              <img :src="img">
                {{title}}
            </p>
            <h3 class=" fw-bolder" :class="classValue">
                0 ر.س
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
        default:''
    },
}
}
</script>

<style>

</style>