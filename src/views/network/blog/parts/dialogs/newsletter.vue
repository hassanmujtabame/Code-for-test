<template>
    <d-dialog-large :group="group"
                    :xl="false"
                    :openDialog="openDialog"
                    :closeDialog="closeDialog"
    >
        <template v-slot>
            <div class="text-center" v-if="showed">
                <div>
                    <img :src="`${publicPath}assets/img/cuate-2.png`" alt="">
                </div>
                <div>
                    <h4>
                        تم الاشتراك في النشرة البريدة بنجاح
                    </h4>
                </div>
                <div class="mt-3">
                    <button @click="$router.push('/')" style="height: 40px;" class="btn btn-custmer-w"> {{ $t('Home') }}
                    </button>
                </div>
            </div>
        </template>

    </d-dialog-large>
</template>

<script>

export default {
    props: {
        group: {
            type: String,
            default: 'newsletter'
        }
    },
    data: () => ({
        blog: {id: null},
        showed: false,
    }),
    methods: {

        openDialog() {
            this.showed = true
            return true;
        },
        closeDialog() {
            this.showed = false
            return true;
        },
        closeEvent() {
            this.fireEvent(this.group + '-close-dialog')
        }
    }
}
</script>

<style>

</style>