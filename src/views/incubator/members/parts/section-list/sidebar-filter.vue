<template>
    <div class="box border p-3 rounded-3">
        <h4>{{ $t('filter') }}</h4>
        <div class="accordion" id="accordionPanelsStayOpenExample">

            <div class="accordion-item show">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseTwo">
                        مجالات الاختصاص
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body show">
                        <div v-for="(department, i) in departments" :key="i" class="form-check">
                            <input v-model="filter.department_ids"
                            :id="department.id"
                            :value="department.id"
                            class="form-check-input" type="checkbox">
                            <label class="form-check-label" :for="department.id">
                                {{ department.name }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3 text-center">
            <button @click="updateFilter" class="btn-custmer">
                {{ $t('save') }}
            </button>
        </div>
    </div>
</template>

<script>
import incubatorAPI from '@/services/api/incubator';

export default {
    name: 'sidebar-box',
    props: {
        filterItem: {
            type: [Object, Array],//defaults values
            require: true
        }
    },
    data: (vm) => {

        return {
            providers:
                [
                    { id: null, name: 'الكل' },
                    { id: 'worked', name: 'وظفتهم سابقا' },
                    { id: 'offered', name: 'أضافوا عروضا على طلباتك' },
                ],
            states: [
                { id: null, name: 'الكل' },
                { id: 'online', name: vm.$t('online-services') },
                { id: 'offline', name: vm.$t('offline-services') },
                { id: 'ready-services', name: vm.$t('ready-services') },
            ],
            departments: [],
            filter: vm.filterItem
        }
    },
    watch: {
        /*filter:{
            deep:true,
            handler(val){
                this.$emit('change',val)
            }
        }*/
    },
    methods: {
        updateFilter() {
            this.$emit('change', this.filter)
        },
        async getDepartments() {
            try {
                let { data } = await incubatorAPI.getDepartments()
                if (data.success) {

                    let departments = data.data;
                    //categories.unshift({ id: null, name: 'الكل' })
                    this.departments = departments
                }
            } catch (error) {
                console.log('error', error)
                console.log('error response', error.response)
            }
        }
    },
    mounted() {
        //
        this.getDepartments();
    }
}
</script>



<style></style>