<template>
    <div>
        <d-swiper  
            v-if="items && items.length > 1"
            :slides-per-view="5"
            :space-between="30"
            is-auto
            :items="items"
            :navigation="true"
            :loop="true"
        >
            <template v-slot="{item}">
                <div class="slide-content">
                    <ImgAvatar class="filter-shadow-partner mx-auto avatar-image" :img="item.image" size='180' />
                    <p class="avatar-name">{{ item.user_name }}</p> <!-- Assuming the item has a 'name' property -->
                </div>
            </template>             
        </d-swiper>
    </div>
</template>

<script>
import ImgAvatar from '@/components/avatars/img-avatar.vue';
import incubatorAPI from '@/services/api/incubator';

export default {
    name: 'section-our-partners',
    components: {
        ImgAvatar,
    },
    data() {
        return {
            loading: true,
            items: [],
        };
    },
    watch: {
        loading() {
            if (!this.loading) {
                window.AOS.init();
            }
        },
    },
    methods: {
        async initializing() {
            this.loading = false;
            try {
                const { data } = await incubatorAPI.getPartners();
                if (data.success) {
                    this.items = data.data;
                }
            } catch (error) {
                // Handle the error appropriately
                console.error("Error fetching partners:", error);
            }
            this.loading = true;
        },
    },
    async mounted() {
        await this.initializing();
    }
};
</script>

<style>
.slide-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.avatar-image {
    border-radius: 50%; /* Assuming circular avatars */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.avatar-name {
    font-size: 16px;
    text-align: center;
    color: #333;
    margin-top: 5px;
}
</style>
