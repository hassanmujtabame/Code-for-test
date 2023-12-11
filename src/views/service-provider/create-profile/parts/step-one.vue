<template>
    <div>
        <ValidationObserver>
            <!-- Start job title -->
            <ValidationProvider vid="job-position-name" rules="required" :name="$t('job-position-name')" v-slot="{ errors }"
                tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="$t('job-position-name')" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <!-- End job title -->


            <!-- Start the-services-you-offer -->
            <ValidationProvider vid="the-services-you-offer" rules="required" :name="$t('the-services-you-offer')"
                v-slot="{ errors }" tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="$t('the-services-you-offer')" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <!-- End the-services-you-offer -->

            <!-- Start the-services-you-offer -->

            <ValidationProvider :name="$t('skills-you-have')" vid="skills" rules="required" v-slot="{ errors }">
                <label class="form-label">{{ $t('skills-you-have') }}</label>
                <d-multi-select-tag></d-multi-select-tag>
                <d-error-input :errors="errors" v-if="errors.length" />
            </ValidationProvider>
            <!-- End the-services-you-offer -->
            <!-- Start pio -->
            <ValidationProvider :name="$t('request-description')" vid="description" rules="required" v-slot="{ errors }">
                <label class="form-label">
                    نبذه تعريفيه عنك
                </label>
                <d-ckeditor-classic class="form-control" rows="10" :editorConfig="{
                  minHeight: '150px'
                }"></d-ckeditor-classic>
                <d-error-input :errors="errors" v-if="errors.length" />
              </ValidationProvider>
            <!-- Start pio -->
<br>
        </ValidationObserver>

    </div>
</template>