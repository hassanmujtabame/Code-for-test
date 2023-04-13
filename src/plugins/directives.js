import Vue from 'vue'
Vue.directive('auth', {
    bind: function(el,...rest) {
        console.mylog('v-auth',rest)
        el.addEventListener('click', function(e) {
           console.mylog('v-auth clicking')
            
            if (!window.store.getters['auth/token']) {
                console.mylog('v-auth false')
                e.preventDefault();
                e.stopImmediatePropagation();
                /*let dataEvt ={
                    title:'test'
                }*/
                
                return false;
            }      

            return true;
        })
    }
});