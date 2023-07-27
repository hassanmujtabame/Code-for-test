<template>
    <div class="rounded-3 border mt-4 p-4">
        <h4 class="border-bottom">
            شارك الخدمة
        </h4>
        <div class="d-flex gap-4 justify-content-center p-4">
            <ShareNetwork
                    network="twitter"
                    :url="this.$route.fullPath"
                    :title="item.title"
                    :description="item.title"
                    :hashtags="item.keywords"
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_870_38602" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56"
                          height="56">
                        <g clip-path="url(#clip0_870_38602)">
                            <path
                                    d="M51.9612 0H4.03876C1.80811 0 0 1.80811 0 4.03876V51.9612C0 54.1919 1.80811 56 4.03876 56H51.9612C54.1919 56 56 54.1919 56 51.9612V4.03876C56 1.80811 54.1919 0 51.9612 0V0ZM40.7845 21.8314C40.7969 22.107 40.8029 22.3839 40.8029 22.662C40.8029 31.1544 34.3386 40.9473 22.5172 40.9477H22.5176H22.5172C18.8877 40.9477 15.5103 39.8839 12.6661 38.0608C13.169 38.1202 13.6808 38.1497 14.1991 38.1497C17.2103 38.1497 19.9814 37.1226 22.1813 35.3986C19.3679 35.3465 16.9958 33.4884 16.1772 30.9348C16.569 31.0099 16.9719 31.051 17.3851 31.051C17.9717 31.051 18.5399 30.9719 19.08 30.8245C16.1392 30.2358 13.924 27.6368 13.924 24.5248C13.924 24.4957 13.924 24.4697 13.9248 24.4427C14.7908 24.9243 15.7812 25.2139 16.8356 25.2464C15.11 24.095 13.9756 22.1266 13.9756 19.8969C13.9756 18.7194 14.2939 17.6162 14.8459 16.6664C18.0153 20.5552 22.7517 23.1127 28.0931 23.3815C27.9829 22.9106 27.9261 22.4202 27.9261 21.916C27.9261 18.3682 30.8044 15.4898 34.3536 15.4898C36.2023 15.4898 37.8719 16.2712 39.0447 17.5205C40.5089 17.2317 41.8838 16.6968 43.1258 15.9606C42.6451 17.4607 41.6266 18.7194 40.2996 19.5153C41.5997 19.3598 42.8387 19.015 43.9901 18.5032C43.1301 19.7922 42.0393 20.9244 40.7845 21.8314V21.8314Z"
                                    fill="white"/>
                        </g>
                    </mask>
                    <g mask="url(#mask0_870_38602)">
                        <circle cx="28" cy="28" r="28" fill="#979797"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_870_38602">
                            <rect width="56" height="56" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </ShareNetwork>
            <ShareNetwork
                    network="linkedin"
                    :url="this.$route.fullPath"
                    :title="item.title"
                    :description="item.title"
                    :hashtags="item.keywords"
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_870_38589" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56"
                          height="56">
                        <g clip-path="url(#clip0_870_38589)">
                            <path
                                    d="M51.9612 0H4.03876C1.80811 0 0 1.80811 0 4.03876V51.9612C0 54.1919 1.80811 56 4.03876 56H51.9612C54.1919 56 56 54.1919 56 51.9612V4.03876C56 1.80811 54.1919 0 51.9612 0V0ZM19.8635 42.3281H13.0443V21.8122H19.8635V42.3281ZM16.4541 19.0107H16.4097C14.1213 19.0107 12.6414 17.4355 12.6414 15.4667C12.6414 13.4536 14.1666 11.9219 16.4994 11.9219C18.8322 11.9219 20.2677 13.4536 20.3121 15.4667C20.3121 17.4355 18.8322 19.0107 16.4541 19.0107ZM44.4524 42.3281H37.634V31.3526C37.634 28.5943 36.6466 26.7131 34.1793 26.7131C32.2955 26.7131 31.1736 27.9821 30.6805 29.207C30.5002 29.6453 30.4562 30.258 30.4562 30.8711V42.3281H23.6374C23.6374 42.3281 23.7267 23.7369 23.6374 21.8122H30.4562V24.717C31.3624 23.3191 32.9838 21.3307 36.6017 21.3307C41.0883 21.3307 44.4524 24.2629 44.4524 30.5643V42.3281Z"
                                    fill="white"/>
                        </g>
                    </mask>
                    <g mask="url(#mask0_870_38589)">
                        <circle cx="28" cy="28" r="28" fill="#979797"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_870_38589">
                            <rect width="56" height="56" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </ShareNetwork>
            <ShareNetwork
                    network="facebook"
                    :url="this.$route.fullPath"
                    :title="item.title"
                    :description="item.title"
                    :hashtags="item.keywords"
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_870_38586" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56"
                          height="56">
                        <circle cx="28" cy="28" r="28" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_870_38586)">
                        <path
                                d="M41.0617 -0.000780821L28.9313 -2.80078L16.795 -0.000780821C13.715 -0.000780821 -0.00201797 12.3192 -0.00201797 15.3992L-3.73535 37.3326C-3.73535 40.4126 13.7169 55.9992 16.7969 55.9992H41.0617C44.1417 55.9992 54.1313 46.0126 54.1313 42.9326L59.7313 17.7326C59.7313 14.6526 44.1417 -0.000780821 41.0617 -0.000780821ZM38.2617 5.59922V13.9992H32.6617C30.9817 13.9992 29.8617 15.1192 29.8617 16.7992V22.3992H38.2617V30.7992H29.8617V50.3992H21.4617V30.7992H15.8617V22.3992H21.4617V15.3992C21.4617 10.0792 25.9417 5.59922 31.2617 5.59922H38.2617Z"
                                fill="#979797"/>
                    </g>
                </svg>
            </ShareNetwork>
        </div>
    </div>
</template>

<script>

export default {
    name: 'section-share-service',
    props: {
        item: {
            type: [Object, Array],
            require: true
        }
    },
    created() {
        console.log(this.item)
    }
}
</script>

<style>

</style>