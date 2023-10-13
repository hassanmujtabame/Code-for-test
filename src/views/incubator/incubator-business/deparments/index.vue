<template>
    <div style="margin-top: 96px">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-3">
                    <h1>مراحل الحاضنة</h1>
                    <h1>اختر القسم الذي تريد تتبع مراحله</h1>
                </div>
                <div v-for="(item, i) in items" :key="i" class="col-2">
                    <div
                        class="border mb-2"
                        style="
                            background: rgba(246, 248, 249, 1);
                            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
                            border-radius: 8px;
                        "
                    >
                        <CardVue
                            :title="item.name"
                            :img="item.image_path"
                            @click-image="onChoose(item)"
                            class="incubator"
                            :class="{
                                subscribed: departmentsIncubatorSub.includes(
                                    item.id
                                ),
                            }"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import incubatorAPI from '@/services/api/incubator';
    import CardVue from '@/components/cards/incubator-dept-circle.vue';
    export default {
        name: 'incubator-business-departments',
        components: {
            CardVue,
        },
        computed: {
            ...mapGetters({
                subscribeIncubators: 'auth/subscribeIncubators',
            }),
        },
        watch: {
            subscribeIncubators: {
                deep: true,
                handler() {
                    this.items = this.items
                        .map((dept) => {
                            return {
                                ...dept,
                                subscribed: this.subscribeIncubators.some(
                                    (x) =>
                                        x.subscribe &&
                                        x.department_id == dept.id
                                ),
                            };
                        })
                        .sort((a, b) =>
                            a.subscribed && !b.subscribed ? -1 : 1
                        );
                },
            },
        },
        data: () => ({
            loading: false,
            hasError: false,
            items: [],
            departmentsIncubatorSub: [],
        }),
        methods: {
            onChoose(dept) {
                if (!this.departmentsIncubatorSub.includes(dept.id)) {
                    let dataEvt = {
                        title: 'غير مش1ترك في القسم',
                        description:
                            'انت غير مشترك في القسم، لذا عليك الاشتراك فيه لتتبع مساره',
                        type: 'warning',
                        btns: [
                            {
                                title: 'اشترك الان',
                                action: () =>
                                    this.router_push('incubator-subscribe'),
                            },
                        ],
                    };
                    this.showConfirmMsg(dataEvt);
                } else {
                    this.router_push('incubator-incubator-business-show', {
                        id: dept.id,
                    });
                }
            },
            async initializing() {
                this.loading = true;
                try {
                    let { data } = await incubatorAPI.getDepartments();
                    if (data.success) {
                        this.items = data.data
                            .map((dept) => {
                                return {
                                    ...dept,
                                    subscribed: this.subscribeIncubators.some(
                                        (x) =>
                                            x.subscribe &&
                                            x.department_id == dept.id
                                    ),
                                };
                            })
                            .sort((a, b) =>
                                a.subscribed && !b.subscribed ? -1 : 1
                            );
                        /*if(process.env.NODE_ENV=='development' && this.items.length==1){
            this.items[0].image_path='https://test1.riadiat.sa/uploads/academy/departments/1682664230.jpg';
            this.items.push({id:2,name:'مجال',image_path:'https://test1.riadiat.sa/uploads/academy/departments/1682664386.jpg',subscribed:false})
        }*/
                    }
                } catch (error) {
                    console.mylog('error', error);
                    //
                }
                this.loading = false;
            },
            departmentsIdsSubscriptions() {
                for (
                    let index = 0;
                    index < this.user.system_subscriptions.length;
                    index++
                ) {
                    const element = this.user.system_subscriptions[index];
                    if (element.system_package.related_to.key == 'incubator') {
                        for (
                            let index3 = 0;
                            index3 < element.departments.length;
                            index3++
                        ) {
                            const element3 = Number(
                                element.departments[index3]
                            );
                            this.departmentsIncubatorSub.push(element3);
                        }
                    }
                }
            },
        },
        mounted() {
            this.departmentsIdsSubscriptions();
            this.initializing();
        },
    };
</script>

<style scoped>
    .subscribed >>> .incubator-dept__title {
        color: var(--color-primary);
    }
    .incubator:not(.subscribed) >>> .incubator-dept__image {
        filter: contrast(0.2);
    }
    .subscribed >>> .incubator-dept__image {
        /* box-shadow: 0px 0 33px 18px rgba(var(--color-secondary-rgb), .25); */
        filter: none;
    }
</style>
