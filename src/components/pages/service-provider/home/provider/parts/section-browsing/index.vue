<template>
    <div class="container mt-5 mb-5">
        <h2 class="mb-4">
            تصفح المجالات المختلفه
        </h2>
        <div class="d-flex gap-4 justify-content-center flex-wrap">
            <div v-for="(cat, i) in categories" :key="i" class="box rounded-3 p-5 text-center"
                style="width: 300px; height: 160px; background-color: #EBEFEF;">
                <h3 class="pc">
                    {{ cat.name }}
                </h3>
            </div>

        </div>
    </div>
</template>
<script>
import readyServiceAPIs from "@/services/api/service-provider/provider/ready-service";

export default {
    data: () => {
        return {
            categories: [],
        };
    },
    methods: {
        async getCategories() {
            try {
                let { data } = await readyServiceAPIs.getCategories();
                if (data.success) {
                    let categories = data.data;
                    this.categories = categories;
                }
            } catch (error) {
                console.log("error", error);
                console.log("error response", error.response);
            }
        }
    },
    mounted() {
        this.getCategories();
        console.log('categoryy', this.categories)
    }
}
</script>
<style scoped></style>