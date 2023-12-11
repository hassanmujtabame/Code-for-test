<template>
    <div>
        <ValidationObserver>
            <ValidationProvider vid="اسم الشهادة" rules="required" :name="'اسم الشهادة'" v-slot="{ errors }"
                tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'اسم الشهادة'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider vid="جهة الإصدار" rules="required" :name="'جهة الإصدار'" v-slot="{ errors }"
                tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'جهة الإصدار'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <ValidationProvider vid="رابط أو كود التوثيق" rules="required" :name="'رابط أو كود التوثيق'" v-slot="{ errors }"
                tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'رابط أو كود التوثيق'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
<br>

        </ValidationObserver>

    </div>
</template>