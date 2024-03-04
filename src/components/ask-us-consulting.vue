<template>
  <div class="row mt-5 p-3 rounded-4">
    <!-- <div class="col-md-6 col-12 d-flex flex-column justify-content-between">
      <h2>قدم فكرة أو اقتراح لفريق رياديات</h2>
      <div
        class="d-flex justify-content-center align-items-center mt-5 bg-white rounded-3"
        style="width: 90px; height: 71px"
      >
        <img
          style="width: 41px; height: 41px; object-fit: contain"
          class=""
          :src="`${publicPath}assets/svg/Vector1.svg`"
          alt=""
        />
      </div>
    </div> -->
    <div class="col-md-6 network">
      <div class="box bg-main p-3 rounded-2">
        <div class="d-flex">
          <div class="w-75">
            <h3 class="text-white">تشاركينا ؟</h3>
            <p class="text-white">
              يمكنك ترقية حسابك الان من عضو في الشبكة الى شريك في منصة رياديات
              والاستفادة بالكثير من المميزات
            </p>
            <router-link
              custom
              :to="getRouteLocale('register-networking')"
              v-slot="{ navigate }"
            >
              <button
                @click="navigate"
                class="border border-white rounded-2 text-white bg-transparent p-2"
              >
                {{ $t("know_more") }}
              </button>
            </router-link>
          </div>
          <div>
            <img
              class="img-fluid"
              :src="`${publicPath}assets/img/ve 1.png`"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-md-6 col-12 d-flex align-items-center justify-content-between"
    >
      <div>
        <h2>تحتاج الى مساعدة ؟</h2>
        <p style="color: #888">
          لانك عضو في شبكة رياديات يمكنك طلب استشارات من مستشارينا المميزين في
          اغلب المجالات بكل سهولة
        </p>
        <router-link
          style="background-color: #1fb9b3"
          :to="getRouteLocale('conditions')"
          class="btn text-light px-4 py-2"
        >
          تواصل معنا
        </router-link>
      </div>
      <img
        class="img-fluid"
        src="../assets/img/New folder/v2.png"
        alt="question image"
      />
      <!-- <div
          class="d-flex justify-content-center align-items-center mt-5 bg-white rounded-3"
          style="width: 90px; height: 71px"
        >
          <img
            style="width: 41px; height: 41px; object-fit: contain"
            class=""
            :src="`${publicPath}assets/svg/Vector.svg`"
            alt=""
          />
        </div> -->
    </div>

    <!-- <div style="display: flex; justify-content: end" class="col-md-4 col-12">
      <img
        style="width: 233px; height: 203px; object-fit: contain"
        class=""
        :src="`${publicPath}assets/svg/bro.svg`"
        alt=""
      />
    </div> -->
  </div>
</template>
