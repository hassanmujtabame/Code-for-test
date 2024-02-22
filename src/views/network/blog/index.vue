<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden">
    <div class="consulting">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6">
            <h1 class="fs-1 text-white">المدونة</h1>
            <p class="text-white">
              اللقاءات تجسّد فرصة للتواصل وتبادل الأفكار، حيث تعزز التفاعل
              الاجتماعي وتعمّق العلاقات الإنسانية ببساطة.
            </p>
            <div>
              <button
                @click="addBlog"
                style="display: inline-flex"
                class="btn bg px-5 py-2 border align-items-center gap-2 text-white"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3346 17H10.668C10.1213 17 9.66797 16.5467 9.66797 16C9.66797 15.4533 10.1213 15 10.668 15H21.3346C21.8813 15 22.3346 15.4533 22.3346 16C22.3346 16.5467 21.8813 17 21.3346 17Z"
                    fill="white"
                  />
                  <path
                    d="M16 22.3327C15.4533 22.3327 15 21.8793 15 21.3327V10.666C15 10.1193 15.4533 9.66602 16 9.66602C16.5467 9.66602 17 10.1193 17 10.666V21.3327C17 21.8793 16.5467 22.3327 16 22.3327Z"
                    fill="white"
                  />
                  <path
                    d="M20.0013 30.3327H12.0013C4.7613 30.3327 1.66797 27.2393 1.66797 19.9993V11.9993C1.66797 4.75935 4.7613 1.66602 12.0013 1.66602H20.0013C27.2413 1.66602 30.3346 4.75935 30.3346 11.9993V19.9993C30.3346 27.2393 27.2413 30.3327 20.0013 30.3327ZM12.0013 3.66602C5.85463 3.66602 3.66797 5.85268 3.66797 11.9993V19.9993C3.66797 26.146 5.85463 28.3327 12.0013 28.3327H20.0013C26.148 28.3327 28.3346 26.146 28.3346 19.9993V11.9993C28.3346 5.85268 26.148 3.66602 20.0013 3.66602H12.0013Z"
                    fill="white"
                  />
                </svg>
                <!-- <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.68555 10.1633V12.9092C3.68555 13.4925 4.15836 13.9653 4.74165 13.9653H20.5831C21.1664 13.9653 21.6392 13.4925 21.6392 12.9092V4.4604C21.6392 3.87717 21.1664 3.4043 20.5831 3.4043H16.9631V4.4604H18.9996C18.9998 4.66776 19.0408 4.87302 19.1201 5.06459C19.1998 5.25675 19.3165 5.43143 19.4636 5.57849C19.6106 5.72561 19.7853 5.8423 19.9775 5.92193C20.1695 6.00146 20.3753 6.04244 20.5831 6.04249V11.3251C20.3783 11.3263 20.1755 11.3672 19.9861 11.4457C19.7939 11.5253 19.6193 11.6419 19.4722 11.789C19.3251 11.9362 19.2084 12.1108 19.1288 12.303C19.0492 12.4952 19.0082 12.7012 19.0082 12.9092H6.32358C6.32104 12.708 6.28017 12.5089 6.20313 12.3229C6.1235 12.1306 6.0068 11.956 5.85969 11.8089C5.71263 11.6618 5.538 11.5451 5.34579 11.4655C5.15421 11.3861 4.94896 11.3452 4.74165 11.3449V10.1633H3.68555Z" fill="#2CB7B3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.97743 7.04916C9.56072 7.04916 10.0335 6.57629 10.0335 5.99306C10.0335 5.40978 9.56072 4.93696 8.97743 4.93696C8.3942 4.93696 7.92133 5.40978 7.92133 5.99306C7.92133 6.57629 8.3942 7.04916 8.97743 7.04916ZM8.97743 8.10526C10.144 8.10526 11.0896 7.15957 11.0896 5.99306C11.0896 4.82649 10.144 3.88086 8.97743 3.88086C7.81092 3.88086 6.86523 4.82649 6.86523 5.99306C6.86523 7.15957 7.81092 8.10526 8.97743 8.10526Z" fill="#2CB7B3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.0561 0.712891C0.472832 0.712891 0 1.18571 0 1.76899V10.2178C0 10.801 0.472832 11.2739 1.0561 11.2739H16.8976C17.4809 11.2739 17.9537 10.801 17.9537 10.2178V1.76899C17.9537 1.18571 17.4809 0.712891 16.8976 0.712891H1.0561ZM2.63928 1.76899H15.314C15.3143 1.9763 15.3553 2.18156 15.4346 2.37313C15.5142 2.56534 15.6309 2.73997 15.778 2.88708C15.9251 3.0342 16.0998 3.15085 16.292 3.23048C16.484 3.31 16.6897 3.35098 16.8976 3.35108V8.63364C16.6927 8.63486 16.4899 8.67578 16.3006 8.7542C16.1084 8.83383 15.9337 8.95052 15.7867 9.09764C15.6396 9.2447 15.5229 9.41933 15.4432 9.61154C15.3637 9.80375 15.3227 10.0097 15.3227 10.2178H2.63804C2.63551 10.0165 2.59465 9.81748 2.51757 9.63139C2.43796 9.43918 2.32128 9.26455 2.17418 9.11744C2.02707 8.97038 1.85244 8.85368 1.66024 8.77405C1.46869 8.69474 1.26342 8.65376 1.0561 8.6535V3.35314C1.2638 3.35298 1.46946 3.31201 1.66136 3.23253C1.85356 3.1529 2.02819 3.03626 2.1753 2.88914C2.3224 2.74203 2.43908 2.5674 2.5187 2.37519C2.59831 2.18298 2.63928 1.97699 2.63928 1.76899Z" fill="#2CB7B3"/>
