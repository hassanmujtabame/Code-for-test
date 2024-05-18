class BaseApi {
    camelToSnake(string = '') {
        return (string || '')
          .replace(/([A-Z])/g, (match, group) => `-${group.toLowerCase()}`)
          .replace(/^_/, '')
      }
    generateQueryUrl(params){
        let s="";
        Object.keys(params).forEach((key)=>{
            let k=this.camelToSnake(key)
            if(typeof(params[key])=='undefined' || params[key] ==null)
           return;
            if(s!="") s+=`&`
            if( Array.isArray(params[key]))
            params[key].forEach((element,i) => {
                if(i!==0) s+=`&`
                s+=`${k}[]=${element}`
            });
            else
             s+=`${k}=${params[key]}`
        })
        return s
      }
}

export default BaseApi;