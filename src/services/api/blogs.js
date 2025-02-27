
import BaseApi from "./base-service";
class BlogsApi extends BaseApi {
    //Get all Blogs
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/blogs?${s}`);
    }
    getMine(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/my-blogs?${s}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-blogs?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/blogs/${id}`);
    }
    getCategories(){
        return window.axios.get(`network/blogs-categories`);
    }
    getRecent(){
        return window.axios.get(`network/latest-blogs`);
    }
    getTags(){
        return window.axios.get(`network/blogs-tags`);
    }
    addItem(data){
        return window.axios.post(`network/blogs`,data);  
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.post(`network/blogs/${id}`,data);  
    }
    deleteItem(id){
        return window.axios.delete(`network/blogs/${id}`);  
    }
}

export default new BlogsApi();