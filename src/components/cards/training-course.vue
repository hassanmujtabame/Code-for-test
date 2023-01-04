<template>
  <div class="course-card rounded-5">
                  <div class="img-courses">
                    <img
                      :src="img"
                      alt=""
                      class="img-fluid"
                    
                    />
                  </div>
                  <div class="bg-white p-3">
                    <div>
                      <p class="title-course-card">{{title}}</p>
                    </div>
                    <div class="text-end mx-1">
                      <p class="m-c">{{price}} {{currency}}</p>
                    </div>
                  </div>
                </div>
</template>

<script>
export default {
props:{
    img:{
        type:String,
    },
    title:{
        type:String,
    },
    price:{
        type:[Number,String],
        default:0.0
    },
    currency:{
        type:String,
        default:'ريال'
    }
}
}
</script>

<style scoped>
.course-card{
  width:100%;
}
.title-course-card{
  height: 54px;
}
.img-courses{
  height:110px;
}
.img-courses>img {
    height: 100%;
    width: 100%;
}
</style>