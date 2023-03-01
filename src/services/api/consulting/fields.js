
import BaseApi from "../base-service";

class ConsultingFieldsApi extends BaseApi{
  //Get all Consulting
  getAll(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/fields?${s}`);
}
getItem(id){
    return window.axios.get(`consulting/fields/${id}`);
}
getBest(){
    return {data:{
        success:true,
        data:[
            {title:'دراسة جدوى',image:'/assets/img/cuate.png'},
            {title:'دراسة جدوى',image:'/assets/img/consult1775.png'},
            {title:'دراسة جدوى',image:'/assets/img/Rectangle 1775aa.png'},
            {title:'دراسة جدوى',image:'/assets/img/aa.png'},
        ]
    }
    //let s=this.generateQueryUrl(params)
    //return window.axios.get(`consulting/best-fields?${s}`);
}
}
}

export default new ConsultingFieldsApi()