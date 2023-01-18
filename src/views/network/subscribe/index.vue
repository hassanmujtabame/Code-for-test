<template>
   <div style="margin-top: 100px;">
        <div class="container">
            <div class="consulting rounded-top">
                <div class="row align-items-center p-5 position-relative">
                    <div class="col-md-6">
                        <h1 class="text-white fs-1">
                            ابدأي رحلة نجاحــــك معنا واختري الباقـة المناسـبـة لــــــــــك
                        </h1>
                    </div>
                    <div class="col-md-6">
                        <img class="img-fluid" src="/assets/img/_x36__1_.png" alt="">
                    </div>
                    <div style="left: 2px; bottom: 14px;width: fit-content;transform: rotate(127deg)" class="position-absolute">
                        <img src="/assets/img/starrrr.png" alt="">
                    </div>

                </div>

            </div>
            <div class="shadow bg-white rounded-bottom">
                <div class="row p-3">
                    <div v-for="(pack,p) in packages" :key="p" class="col-md-4  mt-2">
                        <SubscribeCard
                        :title="getTitleSubscribe(pack.type)"
                        :price="pack.price"
                        :features="pack.features.map(c=>c.desc)"
                        :type-subscribe="pack.type"
                        @selected="choose"
                        ></SubscribeCard>
                     
                    </div>

                </div>
            </div>

        </div>
        <DialogSubscribe :show.sync="show">
                <template>
          <p class="px-3">
            حتى تتمكن من الانضمام الى باقي خدمتنا
            (
            <a href="home.html" class="m-c">
                الاكاديمية
            </a>
            او
            <a href="../Incubator/home.html" class="m-c">
                الحاضنة
            </a>
            او
            <a href="../service-provider/home.html" class="m-c">
                مقدمي الخدمة
            </a>
            )
            يجب ان تكون عضو في شبكة رياديات  أولا
            زر الصفحة التعريفية
            <a href="../index.html" class="m-c">
                لشبكة رياديات

            </a>
       
          </p>
          </template>
        <template v-slot:actions>
            <a href="home.html" type="button" class="btn btn-main py-2 h-100 w-50" >الاستمرار</a>
          <button type="button" class="btn  border-danger text-danger w-50" data-bs-dismiss="modal">تراجع عن التسجيل</button>
        </template>
                </DialogSubscribe>
    </div>
</template>

<script>
import SubscribeCard from '@/components/cards/subscribe-card.vue';
import DialogSubscribe from '@/components/modals/simple.vue'
import networkAPI from '@/services/api/network.js'
export default {
name:'network-subscribe',
components:{
    SubscribeCard,
    DialogSubscribe
},
  data:()=>({
    show:false,
    packages:[],
  }),
  methods:{
    choose(type){
        console.log(type)
        this.show=true
    },
    async loadPackages(){
        try {
            let { data } = await networkAPI.getPackages();
            if(data.success){
                this.packages = data.data
            }
        } catch (error) {
            console.log('error',error)
        }
    }
  },
  mounted(){
    this.loadPackages()
  }
}
</script>

<style>

</style>