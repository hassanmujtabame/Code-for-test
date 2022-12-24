<template>
    <div class="box rounded-3 border w-100">
              <div class="image">
                <img class="w-100" :src="img" :alt="title" height="184">
              </div>
              <div class="text p-3">
                <h6 style="height:40px">{{title}}</h6>
                <p style="height:80px">{{description}}</p>
              </div>
              <div class="date text-end mx-1 p-3">
                <p>
                 {{date}}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#979797"/>
                    </svg>
                </p>
              </div>
            </div>
</template>

<script>
export default {
  props:{
    img:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    description:{
        type:String,
        default:''
    }
  }
}
</script>

<style scoped>
.image{
  height:184px
}

</style>