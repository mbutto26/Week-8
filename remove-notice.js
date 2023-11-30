const maintenanceNotice = document.getElementById("maintenance-notice");

const removeNotice = function () {
  maintenanceNotice.classList.add("d-none");
};
setTimeout(removeNotice, 5000);
