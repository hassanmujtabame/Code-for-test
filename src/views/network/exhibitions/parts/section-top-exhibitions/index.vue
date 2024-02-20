<template>
  <div class="p-3" v-if="showExhibition">
    <div class="container">
      <div class="">
        <div class="row justify-content-between mt-5">
          <div class="col-md-6">
            <h2>أهم المعارض</h2>
          </div>
          <div class="col-md-6 text-start">
            <button
              @click="openAddDialog"
              class="btn bg-main bg border text-white"
            >
              <plusRectRoundIcon />
              {{ $t("add_exhibition") }}
            </button>
          </div>
        </div>
      </div>
      <d-swiper
        v-if="!loading"
        :slides-per-view="4"
        :space-between="20"
        is-auto
        :items="items"
      >
        <template v-slot:default="{ item }">
          <router-link
            class="router-link h-100"
            :to="getRouteLocale('network-exhibition-show', { id: item.id })"
          >
            <exhibitionCard
              class="h-100"
              :img="item.image"
              :userName="item.user_info ? item.user_info.name : 'N/A'"
              :place="item.city"
              :price="item.price"
              :title="item.title"
              :isShared="item.is_share"
              :description="item.content"
              :userInfo="item.user_info"
            />
          </router-link>
        </template>
      </d-swiper>
    </div>
  </div>
</template>

<script>
import exhibitionAPI from "@/services/api/exhibitions.js";
import exhibitionCard from "@/components/cards/exhibition.vue";
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";
export default {
  name: "top-exhibitions",
  components: {
    plusRectRoundIcon,
    exhibitionCard,
  },
  data: (vm) => {
    return {
      itemsTest: [
        {
          id: 44,
          title: "معرض الازياء الرجالي",
          city: "جدة",
          user_info: { name: "سارة" },
          image: `${vm.publicPath}assets/img/Rectangle -network.png`,
          content: "معرض متكام لبيع و تنسيق الزهور",
        },
        {
          id: 43,
          title: "معرض الازياء الرجالي",
          city: "جدة",
          user_info: { name: "سارة" },
          image: `${vm.publicPath}assets/img/Rectangle -network.png`,
          content: "معرض متكام لبيع و تنسيق الزهور",
        },
        {
          id: 44,
          title: "معرض الازياء الرجالي",
          city: "جدة",
          user_info: { name: "سارة" },
          image: `${vm.publicPath}assets/img/Rectangle -network.png`,
          content: "معرض متكام لبيع و تنسيق الزهور",
        },
        {
          id: 43,
          title: "معرض الازياء الرجالي",
          city: "جدة",
          user_info: { name: "سارة" },
          image: `${vm.publicPath}assets/img/Rectangle -network.png`,
          content: "معرض متكام لبيع و تنسيق الزهور",
        },
        {
          id: 44,
          title: "معرض الازياء الرجالي",
          city: "جدة",
          user_info: { name: "سارة" },
          image: `${vm.publicPath}assets/img/Rectangle -network.png`,
          content: "معرض متكام لبيع و تنسيق الزهور",
        },
      ],
      loading: true,
      items: [],
      addExhibition: false,
      showExhibition: false,
    };
  },
  methods: {
    openAddDialog() {
      if (this.addExhibition) {
        this.fireOpenDialog("add-dialog");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة معرض",
          description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - رقي حسابك الى الباقة السنويه و استفيد من إضافة معرضك و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/Group 1171275670.png`,
          btns: [
            {
              title: "رقي حسابك",
              action: () => this.$router.push({ name: "network-subscribe" }),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
    },
    //     openAddDialog(){
    //         if (this.userSubNetwork.type=='year' && this.userSubIncubators && this.userSubIncubators.length>0 && this.userSubIncubators[0].subscribe) {
    //        this.fireOpenDialog('add-dialog')
    //         }else if(this.userSubNetwork.type!='year' && this.userSubIncubators && this.userSubIncubators.length>0 && this.userSubIncubators[0].subscribe){
    //             let dataEvt ={
    //                         title:'للأسف لايمكنك  اضافة معرض',
    //                         description:`انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - رقي حسابك الى الباقة السنويه و استفيد من إضافة معرضك و المزيد من المميزات في الشبكة`,
    //                         image:`${this.publicPath}assets/img/Group 1171275670.png`,
    //                         btns:[
    //                             {title:'رقي حسابك',action:()=>this.$router.push({name: 'network-subscribe'})}
    //                         ]
    //                     }
    //                     this.showConfirmMsg(dataEvt);
    //                     return;

    //         }
    //         else if(this.userSubNetwork.type!='year' && this.userSubIncubators.length==0){
    //             let dataEvt ={
    //                         title:'للأسف لايمكنك  اضافة معرض',
    //                         description:'يجب عليك الاشتراك في الحاضنه والاشتراك في الباقة السنوية كي تتمكن من إضافة معرض',
    //                         image:`${this.publicPath}assets/img/Group 1171275670.png`,
    //                         btns:[
    //                             {title:'رقي حسابك',action:()=>this.$router.push({name: 'network-subscribe'})},
    //                             {title:'اشترك الان',action:()=>this.$router.push({name: 'incubator-subscribe'})}
    //                         ]
    //                     }
    //                     this.showConfirmMsg(dataEvt);
    //                     return;

    //         }
    //         else if (this.userSubNetwork.type=='year' && this.userSubIncubators.length==0) {
    //      let dataEvt ={
    //                 title:'غير مشترك في الحاضنة',
    //                 description:'انت غير مشترك في الحاضنة ٫ لذا عليك الاشتراك لتتمكن من اضافة معرض',
    //                 type:'warning',
    //                 btns:[
    //                     {title:'اشترك الان',action:()=>this.$router.push({name: 'incubator-subscribe'})}
    //                 ]
    //             }
    //             this.showConfirmMsg(dataEvt)
    //         }

    //   },
    async loadList() {
      this.loading = true;
      try {
        let { data } = await exhibitionAPI.getRecent();

        if (data.success) {
          this.items = data.data;
          console.log(`here the data u need ${data.data}`);
        }
      } catch (error) {
        console.mylog("error", error);
        console.mylog("response", error.response);
      }
      this.loading = false;
    },
    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "add_exhibitions") {
          this.addExhibition = true;
          console.log("element", element);
        } else if (element.key == "show_exhibitions") {
          this.showExhibition = true;
        }
      }
    },
  },
  mounted() {
    this.checkSubscriptionOptions();

    this.loadList();
  },
};
</script>

<style></style>
