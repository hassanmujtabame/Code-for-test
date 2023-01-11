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
                    <img class="img-fluid" src="/assets/img/danger@2x.png" alt="">
                </div>

            </div>
            <div class="row mt-4">
                <div class="col-md-5">
                    <h4>طلب عرض المشروع للاستثمار</h4>
                </div>
                <div class="col-md-7 d-flex justify-content-end">
                    <ValidationProvider tag="div" :name="$t('investment_type')" vid="investment_type" rules="required"
                        v-slot="{ errors }">
                        <div class="d-flex ">
                            <p class="mx-3">
                                {{ $t('Select_the_type_of_investment') }}:
                            </p>
                            <div style="   background: #ff000021; height: 25px;" class="form-check form-switch ">
                                <label class="form-check-label" for="flexSwitchCheckChecked">{{
                                    $t('physical-investment')
                                }}</label>
                                <input class="form-check-input" type="radio" name="investment_type" role="switch"
                                    id="flexSwitchCheckChecked" v-model="itemForm.investment_type" value="physical">
                            </div>
                            <div style="height: 25px;" class="form-check form-switch mx-3">
                                <label class="form-check-label" for="flexSwitchCheckChecked2">{{
                                    $t('moral-investment')
                                }}</label>
                                <input class="form-check-input" type="radio" name="investment_type" role="switch"
                                    id="flexSwitchCheckChecked2" v-model="itemForm.investment_type" value="moral">
                            </div>
                        </div>
                        <d-error-input v-if="errors.length" :errors="errors" />
                    </ValidationProvider>
                </div>
            </div>
            <div class="mt-5">
                <ValidationObserver v-if="!clearing" ref="form">
                    <div class="row">
                        <!--image-->
                        <div v-if="false" class="   m-auto">
                            <div class="col-md-12">
                                <label for="imginput" class="form-label file-label first w-100">
                                    <div class="text-center p-5">
                                        <img src="/assets/svg/empty-image.svg" height="96" width="96" />

                                        <p class="m-c">أضافة صورة للمشروع </p>
                                    </div>
                                    <div class="add-img-selected w-100">
                                        <img class="image-selected-dialog" :src="showImage ?? 'none'"
                                            :style="{ opacity: showImage ? '1' : '0' }" :id="idImage" width="100%"
                                            height="236" />
                                    </div>
                                </label>
                                <ValidationProvider :name="$t('Image')" vid="image" rules="required"
                                    v-slot="{ validate, errors }">
                                    <input @change="uploadImage($event) || validate($event)"
                                        class="form-control opacity-0 " type="file" id="imginput">
                                    <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                        {{ errors[0]}}
                                    </div>
                                </ValidationProvider>
                            </div>
                        </div>
                        <!-- title -->
                        <div class="col-md-6">
                            <div class="mb-3">

                                <ValidationProvider tag="div" class="row" :name="$t('Title-project')" vid="title"
                                    rules="required" v-slot="{ errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold">عنوان المشروع:</label>
                                    </div>
                                    <div class="col-8">
                                        <input v-model="itemForm.title" class="form-control col-8"
                                            placeholder="أكتب عنوان بوضوح">

                                    </div>
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                </ValidationProvider>

                            </div>
                        </div>
                        <!-- offered_property -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <ValidationProvider tag="div" class="row" :name="$t('offered_property')"
                                    vid="offered_property" rules="required" v-slot="{ errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold">الملكية الطروحة:</label>
                                    </div>
                                    <div class="col-8 position-relative">
                                        <input class="form-control" v-model.number="itemForm.offered_property"
                                            placeholder="أدخل قيمة المبلغ ">
                                        <div style="top: 20%;left: 15px;" class="position-absolute m-c fw-bolder">
                                            %
                                        </div>
                                    </div>
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                </ValidationProvider>
                            </div>
                        </div>
                        <!-- amount_financing_required -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <ValidationProvider tag="div" class="row" :name="$t('amount_financing_required')"
                                    vid="amount_financing_required" rules="required" v-slot="{ errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold">مبلغ التمويل المطلوب :</label>
                                    </div>
                                    <div class="col-8 position-relative ">
                                        <input v-model="itemForm.amount_financing_required" class="form-control"
                                            placeholder="أدخل الحد الادنى للمبلغ  ">
                                        <div style="top: 20%;left: 15px;" class="position-absolute m-c fw-bolder">
                                            ريال
                                        </div>
                                    </div>
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                </ValidationProvider>
                            </div>
                        </div>
                        <!-- minimum_investment -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <ValidationProvider tag="div" class="row" :name="$t('minimum_investment')"
                                    vid="minimum_investment" rules="required" v-slot="{ errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold">الحد الادنى الاستثمار :</label>
                                    </div>
                                    <div class="col-8 position-relative">
                                        <input v-model="itemForm.minimum_investment" class="form-control"
                                            placeholder="أدخل قيمة المبلغ">
                                        <div style="top: 20%;left: 15px;" class="position-absolute m-c fw-bolder">
                                            ريال
                                        </div>
                                    </div>
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                </ValidationProvider>
                            </div>
                        </div>
                        <!-- project_end_date -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <ValidationProvider tag="div" class="row" :name="$t('project_end_date')" vid="end_date"
                                    rules="required" v-slot="{ errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold">موعد غلق الجولة :</label>
                                    </div>
                                    <div class="col-8 position-relative d-flex  align-items-center">
                                        <date-picker-input class="form-control " mode="date" v-model="itemForm.end_date"
                                            placeholder="حدد التاريخ" />
                                        <div class="m-c fw-bolder">
                                            <img src="/assets/svg/calendar.svg" />
                                        </div>
                                    </div>
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                </ValidationProvider>
                            </div>
                        </div>
                        <!-- investment_contract -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <ValidationProvider tag="div" class="row" :name="$t('investment_contract')"
                                    vid="investment_contract" rules="required" v-slot="{ validate, errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold">
                                            العقد الاستثماري :
                                        </label>
                                    </div>
                                    <div class="col-8 position-relative d-flex  align-items-center">
                                        <div
                                            class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-between">
                                            <span id="selected_filename" class="mx-3 gray font-13 ">
                                                حمل العقد
                                            </span>
                                            <input class="form-control opacity-0 w-100 position-absolute" type="file"
                                                @change="uploadContract($event) || validate($event)">

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
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                </ValidationProvider>
                            </div>
                        </div>
                        <!--category-->
                        <div class="col-md-6" v-if="false">
                            <div class="mb-3 position-relative">
                                <ValidationProvider :name="$t('category')" tag="div" class="row" vid="category_id"
                                    rules="required" v-slot="{ errors }">
                                    <div class="col-4">
                                        <label class="form-label m-c fw-bold"> صنف :</label>
                                    </div>
                                    <div class="col-8 position-relative d-flex  align-items-center">
                                        <select v-model="itemForm.category_id" class="form-control">
                                            <option disabled value="" class="t-c"> تصنيفات </option>
                                            <option :key="i" v-for="(option, i) in categories" :value="option.id">
                                                {{ option.name }}
                                            </option>

                                        </select>
                                        <div style="top: 7px;left: 10px;" class="position-absolute">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z"
                                                    fill="#737373" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div v-if="errors.length !== 0" class="col-12 text-input-error">
                                        {{ errors[0] }}
                                    </div>
                                </ValidationProvider>
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
                                    <div v-if="isMoral" class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                 ما هو طلبك؟ :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">
                                            <ValidationProvider tag="div" class="row" :name="$t('your_request')"
                                                vid="your_request" rules="required" v-slot="{ errors }">

                                                <div class="col-12 position-relative">
                                                    <textarea v-model="itemForm.your_request"
                                                        class="w-100 border p-2" rows="2"
                                                        placeholder="أكتب  في سطرين ماذا تريد">
                                                    </textarea>
                                                </div>
                                                <d-error-input v-if="errors.length" :errors="errors" />
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="row " :class="{'mt-4':itemForm.investment_type!='physical'}">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                عن المشروع :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">
                                            <ValidationProvider tag="div" class="row" :name="$t('description')"
                                                vid="description" rules="required" v-slot="{ errors }">

                                                <div class="col-12 position-relative">
                                                    <d-ckeditor-classic v-model="itemForm.description"
                                                    :editorConfig="editorConfig"
                                                        class="w-100 border p-2" rows="15"
                                                        placeholder="أكتب بعض تفاصيل المشروع">
                                                    </d-ckeditor-classic>


                                                </div>
                                                <d-error-input v-if="errors.length" :errors="errors" />
                                            </ValidationProvider>
                                        </div>
                                        <InputFile @input="itemForm.description_file=$event" />
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                المشكلـــــــــــــــة المستهدف حلها :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">
                                            <ValidationProvider tag="div" class="row" :name="$t('problem_solved')"
                                                vid="problem_solved" rules="required" v-slot="{ errors }">

                                                <div class="col-12 position-relative">
                                                    <d-ckeditor-classic v-model="itemForm.problem_solved"
                                                    :editorConfig="editorConfig"
                                                        class="w-100 border p-2" rows="15"
                                                        placeholder="أكتب عن  المشكلة المستهدف حلها">
                                                    </d-ckeditor-classic>

                                                </div>
                                                <d-error-input v-if="errors.length" :errors="errors" />
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                الخطة المستقبلية :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">
                                            <ValidationProvider tag="div" class="row" :name="$t('future_plan')"
                                                vid="future_plan" rules="required" v-slot="{ errors }">

                                                <div class="col-12 position-relative">
                                                    <d-ckeditor-classic v-model="itemForm.future_plan"
                                                    :editorConfig="editorConfig"
                                                        class="w-100 border p-2" rows="15"
                                                        placeholder="أكتب عن  خطتك للمستقبل وعن الاهداف التي ترغب في تحقيقها">
                                                    </d-ckeditor-classic>
                                                </div>
                                                <d-error-input v-if="errors.length" :errors="errors" />
                                            </ValidationProvider>
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
                                            <ValidationProvider tag="div" class="row" :name="$t('description_user')"
                                                vid="description_user" rules="required" v-slot="{ errors }">

                                                <div class="col-12 position-relative">
                                                    <d-ckeditor-classic v-model="itemForm.description_user"
                                                        class="w-100 border p-2" rows="15"
                                                        :editorConfig="editorConfig"
                                                        placeholder="أكتب بعض تفاصيل المشروع"></d-ckeditor-classic>
                                                </div>
                                                <d-error-input v-if="errors.length" :errors="errors" />
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                    <div class="row">
                                        <div class="col-md-2">

                                            <h4 class=" m-c fw-bolder">
                                                {{ $t('select-team') }} :
                                            </h4>
                                        </div>
                                        <div class="col-md-10">
                                            <ValidationProvider tag="div" class="row" :name="$t('team')"
                                                vid="team" rules="required" v-slot="{ errors }">

                                                <div class="col-12">
                                                    <input v-model="itemForm.team"
                
                                                        class="w-100 border p-2" 
                                                        placeholder="قم بوضع @  وكتابة اسم كل فرد في فريقك"/>
                                                </div>
                                                <d-error-input v-if="errors.length" :errors="errors" />
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <div class="border  mt-5 ">

                        <h3 class=" fw-bolder border-bottom p-3">
                           {{itemForm.investment_type=='physical'?' فيديو المشروع':'صورة العرض الرئيسية للمشروع'}}
                        </h3>
                        <div class="  p-2">
                            <div class="col-md-">
                                <div class="mb-3 d-flex align-items-center ">
                                    <label for="" class="form-label m-c w-25 mx-1 fw-bold">
                                        {{itemForm.investment_type=='physical'?'فيديو المشروع':'صورة المشروع'}} :
                                    </label>
                                    <ValidationProvider :name="$t('Image')" 
                                    vid="image" rules="required"
                                    v-slot="{ validate, errors }">
                                    <div
                                        class="d-flex upload-request-file form-control align-items-center  mb-3 justify-content-between">
                                        <input class="form-control d-none" type="file" 
                                        @change="uploadImage($event) || validate($event)"
                                            id="fileinput1">
                                        <span id="selected_filename" class="mx-3 gray font-13 ">
                                            
                                            {{itemForm.investment_type=='physical'?'قم بارفاق فيديو توضيحي لمشروعك':'قم بارفاق صورة توضيحي لمشروعك'}}
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
                                    <d-error-input v-if="errors.length" :errors="errors" />
                                    </ValidationProvider>
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
                        <button @click="save" class="btn bg-main text-white">
                            أرفع مشروعك لأستثمار
                        </button>
                    </div>
                </ValidationObserver>
            </div>
        </div>
        <portal to="body">
            <successAddProjectDiag />
        </portal>
    </div>
