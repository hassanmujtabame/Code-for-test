<template>
  <div class="box ">
                        <div class="">
                            <img  :src="img" alt="" width="259" height="192">
                        </div>
                        <div class="text-center bg-white box-deatils" :class="{'p-3':!description}">
                            <h6 class="network-member-name">{{name}}</h6>
                            <p v-if="description" class="m-c network-member-description">{{description}}</p>
                            <div v-if="showRate">
                            <RateStars  :value="rate" :size="16"  />
                        </div>
                    </div>
                        </div>
                        
</template>

<script>
import RateStars from '../rate-stars/index'
export default {
 name:'card-parson',
 components:{
    RateStars
 },
 props:{
    showRate:{
        type:Boolean,
        default:false
    },
    img:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    rate:{
        type:[String,Number],
        default:0
    }
 }
}
</script>

<style scoped>
.box{
    width: 259px;
}
.box-deatils{
    max-width: 100%;
}
.network-member-name{
    font-size: 24px;
    color:var(--b-color)
}
.network-member-description{
    font-size: 24px;
    color:#1FB9B3
}
</style>