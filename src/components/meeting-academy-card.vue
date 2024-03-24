<template>
  <div class="col-md-4 col-12 p-2">
    <div
      class="d-flex border rounded-3 shadow flex-column my-2 gap-2"
      style="height: auto"
    >
      <div class="student-course__image">
        <router-link
          custom
          :to="getRouteLocale('academy-course-show', { id: item.id })"
        >
          <img
            @click="goToCourse(navigate, $event)"
            class="px-2 py-2 rounded-top"
            :src="img"
            :alt="title"
            style="width: 100%; height: 220px"
          />
        </router-link>
      </div>
      <router-link
        style="color: black"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <div class="py-3">
          <div
            class="d-flex justify-content-between align-items-cent px-3"
            style="align-items: baseline"
          ></div>
          <h6 class="text-end px-3">
            {{ title }}
          </h6>
          <!-- <div class="d-flex px-3 align-items-center">
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <svg
            width="15"
            height="14"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4127 15.8781L15.1377 18.8781C15.7471 19.2625 16.4971 18.6906 16.319 17.9875L14.9502 12.6062C14.9132 12.4571 14.9191 12.3005 14.9672 12.1545C15.0153 12.0086 15.1037 11.8792 15.2221 11.7812L19.4596 8.24687C20.0127 7.78749 19.7315 6.85937 19.0096 6.81249L13.4784 6.45624C13.3274 6.44746 13.1823 6.39491 13.0608 6.305C12.9393 6.2151 12.8466 6.09174 12.794 5.94999L10.7315 0.756243C10.6769 0.606152 10.5774 0.476496 10.4466 0.384876C10.3158 0.293256 10.16 0.24411 10.0002 0.24411C9.84053 0.24411 9.68468 0.293256 9.55386 0.384876C9.42305 0.476496 9.32359 0.606152 9.26899 0.756243L7.20649 5.94999C7.15392 6.09174 7.06121 6.2151 6.93967 6.305C6.81813 6.39491 6.67304 6.44746 6.52212 6.45624L0.990865 6.81249C0.26899 6.85937 -0.0122599 7.78749 0.540865 8.24687L4.77837 11.7812C4.8968 11.8792 4.98516 12.0086 5.03327 12.1545C5.08137 12.3005 5.08725 12.4571 5.05024 12.6062L3.78462 17.5937C3.56899 18.4375 4.46899 19.1219 5.19087 18.6625L9.58774 15.8781C9.71104 15.7997 9.85413 15.7581 10.0002 15.7581C10.1464 15.7581 10.2894 15.7997 10.4127 15.8781Z"
              fill="#FFC27A"
            />
          </svg>
          <small style="marign-top: 2px" class="mx-2">(20)</small>
        </div> -->

          <!-- <div
          v-if="item.user_info"
          class="border-top d-flex justify-content-between px-4 align-items-center mt-2 py-2 w-100"
        >
          <button class="btn" style="background-color: #1fb9b3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6.00003"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.25 6.00003H18V15.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p
            class="student-course__item-info price-section"
            style="color: #000"
          >
            {{ item.price ?? "N/A" }} {{ $t("riyals") }}
          </p>

          <div
            class="px-3 user_info_description"
            v-if="item.user_info.description"
          >
            {{ item.user_info.description }}
          </div>
        </div> -->
        </div>
        <div class="d-flex justify-content-between px-2 align-items-center">
          <p style="color: #1fb9b3; font-size: 16px">اذهب الى اللقاء</p>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_4986_192319)">
              <path
                opacity="0.5"
                d="M18.3314 11.1377C18.8491 11.1377 19.2689 10.718 19.2689 10.2002C19.2689 9.68243 18.8491 9.2627 18.3314 9.2627V11.1377ZM18.3314 9.2627H4.99805V11.1377H18.3314V9.2627Z"
                fill="#2CB7B3"
              />
              <path
                d="M9.99805 5.2002L4.99805 10.2002L9.99805 15.2002"
                stroke="#2CB7B3"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4986_192319"
                x="-2.33398"
                y="0.200195"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4986_192319"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4986_192319"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
  <!-- <div class="col-md-4 col-12 p-2">
    <div
      class="d-flex border rounded-3 shadow flex-column my-2 gap-2"
      style="height: auto"
    >
      <div class="student-course__image">
        <router-link
          custom
          :to="getRouteLocale('academy-course-show', { id: item.id })"
        >
          <img
            @click="goToCourse(navigate, $event)"
            class="px-2 py-2 rounded-top"
            :src="img"
            :alt="title"
            style="width: 100%; height: 220px"
          />
        </router-link>
      </div>
      <router-link
        style="color: black"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <div class="py-3">
          <div
            class="d-flex justify-content-between align-items-cent px-3"
            style="align-items: baseline"
          ></div>
          <h6 class="text-end px-3">
            {{ title }}
          </h6>
         
        </div>
        <div class="d-flex justify-content-between px-2 align-items-center">
          <p style="color: #1fb9b3; font-size: 16px">اذهب الى اللقاء</p>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_4986_192319)">
              <path
                opacity="0.5"
                d="M18.3314 11.1377C18.8491 11.1377 19.2689 10.718 19.2689 10.2002C19.2689 9.68243 18.8491 9.2627 18.3314 9.2627V11.1377ZM18.3314 9.2627H4.99805V11.1377H18.3314V9.2627Z"
                fill="#2CB7B3"
              />
              <path
                d="M9.99805 5.2002L4.99805 10.2002L9.99805 15.2002"
                stroke="#2CB7B3"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4986_192319"
                x="-2.33398"
                y="0.200195"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4986_192319"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4986_192319"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </router-link>
    </div>
  </div> -->
  <!-- <div class="col-md-4 col-12 p-2">
    <div
      class="d-flex border rounded-3 shadow flex-column my-2 gap-2"
      style="height: auto"
    >
      <div class="student-course__image">
        <router-link
          custom
          :to="getRouteLocale('academy-course-show', { id: item.id })"
        >
          <img
            @click="goToCourse(navigate, $event)"
            class="px-2 py-2 rounded-top"
            :src="img"
            :alt="title"
            style="width: 100%; height: 220px"
          />
        </router-link>
      </div>
      <router-link
        style="color: black"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <div class="py-3">
          <div
            class="d-flex justify-content-between align-items-cent px-3"
            style="align-items: baseline"
          ></div>
          <h6 class="text-end px-3">
            {{ title }}
          </h6>
         
        </div>
        <div class="d-flex justify-content-between px-2 align-items-center">
          <p style="color: #1fb9b3; font-size: 16px">اذهب الى اللقاء</p>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_4986_192319)">
              <path
                opacity="0.5"
                d="M18.3314 11.1377C18.8491 11.1377 19.2689 10.718 19.2689 10.2002C19.2689 9.68243 18.8491 9.2627 18.3314 9.2627V11.1377ZM18.3314 9.2627H4.99805V11.1377H18.3314V9.2627Z"
                fill="#2CB7B3"
              />
              <path
                d="M9.99805 5.2002L4.99805 10.2002L9.99805 15.2002"
                stroke="#2CB7B3"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4986_192319"
                x="-2.33398"
                y="0.200195"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4986_192319"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4986_192319"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </router-link>
    </div>
  </div> -->
  <!-- <div class="col-md-4 col-12 p-2">
    <div
      class="d-flex border rounded-3 shadow flex-column my-2 gap-2"
      style="height: auto"
    >
      <div class="student-course__image">
        <router-link
          custom
          :to="getRouteLocale('academy-course-show', { id: item.id })"
        >
          <img
            @click="goToCourse(navigate, $event)"
            class="px-2 py-2 rounded-top"
            :src="img"
            :alt="title"
            style="width: 100%; height: 220px"
          />
        </router-link>
      </div>
      <router-link
        style="color: black"
        :to="getRouteLocale('academy-course-show', { id: item.id })"
      >
        <div class="py-3">
          <div
            class="d-flex justify-content-between align-items-cent px-3"
            style="align-items: baseline"
          ></div>
          <h6 class="text-end px-3">
            {{ title }}
          </h6>
         
        </div>
        <div class="d-flex justify-content-between px-2 align-items-center">
          <p style="color: #1fb9b3; font-size: 16px">اذهب الى اللقاء</p>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_4986_192319)">
              <path
                opacity="0.5"
                d="M18.3314 11.1377C18.8491 11.1377 19.2689 10.718 19.2689 10.2002C19.2689 9.68243 18.8491 9.2627 18.3314 9.2627V11.1377ZM18.3314 9.2627H4.99805V11.1377H18.3314V9.2627Z"
                fill="#2CB7B3"
              />
              <path
                d="M9.99805 5.2002L4.99805 10.2002L9.99805 15.2002"
                stroke="#2CB7B3"
                stroke-width="1.875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4986_192319"
                x="-2.33398"
                y="0.200195"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4986_192319"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4986_192319"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </router-link>
    </div>
  </div> -->
</template>

<script>
import commonAPI from "@/services/api/common";

export default {
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    typeText() {
      let r = commonAPI.getCourseTypes().find((x) => x.id == this.type);
      return r ? r.name : this.type;
    },
    dateText() {
      if (!this.date) return "N/A";
      let parts = this.date.trim().split("-");

      let date = new Date(parts[2], parts[1], parts[0]);
      let d = date.getDate();
      let m = this.getTranslateMonth(date.getMonth());
      return `${d} ${m}`;
    },
  },
};
</script>

<style></style>
