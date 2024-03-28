<template>
  <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        v-if="!userPartner"
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('network-subscribe')"
      >
        انضم كشركة
      </router-link>
      <router-link
        v-if="userPartner"
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('network-offers-dashboard')"
      >
        حسابى
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div>
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
  <!-- <div class="row my-5">
    <div class="col-md-6 my-auto">
      <h1 style="color: #2cb7b3; font-size: 56px; font-weight: bolder">
        أنضم الى حلول ريادة الاعمال
      </h1>
      <p style="color: #737373; font-size: 24px; font-weight: semibold">
        باستضافتك عروضك وخصوماتك على منصتنا، ستصل إلى مجتمعات واسعة في المملكة
        والخليج العربي، وستستفيد من فرص التواصل مع رواد الأعمال والمهتمين
        بالتعلم. انضم إلينا اليوم لتوسيع نطاق أعمالك وزيادة قاعدة عملائ
      </p>
      <router-link
        style="background-color: #f2631c"
        class="px-5 py-2 btn text-light rounded-2"
        :to="getRouteLocale('')"
      >
        انضم كشركة
      </router-link>
    </div>
    <div class="col-md-6 d-none d-md-block">
      <img
        class="img-fluid"
        src="@/assets/img/company/Frame 1171276926.png"
        alt=""
      />
    </div>
  </div> -->
</template>

<script>
export default {
  name: "company-header",
  methods: {
    addOffer() {
      if (this.userPartner) {
        this.router_push("network-offers-dashboard");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة عروض او خصومات",
          description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - يجب تسجيل حسابك  كشركه و استفيد من إضافة معرضك و  عروضك و خصوماتك و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/EmptyState.png`,
          btns: [
            {
              title: "سجل كشركه",
              action: () => this.router_push("register-networking"),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
    },
  },
};
</script>

<style></style>
