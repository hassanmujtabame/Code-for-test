<template>
  <div class="box ">
                        <div class="">
                            <img  :src="img" alt="" width="259" height="192">
                        </div>
                        <div class="text bg-white ">
                            <h6>{{name}}</h6>
                            <p class="m-c">{{description}}</p>

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

<style>

</style>