<template>
    <div class="mx-3 mt-3">
                            <div type="" class=" position-relative">
                                <svg width="18" height="22" viewBox="0 0 18 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.82716 4.11595C9.18038 4.11595 10.0196 4.33931 10.0196 4.33931C12.293 4.86028 13.8932 6.95435 13.8932 9.31865V15.0236V15.6824L14.358 16.1494L14.7464 16.5395H2.80818L3.19655 16.1494L3.66137 15.6824V15.0236V9.31865C3.66137 6.9544 5.26159 4.86029 7.53503 4.33931C7.53503 4.33931 8.4348 4.11595 8.72743 4.11595M8.77729 0.501953C7.89951 0.501953 7.22843 1.17607 7.22843 2.05784V2.78387C4.28546 3.45824 2.06558 6.15501 2.06558 9.31864V15.0236L0.000488281 17.0981V18.1353H17.5541V17.0981L15.489 15.0236V9.31864C15.489 6.155 13.2691 3.45823 10.3261 2.78387V2.05784C10.3261 1.17607 9.65507 0.501953 8.77729 0.501953ZM10.8424 19.1726H6.71215C6.71215 20.3136 7.64134 21.2471 8.77729 21.2471C9.91324 21.2471 10.8424 20.3136 10.8424 19.1726Z"
                                        fill="#0C2F33" />
                                </svg>

                                <span
                                v-if="count"
                                    class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                                   {{count}}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </div>
                        </div>
</template>
<script>
export default {
    data() {
       return{ count:0} 
    },
}
</script>
