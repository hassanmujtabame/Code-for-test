<template>
  <div style="margin-top: 96px">
    <d-overlays-simple v-if="false" />
    <!-- <div v-else-if="hasError">
      {{ $t("has-error") }}
    </div> -->

    <div v-else class="container">
      <div class="row">
        <div class="col-12 col-lg-7 p-3">
          <div
            class="title-box d-flex justify-content-between align-items-start mt-4"
          >
            <div class="title-text">
              {{ " معرض" + " " + title }}
            </div>
            <div class="publish-date mt-1 px-2">
              {{ $t("publish-date") }}: {{ publishDate }}
            </div>
          </div>
          <div class="desc-box rounded-4 p-4 mt-4">
            <div class="desc-title">تفاصيل المعرض</div>
            <div class="desc-text mt-3">
              {{ desc }}
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5 p-3">
          <img :src="`${publicPath}assets\\img\\Rectangle 77.png`" />
          <div class="details-list d-flex gap-3 mt-5">
            <div
              v-for="(d, i) in detalis"
              :key="i"
              class="border rounded-2 details-box mb-2 p-2"
            >
              <div class="details-title">
                {{ d.title }}
              </div>
              <div class="detail-text">
                {{ d.value }}
              </div>
            </div>
          </div>

          <button class="btn-customer rounded-3 w-100 mt-4 py-3">
            <!-- <button @click="openDemandParticipateDialog" class="btn-main"> -->
            شارك في المعرض
          </button>
        </div>
      </div>
    </div>
    <!--dialogs-->
    <ShareDialog />
    <UpdateDialog @success="refreshPage()" />
    <deleteDialog />
  </div>
</template>

