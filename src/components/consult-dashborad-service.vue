<template>
  <div class="row mt-5">
    <!-- <div class="col-md-6">
      <div class="box border p-5 mt-3">
        <div class="d-flex align-items-center justify-content-between">
          <h3>خدماتي</h3>
          <p class="fw-bolder fs-3">
            {{ itemCard.count_ready_service }}
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 mt-5">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-label="Example with label"
                :style="{ width: `${percentFinished}%` }"
                :aria-valuenow="percentFinished"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span class="fw-bolder m-c fs-6">
                        {{ itemCard.service_finished }}
                      </span>
                      <span class="fs-6"> خدمة مكتملة </span>
                    </p>
                    <p class="fs-6 t-c">{{ percentFinished }}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="progress">
              <div
                class="progress-bar tow"
                role="progressbar"
                aria-label="Example with label"
                :style="{ width: `${percentWaiting}%` }"
                :aria-valuenow="percentWaiting"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span class="fw-bolder m-c fs-6">
                        {{ itemCard.service_waiting }}
                      </span>
                      <span class="fs-6"> طلب ينتظر موفقتك </span>
                    </p>
                    <p class="fs-6 t-c">{{ percentWaiting }}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5">
            <div class="progress three">
              <div
                class="progress-bar three"
                role="progressbar"
                aria-label="Example with label"
                :style="{ width: `${percentUnderway}%` }"
                :aria-valuenow="percentUnderway"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="position-absolute text">
                  <div class="d-flex justify-content-between">
                    <p>
                      <span style="color: #ffbc00" class="fw-bolder m-c fs-6">
                        {{ itemCard.service_underway }}
                      </span>
                      <span class="fs-6"> قيد التنفيذ </span>
                    </p>
                    <p class="fs-6 t-c">{{ percentUnderway }}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.599609"
                width="62.0532"
                height="54"
                rx="15"
                fill="#FFBC00"
                fill-opacity="0.2"
              />
              <path
                d="M31.966 15L36.104 22.1045L44.1395 23.8446L38.6615 29.9755L39.4897 38.1554L31.966 34.84L24.4424 38.1554L25.2706 29.9755L19.7925 23.8446L27.828 22.1045L31.966 15Z"
                fill="#FFBC00"
              />
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #ffbc00">تقييم استشاراتي</h3>
            <button
              @click="router_push('consulting-rates')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <h3>4</h3>
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <div>
            <!-- <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#1FB9B3"
                fill-opacity="0.19"
              />
              <g clip-path="url(#clip0_3580_12161)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8425 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#1FB9B3"
                />
                <path
                  d="M31.6114 31.7017C31.6114 30.1636 32.123 28.7017 33.0675 27.4968H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.7179 31.6114 31.7017ZM29.4553 30.803H26.8086V29.2796H29.4553V30.803ZM21.1144 29.2796H25.233V30.803H21.1144V29.2796Z"
                  fill="#1FB9B3"
                />
                <path
                  d="M34.7032 25.9734C35.9048 25.1606 37.3322 24.7226 38.8293 24.7226C39.6959 24.7226 40.5389 24.8697 41.3286 25.1509V23.6869H17.582V25.9734H34.7032Z"
                  fill="#1FB9B3"
                />
                <path
                  d="M44.4724 31.7017C44.4724 28.6886 41.9461 26.246 38.8299 26.246C35.7137 26.246 33.1875 28.6886 33.1875 31.7017C33.1875 34.7148 35.7137 37.1574 38.8299 37.1574C41.9461 37.1574 44.4724 34.7148 44.4724 31.7017ZM39.5905 34.6163V35.2363H38.8027V35.2363V35.2363H38.0149V34.6209C37.5386 34.4649 37.149 34.1906 36.7684 33.9215L37.6985 32.6918C38.2098 33.0534 38.4714 33.2271 38.8299 33.2271C39.0327 33.2271 39.1968 33.1339 39.2583 32.9837C39.3328 32.8019 39.2276 32.6344 38.9766 32.5356C38.9766 32.5356 37.8506 32.1725 37.3299 31.6593C36.8931 31.2287 36.7542 30.6219 36.8932 30.0447C37.0333 29.4635 37.4391 29.009 38.0149 28.7821V28.167H39.5905V28.7566C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.4639C39.274 30.2024 38.8155 30.1238 38.637 30.1828C38.4639 30.24 38.4376 30.3492 38.4276 30.3903C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7416 39.5707 31.1247 39.5707 31.1247C40.6232 31.539 41.1186 32.5795 40.723 33.5449C40.5175 34.0466 40.1039 34.4266 39.5905 34.6163Z"
                  fill="#1FB9B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_3580_12161">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #1fb9b3">جدولي</h3>
            <button
              @click="router_push('consulting-my-schedules')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#1FB9B3"
                fill-opacity="0.19"
              />
              <g clip-path="url(#clip0_3577_10858)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#1FB9B3"
                />
                <path
                  d="M31.6114 31.7018C31.6114 30.1637 32.123 28.7017 33.0675 27.4969H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.718 31.6114 31.7018ZM29.4553 30.8031H26.8086V29.2796H29.4553V30.8031ZM21.1144 29.2796H25.233V30.8031H21.1144V29.2796Z"
                  fill="#1FB9B3"
                />
                <path
                  d="M34.7032 25.9735C35.9048 25.1606 37.3322 24.7227 38.8293 24.7227C39.6959 24.7227 40.5389 24.8698 41.3286 25.151V23.687H17.582V25.9735H34.7032Z"
                  fill="#1FB9B3"
                />
                <path
                  d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                  fill="#1FB9B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_3577_10858">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #1fb9b3">حجوزات استشاراتي</h3>
            <button
              @click="router_push('service-provider-rate-my-service')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>24</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#FFBC00"
                fill-opacity="0.19"
              />
              <g clip-path="url(#clip0_3577_10837)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#FFBC00"
                />
                <path
                  d="M31.6114 31.7018C31.6114 30.1637 32.123 28.7017 33.0675 27.4969H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.718 31.6114 31.7018ZM29.4553 30.8031H26.8086V29.2796H29.4553V30.8031ZM21.1144 29.2796H25.233V30.8031H21.1144V29.2796Z"
                  fill="#FFBC00"
                />
                <path
                  d="M34.7032 25.9735C35.9048 25.1606 37.3322 24.7227 38.8293 24.7227C39.6959 24.7227 40.5389 24.8698 41.3286 25.151V23.687H17.582V25.9735H34.7032Z"
                  fill="#FFBC00"
                />
                <path
                  d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                  fill="#FFBC00"
                />
              </g>
              <defs>
                <clipPath id="clip0_3577_10837">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #ffbc00">لقائات اشتركت بها</h3>
            <button
              @click="router_push('service-provider-rate-my-service')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>6</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#FFBC00"
                fill-opacity="0.19"
              />
              <g clip-path="url(#clip0_3577_10837)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#FFBC00"
                />
                <path
                  d="M31.6114 31.7018C31.6114 30.1637 32.123 28.7017 33.0675 27.4969H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.718 31.6114 31.7018ZM29.4553 30.8031H26.8086V29.2796H29.4553V30.8031ZM21.1144 29.2796H25.233V30.8031H21.1144V29.2796Z"
                  fill="#FFBC00"
                />
                <path
                  d="M34.7032 25.9735C35.9048 25.1606 37.3322 24.7227 38.8293 24.7227C39.6959 24.7227 40.5389 24.8698 41.3286 25.151V23.687H17.582V25.9735H34.7032Z"
                  fill="#FFBC00"
                />
                <path
                  d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                  fill="#FFBC00"
                />
              </g>
              <defs>
                <clipPath id="clip0_3577_10837">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #ffbc00">لقائات تعليمية</h3>
            <button
              @click="router_push('service-provider-rate-my-service')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>3</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#F2631C"
                fill-opacity="0.21"
              />
              <g clip-path="url(#clip0_3577_10944)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#F2631C"
                />
                <path
                  d="M31.6114 31.7017C31.6114 30.1636 32.123 28.7017 33.0675 27.4968H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.7179 31.6114 31.7017ZM29.4553 30.803H26.8086V29.2796H29.4553V30.803ZM21.1144 29.2796H25.233V30.803H21.1144V29.2796Z"
                  fill="#F2631C"
                />
                <path
                  d="M34.7032 25.9734C35.9048 25.1606 37.3322 24.7226 38.8293 24.7226C39.6959 24.7226 40.5389 24.8697 41.3286 25.1509V23.6869H17.582V25.9734H34.7032Z"
                  fill="#F2631C"
                />
                <path
                  d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                  fill="#F2631C"
                />
              </g>
              <defs>
                <clipPath id="clip0_3577_10944">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #f2631c">حجوزات لاماكن رياديات</h3>
            <button
              @click="router_push('service-provider-rate-my-service')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#2C98B3"
                fill-opacity="0.19"
              />
              <g clip-path="url(#clip0_3577_10923)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#2C98B3"
                />
                <path
                  d="M31.6114 31.7017C31.6114 30.1636 32.123 28.7017 33.0675 27.4968H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.7179 31.6114 31.7017ZM29.4553 30.803H26.8086V29.2796H29.4553V30.803ZM21.1144 29.2796H25.233V30.803H21.1144V29.2796Z"
                  fill="#2C98B3"
                />
                <path
                  d="M34.7032 25.9734C35.9048 25.1606 37.3322 24.7226 38.8293 24.7226C39.6959 24.7226 40.5389 24.8697 41.3286 25.1509V23.6869H17.582V25.9734H34.7032Z"
                  fill="#2C98B3"
                />
                <path
                  d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                  fill="#2C98B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_3577_10923">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #2c98b3">طلبات على اماكن رياديات</h3>
            <button
              @click="router_push('service-provider-rate-my-service')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="p-3 col-md-6 col-12">
      <div
        style="min-height: 138px"
        class="shadow rounded-3 d-flex justify-content-between align-items-center p-3"
      >
        <div class="d-flex align-items-center gap-4">
          <div>
            <svg
              width="63"
              height="54"
              viewBox="0 0 63 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="62.0532"
                height="54"
                rx="15"
                fill="#F2631C"
                fill-opacity="0.21"
              />
              <g clip-path="url(#clip0_3577_10944)">
                <path
                  d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                  fill="#F2631C"
                />
                <path
                  d="M31.6114 31.7017C31.6114 30.1636 32.123 28.7017 33.0675 27.4968H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.7179 31.6114 31.7017ZM29.4553 30.803H26.8086V29.2796H29.4553V30.803ZM21.1144 29.2796H25.233V30.803H21.1144V29.2796Z"
                  fill="#F2631C"
                />
                <path
                  d="M34.7032 25.9734C35.9048 25.1606 37.3322 24.7226 38.8293 24.7226C39.6959 24.7226 40.5389 24.8697 41.3286 25.1509V23.6869H17.582V25.9734H34.7032Z"
                  fill="#F2631C"
                />
                <path
                  d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                  fill="#F2631C"
                />
              </g>
              <defs>
                <clipPath id="clip0_3577_10944">
                  <rect
                    width="26.8897"
                    height="26"
                    fill="white"
                    transform="translate(17.582 15)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center gap-1">
            <h3 style="color: #f2631c">تنزيلاتك لنماذج رياديات</h3>
            <button
              @click="router_push('service-provider-rate-my-service')"
              style="
                color: #888;
                outline: 1px solid #888;
                background-color: transparent;
                width: 120px;
              "
              class="btn px-4 py-2"
            >
              عرض الكل
            </button>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-end flex-column gap-4"
        >
          <!-- <h3>{{ itemCard.count_rate }}</h3> -->
          <h3>0</h3>
          <!-- <div>
            <RateStars
              v-if="!loading"
              :size="32"
              :value="`${itemCard.rate}`"
              :readonly="true"
            />
          </div> -->
        </div>
      </div>
    </div>

    <!-- <div class="col-md-12 border p-3">
            <div class="box d-flex align-items-center justify-content-between">
              <h5>تقيم خدماتي</h5>
              <p>
                {{ itemCard.count_rate }}
              </p>
            </div>
            <div class="box d-flex align-items-center justify-content-between">
              <button
                @click="router_push('service-provider-rate-my-service')"
                class="btn border rounded-2 bg-transparent"
              >
                عرض التقييمات
              </button>
              <div>
                <div>
                  <RateStars
                    v-if="!loading"
                    :size="32"
                    :value="`${itemCard.rate}`"
                    :readonly="true"
                  />
                </div>
              </div>
            </div>
          </div> -->
    <!-- <div
            class="col-md-12 d-flex justify-content-between align-items-center border shadow rounded-3 mt-3 p-3"
          >
            <div class="d-flex gap-3 align-items-center">
              <svg
                width="63"
                height="54"
                viewBox="0 0 63 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="62.0532"
                  height="54"
                  rx="15"
                  fill="#F2631C"
                  fill-opacity="0.21"
                />
                <g clip-path="url(#clip0_3575_11901)">
                  <path
                    d="M41.3286 22.1634V21.8077C41.3286 20.1727 39.9529 18.8425 38.2619 18.8425H20.6487C18.9577 18.8426 17.582 20.1727 17.582 21.8077V22.1634H41.3286Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M31.6114 31.7018C31.6114 30.1637 32.123 28.7017 33.0675 27.4969H17.582V31.6331C17.582 33.2681 18.9577 34.5983 20.6487 34.5983H32.2587C31.835 33.7007 31.6114 32.718 31.6114 31.7018ZM29.4553 30.8031H26.8086V29.2796H29.4553V30.8031ZM21.1144 29.2796H25.233V30.8031H21.1144V29.2796Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M34.7032 25.9735C35.9048 25.1606 37.3322 24.7227 38.8293 24.7227C39.6959 24.7227 40.5389 24.8698 41.3286 25.151V23.687H17.582V25.9735H34.7032Z"
                    fill="#F2631C"
                  />
                  <path
                    d="M44.4724 31.7018C44.4724 28.6887 41.9461 26.2461 38.8299 26.2461C35.7137 26.2461 33.1875 28.6887 33.1875 31.7018C33.1875 34.7149 35.7137 37.1575 38.8299 37.1575C41.9461 37.1575 44.4724 34.7149 44.4724 31.7018ZM39.5905 34.6164V35.2364H38.8027V35.2364V35.2364H38.0149V34.6209C37.5386 34.465 37.149 34.1906 36.7684 33.9215L37.6985 32.6919C38.2098 33.0534 38.4714 33.2272 38.8299 33.2272C39.0327 33.2272 39.1968 33.1339 39.2583 32.9838C39.3328 32.802 39.2276 32.6345 38.9766 32.5357C38.9766 32.5357 37.8506 32.1726 37.3299 31.6593C36.8931 31.2288 36.7542 30.622 36.8932 30.0447C37.0333 29.4635 37.4391 29.0091 38.0149 28.7822V28.1671H39.5905V28.7567C39.9907 28.8641 40.3293 29.0229 40.5241 29.1251L39.7724 30.464C39.274 30.2024 38.8155 30.1239 38.637 30.1829C38.4639 30.2401 38.4376 30.3493 38.4276 30.3904C38.4136 30.4486 38.4061 30.538 38.5024 30.6418C38.5951 30.7417 39.5707 31.1248 39.5707 31.1248C40.6232 31.5391 41.1186 32.5795 40.723 33.5449C40.5175 34.0467 40.1039 34.4267 39.5905 34.6164Z"
                    fill="#F2631C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3575_11901">
                    <rect
                      width="26.8897"
                      height="26"
                      fill="white"
                      transform="translate(17.582 15)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div class="d-flex flex-column justify-content-center gap-1">
                <h4 style="color: #f2631c">الرسائل الجديدة</h4>
                <button
                  class="text-dark btn rounded-3 px-4 py-2"
                  style="
                    background-color: transparent;
                    color: #888;
                
                width1200px    outline: 1px solid #888;
                  "
                >
                  عرض الكل
                </button>
              </div>
            </div>
            <h3 style="font-weight: 400">
              {{ itemCard.provider_message_count }}
            </h3>
          </div> -->
    <!-- <div class="col-md-12 border mt-3 p-3">
                        <div class="box d-flex align-items-center justify-content-between ">
                            <h5>
                                الرسائل الجديدة
                            </h5>
                            <p>
                                {{ itemCard.provider_message_count }}
                            </p>
                        </div>
                        <div class="box d-flex align-items-center justify-content-between ">
                            <button class="btn border rounded-2 bg-transparent">
                                عرض الرسائل
                            </button>
                        </div>
                    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
