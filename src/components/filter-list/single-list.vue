<template>
    <div class="d-grid">
        <div class="row">
            <div v-if="items.length == 0">
                <h1 class="t-c text-center">{{ emptyList }}</h1>
            </div>
            <div v-else class="col-12 row order filter-list-items">
                <div v-for="(item, i) in items" :key="i">
                    <slot :item="item"></slot>
                </div>
            </div>
        </div>
        <div v-if="items.length > 0" class="text-center">
            <button v-if="metaInfo.current_page < metaInfo.total_page" class="btn btn-custmer w-100" @click="nextLoad">
                <i v-if="loading" class="fa fa-spinner fa-span"></i>
                <i v-else class="fa-regular fa-square-plus"></i>
                {{ showMore }}
            </button>
            <p class="m-0 w-100 no-more-items" v-else>{{ noMoreItems }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'd-single-list',
    props: {
        paginate: {
            type: Number,
            default: 6,
        },
        emptyList: {
            type: String,
            default: 'لا توجد عناصر'
        },
        showMore: {
            type: String,
            default: 'عرض المزيد'
        },
        noMoreItems: {
            type: String,
            default: 'لا يوجد المزيد من العناصر'
        },
        fakeItems: {
            type: [Array, Object],
            default: () => null
        },
        callList: {
            type: Function,
            default: null
        },
    },
    data: (vm) => {
        return {
            metaInfo: {
                current_page: 1,
                total: 0,
                last_page: 0,
                paginate: vm.paginate
            },
            items: [],
            loading: false,
        }
    },
    methods: {
        nextLoad() {
            this.metaInfo.current_page = this.metaInfo.current_page + 1;
            this.loadList()
        },
        async loadList() {
            this.loading = true;
            if (this.fakeItems) {
                this.items = this.fakeItems
                this.loading = false;
                return
            }
            if (!this.callList && !this.link) {
                this.loading = false;
                return;

            }
            try {

                let { data } = this.callList ? await this.callList(this.metaInfo) : await this.$axios.get(`${this.link}?page=${this.metaInfo.current_page}`)

                if (data.success) {
                    this.items = data.data;
                    this.metaInfo.to = data.meta.to
                    this.metaInfo.total = data.meta.total;
                    this.metaInfo.total_page = data.meta.last_page;
                }
            } catch (error) {
                console.mylog('error', error)
                console.mylog('response', error.response)
            }
            this.loading = false;

        }

    },
    mounted() {
        this.loadList()
    },
}
</script>

<style scoped>
.d-grid {
    grid-template-rows: 1fr auto;
}

.no-more-items {
    background: #FFFFFF;
    /* box */

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
    border-radius: 8px 8px 0px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    /* identical to box height, or 167% */
    text-transform: capitalize;

    color: #979797;
}
</style>