
import BaseApi from "../../base-service";
class InstructorBlogsApi extends BaseApi {
    //Get all Blogs
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/blogs?${s}`);
    }
  
    getItem(id){
        return window.axios.get(`academy/instructor/blogs/${id}`);
    }
    addItem(data){
        return window.axios.post(`academy/instructor/blogs`,data);  
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.put(`academy/instructor/blogs/${id}`,data);  
    }
    deleteItem(id){
        return window.axios.delete(`academy/instructor/blogs/${id}`);  
    }
}

export default new InstructorBlogsApi();