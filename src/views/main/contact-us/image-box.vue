<template>
  <div class="box">
                        <div class="position-relative">
                            <img style="width: 100%;" :src="`${publicPath}assets/img/Frame 5001.png`" alt="">
                            <div style="" class="position-absolute img-bg-contact">
                                <img class="w-100" :src="`${publicPath}assets/img/logo-white.png`" alt="">
                            </div>
                            <div style="top: 68%;left: 27%;" class="position-absolute icon-contact">
                                <a v-for="(m,i) in socialMedias" :key="i" :href="m.url" class="mx-2">
                                    <i v-if="m.name=='facebook'" class="fab fa-facebook-f" ></i>
                                    <i v-if="m.name=='youtube'" class="fab fa-youtube" ></i>
                                    <i v-if="m.name=='linkedin'" class="fab fa-linkedin-in" ></i>
                                    <i v-if="m.name=='instagram'" class="fab fa-instagram" ></i>
                                    <i v-if="m.name=='twitter'" class="fab fa-twitter" ></i>
                                    <i v-if="m.name=='tiktok'" class="fab fa-tiktok" ></i>
                                
                                </a>
                               
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon-contact{
    display: flex;
}
.icon-contact>a{
    background: #FFFFFF;
    text-align: center;
    display: inline-block;
    height: 40px;
    width: 40px;
    font-size: 25px;
    color:var(--color-primary);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>