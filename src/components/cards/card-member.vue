<template>
  <div class="box ">
                        <div class="">
                            <img  :src="img" alt="" width="259" height="192">
                        </div>
                        <div class="text-center bg-white box-deatils" :class="{'p-3':!description}">
                            <h6 class="network-member-name">{{name}}</h6>
                            <p v-if="description" class="m-c network-member-description">{{description}}</p>

                        </div>

                    </div>
</template>

<script>
export default {
 name:'card-parson',
 props:{
    img:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
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