<template>
    <div class="card-container d-flex flex-column gap-2" style="overflow-y: scroll;">

        <div v-for="(item, i) in analytics" :key="i" class="col-12 d-flex align-items-center gap-3">
            <h4>
                {{item.name}} 
            </h4>
            <div class="tag">
                {{item.count_service}}
            </div>
        </div>

    </div>
</template>

<script>
import serviceProviderApi from '@/services/api/service-provider/index'
export default {
    data: () => {
        return {
            analytics: []
        }
    },
    methods: {
        async getAnalytics() {
            const {data} = await serviceProviderApi.getAnalytics();
            if(data.success){
                this.analytics = data.data
            }
        }
    },
    mounted() {
        this.getAnalytics()
    }
}

</script>

<style scoped>
.tag {
    color: black;
    width: fit-content;
    padding: 8px 12px;
  
    border-radius: 5px;
    background: #FEA7D5;
}

.card-container {
    width: 300px;
    height: 332px;
    padding: 10px;
}
</style>
