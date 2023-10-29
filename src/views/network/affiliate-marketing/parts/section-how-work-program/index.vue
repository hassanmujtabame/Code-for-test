<template>
    <div class="py-4">
        <h2 class="text-center ms-5">كيفية عمل البرنامج</h2>

        <div class="container mt-4">
           
            <div class="row justify-content-center">
                <div v-for="(item, i) in items" :key="i" class="mt-3 col-lg-4 col-md-6 col-sm-12 position-relative">
                    <hr class="line-dd" v-if="i!==(items.length-1)" />
                    <cardShow :position="(i % 2) == 0 ? 'top' : 'bottom'" 
                    :isFirst="i==0"
                    :image="`${publicPath + item.image} `" :title="item.title"
                        :description="item.description" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardShow from './card'
export default {
    name: 'how-work',
    components: {
        cardShow
    },
    data: (vm) => {
        return {
            items: [
                { title: 'إنضمي الينا', image: `assets/svg/hand-click.svg`, description: 'سجلى كمسوقة بالعمولة و ابداى رحلتك معانا' },
                { title: 'تواصلى مع الاخرين', image: `assets/svg/contact-networking.svg`, description: 'تواصلى مع الاخرين من خلال  لوحة تحكم خاصة بكى تسهل الترويج لمنتجاتك' },
                { title: 'أربحى المال', image: `assets/svg/money-bills-2.svg`, description: 'تلقى عمولتك للتسويق لمنتجاتك من خلال منصة رياديات' },
            ]
        }
    }
}
</script>

<style>
.line-dd{
    position: absolute;
    width: 100%;
    height: 0px;
    background: var(--m-color);
    border: 2px solid var(--m-color);
    top: calc(50% + 2px);
    z-index: -2;
    padding:0;
    margin:0;
    opacity: 1;
}
@media screen and (max-width: 960px) {
.line-dd {
    width: 0;
}
    
}
</style>