<template>
    <div style="background-color:#F6F8F9;" class="container-fluid mt-3 px-5 py-4 min-riadiat network">
        <h2 class="home-section-title text-center px-5 mt-2">
            المزايا المُقدّمة من رياديات إلى المحتضنات
        </h2> 

        <!-- Cards Container -->
        <div class="container-fluid my-1 p-3 d-flex justify-content-center">
            <div class="row min-riadiat network">
                <!-- First Card -->
                <div class="col-md-3 col-sm-6 col-12 mt-2">
                    <div class="card-box">
                        <img :src="`${publicPath}assets/img/Vector.png`" alt="" class="card-icon">
                        <p class="fs-4 text-center">
                            تطوير الافكار
                            <br>
                            وتوفير الدعم
                        </p>
                    </div>
                </div>

                <!-- Second Card -->
                <div class="col-md-3 col-sm-6 col-12 mt-2">
                    <div class="card-box">
                        <img :src="`${publicPath}assets/img/Vector2.png`" alt="" class="card-icon">
                        <p class="fs-4 text-center">
                            دراسة جدوى أقتصاديــــــــة
                        </p>
                    </div>
                </div>

                <!-- Third Card -->
                <div class="col-md-3 col-sm-6 col-12 mt-2">
                    <div class="card-box">
                        <img :src="`${publicPath}assets/img/Group3.png`" alt="" class="card-icon">
                        <p class="fs-4 text-center">
                            تجهيز عـــــرض أسـتـثـمـــــاري
                        </p>
                    </div>
                </div>

                <!-- Fourth Card -->
                <div class="col-md-3 col-sm-6 col-12 mt-2">
                    <div class="card-box">
                        <img :src="`${publicPath}assets/img/Group4.png`" alt="" class="card-icon">
                        <p class="fs-4 text-center">
                            تجهيز خـــطــــة العمـــــــــــــــل
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.network {
    justify-content: center; /* Centering the .col-md-2 elements horizontally */
}

.card-box {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    transition: 0.3s;
    height: 100%;
}

.card-box:hover {
    box-shadow: 0 8px 10px rgba(0, 128, 0, 0.2); 
}

.card-icon {
    width: 50%;
    margin: 0 auto;
}
</style>

<script>
export default {
    name: 'section-features'
}
</script>
