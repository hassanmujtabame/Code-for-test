<template>
  <div class="container mt-5">
            <h2>
                من هم أعضاء الشبكة
            </h2>
            <div class="row">
                <div v-for="(item,i) in items" :key="i" class="col-12 col-md-6 col-lg-3 mt-3">
                    <div class="box">
                        <div class="position-relative text-center">
                            <d-hover v-slot="{hover}">
                            <img :src="hover?'/assets/img/network289322-colored.png':'/assets/img/network289322.png'" alt=""
                             :style="hover?{transform: 'rotate(45deg)'}:{}"
                            />
                            
                            <div  class="position-absolute bg-white img-person-network ">
                            <p :class="{'m-c':!hover}">
                               {{ item.name }}
                            </p>
                       
                            </div>
                        </d-hover>
                        </div>
                    </div>
                    
                </div>
             
              
              
            </div>

        </div>
</template>

<script>
export default {
name:'section-3',
data:()=>({
    items:[
        {name:'رائدة اعمال '},
        {name:'مؤثرون'},
        {name:'مستثمرون'},
        {name:'معلنين'},
    ]
})
}
</script>

<style>

</style>