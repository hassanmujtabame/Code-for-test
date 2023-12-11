<template>
    <div>
        <ValidationObserver>
            <!-- عدد سنوات الخبره -->
            <ValidationProvider vid="عدد سنوات الخبره" rules="required" :name="'عدد سنوات الخبره'" v-slot="{ errors }"
                tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'عدد سنوات الخبره'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <!-- عدد سنوات الخبره -->


            <!-- مكان او جهة العمل -->
            <ValidationProvider vid=" مكان او جهة العمل " rules="required" :name="' مكان او جهة العمل '"
                v-slot="{ errors }" tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="' مكان او جهة العمل '" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
            <!-- End the-services-you-offer -->
        </ValidationObserver>
        <br>

    </div>
</template>