</template>

<script>
//صفحة طلب عرض مشروع استثمارى/شبكة
import ProjectAPI from '@/services/api/projects.js'
import successAddProjectDiag from './dialogs/success-add-project.vue';
import InputFile from './input-file.vue'
export default {
    name: 'investment-project-request',
    components: {
        successAddProjectDiag,
        InputFile
    },
    data: (vm) => ({
        categories: [],
        clearing: true,
        idImage: `image-selected-${vm.generateRandomString(8)}`,
        file: null,
        fileContact: null,
        showImage: false,
        itemForm: {},
        editorConfig:{
            minHeight:'150px',
            height:'150px',
        },
        project_default: {
            title: "",
            team:'',
            your_request:'',
            description: "",
            category_id: null,
            offered_property: 0,
            investment_type: 'physical',
            minimum_investment: null,
            amount_financing_required: null,
            description_user: '',
            future_plan: '',
            problem_solved: '',
            end_date: null,
        }
    }),
    computed:{
        isMoral(){
            return this.itemForm.investment_type!='physical'
        }
    },
    methods: {
        editorConfig1( config )
        {
            console.log('ee',config)
            config.height = eval(this.element.$.rows*40) + 'px';
        },
        openSuccessDialog() {
            this.fireOpenDialog('success-add-project')
        },
        async save(evt) {
            evt.preventDefault();

            let valid = await this.$refs.form.validate();
            if (!valid) {
                console.log('form invalid');
                return;
            }
            let formData = new FormData();
            Object.keys(this.itemForm).forEach((key) => {
                formData.append(key, this.itemForm[key]);
            })
            formData.append('image', this.file);
            try {
                let { data } = await ProjectAPI.addItem(formData)
                console.log('success', data)
                if (data.success) {
                    this.openSuccessDialog()
                    Object.keys(this.itemForm).forEach(key => {
                        this.itemForm[key] = this.project_default[key];
                    })
                    this.$nextTick(() => {
                        if (this.$refs["form"]) {
                            this.$refs.form.reset();
                        }
                    });
                    // this.$router.push(this.getRouteLocale('network-investment-project-show',{id:data.data[0].project_id}))


                }
            } catch (error) {
                //
                if (error.response) {
                    let response = error.response
                    console.log('error', response)
                    if (response.status == 422) {
                        if (response.data.errors)
                            this.$refs.form.setErrors(response.data.errors)
                    }
                }

            }
        },
        uploadContract(evt) {
            //console.log(evt.target)
            if (!evt.target.files && !evt.target.files[0]) {
                this.fileContact = null;
                return;
            }
            this.fileContact = evt.target.files[0];
        },
        uploadImage(evt) {
            if (!evt.target.files && !evt.target.files[0]) {
                this.file = null;
                this.showImage = false;
                return;
            }
            this.file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = (e) => {
                this.showImage = e.target.result;

            };
            reader.readAsDataURL(this.file);
        },
        async loadCategories() {
            try {
                let { data } = await ProjectAPI.getCategories()
                if (data.success) {
                    this.categories = data.data
                }
            } catch (error) {
                console.log('error', error)
            }
        },
        clearProject() {
            this.clearing = true;
            this.itemForm = Object.assign({}, this.project_default)
            this.clearing = false;
            this.$nextTick(() => {
                if (this.$refs["form"]) {
                    this.$refs.form.reset();
                }
            });
        }
    },
    mounted() {
        this.loadCategories()
        this.clearProject()
    }
}
</script>

<style>

</style>