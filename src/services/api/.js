
class CoursesApi {
    //Get all Courses
    getAll(params){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
        return window.axios.get(`network/courses?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/courses/${id}`);
    }
}

export default new CoursesApi();