<template>
  <div style="margin-top: 100px" class="">
    <div class="container">
      <div class="box bg-white p-3 rounded-3">
        <div class="row align-items-start">
          <div :class="isTablet || isMobile ? 'col-12' : 'col-6 '">
            <img
              :class="isTablet || isMobile ? ' img-Hz' : 'img-Vr'"
              :src="`${publicPath}assets/img/consultantRegisterFrame.png`"
            />
          </div>
          <div :class="isTablet || isMobile ? 'col-12' : 'col-6 m-auto'">
            <!-- <p>
              بمجرد تسجيلك فأنت توافق على
              <a href="" class="m-c">الشروط والاحكام</a>.
            </p> -->

            <!-- All form -->
            <!-- Section 1 :  -->
            <!-- Section 2 :  -->
            <!-- Section 3 :  -->
            <!-- Section 4 :  -->
            <ValidationObserver ref="form">
              <template v-if="!user">
                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('name')"
                    rules="required"
                    vid="name"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      type="text"
                      :errors="errors"
                      v-model="itemForm.name"
                      class="form-control"
                      id="validationCustom03"
                      :label="$t('name')"
                    />
                  </ValidationProvider>
                </div>

                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('email')"
                    rules="required"
                    vid="email"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      :errors="errors"
                      type="email"
                      v-model="itemForm.email"
                      class="form-control"
                      :label="$t('email')"
                    >
                    </d-text-input>
                  </ValidationProvider>
                </div>

                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('phone-number')"
                    rules="required|numeric"
                    vid="phone"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      :errors="errors"
                      type="number"
                      v-model="itemForm.phone"
                      class="form-control"
                      :label="$t('phone-number')"
                    >
                    </d-text-input>
                  </ValidationProvider>
                </div>
                <div class="col-md-4 w-100 mt-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('password')"
                    rules="required"
                    vid="password"
                    v-slot="{ errors }"
                  >
                    <d-text-input
                      :errors="errors"
                      id="password-register"
                      :type="show ? 'text' : 'password'"
                      class="form-control"
                      v-model="form.password"
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
                </div>
                <div class="col-md-4 w-100 mt-2">
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
                      :type="showC ? 'text' : 'password'"
                      class="form-control"
                      v-model="form.passwordConfirm"
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
                </div>
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
                </div>
                <div class="col-md-4 w-100 mt-2">
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
                </div>
              </template>
              <div class="row">
                <div class="col-md-8">
                  <div class="w-100 mt-2">
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
                        <option>مجال التخصص</option>
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
                  <div class="w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      name="site_price"
                      vid="site_price"
                      rules="numeric"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        v-model="itemForm.site_price"
                        label="سعر الاستشاره الحضوريه"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>
                  <div class="w-100 mt-2">
                    <ValidationProvider
                      tag="div"
                      class="w-100"
                      name="remote price"
                      rules="numeric"
                      vid="remote_price"
                      v-slot="{ errors }"
                    >
                      <d-text-input
                        :errors="errors"
                        v-model="itemForm.remote_price"
                        label="سعر الاستشارة عن بعد"
                      >
                      </d-text-input>
                    </ValidationProvider>
                  </div>

                  <div class="w-100 mt-2">
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

                  <div class="w-100 mt-2">
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
                  <div class="w-100 mt-2">
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
                              :to="
                                getRouteLocale('terms-and-conditions-category')
                              "
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
                      class="btn btn-main"
                      :disabled="loading"
                      @click="save"
                      role="button"
                    >
                      <i
                        v-if="loading"
                        class="fa fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                      سجل الان
                    </button>
                  </div>
                </div>

                <div class="col-md-4 my-2">
                  <ValidationProvider
                    tag="div"
                    class="w-100"
                    :name="$t('attachment')"
                    rules="required|ext:pdf"
                    vid="cv"
                    v-slot="{ errors, validate }"
                  >
                    <div class="form-group">
                      <label
                        style="height: 150px; border: 1px solid #2cb7b3"
                        class="w-100 position-relative rounded-2"
                      >
                        <input
                          id="file"
                          type="file"
                          @change="
                            uploadFile($event, validate) || validate($event)
                          "
                          class="form-control opacity-0"
                          required
                        />

                        <svg
                          style=""
                          class="position-absolute center"
                          width="67"
                          height="81"
                          viewBox="0 0 67 81"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.373 2H9.87461C7.78613 2 5.78319 2.8064 4.30642 4.24179C2.82964 5.67718 2 7.62399 2 9.65395V70.8855C2 72.9155 2.82964 74.8623 4.30642 76.2977C5.78319 77.7331 7.78613 78.5395 9.87461 78.5395H57.1222C59.2107 78.5395 61.2137 77.7331 62.6904 76.2977C64.1672 74.8623 64.9969 72.9155 64.9969 70.8855V24.9618L41.373 2Z"
                            stroke="#2CB7B3"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M41.375 2V24.9629H64.9998"
                            stroke="#2CB7B3"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M49.2588 44.0977H17.7598"
                            stroke="#2CB7B3"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M49.2588 59.4062H17.7598"
                            stroke="#2CB7B3"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M25.6347 28.7891H17.7598"
                            stroke="#2CB7B3"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </label>
                      <label
                        style="
                          border: 1px solid #2cb7b3;
                          background-color: #e9f8f7;
                        "
                        for="file"
                        class="d-flex rounded-3 my-3 py-2 justify-content-center px-5 align-items-center gap-3"
                      >
                        <svg
                          width="21"
                          height="27"
                          viewBox="0 0 21 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2469_109181)">
                            <path
                              d="M16.9628 5.05527C15.8598 3.85863 14.0699 3.85863 12.967 5.05527L4.65003 14.0792C2.74707 16.1439 2.74707 19.4886 4.65003 21.5533C6.55299 23.618 9.63569 23.618 11.5386 21.5533L18.4092 14.0988C18.9019 13.5642 19.7064 13.5642 20.1991 14.0988C20.6918 14.6334 20.6918 15.5063 20.1991 16.0409L13.3286 23.4954C10.4357 26.6342 5.75293 26.6342 2.86007 23.4954C-0.0327846 20.3567 -0.0327846 15.2758 2.86007 12.1371L11.177 3.11317C13.2698 0.842484 16.6599 0.842484 18.7527 3.11317C20.8455 5.38386 20.8455 9.06209 18.7527 11.3328L10.7973 19.9643C9.5046 21.367 7.40728 21.367 6.11454 19.9643C4.82179 18.5617 4.82179 16.2861 6.11454 14.8835L12.6235 7.8213C13.1162 7.28673 13.9207 7.28673 14.4134 7.8213C14.9061 8.35587 14.9061 9.22883 14.4134 9.7634L7.90449 16.8256C7.60165 17.1542 7.60165 17.6936 7.90449 18.0222C8.20734 18.3508 8.70455 18.3508 9.00739 18.0222L16.9628 9.39067C18.0657 8.19402 18.0657 6.25192 16.9628 5.05527Z"
                              fill="#1FB9B3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2469_109181">
                              <rect
                                width="20.25"
                                height="25.11"
                                fill="white"
                                transform="translate(0.500977 0.945312)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p style="color: #1fb9b3; padding-top: 11px">
                          رفع ملف pdf
                        </p>
                      </label>
                    </div>
                    <d-error-input :errors="errors" v-if="errors.length > 0" />
                  </ValidationProvider>
                </div>
              </div>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonAPI from "@/services/api/common";