</svg> -->
                أضف تدوينة
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div style="overflow: inherit" class="m-auto text-start">
              <img
                class="img-fluid"
                :src="`${publicPath}assets/img/Frameass.png`"
                alt=""
              />
            </div>
          </div>
        </div>
        <template>
          <div class="star-cons-blog">
            <img :src="`${publicPath}assets/img/starrrr.png`" alt="" />
          </div>
          <div class="star-cons-blog stars">
            <img :src="`${publicPath}assets/img/starsss.png`" alt="" />
          </div>
          <div class="star-blog position-absolute">
            <img
              class="landing"
              :src="`${publicPath}assets/svg/start.svg`"
              alt=""
            />
          </div>
        </template>

        <div
          v-if="false"
          class="position-absolute"
          style="width: 100%; height: 100%; top: 0; left: 0"
        >
          <img
            class="landing"
            :src="`${publicPath}assets/img/background-blogs-header.png`"
          />
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <!-- recent blogs-->
      <SectionRecentBlog />
      <!-- #recent blogs-->
      <!-- filter list-->
      <SectionFilterList />
    </div>

    <AddBlogDialog />
    <SuccessAddBlogDialog />
  </div>
</template>

<script>
import SectionFilterList from "./parts/section-filter-list/index.vue";
import SectionRecentBlog from "./parts/section-recent-blog/index.vue";
import AddBlogDialog from "./parts/dialogs/add-blog.vue";
import SuccessAddBlogDialog from "./parts/dialogs/success-add-blog.vue";
export default {
  name: "network-blogs",
  components: {
    SectionFilterList,
    SectionRecentBlog,
    AddBlogDialog,
    SuccessAddBlogDialog,
  },
  data: (vm) => {
    return {
      blogs: [
        {
          id: 1,
          title: "عنوان المدونة",
          img: `${vm.publicPath}assets/img/Rectangle 3.png`,
          date: "10  sep, 2021",
          description:
            "نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي",
        },
        {
          id: 2,
          title: "عنوان المدونة",
          img: `${vm.publicPath}assets/img/Rectangle 3.png`,
          date: "10  sep, 2021",
          description:
            "نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي",
        },
        {
          id: 3,
          title: "عنوان المدونة",
          img: `${vm.publicPath}assets/img/Rectangle 3.png`,
          date: "10  sep, 2021",
          description:
            "نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي",
        },
        {
          id: 4,
          title: "عنوان المدونة",
          img: `${vm.publicPath}assets/img/Rectangle 3.png`,
          date: "10  sep, 2021",
          description:
            "نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي",
        },
        {
          id: 5,
          title: "عنوان المدونة",
          img: `${vm.publicPath}assets/img/Rectangle 3.png`,
          date: "10  sep, 2021",
          description:
            "نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي",
        },
        {
          id: 6,
          title: "عنوان المدونة",
          img: `${vm.publicPath}assets/img/Rectangle 3.png`,
          date: "10  sep, 2021",
          description:
            "نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي نص  تعريفي",
        },
      ],
      shareBlogs: false,
    };
  },
  methods: {
    //   addBlog(){
    //        this.fireOpenDialog('add-blog')
    //   }
    addBlog() {
      if (this.shareBlogs) {
        this.fireOpenDialog("add-blog");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك المشاركة في التدوين",
          description: `انتي مشتركة في الباقة المجانية وهذه الباقة لا تمكنك من المشاركة في التدوين - رقي حسابك الى الباقة الشهرية أو السنوية و استفيد من  نشر تدوينتك معنا والحصول على المزيد من المميزات في الشبكة`,
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
    checkSubscriptionOptions() {
      for (
        let index = 0;
        index < this.user.subscription_options.length;
        index++
      ) {
        const element = this.user.subscription_options[index];
        if (element.key == "blogs") {
          this.shareBlogs = true;
        }
      }
    },
  },
  mounted() {
    this.checkSubscriptionOptions();
  },
};
</script>

<style>
.star-cons-blog {
  position: absolute;
  right: 7.15%;
  left: 81.19%;
  top: 9.72%;
  bottom: 71.67%;
}
.star-cons-blog.stars {
  right: 30.56%;
  left: 60.06%;
  top: 14.17%;
  bottom: 80.28%;
}
.star-blog {
  right: 27.29%;
  left: 69.44%;
  top: 44.59%;
  bottom: 37.92%;
}
</style>