<script>
import exhibitionsAPI from "@/services/api/exhibitions";
import ShareDialog from "../exhibitions/parts/dialogs/share-exhibition.vue";
import UpdateDialog from "../exhibitions/parts/dialogs/update-exhibition.vue";
import deleteDialog from "../exhibitions/parts/dialogs/del-exhibition.vue";
import detailsExhibitionSection from "./details-exhibition.vue";
export default {
  name: "exhibition-page",
  components: {
    detailsExhibitionSection,
    UpdateDialog,
    ShareDialog,
    deleteDialog,
  },
  data: () => {
    return {
      isOwner: false,
      loading: true,
      hasError: false,
      itemPage: {},
      colors: ["#F2631C", "#FFBC00", "#2C98B3"],
    };
  },
  computed: {
    title() {
      return this.itemPage.title ?? "الورود";
    },
    publishDate() {
      return this.itemPage.date_publish ?? "22-8-2024";
    },
    desc() {
      return (
        this.itemPage.desc ??
        "مهرجان تمور الأحساء في السعودية يعتبر من العوامل المهمه لزيادة الجذب السياحي للمواطنين و زوار المملكة العربية السعودية، و دشن أمير منطقة الشرقية “سعود بن نايف بن عبد العزيز” ذلك يوم الاربعاء 12 يناير  في نسخته الرابعة بالمملكة، حيث أكد الأمير أن “مدينة الأحساء” أنها سجلت 11 رقم قياسي في موسوعة جينيس العالمية، كما انها تحتوي على أفضل وأجود أنواع التمور بالعالم مشيرا إلي أن “مدينة الأحساء” تحتوي على 2.2 مليون نخلة، حيث حضر العديد من الشخصيات المهمه في ليلة افتتاح هذا المهرجان ومن أهم الشخصيات التي حضرت  “الأمير بندر بن محمد محافظ الأحساء و عصام الملا أمين المدينة و فهد المطلق رئيس هيئة تطوير المنطقة"
      );
    },
    views() {
      return this.itemPage.views ?? 150;
    },
    price() {
      return this.itemPage.views ?? 200;
    },
    participants() {
      return this.itemPage.views ?? 15;
    },
    category() {
      return this.itemPage.category ?? "الورود";
    },
    city() {
      return this.itemPage.city ?? "الرياض";
    },
    address() {
      return this.itemPage.address ?? "اضغط هنا";
    },
    date() {
      return this.itemPage.date ?? "22\\8\\2024 - 26\\8\\2024";
    },
    time() {
      return this.itemPage.time ?? "10:00 - 20:00";
    },
    detalis() {
      return [
        {
          title: "المشاهدات",
          value: this.views,
        },
        {
          title: "سعر الدخول",
          value: this.price,
        },
        {
          title: "المشاركين",
          value: this.participants,
        },
        {
          title: "تصنيف المعرض",
          value: this.category,
        },
        {
          title: "المدينة",
          value: this.city,
        },
        {
          title: "عنوان",
          value: this.address,
        },
        {
          title: "تاريخ المعرض",
          value: this.date,
        },
        {
          title: "توقيت",
          value: this.time,
        },
      ];
    },
  },
  methods: {
    convertTime(time) {
      if (!time) return time;
      return time.substring(0, 5);
    },
    openDemandParticipatePage() {
      this.$router.push(
        this.getRouteLocale("network-exhibition-demand-participate", {
          id: this.itemPage.id,
        })
      );
    },
    openDemandParticipateDialog() {
      let dataEvt = {
        title: "",
        description: `هل لديك منتجات تخص هذا المعرض وتود حجز بوث لك يمكنك من خلاله عرض منتجاتك ؟ فقط كل ما عليك فعله هو ملئ استمارة المشاركة وسنقوم بأرسالها الى صاحب المعرض ليختار المشاركين المناسبين له , نأمل انت تكون منهم بكل تأكيد !`,
        image: `${this.publicPath}assets/img/Group 1171275567.png`,
        btns: [
          {
            title: this.$t("fill-form"),
            action: this.openDemandParticipatePage,
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
      //this.fireOpenDialog('share-exhibition',this.itemPage)
    },
    openEditDialog() {
      this.fireOpenDialog("update-dialog", this.itemPage);
    },
    openDeleteDialog() {
      this.fireOpenDialog("delete-dialog", this.itemPage);
    },
    async initializing() {
      this.loading = true;
      this.hasError = false;
      try {
        let { data } = await exhibitionsAPI.getItem(this.$route.params.id);
        if (data.success) {
          this.itemPage = data.data;
          this.itemPage.start_time = this.convertTime(this.itemPage.start_time);
          this.itemPage.end_time = this.convertTime(this.itemPage.end_time);
          this.isOwner =
            this.itemPage.user_info &&
            this.itemPage.user_info.id == this.user.id;
        } else {
          this.hasError = true;
        }
      } catch (error) {
        console.mylog("error", error);
        console.mylog("error response", error.response);
        this.hasError = true;
      }

      this.loading = false;
    },
  },
  mounted() {
    console.mylog("route", this.$route, this.$router);
    this.initializing();
    this.loadJS("https://platform.twitter.com/widgets.js");
    this.addScriptJs(`(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`);
  },
};
</script>

<style>
.title-text {
  font-family: Cairo;
  font-size: 32px;
  font-weight: 700;
  line-height: 59.97px;
  color: #1fb9b3;
}
.publish-date {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  line-height: 29.98px;
  color: #424143;
}
.desc-box {
  background: #fafafa;
}
.desc-title {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 600;
  line-height: 44.98px;

  color: #cf1f3e;
}
.desc-text {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 400;
  line-height: 29.98px;
  color: #415c5e;
}
img {
  object-fit: cover;
  width: 100%;
  max-height: 480px;
}
.details-list {
  flex-wrap: wrap;
}
.details-box {
  width: 31%;
  flex-grow: 1;
}
.details-title {
  font-family: Cairo;
  font-size: 16px;
  font-weight: 700;
  line-height: 29.98px;
  color: #1fb9b3;
}
.detail-text {
  font-family: Cairo;
  font-size: 10px;
  font-weight: 400;
  line-height: 18.74px;
  color: #000;
}
.btn-customer {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 700;
  line-height: 37.48px;
  color: #ffffff;
}
</style>
