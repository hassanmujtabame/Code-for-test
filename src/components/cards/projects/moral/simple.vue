<template>
    <div class="box border rounded-top rounded-2 p-2">
        <div class="p-2 text-start section-top-info">

            <p class="text-end t-c">
                {{ $t('publish-date') }}
                <span>
                    : {{ datePublish }}
                </span>
            </p>
            <h5>
                {{ title }}
            </h5>
            <p v-html="description"></p>
            <p>في {{ place }}</p>
           
        </div>
        <hr/>
        <div  class="col-md-12  dashbord rounded-bottom">
            <div class=" row justify-content-between p-1 ">
                <div class="d-flex col-md-6">
                    <div class="t-c">

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
                                fill="white" />
                            <path
                                d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
                                fill="white" />
                            <path
                                d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
                                fill="white" />
                        </svg>

                    </div>
                    <div class="t-c">
                        {{ $t('rest-days-to-end') }}
                        <p :class="classRestDays">
                            {{ restDay }} يوم
                        </p>
                    </div>
                </div>
                <div class="d-flex col-md-6">
                    <div class="t-c">

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4002 17.4201H10.8902C9.25016 17.4201 7.92016 16.0401 7.92016 14.3401C7.92016 13.9301 8.26016 13.5901 8.67016 13.5901C9.08016 13.5901 9.42016 13.9301 9.42016 14.3401C9.42016 15.2101 10.0802 15.9201 10.8902 15.9201H13.4002C14.0502 15.9201 14.5902 15.3401 14.5902 14.6401C14.5902 13.7701 14.2802 13.6001 13.7702 13.4201L9.74016 12.0001C8.96016 11.7301 7.91016 11.1501 7.91016 9.36008C7.91016 7.82008 9.12016 6.58008 10.6002 6.58008H13.1102C14.7502 6.58008 16.0802 7.96008 16.0802 9.66008C16.0802 10.0701 15.7402 10.4101 15.3302 10.4101C14.9202 10.4101 14.5802 10.0701 14.5802 9.66008C14.5802 8.79008 13.9202 8.08008 13.1102 8.08008H10.6002C9.95016 8.08008 9.41016 8.66008 9.41016 9.36008C9.41016 10.2301 9.72016 10.4001 10.2302 10.5801L14.2602 12.0001C15.0402 12.2701 16.0902 12.8501 16.0902 14.6401C16.0802 16.1701 14.8802 17.4201 13.4002 17.4201Z"
                                fill="white" />
                            <path
                                d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                                fill="white" />
                            <path
                                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                fill="white" />
                        </svg>


                    </div>
                    <div class="t-c">
                        الايجار 
                        <p class="text-dark">
                            من {{minRent}} ألف -{{maxRent}} ألف
                        </p>
                    </div>
                </div>
                
                
              
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'offer-investment-project-simple',
    props: {
        title: {
            type: String,
            default:'N/A'
        },
        datePublish: {
            type: String,
            default:'N/A'
        },
        publisher: {
            type: String,
            default:'N/A'
        },
        offered_property: {
            type: [String, Number],
            default:'N/A'
        },
        offers: {
            type: [String, Number],
            default:'N/A'
        },
        place: {
            type: String,
            default:'N/A'
        },
        description: {
            type: String
        },
        restDay: {
            type: [String, Number],
            default:'N/A'
        },
        minRent: {
            type: [String, Number],
            default:'N/A'
        },
        maxRent: {
            type: [String, Number],
            default:'N/A'
        },
        classRestDays: {
            type: String,
            default:'text-dark'
        },

    }
}
</script>

<style scoped>
.section-top-info{
    height: 187px;
    overflow: hidden;
}
</style>