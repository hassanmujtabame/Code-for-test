<template>
    <div class="container mt-5">
        <h2 class="home-section-title text-center">
            من هم أعضاء الشبكة
        </h2>
        <div class="row">
            <div v-for="(item, i) in items" :key="i" class="col-12 col-md-6 col-lg-3 mt-3">
                <div class="box">
                    <div @click="goToPage(item.name)" style="cursor: pointer" class="position-relative text-center">
                        <d-hover v-slot="{ hover }">
                            <img :src="hover ? `${publicPath}assets/img/network289322-colored.png` : `${publicPath}assets/img/network289322.png`"
                                alt="" style="transition: 0.3s all ease-in-out;" :style="hover ? { transform: 'rotate(45deg)' } : {}" />
                            <div class="position-absolute bg-white img-person-network ">
                                <p :class="{ 'm-c': !hover }">
                                    {{ item.name }}
                                </p>
                            </div>
                        </d-hover>
                    </div>
                </div>

            </div>



        </div>

    </div>
</template>

<script>
export default {
    name: 'section-3',
    data: () => ({
        items: [
            { name: 'رائدة اعمال ' },
            { name: 'مؤثرون' },
            { name: 'مستثمرون' },
            { name: 'معلنين' },
        ]
    }), methods: {
        goToPage(name) {
            if (name == 'مؤثرون') {
                let dataEvt = {
                    title: 'للأسف لايمكنك رؤية المعارض',
                    description: `انت غير مسجل معنا قم بتسجيل الدخول حتى تتمكن من رؤيه معارضنا `,
                    image: `${this.publicPath}assets/img/Group 1171275670.png`,
                    btns: [
                        { title: ' سجل دخولك الان', action: () => this.router_push('register') }]
                }
                this.showConfirmMsg(dataEvt);
                return;

            } else if (name == 'معلنين') {
                let dataEvt = {
                    title: 'للأسف لايمكنك رؤية عروضنا',
                    description: `انت غير مسجل معنا قم بتسجيل الدخول حتى تتمكن من رؤيه عروضنا `,
                    image: `${this.publicPath}assets/img/Group 1171275670.png`,
                    btns: [
                        { title: ' سجل دخولك الان', action: () => this.router_push('register') }
                    ]
                }
                this.showConfirmMsg(dataEvt);
                return;

            } else if (name == 'رائدة اعمال ') {
                let dataEvt = {
                    title: 'للأسف لايمكنك رؤية أعضاء الشبكة',
                    description: `انت غير مسجل معنا قم بتسجيل الدخول حتى تتمكن من رؤيه أعضاء الشبكه `,
                    image: `${this.publicPath}assets/img/Group 1171275670.png`,
                    btns: [
                        { title: ' سجل دخولك الان', action: () => this.router_push('register') }
                    ]
                }
                this.showConfirmMsg(dataEvt);
                return;

            }
        }
    }
}
</script>

<style></style>