function page(path){
 if(process.env.NOD_ENV=='development')
 return import(path)
 return`<div>hi</div>`
}
export default {
 'test-mention': ()=> page('./test-mention.vue')
}