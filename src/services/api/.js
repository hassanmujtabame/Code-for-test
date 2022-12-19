
class CoursesApi {
    //Get all Courses
    getAll(){
        return window.axios.get(`network/courses`);
    }
    getItem(id){
        return window.axios.get(`network/courses/${id}`);
    }
}

export default new CoursesApi();