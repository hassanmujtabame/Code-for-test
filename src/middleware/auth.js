
export const routeOption = (route, key, value) => {
    return route.matched.some((m) => {  
        return m.meta[key] === value || Object.values(m.components).some(
            component => component.options && component.options[key] === value
        ) || (m.components.default && m.components.default[key] === value)
      
    })
}

export default function(to, from, next) {
let isAuth = window.store.getters['auth/user'];
let page_auth = routeOption(to, 'auth', true);
let page_guest = window.store.getters['auth/user'] && routeOption(to, 'auth', false);

if (isAuth) {
   if(page_guest){
        next({ path: '/' })
}else{
    next()
}
} else
if (page_auth) {
    console.log('langg',window.i18n.locale)
    next({ name: 'login',params:{lang:window.i18n.locale} })

} else {  
    next()
}
}