<template>
  <div class="box border rounded-2 p-2">
                    <p class="text-start  t-c">
                        {{ $t('publish-date') }}
                        <span>
                            : {{ itemPage.created_at }}
                        </span>
                    </p>
                    <div class="text-start">

                        <h5 class="t-c">
                            {{ itemPage.title }}
                        </h5>
                        <p>
                            <span class="m-c">
                                {{ itemPage.amount_financing_required }}
                            </span>
                            <span class="y-c">
                                {{ $t('SAR') }}
                            </span>
                        </p>
                    </div>
                    <div class="col-md-12 mt-5 dashbord">
                        <div style="height: 10px;" class="progress ">
                            <div class="progress-bar" role="progressbar" aria-label="Example with label"
                                style="width: 50%; height: 10px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="position-absolute text">
                                    <div class="d-flex justify-content-between">
                                        <p>
                                            <span class="fw-bolder t-c fs-6">
                                                من {{ itemPage.count_invest }} مستثمر
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">

                            <small class="t-c text-start">
                                <span>
                                    {{ itemPage.minimum_investment }}%
                                </span>
                                {{ $t('required-minimum') }}
                            </small>
                            <small class="t-c text-start">
                                <span>
                                    الهدف:
                                </span>
                                <span class="text-danger">
                                    500.00
                                </span>
                                رس
                            </small>
                        </div>
                        <div class="mt-2">
                            <div>

                                <button class="btn bg-main text-white" @click="openConfirmOfferDialog">
                                    {{ $t('Make_an_offer') }}
                                </button>
                                <button @click="showShareSocialMedia" class="btn border m-c">
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 2.40234V6.97377C3 6.97377 1 11.6595 1 18.4023C2.04 13.8766 5 11.5452 9.00001 11.5452H11V16.1166L17 8.89377L11 2.40234Z"
                                            stroke="#1FB9B3" stroke-width="1.4" />
                                    </svg>
                                    مشاركة
                                </button>
                            </div>
                            <p class="mt-1 t-c">
                                الحد الأدنى للاستثمار:
                                <span>
                                    {{ itemPage.minimum_investment }} رس
                                </span>
                            </p>
                        </div>
                    </div>
                    <hr>
                    <div class=" row justify-content-between">
                        <div class="col-md-5 d-flex">
                            <div class="t-c">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.71224 15.1667C5.21891 15.1667 2.37891 12.3267 2.37891 8.83333C2.37891 5.34 5.21891 2.5 8.71224 2.5C12.2056 2.5 15.0456 5.34 15.0456 8.83333C15.0456 12.3267 12.2056 15.1667 8.71224 15.1667ZM8.71224 3.5C5.77224 3.5 3.37891 5.89333 3.37891 8.83333C3.37891 11.7733 5.77224 14.1667 8.71224 14.1667C11.6522 14.1667 14.0456 11.7733 14.0456 8.83333C14.0456 5.89333 11.6522 3.5 8.71224 3.5Z"
                                        fill="#979797" />
                                    <path
                                        d="M8.71191 9.16634C8.43858 9.16634 8.21191 8.93967 8.21191 8.66634V5.33301C8.21191 5.05967 8.43858 4.83301 8.71191 4.83301C8.98525 4.83301 9.21191 5.05967 9.21191 5.33301V8.66634C9.21191 8.93967 8.98525 9.16634 8.71191 9.16634Z"
                                        fill="#979797" />
                                    <path
                                        d="M10.7119 1.83301H6.71191C6.43858 1.83301 6.21191 1.60634 6.21191 1.33301C6.21191 1.05967 6.43858 0.833008 6.71191 0.833008H10.7119C10.9852 0.833008 11.2119 1.05967 11.2119 1.33301C11.2119 1.60634 10.9852 1.83301 10.7119 1.83301Z"
                                        fill="#979797" />
                                </svg>
                            </div>
                            <div class="t-c">
                                <small>
                                    {{ $t('rest-days-to-end') }}
                                </small>
                                <p class="text-dark">
                                    {{ itemPage.rest_days }} يوم
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex">
                            <div class="t-c">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.3403 12.8403C13.2137 12.8403 13.087 12.7937 12.987 12.6937L9.68699 9.39366C9.49366 9.20032 9.49366 8.88033 9.68699 8.68699C9.88033 8.49366 10.2003 8.49366 10.3937 8.68699L13.6937 11.987C13.887 12.1803 13.887 12.5003 13.6937 12.6937C13.5937 12.7937 13.467 12.8403 13.3403 12.8403Z"
                                        fill="#979797" />
                                    <path
                                        d="M6.73997 12.2864C6.2533 12.2864 5.78663 12.0931 5.44663 11.7464L2.61996 8.91979C1.90663 8.20645 1.90663 7.03978 2.61996 6.32644L7.3333 1.61313C8.04663 0.899792 9.2133 0.899792 9.92663 1.61313L12.7533 4.43979C13.1 4.78645 13.2933 5.24645 13.2933 5.73312C13.2933 6.21979 13.1 6.68646 12.7533 7.02645L8.03996 11.7398C7.6933 12.0998 7.2333 12.2864 6.73997 12.2864ZM8.62663 2.07978C8.4133 2.07978 8.19996 2.15978 8.03996 2.32644L3.32664 7.03978C2.99997 7.36645 2.99997 7.89311 3.32664 8.21977L6.1533 11.0465C6.46663 11.3598 7.0133 11.3598 7.3333 11.0465L12.0466 6.33312C12.2066 6.17312 12.2933 5.96645 12.2933 5.74645C12.2933 5.52645 12.2066 5.31311 12.0466 5.15978L9.21997 2.33312C9.0533 2.15978 8.83997 2.07978 8.62663 2.07978Z"
                                        fill="#979797" />
                                    <path
                                        d="M5.33301 14.5H1.33301C1.05967 14.5 0.833008 14.2733 0.833008 14C0.833008 13.7267 1.05967 13.5 1.33301 13.5H5.33301C5.60634 13.5 5.83301 13.7267 5.83301 14C5.83301 14.2733 5.60634 14.5 5.33301 14.5Z"
                                        fill="#979797" />
                                    <path
                                        d="M9.08667 10.4939C8.96 10.4939 8.83334 10.4472 8.73334 10.3472L4.02 5.63389C3.82667 5.44056 3.82667 5.12056 4.02 4.92723C4.21333 4.73389 4.53333 4.73389 4.72666 4.92723L9.44 9.64054C9.63334 9.83388 9.63334 10.1539 9.44 10.3472C9.34667 10.4472 9.21334 10.4939 9.08667 10.4939Z"
                                        fill="#979797" />
                                </svg>
                            </div>
                            <div class="t-c">
                                <small>
                                    {{ $t('offered-property') }}
                                </small>
                                <p class="text-dark">
                                    {{ itemPage.offered_property }} %
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
 name:'card-info',
 props:{
    itemPage:{},
    isOwner:{}
 }
}
</script>

<style>

</style>