<template>
    <div class="container mt-5" v-if="items && items.length > 0">
        <div :id="carouselId" class="ads-carousel owl-carousel owl-theme">
            <ItemSlide v-for="(item, i) in sliders" :key="i" :item="item" />
        </div>
    </div>
</template>

<script>
//import commonAPI from '@/services/api/common'
import adsAPI from '@/services/api/ads'
import ItemSlide from './card-item.vue'
export default {
    name: 'section-ads',
    props: {
        department: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    components: {
        ItemSlide
    },
    data: (vm) => {
        let id = vm.generateRandomString(8);
        return {
            carouselId: `carousel-ads-${id}`,
            compId: id,
            loading: true,
            items: []
        }
    },
    computed: {
        sliders() {
            let style = `
                #scdf{
                    background: linear-gradient(275.37deg, #BBD2C5 7.87%, #1FB9B3 101.4%);
                }
                .xxcfd{
                    font-style: normal;
                            font-weight: 700;
                            font-size: 58.2011px;
                            line-height: 108px;
                            text-align: right;
                            color: #F6F8F9;
                            text-shadow: 0px 11.1275px 11.1275px rgba(0, 0, 0, 0.25);
                        }`
            return this.items.length > 0 ? this.items : [
                {
                    type: "html", content: `<div id="scdf" class="w-100 h-100 text-white p-4">
                <p class="xxcfd">نضع أهم </p>
                <p class="xxcfd">اعلانات كل قسم هنا</p>
                </div>`,
                    style: style
                },
                {
                    type: "html", content: `<div id="scdf" class="w-100 h-100 text-white p-4">
                <p class="xxcfd">نضع أهم </p>
                <p class="xxcfd">اعلانات كل قسم هنا</p>
                </div>`,
                    style: style
                }
            ]
        }
    },
    watch: {
        sliders: {
            deep: true,
            handler() {
                let style = document.getElementById(this.compId)
                if (style) style.remove()
                if (!style) {
                    style = document.createElement('style')
                    style.setAttribute('id', this.compId)
                    //style.type = 'text/css';
                }
                let css = ''
                this.sliders.forEach(el => {
                    css += `\n ${el.style}`
                })
                //console.mylog('style',style)

                if (style.styleSheet) {
                    console.mylog('style.styleSheet', style.styleSheet)
                    // This is required for IE8 and below.
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }

                let head = document.head || document.getElementsByTagName('head')[0]
                head.appendChild(style);


            }
        }
    },
    beforeDestroy() {
        let style = document.getElementById(this.compId)
        if (style) {
            style.remove()
        }
    },
    methods: {
        async initializing() {
            this.loading = true;
            try {
                let { data } = await adsAPI.getAll({ position: this.department })
                if (data.success) {
                    this.items = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
            this.loading = false;
        }
    },
    async mounted() {
        await this.initializing()
        window.$(`#${this.carouselId}`).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }
}
</script>
  
<style></style>