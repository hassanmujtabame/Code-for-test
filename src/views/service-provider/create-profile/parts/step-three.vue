<template>
    <div>
        <ValidationObserver>
            <!-- الجهة التعيلمية -->
            <ValidationProvider vid="الجهة التعيلمية" rules="required" :name="'الجهة التعيلمية'" v-slot="{ errors }"
                tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'الجهة التعيلمية'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <!-- الدرجة التعليمية -->
            <ValidationProvider vid="الدرجة التعليمية" rules="required" :name="'الدرجة التعليمية'"
                v-slot="{ errors }" tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'الدرجة التعليمية'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>

            <!--  سنة التخرج -->
            <ValidationProvider vid="سنة التخرج" rules="required" :name="'سنة التخرج'"
                v-slot="{ errors }" tag="div" class="mb-3">
                <b-form-input type="text" :placeholder="'سنة التخرج'" required />
                <div class="text-input-error">{{ errors[0] }}</div>
            </ValidationProvider>
        </ValidationObserver>            <br>


    </div>
</template>