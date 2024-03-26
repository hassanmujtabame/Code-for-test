<template>
  <div style="background-color: #f6f8f9" class="p-4">
    <div id="regestr" class="container">
      <div class="box bg-white p-3 rounded-4 mt-5">
        <div class="row">
          <div class="col-md-6">
            <div class="box h-100">
              <div class="h-100 position-relative">
                <img
                  class="img-fluid"
                  src="../../../../../../assets/img/academy/sign/Frame.png"
                />
                <!-- <b-img
                  fluid
                  src="../../../../../../assets/img/academy/sign/Frame.png"
                /> -->
                <!-- <b-img
                  fluid
                  src="`../../../../../../assets/img/academy/sign/Frame 1171276775.png`"
                /> -->

                <!-- <img style="width: 100%;" class="h-100" :src="`${publicPath}assets/img/wtIm.jpeg`" alt=""> -->
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <!-- <h2>سجل معنا كمدرب</h2>
            <p>أدخل البيانات التالية بدقة لتكون شريك معنا</p> -->
            <ValidationObserver
              ref="form"
              tag="div"
              class="row g-3 needs-validation"
            >
              <template>
                <div :class="{ bye: tab !== 1 }" class="d-flex flex-column">
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('name')"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom03">الاسم</label>
                      <d-text-input
                        type="text"
                        :errors="errors"
                        v-model="itemForm.name"
                        class="form-control"
                        id="validationCustom03"
                        placeholder="ادخل الاسم"
                      />
                    </ValidationProvider>
                  </div> -->

                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('email')"
                      rules="required"
                      vid="email"
                      v-slot="{ errors }"
                    >
                      <label for="email">البريد الالكترونى</label>
                      <d-text-input
                        :errors="errors"
                        type="email"
                        v-model="itemForm.email"
                        class="form-control"
                        placeholder="ادخل البريد الالكترونى"
                        id="email"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>

                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('phone-number')"
                      rules="required|numeric"
                      vid="phone"
                      v-slot="{ errors }"
                    >
                      <label for="phone">رقم الجوال </label>
                      <d-text-input
                        :errors="errors"
                        type="number"
                        v-model="itemForm.phone"
                        class="form-control"
                        placeholder="ادخل رقم الجوال"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom99">كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password"
                        class="form-control"
                        id="validationCustom99"
                        placeholder="ادخل كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password_confirmation"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom11">تاكيد كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password_confirmation"
                        class="form-control"
                        id="validationCustom11"
                        placeholder="تاكيد كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex gap-1 flex-column"
                      :name="$t('password')"
                      rules="required"
                      vid="password"
                      v-slot="{ errors }"
                    >
                      <label for="">كلمه السر</label>
                      <d-text-input
                        :errors="errors"
                        id="password-register"
                        :type="!show ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.password"
                        :label="$t('Password')"
                        autocomplete="new-password"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('password-confirmation')"
                      rules="required"
                      vid="password_confirmation"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        id="password-register-confirm"
                        :type="!showC ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.password_confirmation"
                        :label="$t('Password-confirm')"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="showC = !showC"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !showC, 'fa-eye-slash': showC }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('identity-id')"
                    rules="required|numeric"
                    vid="identity_id"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      :errors="errors"
                      type="text"
                      :label="$t('identity-id')"
                      v-model="itemForm.identity_id"
                      class="form-control"
                    >
                    </d-text-input>
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('gender')"
                    rules="required"
                    vid="gender"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <d-select-input
                        :errors="errors"
                        v-model="itemForm.gender"
                        :label="$t('gender')"
                      >
                        <option selected disabled>الجنس</option>
                        <option value="male">{{ $t("Male") }}</option>
                        <option value="female">{{ $t("Female") }}</option>
                      </d-select-input>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('birthday')"
                    rules="required"
                    vid="birthday"
                    v-slot="{ errors }"
                  >
                    <div class="form-group">
                      <label class="form-label">{{ $t("birthday") }} </label>
                      <div class="w-100 position-relative">
                        <vc-date-picker
                          v-model="itemForm.birthday"
                          mode="date"
                          is24hr
                          :modelConfig="modelConfig"
                        >
                          <template
                            v-slot="{ inputValue, togglePopover, inputEvents }"
                          >
                            <input
                              readonly
                              type="text"
                              :value="inputValue"
                              v-on="inputEvents"
                              class="form-control px-3"
                            />
                            <svg
                              @click="togglePopover"
                              style="top: 6px; left: 6px"
                              class="position-absolute clickable"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M8.5 14.4998C8.37 14.4998 8.24 14.4698 8.12 14.4198C7.99 14.3698 7.89 14.2998 7.79 14.2098C7.61 14.0198 7.5 13.7698 7.5 13.4998C7.5 13.3698 7.53 13.2398 7.58 13.1198C7.63 12.9998 7.7 12.8898 7.79 12.7898C7.89 12.6998 7.99 12.6298 8.12 12.5798C8.48 12.4298 8.93 12.5098 9.21 12.7898C9.39 12.9798 9.5 13.2398 9.5 13.4998C9.5 13.5598 9.49 13.6298 9.48 13.6998C9.47 13.7598 9.45 13.8198 9.42 13.8798C9.4 13.9398 9.37 13.9998 9.33 14.0598C9.3 14.1098 9.25 14.1598 9.21 14.2098C9.02 14.3898 8.76 14.4998 8.5 14.4998Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.39 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.8 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M15.5 14.4999C15.37 14.4999 15.24 14.4699 15.12 14.4199C14.99 14.3699 14.89 14.2999 14.79 14.2099C14.75 14.1599 14.71 14.1099 14.67 14.0599C14.63 13.9999 14.6 13.9399 14.58 13.8799C14.55 13.8199 14.53 13.7599 14.52 13.6999C14.51 13.6299 14.5 13.5599 14.5 13.4999C14.5 13.2399 14.61 12.9799 14.79 12.7899C14.89 12.6999 14.99 12.6299 15.12 12.5799C15.49 12.4199 15.93 12.5099 16.21 12.7899C16.39 12.9799 16.5 13.2399 16.5 13.4999C16.5 13.5599 16.49 13.6299 16.48 13.6999C16.47 13.7599 16.45 13.8199 16.42 13.8799C16.4 13.9399 16.37 13.9999 16.33 14.0599C16.3 14.1099 16.25 14.1599 16.21 14.2099C16.02 14.3899 15.76 14.4999 15.5 14.4999Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M8.5 18.0002C8.37 18.0002 8.24 17.9702 8.12 17.9202C8 17.8702 7.89 17.8002 7.79 17.7102C7.61 17.5202 7.5 17.2602 7.5 17.0002C7.5 16.8702 7.53 16.7402 7.58 16.6202C7.63 16.4902 7.7 16.3802 7.79 16.2902C8.16 15.9202 8.84 15.9202 9.21 16.2902C9.39 16.4802 9.5 16.7402 9.5 17.0002C9.5 17.2602 9.39 17.5202 9.21 17.7102C9.02 17.8902 8.76 18.0002 8.5 18.0002Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M12 18.0002C11.74 18.0002 11.48 17.8902 11.29 17.7102C11.11 17.5202 11 17.2602 11 17.0002C11 16.8702 11.03 16.7402 11.08 16.6202C11.13 16.4902 11.2 16.3802 11.29 16.2902C11.66 15.9202 12.34 15.9202 12.71 16.2902C12.8 16.3802 12.87 16.4902 12.92 16.6202C12.97 16.7402 13 16.8702 13 17.0002C13 17.2602 12.89 17.5202 12.71 17.7102C12.52 17.8902 12.26 18.0002 12 18.0002Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M15.5 17.9999C15.24 17.9999 14.98 17.8899 14.79 17.7099C14.7 17.6199 14.63 17.5099 14.58 17.3799C14.53 17.2599 14.5 17.1299 14.5 16.9999C14.5 16.8699 14.53 16.7399 14.58 16.6199C14.63 16.4899 14.7 16.3799 14.79 16.2899C15.02 16.0599 15.37 15.9499 15.69 16.0199C15.76 16.0299 15.82 16.0499 15.88 16.0799C15.94 16.0999 16 16.1299 16.06 16.1699C16.11 16.1999 16.16 16.2499 16.21 16.2899C16.39 16.4799 16.5 16.7399 16.5 16.9999C16.5 17.2599 16.39 17.5199 16.21 17.7099C16.02 17.8899 15.76 17.9999 15.5 17.9999Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
                                fill="#CDD7D8"
                              />
                              <path
                                d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
                                fill="#CDD7D8"
                              />
                            </svg>
                          </template>
                        </vc-date-picker>
                      </div>
                    </div>
                    <d-error-input :errors="errors" v-if="errors.length > 0" />
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('Country')"
                    rules="required"
                    vid="country_id"
                    v-slot="{ errors }"
                  >
                    <d-select-input
                      :errors="errors"
                      v-model="itemForm.country_id"
                      :label="$t('Country')"
                    >
                      <option selected disabled>الدولة</option>
                      <option
                        v-for="(country, i) in countries"
                        :key="i"
                        :value="country.id"
                      >
                        {{ country.name }}
                      </option>
                    </d-select-input>
                  </ValidationProvider>
                </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('city')"
                    rules="required"
                    vid="city_id"
                    v-slot="{ errors }"
                    ><label class="form-label">{{}}</label>
                    <select
                      :errors="errors"
                      v-model="itemForm.city_id"
                      :label="$t('city')"
                    >
                      <option selected disabled>المدينة</option>
                      <option
                        v-for="(city, i) in cities"
                        :key="i"
                        :value="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
                  </ValidationProvider>
                </div> -->
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
                            style="border: 2px solid #2cb7b3"
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
                        <d-error-input
                          :errors="errors"
                          v-if="errors.length > 0"
                        />
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-12 my-4">
                    <button
                      style="
                        background-color: transparent;
                        border: 1px solid #2cb7b3;
                        color: #2cb7b3;
                      "
                      class="btn btn-hover px-4 py-2"
                      :disabled="loading"
                      @click="goToTab2"
                      role="button"
                    >
                      <i
                        v-if="loading"
                        class="fa fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                      استمرار
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M13.3327 8.75C13.7469 8.75 14.0827 8.41421 14.0827 8C14.0827 7.58579 13.7469 7.25 13.3327 7.25V8.75ZM13.3327 7.25H2.66602V8.75H13.3327V7.25Z"
                          fill="#2CB7B3"
                        />
                        <path
                          d="M6.66602 4L2.66602 8L6.66602 12"
                          stroke="#2CB7B3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div :class="{ bye: tab !== 2 }" class="d-flex flex-column">
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('name')"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom03">الاسم</label>
                      <d-text-input
                        type="text"
                        :errors="errors"
                        v-model="itemForm.name"
                        class="form-control"
                        id="validationCustom03"
                        placeholder="ادخل الاسم"
                      />
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('email')"
                      rules="required"
                      vid="email"
                      v-slot="{ errors }"
                    >
                      <label for="email">البريد الالكترونى</label>
                      <d-text-input
                        :errors="errors"
                        type="email"
                        v-model="itemForm.email"
                        class="form-control"
                        placeholder="ادخل البريد الالكترونى"
                        id="email"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('phone-number')"
                      rules="required|numeric"
                      vid="phone"
                      v-slot="{ errors }"
                    >
                      <label for="phone">رقم الجوال </label>
                      <d-text-input
                        :errors="errors"
                        type="number"
                        v-model="itemForm.phone"
                        class="form-control"
                        placeholder="ادخل رقم الجوال"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom99">كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password"
                        class="form-control"
                        id="validationCustom99"
                        placeholder="ادخل كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password_confirmation"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom11">تاكيد كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password_confirmation"
                        class="form-control"
                        id="validationCustom11"
                        placeholder="تاكيد كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex gap-1 flex-column"
                      :name="$t('password')"
                      rules="required"
                      vid="password"
                      v-slot="{ errors }"
                    >
                      <label for="">كلمه السر</label>
                      <d-text-input
                        :errors="errors"
                        id="password-register"
                        :type="!show ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.password"
                        :label="$t('Password')"
                        autocomplete="new-password"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('password-confirmation')"
                      rules="required"
                      vid="password_confirmation"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        id="password-register-confirm"
                        :type="!showC ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.passwordConfirm"
                        :label="$t('Password-confirm')"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('identity-id')"
                      rules="required|numeric"
                      vid="identity_id"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        type="text"
                        :label="$t('identity-id')"
                        v-model="itemForm.identity_id"
                        class="form-control"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('gender')"
                      rules="required"
                      vid="gender"
                      v-slot="{ errors }"
                    >
                      <div class="form-group">
                        <d-select-input
                          :errors="errors"
                          v-model="itemForm.gender"
                          :label="$t('gender')"
                        >
                          <option selected disabled>الجنس</option>
                          <option value="male">{{ $t("Male") }}</option>
                          <option value="female">{{ $t("Female") }}</option>
                        </d-select-input>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('birthday')"
                      rules="required"
                      vid="birthday"
                      v-slot="{ errors }"
                    >
                      <div class="form-group">
                        <label class="form-label">{{ $t("birthday") }} </label>
                        <div class="w-100 position-relative">
                          <vc-date-picker
                            v-model="itemForm.birthday"
                            mode="date"
                            is24hr
                            :modelConfig="modelConfig"
                          >
                            <template
                              v-slot="{
                                inputValue,
                                togglePopover,
                                inputEvents,
                              }"
                            >
                              <input
                                readonly
                                type="text"
                                :value="inputValue"
                                v-on="inputEvents"
                                class="form-control px-3"
                              />
                              <svg
                                @click="togglePopover"
                                style="top: 6px; left: 6px"
                                class="position-absolute clickable"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M8.5 14.4998C8.37 14.4998 8.24 14.4698 8.12 14.4198C7.99 14.3698 7.89 14.2998 7.79 14.2098C7.61 14.0198 7.5 13.7698 7.5 13.4998C7.5 13.3698 7.53 13.2398 7.58 13.1198C7.63 12.9998 7.7 12.8898 7.79 12.7898C7.89 12.6998 7.99 12.6298 8.12 12.5798C8.48 12.4298 8.93 12.5098 9.21 12.7898C9.39 12.9798 9.5 13.2398 9.5 13.4998C9.5 13.5598 9.49 13.6298 9.48 13.6998C9.47 13.7598 9.45 13.8198 9.42 13.8798C9.4 13.9398 9.37 13.9998 9.33 14.0598C9.3 14.1098 9.25 14.1598 9.21 14.2098C9.02 14.3898 8.76 14.4998 8.5 14.4998Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.39 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.8 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M15.5 14.4999C15.37 14.4999 15.24 14.4699 15.12 14.4199C14.99 14.3699 14.89 14.2999 14.79 14.2099C14.75 14.1599 14.71 14.1099 14.67 14.0599C14.63 13.9999 14.6 13.9399 14.58 13.8799C14.55 13.8199 14.53 13.7599 14.52 13.6999C14.51 13.6299 14.5 13.5599 14.5 13.4999C14.5 13.2399 14.61 12.9799 14.79 12.7899C14.89 12.6999 14.99 12.6299 15.12 12.5799C15.49 12.4199 15.93 12.5099 16.21 12.7899C16.39 12.9799 16.5 13.2399 16.5 13.4999C16.5 13.5599 16.49 13.6299 16.48 13.6999C16.47 13.7599 16.45 13.8199 16.42 13.8799C16.4 13.9399 16.37 13.9999 16.33 14.0599C16.3 14.1099 16.25 14.1599 16.21 14.2099C16.02 14.3899 15.76 14.4999 15.5 14.4999Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M8.5 18.0002C8.37 18.0002 8.24 17.9702 8.12 17.9202C8 17.8702 7.89 17.8002 7.79 17.7102C7.61 17.5202 7.5 17.2602 7.5 17.0002C7.5 16.8702 7.53 16.7402 7.58 16.6202C7.63 16.4902 7.7 16.3802 7.79 16.2902C8.16 15.9202 8.84 15.9202 9.21 16.2902C9.39 16.4802 9.5 16.7402 9.5 17.0002C9.5 17.2602 9.39 17.5202 9.21 17.7102C9.02 17.8902 8.76 18.0002 8.5 18.0002Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M12 18.0002C11.74 18.0002 11.48 17.8902 11.29 17.7102C11.11 17.5202 11 17.2602 11 17.0002C11 16.8702 11.03 16.7402 11.08 16.6202C11.13 16.4902 11.2 16.3802 11.29 16.2902C11.66 15.9202 12.34 15.9202 12.71 16.2902C12.8 16.3802 12.87 16.4902 12.92 16.6202C12.97 16.7402 13 16.8702 13 17.0002C13 17.2602 12.89 17.5202 12.71 17.7102C12.52 17.8902 12.26 18.0002 12 18.0002Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M15.5 17.9999C15.24 17.9999 14.98 17.8899 14.79 17.7099C14.7 17.6199 14.63 17.5099 14.58 17.3799C14.53 17.2599 14.5 17.1299 14.5 16.9999C14.5 16.8699 14.53 16.7399 14.58 16.6199C14.63 16.4899 14.7 16.3799 14.79 16.2899C15.02 16.0599 15.37 15.9499 15.69 16.0199C15.76 16.0299 15.82 16.0499 15.88 16.0799C15.94 16.0999 16 16.1299 16.06 16.1699C16.11 16.1999 16.16 16.2499 16.21 16.2899C16.39 16.4799 16.5 16.7399 16.5 16.9999C16.5 17.2599 16.39 17.5199 16.21 17.7099C16.02 17.8899 15.76 17.9999 15.5 17.9999Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z"
                                  fill="#CDD7D8"
                                />
                                <path
                                  d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z"
                                  fill="#CDD7D8"
                                />
                              </svg>
                            </template>
                          </vc-date-picker>
                        </div>
                      </div>
                      <d-error-input
                        :errors="errors"
                        v-if="errors.length > 0"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('Country')"
                      rules="required"
                      vid="country_id"
                      v-slot="{ errors }"
                    >
                      <d-select-input
                        :errors="errors"
                        v-model="itemForm.country_id"
                        :label="$t('Country')"
                      >
                        <option selected disabled>الدولة</option>
                        <option
                          v-for="(country, i) in countries"
                          :key="i"
                          :value="country.id"
                        >
                          {{ country.name }}
                        </option>
                      </d-select-input>
                    </ValidationProvider>
                  </div>

                  <!-- <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('city')"
                    rules="required"
                    vid="city_id"
                    v-slot="{ errors }"
                    ><label class="form-label">{{}}</label>
                    <select
                      :errors="errors"
                      v-model="itemForm.city_id"
                      :label="$t('city')"
                    >
                      <option selected disabled>المدينة</option>
                      <option
                        v-for="(city, i) in cities"
                        :key="i"
                        :value="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
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
                            style="border: 2px solid #2cb7b3"
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
                        <d-error-input
                          :errors="errors"
                          v-if="errors.length > 0"
                        />
                      </ValidationProvider>
                    </div>
                  </div> -->
                  <div class="col-12 my-4">
                    <button
                      style="
                        background-color: transparent;
                        border: 1px solid #2cb7b3;
                        color: #2cb7b3;
                      "
                      class="btn btn-hover px-4 py-2"
                      :disabled="loading"
                      @click="goToTab3"
                      role="button"
                    >
                      <i
                        v-if="loading"
                        class="fa fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                      استمرار
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M13.3327 8.75C13.7469 8.75 14.0827 8.41421 14.0827 8C14.0827 7.58579 13.7469 7.25 13.3327 7.25V8.75ZM13.3327 7.25H2.66602V8.75H13.3327V7.25Z"
                          fill="#2CB7B3"
                        />
                        <path
                          d="M6.66602 4L2.66602 8L6.66602 12"
                          stroke="#2CB7B3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div :class="{ bye: tab !== 3 }" class="d-flex flex-column">
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('Specialization')"
                      rules="required"
                      vid="department_id"
                      v-slot="{ errors }"
                    >
                      <d-select-input
                        :errors="errors"
                        v-model="itemForm.department_id"
                        :label="$t('Specialization')"
                      >
                        <option selected disabled>مجال التخصص</option>
                        <option
                          v-for="(department, i) in departments"
                          :key="i"
                          :value="department.id"
                        >
                          {{ department.name }}
                        </option>
                      </d-select-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('education-degree')"
                      rules="required"
                      vid="scientific_degree"
                      v-slot="{ errors }"
                    >
                      <label
                        for="
                    "
                      >
                        الدرجة العلمية
                      </label>
                      <d-select-input
                        :errors="errors"
                        v-model="itemForm.scientific_degree"
                      >
                        <option selected disabled>الدرجة العلمية</option>
                        <option
                          v-for="(degree, i) in degrees"
                          :key="i"
                          :value="degree.id"
                        >
                          {{ degree.name }}
                        </option>
                      </d-select-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('job-position')"
                      rules="required"
                      vid="job_title"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        v-model="itemForm.job_title"
                        type="text"
                        placeholder="اللقب الوظيفى"
                        class="form-control"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('years_experience')"
                      rules="required|numeric"
                      vid="years_experience"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        v-model="itemForm.years_experience"
                        type="text"
                        placeholder="سنوات الخبرة"
                        class="form-control"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('about-you')"
                      rules="required"
                      vid="bio"
                      v-slot="{ errors }"
                    >
                      <d-textarea-input
                        :errors="errors"
                        v-model="itemForm.bio"
                        class="form-control"
                        rows="5"
                        placeholder="نبذه عنك"
                      ></d-textarea-input>
                    </ValidationProvider>
                  </div>

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('name')"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom03">الاسم</label>
                      <d-text-input
                        type="text"
                        :errors="errors"
                        v-model="itemForm.name"
                        class="form-control"
                        id="validationCustom03"
                        placeholder="ادخل الاسم"
                      />
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('email')"
                      rules="required"
                      vid="email"
                      v-slot="{ errors }"
                    >
                      <label for="email">البريد الالكترونى</label>
                      <d-text-input
                        :errors="errors"
                        type="email"
                        v-model="itemForm.email"
                        class="form-control"
                        placeholder="ادخل البريد الالكترونى"
                        id="email"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('phone-number')"
                      rules="required|numeric"
                      vid="phone"
                      v-slot="{ errors }"
                    >
                      <label for="phone">رقم الجوال </label>
                      <d-text-input
                        :errors="errors"
                        type="number"
                        v-model="itemForm.phone"
                        class="form-control"
                        placeholder="ادخل رقم الجوال"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom99">كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password"
                        class="form-control"
                        id="validationCustom99"
                        placeholder="ادخل كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password_confirmation"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom11">تاكيد كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password_confirmation"
                        class="form-control"
                        id="validationCustom11"
                        placeholder="تاكيد كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex gap-1 flex-column"
                      :name="$t('password')"
                      rules="required"
                      vid="password"
                      v-slot="{ errors }"
                    >
                      <label for="">كلمه السر</label>
                      <d-text-input
                        :errors="errors"
                        id="password-register"
                        :type="!show ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.password"
                        :label="$t('Password')"
                        autocomplete="new-password"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('password-confirmation')"
                      rules="required"
                      vid="password_confirmation"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        id="password-register-confirm"
                        :type="!showC ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.passwordConfirm"
                        :label="$t('Password-confirm')"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('city')"
                    rules="required"
                    vid="city_id"
                    v-slot="{ errors }"
                    ><label class="form-label">{{}}</label>
                    <select
                      :errors="errors"
                      v-model="itemForm.city_id"
                      :label="$t('city')"
                    >
                      <option selected disabled>المدينة</option>
                      <option
                        v-for="(city, i) in cities"
                        :key="i"
                        :value="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
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
                            style="border: 2px solid #2cb7b3"
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
                        <d-error-input
                          :errors="errors"
                          v-if="errors.length > 0"
                        />
                      </ValidationProvider>
                    </div>
                  </div> -->
                  <div class="col-12 my-4">
                    <button
                      style="
                        background-color: transparent;
                        border: 1px solid #2cb7b3;
                        color: #2cb7b3;
                      "
                      class="btn btn-hover px-4 py-2"
                      :disabled="loading"
                      @click="goToTab4"
                      role="button"
                    >
                      <i
                        v-if="loading"
                        class="fa fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                      استمرار
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M13.3327 8.75C13.7469 8.75 14.0827 8.41421 14.0827 8C14.0827 7.58579 13.7469 7.25 13.3327 7.25V8.75ZM13.3327 7.25H2.66602V8.75H13.3327V7.25Z"
                          fill="#2CB7B3"
                        />
                        <path
                          d="M6.66602 4L2.66602 8L6.66602 12"
                          stroke="#2CB7B3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div :class="{ bye: tab !== 4 }" class="d-flex flex-column">
                  <div class="form-group">
                    <div class="text-center">
                      <p
                        style="top: 6px; right: 13px; color: #979797"
                        class="px-2"
                      >
                        من أجل إنشاء حسابك، يرجى تحميل 3 دورات قمت بإنشائها,
                        اتقل عن نصف ساعة لقاءات تعليمية تتناول في موضوع محدد.
                      </p>
                    </div>
                    <label
                      style="height: 200px"
                      class="w-100 position-relative rounded-2"
                    >
                      <div
                        style="top: 50%; left: 50%"
                        class="position-absolute align-items-center justify-content-center d-flex flex-column gap-2 center-things"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1317 25.0522H7.64958C3.84893 24.7807 2.14258 21.8591 2.14258 19.2607C2.14258 16.6623 3.84894 13.7278 7.58496 13.4692C8.11499 13.4175 8.58036 13.8312 8.61914 14.3741C8.65792 14.9042 8.25724 15.3695 7.71428 15.4083C5.20637 15.5893 4.08169 17.4767 4.08169 19.2736C4.08169 21.0705 5.20637 22.9579 7.71428 23.1389H10.1317C10.6617 23.1389 11.1013 23.5784 11.1013 24.1085C11.1013 24.6385 10.6617 25.0522 10.1317 25.0522Z"
                            fill="#292D32"
                          />
                          <path
                            d="M22.0368 25.052C22.011 25.052 21.9981 25.052 21.9722 25.052C21.4422 25.052 20.951 24.6125 20.951 24.0825C20.951 23.5266 21.3646 23.1129 21.9076 23.1129C23.4977 23.1129 24.9197 22.557 26.0314 21.5616C28.0481 19.8035 28.1774 17.2697 27.6344 15.4857C27.0915 13.7147 25.579 11.6851 22.9418 11.3619C22.5152 11.3102 22.179 10.987 22.1014 10.5604C21.5844 7.45783 19.9168 5.31188 17.383 4.53623C14.7717 3.72181 11.7207 4.5233 9.82042 6.51412C7.9718 8.44031 7.54521 11.1421 8.61818 14.1154C8.79916 14.6196 8.54068 15.1755 8.03651 15.3565C7.53234 15.5374 6.97644 15.2789 6.79545 14.7747C5.48978 11.1292 6.08446 7.63881 8.42432 5.1826C10.8159 2.67469 14.6553 1.67927 17.9518 2.6876C20.9768 3.61838 23.1098 6.11337 23.8854 9.57791C26.5226 10.1726 28.6427 12.1763 29.483 14.9428C30.4009 17.9549 29.5735 21.0575 27.3112 23.0224C25.8763 24.3152 24.0018 25.052 22.0368 25.052Z"
                            fill="#292D32"
                          />
                          <path
                            d="M16.0006 28.8528C13.4022 28.8528 10.9719 27.4696 9.64038 25.2332C9.49818 25.0134 9.35598 24.7549 9.23963 24.4705C8.8001 23.5526 8.56738 22.5055 8.56738 21.4196C8.56738 17.3216 11.9027 13.9863 16.0006 13.9863C20.0986 13.9863 23.4339 17.3216 23.4339 21.4196C23.4339 22.5184 23.2012 23.5526 22.7358 24.5092C22.6324 24.7549 22.4902 25.0134 22.3351 25.259C21.0294 27.4696 18.599 28.8528 16.0006 28.8528ZM16.0006 15.9254C12.9756 15.9254 10.5065 18.3946 10.5065 21.4196C10.5065 22.2211 10.6746 22.9709 10.9977 23.656C11.1012 23.8758 11.1916 24.0568 11.295 24.2248C12.2775 25.8925 14.0744 26.9137 15.9877 26.9137C17.901 26.9137 19.6979 25.8925 20.6674 24.2507C20.7838 24.0568 20.8872 23.8758 20.9648 23.6948C21.3138 22.9838 21.4818 22.234 21.4818 21.4325C21.4948 18.3946 19.0257 15.9254 16.0006 15.9254Z"
                            fill="#292D32"
                          />
                          <path
                            d="M15.2628 23.6689C15.0171 23.6689 14.7716 23.5784 14.5777 23.3845L13.2978 22.1047C12.9229 21.7298 12.9229 21.1093 13.2978 20.7344C13.6727 20.3595 14.2932 20.3595 14.6681 20.7344L15.2886 21.3549L17.357 19.4416C17.7577 19.0797 18.3653 19.1055 18.7273 19.4933C19.0893 19.8811 19.0634 20.5017 18.6756 20.8636L15.9221 23.4103C15.7282 23.5784 15.4955 23.6689 15.2628 23.6689Z"
                            fill="#292D32"
                          />
                        </svg>
                        <h4 style="color: #888">اختر ملفًا</h4>
                        <p style="color: #777; font-size: 15px">
                          JPEG, PNG, PDG, and MP4 formats, up to 50MB
                        </p>
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
                      <input
                        type="file"
                        @change="uploadFile($event, validate)"
                        class="form-control opacity-0"
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
                    </label>
                  </div>
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('Specialization')"
                      rules="required"
                      vid="department_id"
                      v-slot="{ errors }"
                    >
                      <d-select-input
                        :errors="errors"
                        v-model="itemForm.department_id"
                        :label="$t('Specialization')"
                      >
                        <option selected disabled>مجال التخصص</option>
                        <option
                          v-for="(department, i) in departments"
                          :key="i"
                          :value="department.id"
                        >
                          {{ department.name }}
                        </option>
                      </d-select-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('education-degree')"
                      rules="required"
                      vid="scientific_degree"
                      v-slot="{ errors }"
                    >
                      <d-select-input
                        :errors="errors"
                        v-model="itemForm.scientific_degree"
                        placeholder="الدرجة العلمية"
                      >
                        <option selected disabled>الدرجة العلمية</option>
                        <option
                          v-for="(degree, i) in degrees"
                          :key="i"
                          :value="degree.id"
                        >
                          {{ degree.name }}
                        </option>
                      </d-select-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('job-position')"
                      rules="required"
                      vid="job_title"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        v-model="itemForm.job_title"
                        type="text"
                        placeholder="اللقب الوظيفى"
                        class="form-control"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('years_experience')"
                      rules="required|numeric"
                      vid="years_experience"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        v-model="itemForm.years_experience"
                        type="text"
                        placeholder="سنوات الخبرة"
                        class="form-control"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('about-you')"
                      rules="required"
                      vid="bio"
                      v-slot="{ errors }"
                    >
                      <d-textarea-input
                        :errors="errors"
                        v-model="itemForm.bio"
                        class="form-control"
                        rows="5"
                        placeholder="نبذه عنك"
                      ></d-textarea-input>
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('name')"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom03">الاسم</label>
                      <d-text-input
                        type="text"
                        :errors="errors"
                        v-model="itemForm.name"
                        class="form-control"
                        id="validationCustom03"
                        placeholder="ادخل الاسم"
                      />
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('email')"
                      rules="required"
                      vid="email"
                      v-slot="{ errors }"
                    >
                      <label for="email">البريد الالكترونى</label>
                      <d-text-input
                        :errors="errors"
                        type="email"
                        v-model="itemForm.email"
                        class="form-control"
                        placeholder="ادخل البريد الالكترونى"
                        id="email"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      :name="$t('phone-number')"
                      rules="required|numeric"
                      vid="phone"
                      v-slot="{ errors }"
                    >
                      <label for="phone">رقم الجوال </label>
                      <d-text-input
                        :errors="errors"
                        type="number"
                        v-model="itemForm.phone"
                        class="form-control"
                        placeholder="ادخل رقم الجوال"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom99">كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password"
                        class="form-control"
                        id="validationCustom99"
                        placeholder="ادخل كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex flex-column gap-1"
                      name="password_confirmation"
                      rules="required"
                      vid="name"
                      v-slot="{ errors }"
                    >
                      <label for="validationCustom11">تاكيد كلمه السر</label>
                      <d-text-input
                        type="password"
                        :errors="errors"
                        v-model="itemForm.password_confirmation"
                        class="form-control"
                        id="validationCustom11"
                        placeholder="تاكيد كلمه السر "
                      />
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100 d-flex gap-1 flex-column"
                      :name="$t('password')"
                      rules="required"
                      vid="password"
                      v-slot="{ errors }"
                    >
                      <label for="">كلمه السر</label>
                      <d-text-input
                        :errors="errors"
                        id="password-register"
                        :type="!show ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.password"
                        :label="$t('Password')"
                        autocomplete="new-password"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->
                  <!-- <div class="col-md-4 w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      :name="$t('password-confirmation')"
                      rules="required"
                      vid="password_confirmation"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        id="password-register-confirm"
                        :type="!showC ? 'text' : 'password'"
                        class="form-control"
                        v-model="itemForm.passwordConfirm"
                        :label="$t('Password-confirm')"
                      >
                        <template v-slot:append-icon>
                          <span
                            style="color: #cdd7d8; font-size: 23px"
                            @click="show = !show"
                            class="fa-regular mx-1"
                            :class="{ 'fa-eye': !show, 'fa-eye-slash': show }"
                          >
                          </span>
                        </template>
                      </d-text-input>
                    </ValidationProvider>
                  </div> -->

                  <!-- <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('city')"
                    rules="required"
                    vid="city_id"
                    v-slot="{ errors }"
                    ><label class="form-label">{{}}</label>
                    <select
                      :errors="errors"
                      v-model="itemForm.city_id"
                      :label="$t('city')"
                    >
                      <option selected disabled>المدينة</option>
                      <option
                        v-for="(city, i) in cities"
                        :key="i"
                        :value="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
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
                            style="border: 2px solid #2cb7b3"
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
                        <d-error-input
                          :errors="errors"
                          v-if="errors.length > 0"
                        />
                      </ValidationProvider>
                    </div>
                  </div> -->
                  <div class="col-12 my-4">
                    <button
                      style="
                        background-color: transparent;
                        border: 1px solid #2cb7b3;
                        color: #2cb7b3;
                      "
                      class="btn btn-hover px-4 py-2"
                      :disabled="loading"
                      @click="save"
                      role="button"
                    >
                      <i
                        v-if="loading"
                        class="fa fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                      استمرار
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M13.3327 8.75C13.7469 8.75 14.0827 8.41421 14.0827 8C14.0827 7.58579 13.7469 7.25 13.3327 7.25V8.75ZM13.3327 7.25H2.66602V8.75H13.3327V7.25Z"
                          fill="#2CB7B3"
                        />
                        <path
                          d="M6.66602 4L2.66602 8L6.66602 12"
                          stroke="#2CB7B3"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </template>
              <!-- <div class="col-md-4 w-100 mt-2">
                <ValidationProvider
                  tag="div"
                  class="w-100"
                  :name="$t('Specialization')"
                  rules="required"
                  vid="department_id"
                  v-slot="{ errors }"
                >
                  <d-select-input
                    :errors="errors"
                    v-model="itemForm.department_id"
                    :label="$t('Specialization')"
                  >
                    <option selected disabled>مجال التخصص</option>
                    <option
                      v-for="(department, i) in departments"
                      :key="i"
                      :value="department.id"
                    >
                      {{ department.name }}
                    </option>
                  </d-select-input>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100 mt-2">
                <ValidationProvider
                  tag="div"
                  class="w-100"
                  :name="$t('education-degree')"
                  rules="required"
                  vid="scientific_degree"
                  v-slot="{ errors }"
                >
                  <d-select-input
                    :errors="errors"
                    v-model="itemForm.scientific_degree"
                    :label="$t('education-degree')"
                  >
                    <option selected disabled>الدرجة العلمية</option>
                    <option
                      v-for="(degree, i) in degrees"
                      :key="i"
                      :value="degree.id"
                    >
                      {{ degree.name }}
                    </option>
                  </d-select-input>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100 mt-2">
                <ValidationProvider
                  tag="div"
                  class="w-100"
                  :name="$t('job-position')"
                  rules="required"
                  vid="job_title"
                  v-slot="{ errors }"
                >
                  <d-text-input
                    :errors="errors"
                    v-model="itemForm.job_title"
                    type="text"
                    :label="$t('job-position')"
                    class="form-control"
                  >
                  </d-text-input>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100 mt-2">
                <ValidationProvider
                  tag="div"
                  class="w-100"
                  :name="$t('years_experience')"
                  rules="required|numeric"
                  vid="years_experience"
                  v-slot="{ errors }"
                >
                  <d-text-input
                    :errors="errors"
                    v-model="itemForm.years_experience"
                    type="text"
                    :label="$t('years_experience')"
                    class="form-control"
                  >
                  </d-text-input>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100 mt-2">
                <ValidationProvider
                  tag="div"
                  class="w-100"
                  :name="$t('about-you')"
                  rules="required"
                  vid="bio"
                  v-slot="{ errors }"
                >
                  <d-textarea-input
                    :errors="errors"
                    v-model="itemForm.bio"
                    class="form-control"
                    rows="5"
                    :label="$t('about-you')"
                  ></d-textarea-input>
                </ValidationProvider>
              </div>
              <div class="col-md-4 w-100 mt-2">
                <ValidationProvider
                  tag="div"
                  class="w-100"
                  :name="$t('attachment')"
                  rules="required|ext:pdf"
                  vid="cv"
                  v-slot="{ errors, validate }"
                >
                  <div class="form-group">
                    <label class="w-100 position-relative border rounded-2">
                      <input
                        type="file"
                        @change="
                          uploadFile($event, validate) || validate($event)
                        "
                        class="form-control opacity-0"
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
                        السيرة الذاتية (بحد أقصى 10 ميجا)
                      </p>
                    </label>
                  </div>
                  <d-error-input :errors="errors" v-if="errors.length > 0" />
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
                        style="border: 2px solid #2cb7b3"
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
              </div>
              <div class="col-12 my-4">
                <button
                  style="
                    background-color: transparent;
                    border: 1px solid #2cb7b3;
                    color: #2cb7b3;
                  "
                  class="btn btn-hover px-4 py-2"
                  :disabled="loading"
                  @click="save"
                  role="button"
                >
                  <i
                    v-if="loading"
                    class="fa fa-spinner fa-spin"
                    aria-hidden="true"
                  ></i>
                  استمرار
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M13.3327 8.75C13.7469 8.75 14.0827 8.41421 14.0827 8C14.0827 7.58579 13.7469 7.25 13.3327 7.25V8.75ZM13.3327 7.25H2.66602V8.75H13.3327V7.25Z"
                      fill="#2CB7B3"
                    />
                    <path
                      d="M6.66602 4L2.66602 8L6.66602 12"
                      stroke="#2CB7B3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div> -->
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instructorAPI from "@/services/api/academy/instructor";
import academyAPI from "@/services/api/academy";
import commonAPI from "@/services/api/common";
export default {
  name: "section-form",
  components: {},
  data: () => {
    return {
      loading: false,
      departments: [],
      countries: [],
      tab: 1,
      cities: [],
      degrees: [
        { id: "high-school", name: "ثانوي" },
        { id: "diploma", name: "دبلوم" },
        { id: "bachelor", name: "بكالوريوس" },
        { id: "master", name: "ماجستير" },
        { id: "phd", name: "دكتوراة " },
      ],
      itemForm: {
        name: null,
        email: null,
        phone: null,
        password: null,
        password_confirmation: null,
        identity_id: null,
        gender: null,
        birthday: null,
        country_id: null,
        city_id: null,
        department_id: "",
        scientific_degree: "",
        job_title: "",
        years_experience: "",
        bio: "",
        cv: null,
        terms_use: null,
      },
      show: true,
      showC: true,
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  methods: {
    gotoHome() {
      this.$store.commit("auth/SET_ACADEMY_ROLE", "instructor");
      this.refreshPage({ name: "academy-home" });
    },
    successRegister() {
      let dataEvt = {
        icon: true,
        descriptionClass: "m-c",
        title: "نشكرك على تسجيلك معنا",
        description: `سنتواصل معك خلال الايام القليلة القادمة لتأكيد
بيانتك و تأكيد الاشتراك  `,
        onClose: this.gotoHome,
        btns: [{ title: this.$t("Home"), action: () => this.gotoHome() }],
      };
      this.showSuccessMsg(dataEvt);
    },
    async goToTab2() {
      if (
        this.itemForm.name &&
        this.itemForm.email &&
        this.itemForm.password &&
        this.itemForm.password_confirmation &&
        this.itemForm.phone
      ) {
        this.tab = 2;
      }
    },
    async goToTab3() {
      if (
        // this.itemForm.country_id &&
        this.itemForm.gender &&
        this.itemForm.birthday
      ) {
        this.tab = 3;
      }
    },
    async goToTab4() {
      if (
        // this.itemForm.country_id &&
        this.itemForm.years_experience &&
        this.itemForm.job_title &&
        this.itemForm.scientific_degree &&
        this.itemForm.department_id &&
        this.itemForm.bio
      ) {
        this.tab = 4;
      }
    },
    async save() {
      this.loading = true;
      let valid = await this.$refs.form.validate();
      if (!valid) {
        console.mylog("invalid");
        this.loading = false;
        return;
      }

      try {
        let form = {};
        if (!this.user) form = { ...this.itemForm };
        else {
          let {
            department_id,
            scientific_degree,
            job_title,
            years_experience,
            bio,
            cv,
            terms_use,
            // name,
            // password,
            phone,
            // password_confirmation,
            country_id,
            birthday,
            gender,
            identity_id,
          } = this.itemForm;
          form = {
            department_id,
            scientific_degree,
            job_title,
            years_experience,
            bio,
            cv,
            terms_use,
            // name,
            // password,
            phone,
            // password_confirmation,
            country_id,
            birthday,
            gender,
            identity_id,
          };
        }
        let formData = this.loadObjectToForm(form);
        let { data } = await instructorAPI.register(formData);
        if (data.success) {
          this.successRegister();
        } else {
          window.SwalError(data.message);
        }
      } catch (error) {
        console.mylog("error", error);
        if (error.response) {
          let response = error.response;
          if (response.status == 422) {
            this.setErrorsForm(this.$refs.form, response);
          }
        }
      }
      this.loading = false;
    },
    // async save() {
    //   this.loading = true;
    //   let valid = await this.$refs.form.validate();
    //   if (!valid) {
    //     console.mylog("invalid");
    //     this.loading = false;
    //     return;
    //   }

    //   try {
    //     let form = {};
    //     if (!this.user) form = { ...this.itemForm };
    //     else {
    //       let {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //         // name,
    //         // password,
    //         phone,
    //         // password_confirmation,
    //         country_id,
    //         birthday,
    //         gender,
    //         identity_id,
    //       } = this.itemForm;
    //       form = {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //         // name,
    //         // password,
    //         phone,
    //         // password_confirmation,
    //         country_id,
    //         birthday,
    //         gender,
    //         identity_id,
    //       };
    //     }
    //     let formData = this.loadObjectToForm(form);
    //     let { data } = await instructorAPI.register(formData);
    //     if (data.success) {
    //       this.successRegister();
    //     } else {
    //       window.SwalError(data.message);
    //     }
    //   } catch (error) {
    //     console.mylog("error", error);
    //     if (error.response) {
    //       let response = error.response;
    //       if (response.status == 422) {
    //         this.setErrorsForm(this.$refs.form, response);
    //       }
    //     }
    //   }
    //   this.loading = false;
    // },
    // async save() {
    //   this.loading = true;
    //   let valid = await this.$refs.form.validate();
    //   if (!valid) {
    //     console.mylog("invalid");
    //     this.loading = false;
    //     return;
    //   }

    //   try {
    //     let form = {};
    //     if (!this.user) form = { ...this.itemForm };
    //     else {
    //       let {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //         // name,
    //         // password,
    //         phone,
    //         // password_confirmation,
    //         country_id,
    //         birthday,
    //         gender,
    //         identity_id,
    //       } = this.itemForm;
    //       form = {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //         // name,
    //         // password,
    //         phone,
    //         // password_confirmation,
    //         country_id,
    //         birthday,
    //         gender,
    //         identity_id,
    //       };
    //     }
    //     let formData = this.loadObjectToForm(form);
    //     let { data } = await instructorAPI.register(formData);
    //     if (data.success) {
    //       this.successRegister();
    //     } else {
    //       window.SwalError(data.message);
    //     }
    //   } catch (error) {
    //     console.mylog("error", error);
    //     if (error.response) {
    //       let response = error.response;
    //       if (response.status == 422) {
    //         this.setErrorsForm(this.$refs.form, response);
    //       }
    //     }
    //   }
    //   this.loading = false;
    // },
    // async save() {
    //   this.loading = true;
    //   let valid = await this.$refs.form.validate();
    //   if (!valid) {
    //     console.mylog("invalid");
    //     this.loading = false;
    //     return;
    //   }

    //   try {
    //     let form = {};
    //     if (!this.user) form = { ...this.itemForm };
    //     else {
    //       let {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //       } = this.itemForm;
    //       form = {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //       };
    //     }
    //     let formData = this.loadObjectToForm(form);
    //     let { data } = await instructorAPI.register(formData);
    //     if (data.success) {
    //       this.successRegister();
    //     } else {
    //       window.SwalError(data.message);
    //     }
    //   } catch (error) {
    //     console.mylog("error", error);
    //     if (error.response) {
    //       let response = error.response;
    //       if (response.status == 422) {
    //         this.setErrorsForm(this.$refs.form, response);
    //       }
    //     }
    //   }
    //   this.loading = false;
    // },
    // async save() {
    //   this.loading = true;
    //   let valid = await this.$refs.form.validate();
    //   if (!valid) {
    //     console.mylog("invalid");
    //     this.loading = false;
    //     return;
    //   }

    //   try {
    //     let form = {};
    //     if (!this.user) form = { ...this.itemForm };
    //     else {
    //       let {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //       } = this.itemForm;
    //       form = {
    //         department_id,
    //         scientific_degree,
    //         job_title,
    //         years_experience,
    //         bio,
    //         cv,
    //         terms_use,
    //       };
    //     }
    //     let formData = this.loadObjectToForm(form);
    //     let { data } = await instructorAPI.register(formData);
    //     if (data.success) {
    //       this.successRegister();
    //     } else {
    //       window.SwalError(data.message);
    //     }
    //   } catch (error) {
    //     console.mylog("error", error);
    //     if (error.response) {
    //       let response = error.response;
    //       if (response.status == 422) {
    //         this.setErrorsForm(this.$refs.form, response);
    //       }
    //     }
    //   }
    //   this.loading = false;
    // },
    async uploadFile(evt, validate) {
      let resValid = await validate(evt);
      if (!resValid.valid) {
        this.itemForm.cv = null;
        return;
      }
      if (!evt.target.files && !evt.target.files[0]) {
        this.itemForm.cv = null;
        return;
      }
      this.itemForm.cv = evt.target.files[0];
    },
    async loadDepartments() {
      try {
        let { data } = await academyAPI.getDepartments();
        if (data.success) {
          this.departments = data.data;
        }
      } catch (error) {
        //
      }
    },
    async loadCountries() {
      try {
        let { data } = await commonAPI.getCountries();
        if (data.success) {
          this.countries = data.data;
        }
      } catch (error) {
        //
      }
    },
  },
  mounted() {
    if (this.user) {
      this.loadCountries();
      this.loadDepartments();
    }
  },
};
</script>

<style scoped>
.icon-input-end {
  color: #cdd7d8;
  font-size: 23px;
  left: 15px;
  top: 9px;
}
html[lang="en"] .icon-input-end {
  left: auto;
  right: 15px;
}
/* .btn-hover:hover {
  transition: all;
  background-color: #2cb7b3 !important;
  color: white !important;
} */
.bye {
  display: none !important;
}
.center-things {
  transform: translate(-50%, -50%);
}
</style>
