class BaseApi {
    generateQueryUrl(params){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(typeof(params[key])=='undefined' || params[key] ==null)
           return;
            if(s!="") s+=`&`
            if( Array.isArray(params[key]))
            params[key].forEach((element,i) => {
                if(i!==0) s+=`&`
                s+=`${key}[]=${element}`
            });
            else
             s+=`${key}=${params[key]}`
        })
        return s
      }
}

export default BaseApi;