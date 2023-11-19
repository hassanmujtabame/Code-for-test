<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" style="z-index: 10002 !important;" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title fw-bolder m-c" id="exampleModalLabel">مرحبا بك</h5> -->
                    <button type="button" class="close fs-2"
                        style="border-radius: 10px;border: 1px solid #979797;width: 40px; background: #fff; height: 40px;border-color:#979797"
                        data-bs-dismiss="modal" aria-label="Close">
                        <span style="color: #222;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <div>
                            <img :src="`${publicPath}assets/img/cuate-2.png`" alt="" />
                        </div>
                        <div>
                            <h4>لقد تم إرسال طلب التسجيل كمسوق بالعموله فريق رياديات</h4>
                            <p>سيتم مراجعة الطلب و تفعيله على الفور</p>
                        </div>
                        <!-- <div class="text-center mt-5">
                            <button class="btn btn-main-v py-2 px-5 close" aria-label="Close" >{{ $t('Home') }}</button>
                        </div> -->

                    </div>


                </div>
                <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {

        goHome() {
            this.$router.push('/')
        },
    }
};
</script>

<style scoped>
.modal.fade>div {
    top: 50%;
    transform: translateY(-50%);
}

</style>