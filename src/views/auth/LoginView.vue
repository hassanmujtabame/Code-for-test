<template>
        <div class="container">
            <div class="box bg-white    rounded-3">
        
                <div class="row align-items-center p-0 position-relative ">
                    <div class="col-12 col-md-6 p-4">
                        <div style="top: 17px;left: 53%;" class="position-absolute form-loging" >
                            <h6>
                                ليس لديك حساب ؟   
                                <router-link :to="'register'" class="m-c">
                                      أنشئ حساب الان
                                </router-link>
                            </h6>
                        </div>
                        <h1 class="fw-bolder">مرحبا بك من جديد</h1>
                        <p>لنبدأمن جديد ال انطلاق نحو المستقبل</p>
                        <form @submit="login" class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4 w-100">
                                <input type="email" 
                                class="form-control" 
                                id="validationCustom03"       
                                placeholder="البريد الالكتروني" 
                                v-model="form.email"
                                required
                                >
                            </div>
                            <div class="col-md-4 w-100 position-relative">
                                <input 
                                id="password-field"  
                                type="password"
                                v-model="form.password"
                                 class="form-control " 
                                    placeholder="   كلمة السر" required>
                                    <span    style="top: 12px;color: #CDD7D8;font-size: 23px;" toggle="#password-field"
                                    class="fa-regular fa-eye toggle-password position-absolute">
                                </span>
                            </div>
                            <div class="d-flex justify-content-between mt-3 ">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                       تذكرني
                                    </label>
                                    </div>
                                    <div>
                                        <router-link :to="'/forget-password'" class="m-c">
                                            نسيت كلمة السر ؟
                                        </router-link>
                                    </div>
                                </div>
                            <div class="col-12 text-center ">
                                <button class="btn btn-main  "   role="button"> تسجيل الدخول  </button>
                            </div>
                            
                        </form>

                    </div>
                    <div class=" col-12 col-md-6">
                        <div class="box">
                            <img src="/assets/svg/riadiat-green-card.svg"/>

                        </div>

                    </div>

                </div>
            </div>

        </div>

</template>
<script>
export default {
    data:()=>({
        form:{
            email:process.env.EMAIL||'',
            password:process.env.PASSWORD||''
        }
    }),
    methods:{
       async login(e){
            e.preventDefault();
            try {
                let {data} = await this.$axios.post('user/auth/login',this.form);
                if(data.success){
                    let {token,...user} = data.data
                    window.store.commit('auth/SET_TOKEN',token) ;
                  window.store.commit('auth/SET_USER',user);
                  this.$router.push('/')
                }
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
