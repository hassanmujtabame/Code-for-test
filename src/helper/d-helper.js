class Dhelper{

 catchException(error,form){
    console.mylog('error',error)
    console.mylog('error response',error.response)
    if(error.response){
        let response= error.response;
        if(response.status==422){
            this.setErrorsForm(form,response)
        }
        if(response.status==500 || response.status==405 ){
            window.SwalError(response.data.message)
        }
    }

 }
    
}
export default new Dhelper();