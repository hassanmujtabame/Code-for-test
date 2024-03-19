<template>
  <div>
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
        <d-select-input
          :errors="errors"
          v-model="itemForm.scientific_degree"
          :label="$t('education-degree')"
        >
          <option selected disabled>الدرجة العلمية</option>
          <option v-for="(degree, i) in degrees" :key="i" :value="degree.id">
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
              @change="uploadFile($event, validate) || validate($event)"
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
