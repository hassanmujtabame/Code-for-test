<template>
    <div class="mx-3 mt-3">
        <router-link :to="getRouteLocale(`${prefixRoute}conversations`)" class="display-block position-relative">
            <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1979_95671)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.8241 0.996094H2.67053C1.45398 0.996094 0.467773 1.9823 0.467773 3.19885V14.9469C0.467773 16.1635 1.45398 17.1497 2.67053 17.1497H5.27714L4.87772 20.7402C4.83319 21.1432 5.12385 21.5061 5.52693 21.5506C5.73507 21.5736 5.94313 21.5066 6.09879 21.3665L10.7848 17.1497H18.8241C20.0407 17.1497 21.0269 16.1635 21.0269 14.9469V3.19886C21.0269 1.98231 20.0407 0.996104 18.8241 0.996104V0.996094ZM19.5583 14.9469C19.5583 15.3524 19.2296 15.6812 18.8241 15.6812H10.5028C10.3214 15.6812 10.1464 15.7485 10.0116 15.8699L6.5503 18.9853L6.82711 16.4969C6.87211 16.0939 6.58192 15.7307 6.17889 15.6857C6.15179 15.6827 6.12455 15.6811 6.09728 15.6812H2.67053C2.265 15.6812 1.93626 15.3524 1.93626 14.9469V3.19884C1.93626 2.79331 2.265 2.46457 2.67053 2.46457H18.8241C19.2296 2.46457 19.5584 2.79331 19.5584 3.19884V14.9469L19.5583 14.9469Z"
                        fill="#0C2F33" />
                </g>
                <defs>
                    <clipPath id="clip0_1979_95671">
                        <rect width="20.5591" height="20.5589" fill="white" transform="translate(0.467773 0.996094)" />
                    </clipPath>
                </defs>
            </svg>

            <span v-if="count" class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {{ count }}
                <span class="visually-hidden">unread messages</span>
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        prefixRoute: {}
    },
    data() {
        return { count: 0 }
    },
}
</script>
<style scoped>
.display-block {
    display: block;
    color: #000
}
</style>