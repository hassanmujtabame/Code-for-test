function page(path){
 if(process.env.NODE_ENV=='development')
 return import(`${path}`)
 else
 return import('./standard.vue')
}
export default {
 'test-mention': ()=> page('./test-mention.vue'),
 'payment': ()=> page('./checkout-payment.vue'),
}