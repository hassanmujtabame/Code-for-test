<template>
    <section class="container d-flex flex-row flex-nowrap justify-content-between">
        <div class="box rounded-2 p-3 d-flex gap-1" style="background-color: #eee;">
            <img style="object-fit: contain; width: 146px" src="@/assets/img/new/network/Group 58.png" alt="">
            <div>
                <h2>
                    عروض و خصومات
                </h2>
                <button class="upgrade-button" @click="$router.push({name: 'network'})">
                    عرض التفاصيل
                </button>
            </div>
        </div>
        <div class="box rounded-2 p-3 d-flex gap-1" style="background-color: #eee;">
            <img style="object-fit: contain; width: 146px" src="@/assets/img/new/network/Frame.png" alt="">
            <div>
                <h2>
                    اماكن عمل
                </h2>
                <button class="upgrade-button" @click="$router.push({name: 'workspaces-home'})">
                    عرض التفاصيل
                </button>
            </div>
        </div>
        <div class="box rounded-2 p-3 d-flex gap-1" style="background-color: #eee;">
            <img style="object-fit: contain; width: 146px" src="@/assets/img/new/network/Group 5.png" alt="">
            <div>
                <h2>
                    مشاريع استثماريه
                </h2>
                <button class="upgrade-button" @click="$router.push({name: 'network-investment-project'})">
                    عرض التفاصيل
                </button>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'section-category'
}
</script>

<style scoped>
.upgrade-button {
    padding: 12px 30px;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    outline: none;
    width: 180px;
    transition: all 0.3s;
    background: var(--pc);
    color: #fff;
    margin-bottom: 20px;

}

.upgrade-button:hover {
    opacity: 0.8;
}
</style>