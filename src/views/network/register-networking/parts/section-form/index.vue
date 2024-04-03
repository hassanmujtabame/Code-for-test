<template>
  <div
    
    style="background-color: #f6f8f9"
    class="mt-5 p-4"
  >
    <div class="container">
      <div class="box bg-white p-3 rounded-4">
        <div class="row align-items-center">
          <div class="col-md-6">
            <!-- image box-->
            <!-- <ImageBox /> -->
            <img
              class="img-fluid"
              src="../../../../../assets/img/company/Frame 1171276775.png"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <h2 id="register-form">
              {{ $t("Register-with-us-as-a-partner") }}
            </h2>
            <p>
              {{ $t("Enter-the-following-data-accurately-partner-with-us") }}
            </p>
            <ValidationObserver
              ref="form"
              tag="form"
              @submit="save"
              autocomplete="off"
              class="row g-3 needs-validation"
              novalidate
            >
              <div
                class="d-flex flex-column gap-2"
                :class="{ 'd-none': tab !== 1 }"
              >
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    :name="$t('company-name')"
                    vid="company_name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      :errors="errors"
                      v-model="itemForm.company_name"
                      :label="$t('company-name')"
                    />
                  </ValidationProvider>
                </div>
                <template v-if="!token">
                  <div class="col-md-4 w-100">
                    <ValidationProvider
                      :name="$t('Email')"
                      vid="email"
                      rules="required|email"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        type="email"
                        v-model="itemForm.email"
                        :label="$t('Email')"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100">
                    <ValidationProvider
                      :name="$t('Phone')"
                      vid="phone"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        type="text"
                        :errors="errors"
                        autocomplete="off"
                        name="phone"
                        :label="$t('Phone')"
                        v-model="itemForm.phone"
                      />
                    </ValidationProvider>
                  </div>
                  <!-- <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('Password')" 
                                vid="password"
                                rules="required"
                                v-slot="{errors}"
                                >
                                <div class="position-relative">
                                    <d-text-input :errors="errors" 
                                    :type="show ? 'text' : 'password'" 
                                     v-model="form.password"
                                    :label="$t('Password')">
                                    <template v-slot:append-icon>
                                        <span style="color: #CDD7D8;font-size: 23px;" @click="show = !show"
                                            class="fa-regular mx-1" :class="{ 'fa-eye': !show, 'fa-eye-slash': show }">
                                        </span>
                                    </template>
                                </d-text-input>
                                
                            </div>                          
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4 w-100">
                                <ValidationProvider
                                :name="$t('Password_confirm')" 
                                vid="password_confirm"
                                rules="required|confirmed:password"
                                v-slot="{errors}"
                                >
                                <div class="position-relative">
                                    <d-text-input :errors="errors" 
                                    :type="showC ? 'text' : 'password'" 
                                     v-model="form.passwordConfirm"
                                    :label="$t('Password-confirm')">
                                    <template v-slot:append-icon>
                                        <span style="color: #CDD7D8;font-size: 23px;" @click="showC = !showC"
                                            class="fa-regular mx-1" :class="{ 'fa-eye': !showC, 'fa-eye-slash': showC }">
                                        </span>
                                    </template>
                                </d-text-input>
                                </div>
                                </ValidationProvider>
                            </div> -->
                </template>
                <div class="col-md-4 w-100 mt-2">
                  <div class="form-check">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('terms_use')"
                      rules="required"
                      vid="terms_use"
                      v-slot="{ errors }"
                    >
                      <div class="form-group">
                        <input
                          :value="itemForm.terms_use"
                          @input="
                            (event) =>
                              (itemForm.terms_use =
                                event.target.checked === true ? true : null)
                          "
                          class="form-check-input"
                          type="checkbox"
                          id="defaultCheck1"
                        />
                        اوافق على
                        <label class="form-check-label" for="defaultCheck1">
                          <router-link
                            :to="getRouteLocale('conditions')"
                            class="m-c"
                          >
                            {{ $t("terms_use") }}
                          </router-link>
                        </label>
                      </div>
                      <d-error-input
                        class="b"
                        style="border: 2px solid #2cb7b3"
                        :errors="errors"
                        v-if="errors.length > 0"
                      />
                    </ValidationProvider>
                  </div>
                </div>
                <button class="btn btn-main" type="button" @click="goToTab2">
                  استمرار
                  <!-- {{ $t("Register-now") }} -->
                </button>
              </div>
              <div
                :class="{ 'd-none': tab !== 2 }"
                class="d-flex flex-column gap-2"
              >
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    :name="$t('company_website')"
                    vid="website"
                    rules="required"
                    class="d-flex flex-column gap-1"
                    v-slot="{ errors }"
                  >
                    <label class="text-dark" for="website"> موقع الشركه </label>
                    <d-text-input
                      class="form-control"
                      id="website"
                      placeholder="ادخل موقع الشركه"
                      :errors="errors"
                      v-model="itemForm.website"
                    />
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    name="books"
                    rules="required"
                    vid="books"
                    class="d-flex flex-column gap-1"
                    v-slot="{ errors }"
                  >
                    <label class="text-dark" for="books">
                      السجل التجارى للشركة
                    </label>
                    <d-text-input
                      class="form-control"
                      placeholder="ادخل السجل التجارى "
                      id="books"
                      :errors="errors"
                      v-model="itemForm.books"
                    />
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    name="address"
                    rules="required"
                    vid="address"
                    class="d-flex flex-column gap-1"
                    v-slot="{ errors }"
                  >
                    <label class="text-dark" for="address">
                      عنوان مقر الشركه المسجل
                    </label>
                    <d-text-input
                      class="form-control"
                      placeholder="ادخل عنوان الشركة"
                      id="address"
                      :errors="errors"
                      v-model="itemForm.address"
                    />
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    :name="$t('specialist_field')"
                    vid="category_id"
                    rules="required"
                    class="d-flex flex-column gap-1"
                    v-slot="{ errors }"
                  >
                    <label class="text-dark" for="country"> التخصص </label>

                    <d-select-input
                      v-model="itemForm.category_id"
                      :errors="errors"
                    >
                      <option value=""></option>
                      <option
                        v-for="(cat, i) in categories"
                        :key="i"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </option>
                    </d-select-input>
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    :name="$t('specialist_field')"
                    vid="category_id"
                    rules="required"
                    class="d-flex flex-column gap-1"
                    v-slot="{ errors }"
                  >
                    <label class="text-dark" for="country"> الدولة </label>
                    <d-select-input v-model="itemForm.country" :errors="errors">
                      <option value=""></option>
                      <option
                        v-for="(cat, i) in countries"
                        :key="i"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </option>
                    </d-select-input>
                  </ValidationProvider>
                </div>
                <button class="btn btn-main" type="button" @click="goToTab3">
                  استمرار
                  <!-- {{ $t("Register-now") }} -->
                </button>
              </div>
              <div
                :class="{ 'd-none': tab !== 3 }"
                class="d-flex flex-column gap-2"
              >
                <div class="text-center">
                  <p style="color: #414042">
                    من الضروري تقديم وثيقة تفصيلية عن نشاط الشركة، بالإضافة إلى
                    وثيقة تأسيس الشركة. كما نرجو إرفاق أي وثائق أخرى ذات صلة
                    بالتراخيص والتصاريح اللازمة لضمان استيفاء جميع المتطلبات
                    الضرورية.
                  </p>
                </div>
                <div class="col-md-4 w-100">
                  <ValidationProvider
                    :name="$t('Commercial_Register')"
                    vid="services"
                    rules="required|ext:pdf"
                    v-slot="{ errors, validate }"
                  >
                    <label
                      style="height: 200px"
                      class="w-100 position-relative border rounded-2"
                    >
                      <input
                        type="file"
                        @change="uploadFile($event) || validate($event)"
                        class="form-control"
                        style="opacity: 0"
                        accept=".pdf"
                        required
                      />
                      <div
                        class="center d-flex flex-column align-items-center justify-content-center"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1327 25.0512H7.65056C3.84991 24.7797 2.14355 21.8581 2.14355 19.2597C2.14355 16.6613 3.84992 13.7268 7.58594 13.4682C8.11596 13.4165 8.58133 13.8302 8.62012 14.3731C8.6589 14.9032 8.25821 15.3686 7.71526 15.4073C5.20735 15.5883 4.08266 17.4757 4.08266 19.2726C4.08266 21.0695 5.20735 22.9569 7.71526 23.1379H10.1327C10.6627 23.1379 11.1022 23.5775 11.1022 24.1075C11.1022 24.6375 10.6627 25.0512 10.1327 25.0512Z"
                            fill="#292D32"
                          />
                          <path
                            d="M22.0378 25.051C22.0119 25.051 21.999 25.051 21.9732 25.051C21.4432 25.051 20.9519 24.6115 20.9519 24.0815C20.9519 23.5256 21.3656 23.1119 21.9086 23.1119C23.4986 23.1119 24.9206 22.556 26.0324 21.5606C28.0491 19.8025 28.1783 17.2687 27.6354 15.4848C27.0924 13.7137 25.5799 11.6841 22.9427 11.3609C22.5161 11.3092 22.18 10.986 22.1024 10.5594C21.5853 7.45685 19.9177 5.3109 17.384 4.53526C14.7726 3.72083 11.7217 4.52233 9.8214 6.51315C7.97278 8.43933 7.54618 11.1412 8.61916 14.1145C8.80014 14.6186 8.54166 15.1745 8.03749 15.3555C7.53332 15.5365 6.97741 15.2779 6.79643 14.7738C5.49076 11.1282 6.08543 7.63783 8.42529 5.18163C10.8169 2.67371 14.6563 1.67829 17.9528 2.68663C20.9778 3.6174 23.1108 6.11239 23.8864 9.57693C26.5236 10.1716 28.6437 12.1754 29.484 14.9418C30.4018 17.9539 29.5745 21.0565 27.3122 23.0214C25.8773 24.3142 24.0028 25.051 22.0378 25.051Z"
                            fill="#292D32"
                          />
                          <path
                            d="M16.0011 28.8519C13.4027 28.8519 10.9724 27.4686 9.64087 25.2322C9.49867 25.0124 9.35647 24.7539 9.24012 24.4695C8.80059 23.5516 8.56787 22.5045 8.56787 21.4186C8.56787 17.3206 11.9031 13.9854 16.0011 13.9854C20.0991 13.9854 23.4344 17.3206 23.4344 21.4186C23.4344 22.5174 23.2017 23.5516 22.7363 24.5083C22.6329 24.7539 22.4907 25.0124 22.3356 25.258C21.0299 27.4686 18.5995 28.8519 16.0011 28.8519ZM16.0011 15.9245C12.9761 15.9245 10.507 18.3936 10.507 21.4186C10.507 22.2201 10.675 22.9699 10.9982 23.655C11.1016 23.8748 11.1921 24.0558 11.2955 24.2239C12.278 25.8915 14.0749 26.9128 15.9882 26.9128C17.9014 26.9128 19.6983 25.8915 20.6679 24.2497C20.7842 24.0558 20.8877 23.8748 20.9653 23.6938C21.3143 22.9828 21.4823 22.233 21.4823 21.4315C21.4953 18.3936 19.0261 15.9245 16.0011 15.9245Z"
                            fill="#292D32"
                          />
                          <path
                            d="M15.2642 23.6679C15.0186 23.6679 14.773 23.5774 14.5791 23.3835L13.2992 22.1037C12.9243 21.7288 12.9243 21.1083 13.2992 20.7334C13.6741 20.3585 14.2946 20.3585 14.6695 20.7334L15.2901 21.3539L17.3585 19.4406C17.7592 19.0787 18.3668 19.1045 18.7288 19.4923C19.0907 19.8802 19.0649 20.5007 18.6771 20.8627L15.9235 23.4094C15.7296 23.5774 15.4969 23.6679 15.2642 23.6679Z"
                            fill="#292D32"
                          />
                        </svg>
                        <h4 style="color: #888">اختر ملفًا</h4>
                        <p style="color: #777; font-size: 15px">PDF</p>
                        <h5
                          style="
                            border: 1px solid #888;
                            background-color: transparent;
                          "
                          class="px-4 py-2 rounded-3 text-dark"
                        >
                          تصفح الملفات
                        </h5>
                      </div>
                      <!-- <svg
                        style="top: 6px; left: 6px"
                        class="position-absolute"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                          fill="#CDD7D8"
                        />
                        <path
                          d="M14.9999 10.2602C14.8099 10.2602 14.6199 10.1902 14.4699 10.0402L11.9999 7.57021L9.52994 10.0402C9.23994 10.3302 8.75994 10.3302 8.46994 10.0402C8.17994 9.75019 8.17994 9.2702 8.46994 8.9802L11.4699 5.9802C11.7599 5.6902 12.2399 5.6902 12.5299 5.9802L15.5299 8.9802C15.8199 9.2702 15.8199 9.75019 15.5299 10.0402C15.3799 10.1902 15.1899 10.2602 14.9999 10.2602Z"
                          fill="#CDD7D8"
                        />
                        <path
                          d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                          fill="#CDD7D8"
                        />
                        <path
                          d="M12 18.2302C9.88995 18.2302 7.76995 17.8902 5.75995 17.2202C5.36995 17.0902 5.15995 16.6602 5.28995 16.2702C5.41995 15.8802 5.84996 15.6602 6.23996 15.8002C9.95996 17.0402 14.05 17.0402 17.77 15.8002C18.16 15.6702 18.59 15.8802 18.72 16.2702C18.85 16.6602 18.64 17.0902 18.25 17.2202C16.23 17.9002 14.11 18.2302 12 18.2302Z"
                          fill="#CDD7D8"
                        />
                      </svg> -->
                      <!-- <p
                        style="top: 6px; right: 13px; color: #979797"
                        class="position-absolute px-2"
                      >
                        {{ $t("Commercial_Register_max_10") }}
                      </p> -->
                    </label>
                    <div
                      v-if="errors.length !== 0"
                      class="col-12 text-input-error"
                    >
                      {{ errors[0] }}
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- <div class="col-md-4 w-100">
                <ValidationProvider
                  :name="$t('company_website')"
                  vid="website"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <d-text-input
                    :errors="errors"
                    :label="$t('company_website')"
                    v-model="itemForm.website"
                  />
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100">
                <ValidationProvider
                  :name="$t('specialist_field')"
                  vid="category_id"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <d-select-input
                    v-model="itemForm.category_id"
                    :errors="errors"
                    :label="$t('specialist_field')"
                  >
                    <option value=""></option>
                    <option
                      v-for="(cat, i) in categories"
                      :key="i"
                      :value="cat.id"
                    >
                      {{ cat.name }}
                    </option>
                  </d-select-input>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100">
                <ValidationProvider
                  :name="$t('provided-services')"
                  vid="services"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <d-multi-select-tag
                    v-model="itemForm.services"
                    :placeholder="$t('add_service')"
                  >
                  </d-multi-select-tag>
                  <div
                    v-if="errors.length !== 0"
                    class="col-12 text-input-error"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100">
                <ValidationProvider
                  :name="$t('What_will_you_offer_to_Riadiat')"
                  vid="description"
                  rules=""
                  v-slot="{ errors }"
                >
                  <label class="form-label">{{
                    $t("What_will_you_offer_to_Riadiat")
                  }}</label>
                  <d-ckeditor-classic
                    v-model="itemForm.description"
                    class="form-control px-2"
                    cols="30"
                    rows="5"
                    :placeholder="$t('What_will_you_offer_to_Riadiat')"
                  ></d-ckeditor-classic>
                  <div
                    v-if="errors.length !== 0"
                    class="col-12 text-input-error"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100">
                <ValidationProvider
                  :name="$t('Commercial_Register')"
                  vid="services"
                  rules="required|ext:pdf"
                  v-slot="{ errors, validate }"
                >
                  <label class="w-100 position-relative border rounded-2">
                    <input
                      type="file"
                      @change="uploadFile($event) || validate($event)"
                      class="form-control opacity-0"
                      accept=".pdf"
                      required
                    />
                    <svg
                      style="top: 6px; left: 6px"
                      class="position-absolute"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                        fill="#CDD7D8"
                      />
                      <path
                        d="M14.9999 10.2602C14.8099 10.2602 14.6199 10.1902 14.4699 10.0402L11.9999 7.57021L9.52994 10.0402C9.23994 10.3302 8.75994 10.3302 8.46994 10.0402C8.17994 9.75019 8.17994 9.2702 8.46994 8.9802L11.4699 5.9802C11.7599 5.6902 12.2399 5.6902 12.5299 5.9802L15.5299 8.9802C15.8199 9.2702 15.8199 9.75019 15.5299 10.0402C15.3799 10.1902 15.1899 10.2602 14.9999 10.2602Z"
                        fill="#CDD7D8"
                      />
                      <path
                        d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                        fill="#CDD7D8"
                      />
                      <path
                        d="M12 18.2302C9.88995 18.2302 7.76995 17.8902 5.75995 17.2202C5.36995 17.0902 5.15995 16.6602 5.28995 16.2702C5.41995 15.8802 5.84996 15.6602 6.23996 15.8002C9.95996 17.0402 14.05 17.0402 17.77 15.8002C18.16 15.6702 18.59 15.8802 18.72 16.2702C18.85 16.6602 18.64 17.0902 18.25 17.2202C16.23 17.9002 14.11 18.2302 12 18.2302Z"
                        fill="#CDD7D8"
                      />
                    </svg>
                    <p
                      style="top: 6px; right: 13px; color: #979797"
                      class="position-absolute px-2"
                    >
                      {{ $t("Commercial_Register_max_10") }}
                    </p>
                  </label>
                  <div
                    v-if="errors.length !== 0"
                    class="col-12 text-input-error"
                  >
                    {{ errors[0] }}
                  </div>
                </ValidationProvider>
              </div> -->

              <!-- <div class="col-md-4 w-100 mt-2">
                <div class="form-check">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('terms_use')"
                    rules="required"
                    vid="terms_use"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <input
                        :value="itemForm.terms_use"
                        @input="
                          (event) =>
                            (itemForm.terms_use =
                              event.target.checked === true ? true : null)
                        "
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        أؤكد على اني أوافق على
                        <router-link
                          :to="getRouteLocale('terms-and-conditions')"
                          class="m-c"
                        >
                          {{ $t("terms_use") }}
                        </router-link>
                      </label>
                    </div>
                    <d-error-input :errors="errors" v-if="errors.length > 0" />
                  </ValidationProvider>
                </div>
              </div> -->
              <div v-if="tab === 3" class="col-12 m-2 text-start">
                <button
                  class="btn btn-main"
                  type="submit"
                  @click="save"
                  role="button"
                >
                  تسجيل
                  <!-- {{ $t("Register-now") }} -->
                </button>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PartnersAPI from "@/services/api/partners.js";
