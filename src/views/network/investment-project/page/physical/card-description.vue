<template>
              <div >
                <h3>
                    عن المشروع
                </h3>
                <p v-html="itemPage.description"></p>
                <h3>
                    المشكلة المستهدف حلها
                </h3>
                <p v-html="itemPage.problem_solved">
                </p>
                <h3>
                    الخطة المستقبلية
                </h3>
                <p v-html="itemPage.future_plan"></p>
                <div class="w-100">
                    <iframe style="height: 360px;" class="rounded-3 w-100" src="https://www.youtube.com/embed/dGG9pWXS3ZQ"
                        title="مقطع تعريفي عن شركة رياديات" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                </div>
                <h3>
                  فريق العمل
                </h3>
                <p v-html="itemPage.description_user"></p>
            </div>
</template>

<script>
export default {
 props:{
    itemPage:{},
    isOwner:{}
 }
}
</script>

<style>

</style>