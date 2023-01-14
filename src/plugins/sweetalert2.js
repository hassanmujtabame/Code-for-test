import Swal from 'sweetalert2'

window.Swal = Swal
window.SwalStatus = (message,icon,state)=>{
    Swal.fire({
        title: state,
        text:message,
        icon: icon,
        confirmButtonText: 'ok'
      })
}
 window.SwalError = (message)=>{
    window.SwalStatus(message,'error',window.i18n.t('Error'))
}
window.SwalSuccess = (message)=>{
    window.SwalStatus(message,'success',window.i18n.t('Success'))
}
window.SwalWarning = (message)=>{
    window.SwalStatus(message,'warning',window.i18n.t('Warning'))
}
window.SwalInfo = (message)=>{
    window.SwalStatus(message,'info',window.i18n.t('Info'))
}
window.SwalQuestion = (message)=>{
    window.SwalStatus(message,'question','')
}
window.SwalNotif = (message,icon,position='top-end')=>{
    Swal.fire({
        position: position,
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
}