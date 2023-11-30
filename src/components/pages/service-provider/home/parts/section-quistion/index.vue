<template>
    <div class="container mt-5 mb-5">

        <h2 class="pc mb-5">
            ما زال لديك اسئله؟
        </h2>
        <router-link :to="getRouteLocale('service-provider-contact-us')">
            <div class="btn-customer d-flex gap-3 justify-content-center align-items-center"
                style="line-height: initial; width: 400px; border-radius: 35px;">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.6667 13.6602H32.3333M13.6667 22.9883H27.6667M30 34.6485H25.3333L13.6667 41.6446V34.6485H9C7.14348 34.6485 5.36301 33.9114 4.05025 32.5994C2.7375 31.2874 2 29.5079 2 27.6524V8.99611C2 7.14063 2.7375 5.36114 4.05025 4.04911C5.36301 2.73709 7.14348 2 9 2H37C38.8565 2 40.637 2.73709 41.9497 4.04911C43.2625 5.36114 44 7.14063 44 8.99611V21.8223M39.3333 29.9845V36.9806M39.3333 43.9767V44"
                        stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2>
                    تواصل معنا
                </h2>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'section-quistion'
}
</script>