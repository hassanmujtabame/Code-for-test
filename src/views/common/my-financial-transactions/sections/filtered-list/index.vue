<template>
    <div class="row">
        <div class="col-md-3 mt-2">
            <div class="box border p-3 rounded-3">
                <h4>
                    فلتر البحث
                </h4>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                تصنيف الخدمة
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            خدمات اونلاين


                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            خدمات اوفلاين
                                        </label>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                مجالات الاختصاص

                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        الازياء
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck2">
                                        المجوهرات
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck3">
                                    <label class="form-check-label" for="defaultCheck3">
                                        تجميل
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck4">
                                    <label class="form-check-label" for="defaultCheck4">
                                        منظمات الحفلات
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck5">
                                    <label class="form-check-label" for="defaultCheck5">
                                        التصوير الفوتوغرافية
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck6">
                                    <label class="form-check-label" for="defaultCheck6">
                                        التصميم
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck7">
                                    <label class="form-check-label" for="defaultCheck7">
                                        مصممات الديكور
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck8">
                                    <label class="form-check-label" for="defaultCheck8">
                                        العاملين في الافراح
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                المدة
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse "
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div style="
    
                                    margin: 20px 0px 0 0;" class="a">

                                <div class="slider-container">
                                    <rslider-input
                                         :min.sync="valueMin1" 
                                         :max.sync="valueMax1"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour">
                                التكلفة
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse "
                            aria-labelledby="panelsStayOpen-headingFour">
                            <div style="
      
                                      margin: 20px 0px 0 0;" class="a">

                                <div class="slider-container">
                                    <rslider-input
                                         :min.sync="valueMin2" 
                                         :max.sync="valueMax2"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                </div>





                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="col-md-9">

            <table class="table table-bordered mt-2">
                <thead>
                    <tr>
                        <th class=" t-c ">قيمة المبلغ</th>
                        <th class=" t-c ">تفاصيل المعاملة</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="m-c fw-bold text-center fs-3">+ 150 ر.س</td>

                        <td class="t-c">

                            تم شحن رصيدك
                            <p class="t-c">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00001 15.1663C4.04668 15.1663 0.833344 11.953 0.833344 7.99967C0.833344 4.04634 4.04668 0.833008 8.00001 0.833008C11.9533 0.833008 15.1667 4.04634 15.1667 7.99967C15.1667 11.953 11.9533 15.1663 8.00001 15.1663ZM8.00001 1.83301C4.60001 1.83301 1.83334 4.59967 1.83334 7.99967C1.83334 11.3997 4.60001 14.1663 8.00001 14.1663C11.4 14.1663 14.1667 11.3997 14.1667 7.99967C14.1667 4.59967 11.4 1.83301 8.00001 1.83301Z"
                                        fill="#979797" />
                                    <path
                                        d="M10.4733 10.6202C10.3867 10.6202 10.3 10.6002 10.22 10.5468L8.15334 9.3135C7.64001 9.00684 7.26001 8.3335 7.26001 7.74017V5.00684C7.26001 4.7335 7.48668 4.50684 7.76001 4.50684C8.03334 4.50684 8.26001 4.7335 8.26001 5.00684V7.74017C8.26001 7.98017 8.46001 8.3335 8.66668 8.4535L10.7333 9.68684C10.9733 9.82684 11.0467 10.1335 10.9067 10.3735C10.8067 10.5335 10.64 10.6202 10.4733 10.6202Z"
                                        fill="#979797" />
                                </svg>
                                تاريخ العملية : 28-10-2022
                            </p>



                        </td>
                    </tr>
                    <tr>
                        <td class="text-danger fw-bold text-center fs-3">+ 200 ر.س</td>

                        <td class="t-c">

                            تم شحن رصيدك
                            <p class="t-c">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00001 15.1663C4.04668 15.1663 0.833344 11.953 0.833344 7.99967C0.833344 4.04634 4.04668 0.833008 8.00001 0.833008C11.9533 0.833008 15.1667 4.04634 15.1667 7.99967C15.1667 11.953 11.9533 15.1663 8.00001 15.1663ZM8.00001 1.83301C4.60001 1.83301 1.83334 4.59967 1.83334 7.99967C1.83334 11.3997 4.60001 14.1663 8.00001 14.1663C11.4 14.1663 14.1667 11.3997 14.1667 7.99967C14.1667 4.59967 11.4 1.83301 8.00001 1.83301Z"
                                        fill="#979797" />
                                    <path
                                        d="M10.4733 10.6202C10.3867 10.6202 10.3 10.6002 10.22 10.5468L8.15334 9.3135C7.64001 9.00684 7.26001 8.3335 7.26001 7.74017V5.00684C7.26001 4.7335 7.48668 4.50684 7.76001 4.50684C8.03334 4.50684 8.26001 4.7335 8.26001 5.00684V7.74017C8.26001 7.98017 8.46001 8.3335 8.66668 8.4535L10.7333 9.68684C10.9733 9.82684 11.0467 10.1335 10.9067 10.3735C10.8067 10.5335 10.64 10.6202 10.4733 10.6202Z"
                                        fill="#979797" />
                                </svg>
                                تاريخ العملية : 28-10-2022
                            </p>



                        </td>
                    </tr>
                    <tr>
                        <td class="y-c fw-bold text-center fs-3">+ 200 ر.س</td>

                        <td class="t-c">

                            تم شحن رصيدك
                            <p class="t-c">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.00001 15.1663C4.04668 15.1663 0.833344 11.953 0.833344 7.99967C0.833344 4.04634 4.04668 0.833008 8.00001 0.833008C11.9533 0.833008 15.1667 4.04634 15.1667 7.99967C15.1667 11.953 11.9533 15.1663 8.00001 15.1663ZM8.00001 1.83301C4.60001 1.83301 1.83334 4.59967 1.83334 7.99967C1.83334 11.3997 4.60001 14.1663 8.00001 14.1663C11.4 14.1663 14.1667 11.3997 14.1667 7.99967C14.1667 4.59967 11.4 1.83301 8.00001 1.83301Z"
                                        fill="#979797" />
                                    <path
                                        d="M10.4733 10.6202C10.3867 10.6202 10.3 10.6002 10.22 10.5468L8.15334 9.3135C7.64001 9.00684 7.26001 8.3335 7.26001 7.74017V5.00684C7.26001 4.7335 7.48668 4.50684 7.76001 4.50684C8.03334 4.50684 8.26001 4.7335 8.26001 5.00684V7.74017C8.26001 7.98017 8.46001 8.3335 8.66668 8.4535L10.7333 9.68684C10.9733 9.82684 11.0467 10.1335 10.9067 10.3735C10.8067 10.5335 10.64 10.6202 10.4733 10.6202Z"
                                        fill="#979797" />
                                </svg>
                                تاريخ العملية : 28-10-2022
                            </p>



                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
        <div class=" mt-5">

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link"><svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.90013 14.3899C1.58346 14.3899 1.2668 14.2733 1.0168 14.0233C0.533464 13.5399 0.533464 12.7399 1.0168 12.2566L6.0168 7.25661L1.0168 2.25661C0.533464 1.77327 0.533464 0.973275 1.0168 0.489941C1.50013 0.00660808 2.30013 0.00660808 2.78346 0.489941L8.6668 6.37328C9.15013 6.85661 9.15013 7.65661 8.6668 8.13994L2.78346 14.0233C2.53346 14.2733 2.2168 14.3899 1.90013 14.3899Z"
                                    fill="#CDD7D8" />
                            </svg>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link border-0" href="#">3</a></li>
                    <li class="page-item"><a class="page-link border-0" href="#">2</a></li>
                    <li class="page-item"><a class="page-link border-0" href="#">1</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#"><svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.09987 14.3899C7.7832 14.3899 7.46653 14.2733 7.21653 14.0233L1.3332 8.13994C0.84987 7.65661 0.84987 6.85661 1.3332 6.37328L7.21653 0.489941C7.69987 0.00660808 8.49987 0.00660808 8.9832 0.489941C9.46654 0.973275 9.46654 1.77327 8.9832 2.25661L3.9832 7.25661L8.9832 12.2566C9.46654 12.7399 9.46654 13.5399 8.9832 14.0233C8.74987 14.2733 8.4332 14.3899 8.09987 14.3899Z"
                                    fill="#CDD7D8" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
export default {
    name: 'filterd-list',
    data:()=>({
        valueMax1:40,
        valueMin1:0,
        valueMax2:50,
        valueMin2:20,
    })
}
</script>

<style>

</style>