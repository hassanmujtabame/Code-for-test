<template>
   <div class="container mt-5">
            <div
            class="d-flex justify-content-between align-items-center container"
          >
            <h1>  قصص نجاح      </h1>
            <div>
                <router-link class="router-link" custom 
                :to="getRouteLocale('network-success-stories')"
                v-slot="{navigate}"
                >
              <button @click="navigate" class="more">اعرف  اكثر</button>
                </router-link>
            </div>
          </div>
            <div class="row">

                <div class="col-md-3">
                    <div class="box border rounded-3">
                        <div>
                            <img class="w-100 rounded-top" src="/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt="" height="192">
                        </div>
                        <div class="text-center p-2">
                            <h5>
                                رحلتي في كلية الهندسه
                            </h5>
                            <div>
                                <small class="m-c">
                                    عبد الرحمن الشيخ 
                                </small>
                                <span>
                                    |
                                </span>
                                <small class="t-c">
                                    مصمم واجهات امامية 
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box border rounded-3">
                        <div>
                            <img class="w-100 rounded-top" src="/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt="" height="192">
                        </div>
                        <div class="text-center p-2">
                            <h5>
                                رحلتي في كلية الهندسه
                            </h5>
                            <div>
                                <small class="m-c">
                                    عبد الرحمن الشيخ 
                                </small>
                                <span>
                                    |
                                </span>
                                <small class="t-c">
                                    مصمم واجهات امامية 
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box border rounded-3">
                        <div>
                            <img class="w-100 rounded-top" src="/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt="" height="192">
                        </div>
                        <div class="text-center p-2">
                            <h5>
                                رحلتي في كلية الهندسه
                            </h5>
                            <div>
                                <small class="m-c">
                                    عبد الرحمن الشيخ 
                                </small>
                                <span>
                                    |
                                </span>
                                <small class="t-c">
                                    مصمم واجهات امامية 
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="box border rounded-3">
                        <div>
                            <img class="w-100 rounded-top" src="/assets/img/صورة واتساب بتاريخ 2022-10-18 في 09.53.21.jpg" alt="" height="192">
                        </div>
                        <div class="text-center p-2">
                            <h5>
                                رحلتي في كلية الهندسه
                            </h5>
                            <div>
                                <small class="m-c">
                                    عبد الرحمن الشيخ 
                                </small>
                                <span>
                                    |
                                </span>
                                <small class="t-c">
                                    مصمم واجهات امامية 
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
</template>

<script>
export default {
 name:'section-successfull-story'
}
</script>

<style>

</style>