import ImageBox from "./image-box.vue";
import commonAPI from "@/services/api/common";

export default {
  name: "form-register",
  components: {
    ImageBox,
  },
  data: () => {
    return {
      loading: false,
      categories: [],
      countries: [],
      tab: 1,
      itemForm: {
        company_name: "",
        books: "",
        country: "",
        website: "",
        services: "",
        category_id: "",
        password: "",
        password_confirm: "",
        email: "",
        description: "",
        phone: "",
        terms_use: false,
        address: "",

        pdf: null,
      },
      isSubscribedCompany: false,
    };
  },
  methods: {
    getData(dc) {
      const d = new Date(dc);
      const c = new Date();
      const dd = 2;
      const cd = Math.floor(
        (d.getTime() - c.getTime()) / (1000 * 60 * 60 * 24)
      );

      let o = cd > 0 ? 1 : 1 - Math.abs(cd) / dd;

      return o;
    },
    redirectoHome() {
      this.refreshPage({ name: "network-home" });
    },
    openSuccessRegister() {
      //this.fireOpenDialog('success-register-as-partner')
      let dataEvt = {
        title: "نشكرك على تسجيلك معنا",
        descriptionClass: "m-c",
        description: `سنتواصل معك خلال الايام القليلة القادمة لتأكيد بيانتك و تأكيد الاشتراك`,
        btns: [{ title: this.$t("Home"), action: () => this.redirectoHome() }],
        onClose: this.redirectoHome,
        icon: true,
      };
      this.showSuccessMsg(dataEvt);
    },
    async save(evt) {
      if (evt) evt.preventDefault();
      //   if (!this.isSubscribedCompany) {
      //     this.openConfirmDialog();
      //   } else {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.log("form invalid");
        return;
      }

      try {
        let { data } = await PartnersAPI.addItem(this.itemForm, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        });
        if (data.success) {
          Object.keys(this.itemForm).forEach((key) => {
            this.itemForm[key] = null;
          });
          this.openSuccessRegister();
          this.$nextTick(() => {
            if (this.$refs["form"]) {
              this.$refs.form.reset();
            }
          });
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.log("error", error);
        if (error.response) {
          let response = error.response;
          console.log("error", response);
          if (response.status == 422) {
            if (response.data.errors)
              this.$refs.form.setErrors(response.data.errors);
          }
        }
      }
    },
    // async save(evt) {
    //   if (evt) evt.preventDefault();
    //   if (!this.isSubscribedCompany) {
    //     this.openConfirmDialog();
    //   } else {
    //     let valid = await this.$refs.form.validate();
    //     if (!valid) {
    //       console.log("form invalid");
    //       return;
    //     }
    //     let formData = new FormData();
    //     Object.keys(this.itemForm).forEach((key) => {
    //       if (
    //         this.token &&
    //         ["email", "phone", "password", "password_confirm"].includes(key)
    //       )
    //         return;
    //       formData.append(key, this.itemForm[key]);
    //     });
    //     try {
    //       let { data } = await PartnersAPI.addItem(formData);
    //       if (data.success) {
    //         Object.keys(this.itemForm).forEach((key) => {
    //           this.itemForm[key] = null;
    //         });
    //         this.openSuccessRegister();
    //         this.$nextTick(() => {
    //           if (this.$refs["form"]) {
    //             this.$refs.form.reset();
    //           }
    //         });
    //       } else {
    //         window.SwalError(data.message);
    //       }
    //     } catch (error) {
    //       console.log("error", error);
    //       if (error.response) {
    //         let response = error.response;
    //         console.log("error", response);
    //         if (response.status == 422) {
    //           if (response.data.errors)
    //             this.$refs.form.setErrors(response.data.errors);
    //         }
    //       }
    //     }
    //   }
    // },
    async loadCountries() {
      try {
        let { data } = await commonAPI.getCountries();
        if (data.success) {
          this.countries = data.data;
        }
      } catch (error) {
        console.log(error);
        //
      }
    },
    goToTab2(e) {
      e.preventDefault();
      if (!this.token) {
        if (
          this.itemForm.company_name &&
          this.itemForm.email &&
          this.itemForm.phone &&
          this.itemForm.terms_use
        ) {
          return (this.tab = 2);
        }
      } else {
        if (this.itemForm.company_name && this.itemForm.terms_use) {
          return (this.tab = 2);
        }
      }

      //   if (
      //     this.itemForm.company_name &&
      //     this.itemForm.email &&
      //     this.itemForm.phone
      //   ) {
      //     return (this.tab = 2);
      //   }
    },
    goToTab3(e) {
      e.preventDefault();
      //   console.log(
      //     this.itemForm.address,
      //     this.itemForm.country,
      //     this.itemForm.category_id,
      //     this.itemForm.books
      //   );
      if (
        this.itemForm.address &&
        this.itemForm.country &&
        this.itemForm.category_id &&
        this.itemForm.books
      ) {
        return (this.tab = 3);
      }
    },
    // uploadFile(evt) {
    //   if (!evt.target.files && !evt.target.files[0]) {
    //     this.itemForm.pdf = null;

    //     return;
    //   }
    //   this.itemForm.pdf = evt.target.files[0];
    // },
    uploadFile(event) {
      const file = event.target.files[0];
      if (!file) {
        this.itemForm.pdf = null;
        return;
      }
      this.itemForm.pdf = file;
    },
    async loadCategories() {
      try {
        let { data } = await PartnersAPI.getCategories();
        if (data.success) {
          this.categories = data.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    openConfirmDialog() {
      let dataEvt = {
        title: "",
        description: `يجب عليك الاشتراك فى باقة الشركات`,
        type: "warning",
        btns: [
          {
            title: this.$t("subscribe"),
            action: () => this.$router.push({ name: "network-subscribe" }),
          },
        ],
      };
      this.showConfirmMsg(dataEvt);
      //this.fireOpenDialog('go-to-pther-section',dept)
    },
    checkSubscribedCompany() {
      for (
        let index = 0;
        index < this.user.system_subscriptions.length;
        index++
      ) {
        const element = this.user.system_subscriptions[index];
        if (
          element.system_package.related_to.key == "network" &&
          element.system_package.name.includes("شرك")
        ) {
          // this.subscribedType = element.system_package.id
          // console.log('yay you are company', true)
          this.isSubscribedCompany = true;
        } else {
          this.isSubscribedCompany = false;
        }
      }
      // console.log('user_system', this.user.system_subscriptions)
    },
  },

  // async save(evt) {
  //     if (evt) evt.preventDefault();
  //     if (!this.isSubscribedCompany) {
  //         this.openConfirmDialog();
  //     }
  //     else {
  //         let valid = await this.$refs.form.validate();
  //         if (!valid) {
  //             console.log('form invalid');
  //             return;
  //         }
  //         let formData = new FormData();
  //         Object.keys(this.itemForm).forEach(key => {
  //             if (this.token && ['email', 'phone', 'password', 'password_confirm'].includes(key))
  //                 return;
  //             formData.append(key, this.itemForm[key])
  //         })
  //         try {
  //             let { data } = await PartnersAPI.addItem(formData)
  //             if (data.success) {
  //                 Object.keys(this.itemForm).forEach(key => {
  //                     this.itemForm[key] = null;
  //                 })
  //                 this.openSuccessRegister()
  //                 this.$nextTick(() => {
  //                     if (this.$refs["form"]) {
  //                         this.$refs.form.reset();
  //                     }
  //                 });
  //             }
  //             else {
  //                 window.SwalError(data.message)
  //             }
  //         } catch (error) {
  //             console.log('error', error)
  //             if (error.response) {
  //                 let response = error.response
  //                 console.log('error', response)
  //                 if (response.status == 422) {
  //                     if (response.data.errors)
  //                         this.$refs.form.setErrors(response.data.errors)
  //                 }
  //             }
  //         }
  //     }
  // },

  mounted() {
    this.loadCountries();
    this.loadCategories();
    this.checkSubscribedCompany();
  },
};
</script>

<style scoped>
.eye-password-icon {
  top: 12px;
  left: 10px;
}
.b {
  border: 2px solid #2cb7b3 !important;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
