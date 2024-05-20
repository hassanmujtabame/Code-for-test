import Swal from "sweetalert2";

window.Swal = Swal;
window.SwalStatus = (message, icon, state) => {
  Swal.fire({
    title: state,
    text: message,
    icon: icon,
    confirmButtonText: "ok",
  });
};
window.SwalError = (message) => {
  window.SwalStatus(message, "error", window.i18n.t("Error"));
};
window.SwalSuccess = (message) => {
  window.SwalStatus(message, "success", window.i18n.t("Success"));
};
window.SwalWarning = (message, title) => {
  window.SwalStatus(message, "warning", title ?? window.i18n.t("Warning"));
};
window.SwalInfo = (message) => {
  window.SwalStatus(message, "info", window.i18n.t("Info"));
};
window.SwalQuestion = (message) => {
  window.SwalStatus(message, "question", "");
};
window.successMsg = (msg) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    title: msg || "عملية ناجحة",
    icon: "success",
  });
};

window.errorMsg = (msg) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    title: msg,
    icon: "error",
  });
};
window.SwalNotif = (message, icon, position = "top-end") => {
  Swal.fire({
    position: position,
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
