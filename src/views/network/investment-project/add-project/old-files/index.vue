<template>
    <div style="margin-top: 96px;" class="">
        <div class="container">
            <div style="    background: #ff000014;" class="row align-items-center rounded-4 p-2">
                <div class="col-md-8">
                    <h3 class="text-danger fw-bolder">
                        تنبيه مهم لطلب استثمار مادي
                    </h3>
                    <p>
                        أكد جيداً من ان مشروعك كامل ومجهز بالكامل لعرضه للأستثمار فلن يتم قبول العروض الغير مكتملة او
                        الغير مرتبة .
                        اذا كنت غير متأكد من مشروعك فنحن نقدم خدمة تجهيز المشاريع الاستثمار يمكنك الحصول عليها من
                        <span>
                            <a href="" class="text-dark fw-bolder">
                                هنا
                            </a>
                        </span>
                    </p>
                </div>
                <div class="col-md-4">
                    <img class="img-fluid" :src="`${publicPath}assets/img/danger@2x.png`" alt="">
                </div>

            </div>
            <div class="row mt-4">
                <div class="col-md-5">
                    <h4>طلب عرض المشروع للاستثمار</h4>
                </div>
                <div class="col-md-7 d-flex justify-content-end">
                    <div class="d-flex ">
                        <p class="mx-3">
                            حدد نوع الاستثمار :
                        </p>
                        <div style="   background: #ff000021; height: 25px;" class="form-check form-switch ">
                            <label class="form-check-label" for="flexSwitchCheckChecked">أستثمار مادي</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                                checked>
                        </div>
                        <div style="height: 25px;" class="form-check form-switch mx-3">
                            <label class="form-check-label" for="flexSwitchCheckChecked">أستثمار مادي</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                                checked>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <ValidationObserver tag="form" ref="form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3 d-flex align-items-center">
                                <label  class="form-label m-c w-25 mx-1 fw-bold">عنوان المشروع:
                                </label>
                                <input v-model="project.title" class="form-control" 
                                     placeholder="أكتب عنوان بوضوح">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3 d-flex align-items-center position-relative">
                                <label  class="form-label m-c w-25 mx-1 fw-bold">الملكية
                                    الطروحة: </label>
                                <input class="form-control" v-model="project.offered_property"
                                     placeholder="أدخل قيمة المبلغ ">
                                <div style="top: 27%;left: 10px;" class="position-absolute m-c fw-bolder">
                                    %
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3 d-flex align-items-center position-relative">
                                <label for="exampleInputEmail1" class="form-label m-c w-25 mx-1 fw-bold">مبلغ التمويل
                                    المطلوب : </label>
                                <input v-model="project.offered_property" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="أدخل الحد الادنى للمبلغ  ">
                                <div style="    top: 28%;
                            left: 10px;" class="position-absolute m-c fw-bolder">
                                    ريال

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3 d-flex align-items-center position-relative">
                                <label for="exampleInputEmail1" class="form-label m-c w-25 mx-1 fw-bold">الحد الادنى
                                    الاستثمار : </label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="أدخل قيمة المبلغ">
                                <div style="    top: 28%;
                            left: 10px;" class="position-absolute m-c fw-bolder">
                                    ريال

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3 d-flex align-items-center position-relative">
                                <label for="exampleInputEmail1" class="form-label m-c w-25 mx-1 fw-bold">موعد غلق الجولة
                                    : </label>
                                <input type="email" class="form-control " id="input_from" aria-describedby="emailHelp"
                                    placeholder="حدد التاريخ">
                                <div style="    top: 22%;
                            left: 10px;" class="position-absolute m-c fw-bolder">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.666 7.66602C10.1193 7.66602 9.66602 7.21268 9.66602 6.66602V2.66602C9.66602 2.11935 10.1193 1.66602 10.666 1.66602C11.2127 1.66602 11.666 2.11935 11.666 2.66602V6.66602C11.666 7.21268 11.2127 7.66602 10.666 7.66602Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M21.334 7.66602C20.7873 7.66602 20.334 7.21268 20.334 6.66602V2.66602C20.334 2.11935 20.7873 1.66602 21.334 1.66602C21.8807 1.66602 22.334 2.11935 22.334 2.66602V6.66602C22.334 7.21268 21.8807 7.66602 21.334 7.66602Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M11.3333 19.3331C11.16 19.3331 10.9867 19.2931 10.8267 19.2264C10.6533 19.1598 10.52 19.0664 10.3867 18.9464C10.1467 18.6931 10 18.3598 10 17.9998C10 17.8264 10.04 17.6531 10.1067 17.4931C10.1733 17.3331 10.2667 17.1864 10.3867 17.0531C10.52 16.9331 10.6533 16.8397 10.8267 16.7731C11.3067 16.5731 11.9067 16.6798 12.28 17.0531C12.52 17.3064 12.6667 17.6531 12.6667 17.9998C12.6667 18.0798 12.6533 18.1731 12.64 18.2664C12.6267 18.3464 12.6 18.4264 12.56 18.5064C12.5333 18.5864 12.4933 18.6664 12.44 18.7464C12.4 18.8131 12.3333 18.8798 12.28 18.9464C12.0267 19.1864 11.68 19.3331 11.3333 19.3331Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M15.9993 19.3332C15.826 19.3332 15.6527 19.2932 15.4927 19.2265C15.3193 19.1598 15.186 19.0665 15.0527 18.9465C14.8127 18.6932 14.666 18.3598 14.666 17.9998C14.666 17.8265 14.706 17.6532 14.7727 17.4932C14.8394 17.3332 14.9327 17.1865 15.0527 17.0532C15.186 16.9332 15.3193 16.8398 15.4927 16.7731C15.9727 16.5598 16.5727 16.6798 16.946 17.0532C17.186 17.3065 17.3327 17.6532 17.3327 17.9998C17.3327 18.0798 17.3193 18.1732 17.306 18.2665C17.2927 18.3465 17.266 18.4265 17.226 18.5065C17.1993 18.5865 17.1594 18.6665 17.106 18.7465C17.066 18.8132 16.9993 18.8798 16.946 18.9465C16.6927 19.1865 16.346 19.3332 15.9993 19.3332Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M20.6673 19.3332C20.494 19.3332 20.3206 19.2932 20.1606 19.2265C19.9873 19.1598 19.854 19.0665 19.7207 18.9465C19.6673 18.8798 19.614 18.8132 19.5606 18.7465C19.5073 18.6665 19.4673 18.5865 19.4407 18.5065C19.4007 18.4265 19.374 18.3465 19.3607 18.2665C19.3473 18.1732 19.334 18.0798 19.334 17.9998C19.334 17.6532 19.4807 17.3065 19.7207 17.0532C19.854 16.9332 19.9873 16.8398 20.1606 16.7731C20.654 16.5598 21.2406 16.6798 21.614 17.0532C21.854 17.3065 22.0007 17.6532 22.0007 17.9998C22.0007 18.0798 21.9873 18.1732 21.974 18.2665C21.9607 18.3465 21.934 18.4265 21.894 18.5065C21.8673 18.5865 21.8273 18.6665 21.774 18.7465C21.734 18.8132 21.6673 18.8798 21.614 18.9465C21.3606 19.1865 21.014 19.3332 20.6673 19.3332Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M11.3333 23.9996C11.16 23.9996 10.9867 23.9596 10.8267 23.8929C10.6667 23.8263 10.52 23.7329 10.3867 23.6129C10.1467 23.3596 10 23.0129 10 22.6663C10 22.4929 10.04 22.3196 10.1067 22.1596C10.1733 21.9863 10.2667 21.8396 10.3867 21.7196C10.88 21.2263 11.7867 21.2263 12.28 21.7196C12.52 21.9729 12.6667 22.3196 12.6667 22.6663C12.6667 23.0129 12.52 23.3596 12.28 23.6129C12.0267 23.8529 11.68 23.9996 11.3333 23.9996Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M15.9993 23.9996C15.6527 23.9996 15.306 23.8529 15.0527 23.6129C14.8127 23.3596 14.666 23.0129 14.666 22.6663C14.666 22.4929 14.706 22.3196 14.7727 22.1596C14.8394 21.9863 14.9327 21.8396 15.0527 21.7196C15.546 21.2263 16.4527 21.2263 16.946 21.7196C17.066 21.8396 17.1593 21.9863 17.226 22.1596C17.2927 22.3196 17.3327 22.4929 17.3327 22.6663C17.3327 23.0129 17.186 23.3596 16.946 23.6129C16.6927 23.8529 16.346 23.9996 15.9993 23.9996Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M20.6673 23.9999C20.3207 23.9999 19.974 23.8532 19.7207 23.6132C19.6007 23.4932 19.5073 23.3466 19.4407 23.1732C19.374 23.0132 19.334 22.8399 19.334 22.6666C19.334 22.4932 19.374 22.3199 19.4407 22.1599C19.5073 21.9865 19.6007 21.8399 19.7207 21.7199C20.0273 21.4132 20.494 21.2665 20.9206 21.3599C21.014 21.3732 21.094 21.3999 21.174 21.4399C21.254 21.4665 21.334 21.5066 21.414 21.5599C21.4807 21.5999 21.5473 21.6666 21.614 21.7199C21.854 21.9732 22.0007 22.3199 22.0007 22.6666C22.0007 23.0132 21.854 23.3599 21.614 23.6132C21.3606 23.8532 21.014 23.9999 20.6673 23.9999Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M27.3327 13.1191H4.66602C4.11935 13.1191 3.66602 12.6658 3.66602 12.1191C3.66602 11.5725 4.11935 11.1191 4.66602 11.1191H27.3327C27.8793 11.1191 28.3327 11.5725 28.3327 12.1191C28.3327 12.6658 27.8793 13.1191 27.3327 13.1191Z"
                                            fill="#1FB9B3" />
                                        <path
                                            d="M21.3333 30.3327H10.6667C5.8 30.3327 3 27.5327 3 22.666V11.3327C3 6.46602 5.8 3.66602 10.6667 3.66602H21.3333C26.2 3.66602 29 6.46602 29 11.3327V22.666C29 27.5327 26.2 30.3327 21.3333 30.3327ZM10.6667 5.66602C6.85333 5.66602 5 7.51935 5 11.3327V22.666C5 26.4793 6.85333 28.3327 10.6667 28.3327H21.3333C25.1467 28.3327 27 26.4793 27 22.666V11.3327C27 7.51935 25.1467 5.66602 21.3333 5.66602H10.6667Z"
                                            fill="#1FB9B3" />
                                    </svg>


                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3 d-flex align-items-center ">
                                <label for="" class="form-label m-c w-25 mx-1 fw-bold">
                                    العقد الاستثماري :
                                </label>
                                <div
                                    class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-between">
                                    <input class="form-control d-none" type="file" onchange="readName(this)"
                                        id="fileinput1">
                                    <span id="selected_filename" class="mx-3 gray font-13 ">
                                        حمل العقد
                                    </span>
                                    <label for="fileinput1" class="form-label">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.3466 29.6664H11.6533C5.10664 29.6664 2.30664 26.8664 2.30664 20.3197V20.1464C2.30664 14.2264 4.63997 11.373 9.86664 10.8797C10.4 10.8397 10.9066 11.2397 10.96 11.7864C11.0133 12.333 10.6133 12.8264 10.0533 12.8797C5.86664 13.2664 4.30664 15.2397 4.30664 20.1597V20.333C4.30664 25.7597 6.22664 27.6797 11.6533 27.6797H20.3466C25.7733 27.6797 27.6933 25.7597 27.6933 20.333V20.1597C27.6933 15.213 26.1066 13.2397 21.84 12.8797C21.2933 12.8264 20.88 12.3464 20.9333 11.7997C20.9866 11.253 21.4533 10.8397 22.0133 10.893C27.32 11.3464 29.6933 14.213 29.6933 20.173V20.3464C29.6933 26.8664 26.8933 29.6664 20.3466 29.6664Z"
                                                fill="#1FB9B3" />
                                            <path
                                                d="M16 20.9995C15.4533 20.9995 15 20.5462 15 19.9995V4.82617C15 4.27951 15.4533 3.82617 16 3.82617C16.5467 3.82617 17 4.27951 17 4.82617V19.9995C17 20.5462 16.5467 20.9995 16 20.9995Z"
                                                fill="#1FB9B3" />
                                            <path
                                                d="M20.4671 8.79927C20.2138 8.79927 19.9604 8.70594 19.7604 8.50594L16.0004 4.74594L12.2404 8.50594C11.8538 8.8926 11.2138 8.8926 10.8271 8.50594C10.4404 8.11927 10.4404 7.47927 10.8271 7.0926L15.2938 2.62594C15.6804 2.23927 16.3204 2.23927 16.7071 2.62594L21.1738 7.0926C21.5604 7.47927 21.5604 8.11927 21.1738 8.50594C20.9871 8.70594 20.7204 8.79927 20.4671 8.79927Z"
                                                fill="#1FB9B3" />
                                        </svg>


                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border  mt-5 ">

                        <h3 class=" fw-bolder border-bottom p-3">
                            تفاصيل المشروع
                        </h3>
                        <div class="  p-2">
                            <div class="mt-4">
                                <div>

                                    <div class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                عن المشروع :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">

                                            <textarea name="" id="" class="w-100 border p-2" rows="15"
                                                placeholder="أكتب بعض تفاصيل المشروع"></textarea>
                                            <div
                                                class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-center w-25 ">
                                                <label for="fileinput1" class="form-label">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M14.9995 10.2602C14.8095 10.2602 14.6195 10.1902 14.4695 10.0402L11.9995 7.57021L9.52945 10.0402C9.23945 10.3302 8.75945 10.3302 8.46945 10.0402C8.17945 9.75019 8.17945 9.2702 8.46945 8.9802L11.4695 5.9802C11.7595 5.6902 12.2395 5.6902 12.5295 5.9802L15.5295 8.9802C15.8195 9.2702 15.8195 9.75019 15.5295 10.0402C15.3795 10.1902 15.1895 10.2602 14.9995 10.2602Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
                                                            fill="#979797" />
                                                    </svg>


                                                </label>
                                                <input class="form-control d-none" type="file" onchange="readName(this)"
                                                    id="fileinput1">
                                                <span id="selected_filename" class="mx-3 gray font-13 ">
                                                    ارفق صورة او فيديو
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                المشكلـــــــــــــــة المستهدف حلها :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">

                                            <textarea name="" id="" class="w-100 border p-2" rows="15"
                                                placeholder="أكتب عن  المشكلة المستهدف حلها"></textarea>
                                            <div
                                                class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-center w-25 ">
                                                <label for="fileinput1" class="form-label">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M14.9995 10.2602C14.8095 10.2602 14.6195 10.1902 14.4695 10.0402L11.9995 7.57021L9.52945 10.0402C9.23945 10.3302 8.75945 10.3302 8.46945 10.0402C8.17945 9.75019 8.17945 9.2702 8.46945 8.9802L11.4695 5.9802C11.7595 5.6902 12.2395 5.6902 12.5295 5.9802L15.5295 8.9802C15.8195 9.2702 15.8195 9.75019 15.5295 10.0402C15.3795 10.1902 15.1895 10.2602 14.9995 10.2602Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
                                                            fill="#979797" />
                                                    </svg>


                                                </label>
                                                <input class="form-control d-none" type="file" onchange="readName(this)"
                                                    id="fileinput1">
                                                <span id="selected_filename" class="mx-3 gray font-13 ">
                                                    ارفق صورة او فيديو
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                الخطة المستقبلية :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">

                                            <textarea name="" id="" class="w-100 border p-2" rows="15"
                                                placeholder="أكتب عن  خطتك للمستقبل وعن الاهداف التي ترغب في تحقيقها"></textarea>
                                            <div
                                                class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-center w-25 ">
                                                <label for="fileinput1" class="form-label">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M14.9995 10.2602C14.8095 10.2602 14.6195 10.1902 14.4695 10.0402L11.9995 7.57021L9.52945 10.0402C9.23945 10.3302 8.75945 10.3302 8.46945 10.0402C8.17945 9.75019 8.17945 9.2702 8.46945 8.9802L11.4695 5.9802C11.7595 5.6902 12.2395 5.6902 12.5295 5.9802L15.5295 8.9802C15.8195 9.2702 15.8195 9.75019 15.5295 10.0402C15.3795 10.1902 15.1895 10.2602 14.9995 10.2602Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
                                                            fill="#979797" />
                                                    </svg>


                                                </label>
                                                <input class="form-control d-none" type="file" onchange="readName(this)"
                                                    id="fileinput1">
                                                <span id="selected_filename" class="mx-3 gray font-13 ">
                                                    ارفق صورة او فيديو
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div class="border  mt-5 ">

                        <h3 class=" fw-bolder border-bottom p-3">
                            عن فريق العمل
                        </h3>
                        <div class="  p-2">
                            <div class="mt-4">
                                <div>

                                    <div class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                عن الفريق :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">

                                            <textarea name="" id="" class="w-100 border p-2" rows="15"
                                                placeholder="أكتب بعض تفاصيل المشروع"></textarea>
                                            <div
                                                class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-center w-25 ">
                                                <label for="fileinput1" class="form-label">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M14.9995 10.2602C14.8095 10.2602 14.6195 10.1902 14.4695 10.0402L11.9995 7.57021L9.52945 10.0402C9.23945 10.3302 8.75945 10.3302 8.46945 10.0402C8.17945 9.75019 8.17945 9.2702 8.46945 8.9802L11.4695 5.9802C11.7595 5.6902 12.2395 5.6902 12.5295 5.9802L15.5295 8.9802C15.8195 9.2702 15.8195 9.75019 15.5295 10.0402C15.3795 10.1902 15.1895 10.2602 14.9995 10.2602Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
                                                            fill="#979797" />
                                                        <path
                                                            d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
                                                            fill="#979797" />
                                                    </svg>


                                                </label>
                                                <input class="form-control d-none" type="file" onchange="readName(this)"
                                                    id="fileinput1">
                                                <span id="selected_filename" class="mx-3 gray font-13 ">
                                                    ارفق صورة او فيديو
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                منشن لفريقك :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">

                                            <textarea name="" id="" class="w-100 border p-2" rows="15"
                                                placeholder="قم بوضع @  وكتابة اسم كل فرد في فريقك"></textarea>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                    <div class="border  mt-5 ">

                        <h3 class=" fw-bolder border-bottom p-3">
                            فيديو المشروع
                        </h3>
                        <div class="  p-2">
                            <div class="col-md-">
                                <div class="mb-3 d-flex align-items-center ">
                                    <label for="" class="form-label m-c w-25 mx-1 fw-bold">
                                        فيديو المشروع :
                                    </label>
                                    <div
                                        class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-between">
                                        <input class="form-control d-none" type="file" onchange="readName(this)"
                                            id="fileinput1">
                                        <span id="selected_filename" class="mx-3 gray font-13 ">
                                            قم بارفاق فيديو توضيحي لمشروعك
                                        </span>
                                        <label for="fileinput1" class="form-label">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.3466 29.6664H11.6533C5.10664 29.6664 2.30664 26.8664 2.30664 20.3197V20.1464C2.30664 14.2264 4.63997 11.373 9.86664 10.8797C10.4 10.8397 10.9066 11.2397 10.96 11.7864C11.0133 12.333 10.6133 12.8264 10.0533 12.8797C5.86664 13.2664 4.30664 15.2397 4.30664 20.1597V20.333C4.30664 25.7597 6.22664 27.6797 11.6533 27.6797H20.3466C25.7733 27.6797 27.6933 25.7597 27.6933 20.333V20.1597C27.6933 15.213 26.1066 13.2397 21.84 12.8797C21.2933 12.8264 20.88 12.3464 20.9333 11.7997C20.9866 11.253 21.4533 10.8397 22.0133 10.893C27.32 11.3464 29.6933 14.213 29.6933 20.173V20.3464C29.6933 26.8664 26.8933 29.6664 20.3466 29.6664Z"
                                                    fill="#1FB9B3" />
                                                <path
                                                    d="M16 20.9995C15.4533 20.9995 15 20.5462 15 19.9995V4.82617C15 4.27951 15.4533 3.82617 16 3.82617C16.5467 3.82617 17 4.27951 17 4.82617V19.9995C17 20.5462 16.5467 20.9995 16 20.9995Z"
                                                    fill="#1FB9B3" />
                                                <path
                                                    d="M20.4671 8.79927C20.2138 8.79927 19.9604 8.70594 19.7604 8.50594L16.0004 4.74594L12.2404 8.50594C11.8538 8.8926 11.2138 8.8926 10.8271 8.50594C10.4404 8.11927 10.4404 7.47927 10.8271 7.0926L15.2938 2.62594C15.6804 2.23927 16.3204 2.23927 16.7071 2.62594L21.1738 7.0926C21.5604 7.47927 21.5604 8.11927 21.1738 8.50594C20.9871 8.70594 20.7204 8.79927 20.4671 8.79927Z"
                                                    fill="#1FB9B3" />
                                            </svg>


                                        </label>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="border  mt-5 ">

                        <h3 class=" fw-bolder border-bottom p-3">
                            أنتهينا !
                        </h3>
                        <div class="  p-2">
                            <p>
                                ممكن هنا نضيف زي معلومات اساسية زي نسبة الربح اللي هتاخها رياديات الفلوس هتتحولو امتى ؟
                                الاليه نفسها بعد الشروط و هكذا و هكذا
                                و هكذا و هكذا و هكذا و هكذا

                                ممكن هنا نضيف زي معلومات اساسية زي نسبة الربح اللي هتاخها رياديات الفلوس هتتحولو امتى ؟
                                الاليه نفسها بعد الشروط و هكذا

                                ممكن هنا نضيف زي معلومات اساسية زي نسبة الربح اللي هتاخها رياديات الفلوس هتتحولو امتى ؟
                                الاليه نفسها بعد الشروط و هكذا
                            </p>


                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <a class="btn bg-main text-white" >
                            أرفع مشروعك لأستثمار
                        </a>
                    </div>
                </ValidationObserver>

            </div>
        </div>
    </div>
</template>

<script>
//صفحة طلب عرض مشروع استثمارى/شبكة
export default {
    name: 'investment-project-request',
    data:(vm)=>({
        idImage: `image-selected-${vm.generateRandomString(8)}`,
        file:null,
        project:{
          cost:"",
          title:"",
          project_name_ar:"",
          project_name_en:"",
          description_ar:"",
          description_en:"",
          category_id:"",
          offered_property:10,
          link_face:"",
          link_linked:"",
          link_ins:"",
          link_twi:"",
          link_per:"",

        }
    }),
    methods:{
        uploadImage(evt){
        if (!evt.target.files && !evt.target.files[0]) {
                this.file = null;
                window.$('#' + this.idImage)
                    .attr('src', 'none')
                    .css('opacity', '0');
                return;
            }
            this.file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload =  (e) =>{
                console.log('result',e,this.idImage)
                window.$('#'+this.idImage)
                    .attr('src', e.target.result)
                    .css('opacity', '1');

            };
            reader.readAsDataURL(this.file);
    },
    }
}
</script>

<style>

</style>