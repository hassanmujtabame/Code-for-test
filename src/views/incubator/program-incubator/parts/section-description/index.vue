<template>
    <div class="container mb-5">
        <div class="row mt-5 align-items-strech">

            <div class="col-md-6 d-flex flex-column">
                <h2>
                    <img style="display: inline;" src='@/assets/img/incubator/tourism.png' />
                    حاضنة {{ itemPage.name }}
                </h2>
                <p v-html="itemPage.description" style="color: #979797;line-height: 40px;font-size: 24px;"
                    class="flex-grow-1">
                </p>
                <div>


                    <button class="btn-main my-3"> انضمي الان </button>
                </div>

            </div>
            <div class="col-md-6">
                <div style="width:80%;height:350px; overflow:hidden; margin-right: auto;">
                    <img class="img-fill rounded-2" :src="itemPage.image_path" alt="" />
                </div>
            </div>


        </div>

    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'section-desc',
    props: {
        itemPage: {}
    }
}
</script>

<style></style>