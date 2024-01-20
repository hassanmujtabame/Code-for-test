<template>
    <div style="background-color: #F6F8F9;">
        <div class="container">

            <div class="row mt-5 align-items-center justify-content-between p-3">
                <div class="col-md-6 p-5">
                    <img class="img-fluid rounded-3 " src="@/assets/img/new/consultion/first-section.png" alt="">

                </div>

                <div class="col-md-6">
                    <h2>
                        أنطلق الان
                    </h2>
                    <p>
                        أشترك في خدمة الاستشارات من رياديات و أستمتع بالكثير من المميزات و العروض
                    </p>
                    <div>
                        <p>
                            <i style="color:var(--pc)" class="fas fa-check-circle mx-2"></i>
                            مجالات متنوعة و فريدة
                        </p>
                        <p>
                            <i style="color:var(--pc)" class="fas fa-check-circle mx-2"></i>
                            مجالات متنوعة و فريدة
                        </p>
                        <p>
                            <i style="color:var(--pc)" class="fas fa-check-circle mx-2"></i>
                            مجالات متنوعة و فريدة
                        </p>
                        <p class="mb-4">
                            <i style="color:var(--pc)" class="fas fa-check-circle mx-2"></i>
                            مجالات متنوعة و فريدة
                        </p>
                        <div class="mb-4">
                            <router-link :to="getRouteLocale('consulting-register')" class="btn-custmer px-5 py-1">
                                أشتركي
                            </router-link>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'section-launch-now'
}
</script>

<style></style>