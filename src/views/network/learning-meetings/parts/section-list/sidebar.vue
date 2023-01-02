<template>
   <div class="box border p-3 rounded-3">
              <h4>{{ $t('filter') }}</h4>
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      تصنيف الخدمة
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            خدمات اونلاين
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            خدمات اوفلاين
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      مجالات الاختصاص
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          الازياء
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        />
                        <label class="form-check-label" for="defaultCheck2">
                          المجوهرات
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck3"
                        />
                        <label class="form-check-label" for="defaultCheck3">
                          تجميل
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck4"
                        />
                        <label class="form-check-label" for="defaultCheck4">
                          منظمات الحفلات
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck5"
                        />
                        <label class="form-check-label" for="defaultCheck5">
                          التصوير الفوتوغرافية
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck6"
                        />
                        <label class="form-check-label" for="defaultCheck6">
                          التصميم
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck7"
                        />
                        <label class="form-check-label" for="defaultCheck7">
                          مصممات الديكور
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck8"
                        />
                        <label class="form-check-label" for="defaultCheck8">
                          العاملين في الافراح
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      المدة
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                  <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.valueMinDuring" 
                                         :max.sync="filter.valueMaxDuring"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      التكلفة
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse"
                    aria-labelledby="panelsStayOpen-headingFour"
                  >
                  <div style="margin: 20px 0px 0 0" class="a">
                                    <div class="slider-container">
                                        <rslider-input
                                         :min.sync="filter.valueMinAmount" 
                                         :max.sync="filter.valueMaxAmount"
                                         :lmin="0"
                                         :lmax="100"
                                         />
                                    </div>
                                </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 text-center">

                  <button class="btn-main">
                    حفظ
                  </button>
              </div>
            </div>
</template>

<script>
export default {
 name:'sidebar-box',
 data:()=>({
    filter:{
    isOnline:true,
    category_id:[],
    valueMinDuring:0,
    valueMaxDuring:100,
    valueMinAmount:0,
    valueMaxAmount:100
   }
  }),
  watch:{
    filter:{
        immediate:true,
        deep:true,
        handler(val){
            this.$emit('update',val)
        }
    }
  },

}
</script>

<style>

</style>