
import BaseApi from "../base-service";
class InstructorBlogsApi extends BaseApi {
    //Get all Blogs
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/blogs?${s}`);
    }
    getRecent(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/blogs?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/blogs/${id}`);
    }
    addItem(data){
        return window.axios.post(`academy/blogs`,data);  
    }
    updateIem(id,data){
        data.append('_method','PUT')
        return window.axios.put(`academy/blogs/${id}`,data);  
    }
    deleteItem(id){
        return window.axios.delete(`academy/blogs/${id}`);  
    }
}

export default new InstructorBlogsApi();