import consultingAPI from "@/services/api/consulting";
export default {
  name: "register-consultant-page",
  data: () => {
    return {
      loading: false,
      departments: [],
      countries: [],
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
      show: false,
      showC: false,
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  methods: {
    gotoHome() {
      //this.$store.commit('auth/SET_ACADEMY_ROLE','instructor')
      this.refreshPage({ name: "consulting-home" });
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
          let { department_id, job_title, bio, cv, site_price, remote_price } =
            this.itemForm;
          form = {
            department_id,
            job_title,
            bio,
            cv,
            site_price,
            remote_price,
          };
        }
        let formData = this.loadObjectToForm(form);

        let { data } = await consultingAPI.consultants.register(formData);
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
        let { data } = await consultingAPI.fields.getAll();
        if (data.success) {
          this.departments = data.data;
        }
      } catch (error) {
        console.mylog("error", error);
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
    if (this.userIsConsultant) {
      // if the user is already a consultant
      // stop the user from registering as a consultant
      this.$router.push({ name: "consulting-home" });
    }
    if (!this.user) {
      this.loadCountries();
    }
    this.loadDepartments();
  },
};
</script>

<style>
.img-Hz {
  width: 100%;
  height: 100%;
  max-height: 70vw;
  object-fit: cover;
}
.img-Vr {
  width: 100%;
}
.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
