<template>
  <div style="background: #ffffff" class="p-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-6">
          <div class="row justify-content-center mb-4">
            <span style="color: #f2631c; font-size: 24px">
              اليك ما نقوم بتقديمه لك
            </span>
            <h3 class="mt-2">
              نحن ندرك أن النجاح في التسويق بالعمولة يتطلب دعمًا مستمرًا. نقدم
              الدعم المستمر للمسوقين بالعمولة لمساعدتهم على تحقيق النجاح.
            </h3>
          </div>
          <div class="row gap-3 align-items-start">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            <p class="col-10">
              التدريب والتعليم: نقدم التدريب والتعليم للمسوقين بالعمولة
              لمساعدتهم على فهم كيفية الترويج لمنتجاتنا وخدماتنا بفعالية.
            </p>
          </div>
          <div class="row gap-3 align-items-start">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            <p class="col-10">
              الأدوات والموارد: نقدم الأدوات والموارد للمسوقين بالعمولة
              لمساعدتهم على إدارة حملاتهم التسويقية.
            </p>
          </div>
          <div class="row gap-3 align-items-start">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            <p class="col-10">
              التواصل المستمر: نتواصل باستمرار مع المسوقين بالعمولة لتقديم الدعم
              والإرشاد.
            </p>
          </div>
          <div class="row justify-content-center">
            <button
              class="btn-custmer shadow mt-2"
              style="width: 200px; border-radius: 20px"
              @click="$router.push({ name: 'contact-us' })"
            >
              {{ $t("contact-us") }} الأن
            </button>
          </div>
        </div>
        <div class="col-6 p-5">
          <img
            class="img-fluid rounded-3"
            src="@/assets/img/new/affiliate-marketing/section.png"
            alt=""
          />
        </div>

        <!-- <div class="col-3 justify-content-center image-part" style="background: #414042;
                padding: 20px 15px 0;
                width: fit-content;
                border-radius: 15px;
                position:relative;
                ">
                    <span class="pt-1 d-flex flex-column align-items-center justify-content-center">
                        <svg style="width: 40px; height:40px" width="26" height="16" viewBox="0 0 26 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M3.68555 10.1633V12.9092C3.68555 13.4925 4.15836 13.9653 4.74165 13.9653H20.5831C21.1664 13.9653 21.6392 13.4925 21.6392 12.9092V4.4604C21.6392 3.87717 21.1664 3.4043 20.5831 3.4043H16.9631V4.4604H18.9996C18.9998 4.66776 19.0408 4.87302 19.1201 5.06459C19.1998 5.25675 19.3165 5.43143 19.4636 5.57849C19.6106 5.72561 19.7853 5.8423 19.9775 5.92193C20.1695 6.00146 20.3753 6.04244 20.5831 6.04249V11.3251C20.3783 11.3263 20.1755 11.3672 19.9861 11.4457C19.7939 11.5253 19.6193 11.6419 19.4722 11.789C19.3251 11.9362 19.2084 12.1108 19.1288 12.303C19.0492 12.4952 19.0082 12.7012 19.0082 12.9092H6.32358C6.32104 12.708 6.28017 12.5089 6.20313 12.3229C6.1235 12.1306 6.0068 11.956 5.85969 11.8089C5.71263 11.6618 5.538 11.5451 5.34579 11.4655C5.15421 11.3861 4.94896 11.3452 4.74165 11.3449V10.1633H3.68555Z"
                                fill="#000" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.97743 7.04916C9.56072 7.04916 10.0335 6.57629 10.0335 5.99306C10.0335 5.40978 9.56072 4.93696 8.97743 4.93696C8.3942 4.93696 7.92133 5.40978 7.92133 5.99306C7.92133 6.57629 8.3942 7.04916 8.97743 7.04916ZM8.97743 8.10526C10.144 8.10526 11.0896 7.15957 11.0896 5.99306C11.0896 4.82649 10.144 3.88086 8.97743 3.88086C7.81092 3.88086 6.86523 4.82649 6.86523 5.99306C6.86523 7.15957 7.81092 8.10526 8.97743 8.10526Z"
                                fill="#000" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.0561 0.712891C0.472832 0.712891 0 1.18571 0 1.76899V10.2178C0 10.801 0.472832 11.2739 1.0561 11.2739H16.8976C17.4809 11.2739 17.9537 10.801 17.9537 10.2178V1.76899C17.9537 1.18571 17.4809 0.712891 16.8976 0.712891H1.0561ZM2.63928 1.76899H15.314C15.3143 1.9763 15.3553 2.18156 15.4346 2.37313C15.5142 2.56534 15.6309 2.73997 15.778 2.88708C15.9251 3.0342 16.0998 3.15085 16.292 3.23048C16.484 3.31 16.6897 3.35098 16.8976 3.35108V8.63364C16.6927 8.63486 16.4899 8.67578 16.3006 8.7542C16.1084 8.83383 15.9337 8.95052 15.7867 9.09764C15.6396 9.2447 15.5229 9.41933 15.4432 9.61154C15.3637 9.80375 15.3227 10.0097 15.3227 10.2178H2.63804C2.63551 10.0165 2.59465 9.81748 2.51757 9.63139C2.43796 9.43918 2.32128 9.26455 2.17418 9.11744C2.02707 8.97038 1.85244 8.85368 1.66024 8.77405C1.46869 8.69474 1.26342 8.65376 1.0561 8.6535V3.35314C1.2638 3.35298 1.46946 3.31201 1.66136 3.23253C1.85356 3.1529 2.02819 3.03626 2.1753 2.88914C2.3224 2.74203 2.43908 2.5674 2.5187 2.37519C2.59831 2.18298 2.63928 1.97699 2.63928 1.76899Z"
                                fill="#000" />
                        </svg>
                        <small style="color: #000; margin-bottom: 5px">
                            500+

                        </small>
                    </span>
                    <img src="@/assets/af-icons/image1217.png" alt="">
                </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "section-what-we-provide",
};
</script>

<style scoped>
.image-part {
  position: relative;
}

.image-part::after {
  position: absolute;
  content: "عملأونا المميزون";
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  bottom: -10px;
  border-radius: 15px;
  background-size: contain;
  background-image: url("~@/assets/af-icons/image1218.png");
  background-repeat: no-repeat;
  left: 15px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
}

.image-part span {
  position: absolute;
  content: "";
  width: 80px;
  height: 50px;
  background: #fff;
  top: 50%;
  right: 50%;
  border-radius: 10px;
  transform: translate(50%, -50%);
}

.image-part span::after {
  position: absolute;
  content: "";
  border: 10px solid #fff;
  /* height: 40px; */
  /* width: 40px; */
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  /* background: red; */
  bottom: -10px;
  right: 50%;
  transform: translate(50%, 50%);
}
</style>
